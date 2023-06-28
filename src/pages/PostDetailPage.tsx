import styled from 'styled-components';
import { Post } from '../types/post';
import { NavigateFunction, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import PostInfo from '../components/PostDetail/components/PostInfo';
import StoreWrap from '../components/PostDetail/components/StoreWrap';
import StoreItem from '../components/common/Store/StoreItem';
import PostContent from '../components/PostDetail/components/PostContent';
import CommentListContainer from '../components/PostDetail/containers/CommentListContainer';
import UpdateAndDeleteContainer from '../components/PostDetail/containers/UpdateAndDeleteButtonContainer';
import LikesAndReportsContainer from '../components/PostDetail/containers/LikeAndReportButtonContainer';
import CommentInputContainer from '../components/PostDetail/containers/CommentInputContainer';
import StarIcon from '../components/common/Icons/StarIcon';
import MetaTag from '../components/SEO/MetaTag';
import { API_PATH } from '../constants/path';
import { Link } from 'react-router-dom';
const Container = styled.div`
  width: 100%;
`;

const FlexDiv = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: auto;
`;

const RatingsWrap = styled.div`
  display: flex;
  align-items: center;
  padding: 0 0 15px 20px;
  span {
    margin-right: 5px;
  }
`;

async function fetchData(
  postId = '',
  setPost: React.Dispatch<React.SetStateAction<Post | null>>,
  navigate: NavigateFunction,
  setLikes: React.Dispatch<React.SetStateAction<string[]>>,
  setReports: React.Dispatch<React.SetStateAction<string[]>>,
) {
  try {
    const response = await fetch(API_PATH.POST.GET.BY_ID.replace(':postId', postId));
    if (response.status === 404) {
      throw new Error('해당 페이지가 존재하지 않습니다.');
    }
    const result: Post = await response.json();
    setPost(result);
    setLikes(result.likes);
    setReports(result.reports);
  } catch (err: any) {
    alert(err.message);
    navigate(-1);
  }
}

const PostDetailPage = () => {
  const navigate = useNavigate();
  const { postId } = useParams();
  const [post, setPost] = useState<Post | null>(null);
  const [likes, setLikes] = useState<string[]>([]);
  const [reports, setReports] = useState<string[]>([]);

  useEffect(() => {
    fetchData(postId, setPost, navigate, setLikes, setReports);
  }, []);

  // post가 null일 경우 로딩 상태를 표시
  if (post === null) {
    return null;
  }
  return (
    <Container>
      <MetaTag title={`POPULAR | ${post.title}`} />
      <PostInfo
        boardType={post.board}
        title={post.title}
        nickName={post.author.nickname}
        profile={post.author.profile}
        follower={post.author.follower.length}
        authorId={post.author._id}
        createdAt={post.createdAt}
        views={post.views}
        comments={post.comments.length}
      />
      {post.store_id && (
        <StoreWrap>
          <Link to={`/store/${post.store_id._id}`}>
            <StoreItem store={post.store_id} />
            {post.ratings && (
              <RatingsWrap>
                <span>평점:</span>
                {Array(post.ratings)
                  .fill(0)
                  .map((i, index) => (
                    <StarIcon key={index} fill="var(--color-sub)" width={20} />
                  ))}
              </RatingsWrap>
            )}
          </Link>
        </StoreWrap>
      )}
      <PostContent content={post ? post.content : ''}></PostContent>
      <FlexDiv>
        <LikesAndReportsContainer likes={likes} reports={reports} setLikes={setLikes} setReports={setReports} />
        <UpdateAndDeleteContainer post={post} />
      </FlexDiv>
      <CommentListContainer />
      <CommentInputContainer />
    </Container>
  );
};

export default PostDetailPage;
