import { useState } from 'react';
import { Comment } from '../../../types/comment';
import CommentItem from '../components/CommentItem';
import { useDeleteComment } from '../../../api/CommentApi';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../Hooks/useSelectorHooks';
import { useQueryClient } from '@tanstack/react-query';

const CommentItemContainer = ({ comment }: { comment: Comment }) => {
  const [reCommentInput, setReCommentInput] = useState(false);
  const UserData = useAppSelector((state) => state.UserSlice.user);

  const { postId } = useParams();
  const queryClient = useQueryClient();

  const { mutate } = useDeleteComment({
    onSuccess: () => {
      alert('댓글이 삭제되었습니다.');
      queryClient.refetchQueries(['feedComments', postId]);
    },
  });

  const commentDeleteApi = async (commentId: string) => {
    mutate(commentId);
  };

  return (
    // ReComment 추가 예정
    // 배열 그대로 전달
    <CommentItem
      comment={comment}
      reCommentInput={reCommentInput}
      setReCommentInput={() => {
        setReCommentInput((prev) => !prev);
      }}
      commentDelete={commentDeleteApi}
      isMember={UserData?._id}
    />
  );
};

export default CommentItemContainer;
