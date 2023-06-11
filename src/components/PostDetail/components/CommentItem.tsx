import styled from 'styled-components';
import { Comment } from '../../../types/comment';
import CommentInputContainer from '../containers/CommentInputContainer';
import ReComment from './ReCommentList';
import XmarkIcon from '../../common/Icons/XmarkIcon';
import getDateFunc from '../../../Hooks/GetDateFunc';
const CommentWrap = styled.div`
  display: flex;
  cursor: pointer;
`;

export const Li = styled.li`
  display: flex;
  flex-direction: column;
  border-bottom: 1px var(--color-light-gray) solid;
  padding: 15px 0 15px 15px;
  line-height: 20px;
  text-align: center;
`;

export const CommentAuthorName = styled.span`
  color: var(--color-light-black);
  font-weight: var(--weight-light);
  width: 15%;
  font-size: var(--font-small);
`;

export const CommentContent = styled.div`
  margin: 0 5px;
  width: 55%;
  text-align: left;
  font-size: var(--font-small);
`;

export const CommentUpdateAt = styled.span`
  color: var(--color-gray);
  font-weight: var(--weight-light);
  width: 30%;
  font-size: var(--font-small);
  text-align: right;
`;

export const CommentDeleteButton = styled.button`
  display: flex;
  background: none;
  width: 78px;
  padding-top: 2px;
  justify-content: center;
`;

const ReCommentInputWrap = styled.div`
  width: 86%;
  margin-left: 14%;
`;

const CommentItem = ({
  comment,
  reCommentInput,
  setReCommentInput,
  commentDelete,
}: //  ReComment
{
  comment: Comment;
  reCommentInput: boolean;
  setReCommentInput: () => void;
  commentDelete: (commentId: string, authorId: string) => Promise<void>;
}) => {
  return (
    <Li>
      <CommentWrap onClick={setReCommentInput}>
        <CommentAuthorName>{comment.author.nickname}</CommentAuthorName>
        <CommentContent>{comment.content}</CommentContent>
        <CommentUpdateAt>{getDateFunc(comment.updatedAt)}</CommentUpdateAt>
        <CommentDeleteButton
          onClick={(e) => {
            e.stopPropagation(); // 상단에 있는 setReCommentInput 방지
            commentDelete(comment._id, comment.author._id);
          }}
        >
          <XmarkIcon />
        </CommentDeleteButton>
      </CommentWrap>
      {comment.recomments && comment.recomments.length > 0 && (
        <ReComment reComments={comment.recomments} commentDelete={commentDelete} />
      )}
      {reCommentInput && (
        <ReCommentInputWrap>
          <CommentInputContainer commentId={comment._id} setReCommentInput={setReCommentInput} />
        </ReCommentInputWrap>
      )}
    </Li>
  );
};

export default CommentItem;
