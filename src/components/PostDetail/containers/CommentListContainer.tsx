import CommentList from '../components/CommentsList';
import { useGetFeedComments } from '../../../api/CommentApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

const CommentListContainer = () => {
  const postId = useParams().postId || '';
  const { data, isFetching } = useGetFeedComments(postId);
  const [comments, setComments] = useState(data);
  useEffect(() => {
    setComments(data);
  }, [data]);

  return <CommentList comments={comments} isFetching={isFetching} />;
};

export default CommentListContainer;
