import CommentInput from '../components/CommentInput';
import { useState, Dispatch, SetStateAction } from 'react';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../Hooks/useSelectorHooks';
import { useCreateComment } from '../../../api/CommentApi';
import LoginModal from '../../common/Modals/LoginModal';
import { useQueryClient } from '@tanstack/react-query';
type postCommentBody = {
  author: string;
  content: string;
  parent: {
    type: string;
    id: string;
  };
  recomments: postCommentBody[];
};

const CommentInputContainer = ({
  commentId,
  setReCommentInput,
}: {
  commentId?: string;
  setReCommentInput?: () => void;
}) => {
  const { postId } = useParams();
  const [input, setInput] = useState('');
  const [isComposing, setIsComposing] = useState(false);
  const UserData = useAppSelector((state) => state.UserSlice.user);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value.normalize());
  };

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const queryClient = useQueryClient();

  const { mutate } = useCreateComment({
    onSuccess: () => {
      queryClient.refetchQueries(['feedComments', postId]);
    },
  });

  const RegisterComment = async () => {
    if (!UserData) {
      setIsModalOpen(true);
      return;
    }
    const data: postCommentBody = {
      author: UserData?._id,
      content: input,
      parent: {
        type: commentId ? 'Comment' : 'Feed',
        id: commentId ? commentId : postId ? postId : '',
      },
      recomments: [],
    };
    mutate(data);
    setInput('');
    setReCommentInput && setReCommentInput();
  };

  return (
    <>
      <CommentInput
        isComposing={isComposing}
        setIsComposing={setIsComposing}
        onChange={onChange}
        value={input}
        RegisterComment={RegisterComment}
      />
      {isModalOpen && <LoginModal onClose={setIsModalOpen} />}
    </>
  );
};

export default CommentInputContainer;
