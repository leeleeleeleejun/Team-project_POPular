import styled from 'styled-components';
import { Comment } from '../../../types/comment';
import CommentItemContainer from '../containers/CommentItemContainer';

const CommentBoxWrap = styled.div`
  margin-top: 30px;
  padding-top: 20px;
`;

const Title = styled.h4`
  font-size: var(--font-medium);
  margin-bottom: 10px;
  span {
    color: var(--color-red);
  }
`;

const CommentBox = styled.ul`
  height: 250px;
  overflow-y: auto;
  -webkit-scrollbar: none;
  &::-webkit-scrollbar {
    display: none; /* Chrome, Safari, Opera*/
  }
`;

const Loading = styled.div`
  height: 250px;
`;

const CommentsList = ({ comments, isFetching }: { comments: Comment[] | undefined; isFetching: boolean }) => {
  return (
    <CommentBoxWrap>
      <Title>
        Comment <span>{comments?.length}</span>
      </Title>
      {isFetching ? (
        <Loading />
      ) : (
        <CommentBox>
          {comments?.map((comment, index) => (
            <CommentItemContainer key={comment._id + index} comment={comment} />
          ))}
        </CommentBox>
      )}
    </CommentBoxWrap>
  );
};

export default CommentsList;
