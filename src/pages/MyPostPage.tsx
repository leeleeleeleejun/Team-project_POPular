import styled from 'styled-components';
import MenuList from '../components/UserMenu/components/MenuList';
import PostList from '../components/UserMenu/components/PostList';
import MetaTag from '../components/SEO/MetaTag';
import { CLIENT_PATH } from '../constants/path';
import MenuItem from '../components/UserMenu/components/MenuItem';

const MyPostPage = () => {
  return (
    <Container>
      <MetaTag title={`POPULAR | 내가 쓴 글`} />
      <MenuListContainer>
        <NotificationMenu link={CLIENT_PATH.USER_NOTIFICATIONS} title="알림 목록" />
        <MenuList />
      </MenuListContainer>
      <ContentContainer>
        <Title>내가 쓴 글</Title>
        <PostList />
      </ContentContainer>
    </Container>
  );
};

export default MyPostPage;

const Container = styled.div`
  width: 100%;
  display: flex;
`;

const MenuListContainer = styled.div`
  display: none;
  a {
    display: block;
    width: 350px;
    height: 65px;
    font-size: var(--font-medium);
    border-bottom: 0.5px solid var(--color-gray);
    padding: 20px;
    margin: 0;
    cursor: pointer;

    :hover {
      transition: all 0.1s ease;
      color: var(--color-main);
      font-size: calc(var(--font-medium) + 2px);
    }
  }

  @media screen and (min-width: 768px) {
    margin: 50px 20px;
    display: block;
    width: 200px;

    a,
    div > a,
    div > div {
      width: 200px;
      height: 55px;
      font-size: var(--font-regular);
      :hover {
        font-size: calc(var(--font-regular) + 2px);
      }
    }
  }
`;

const NotificationMenu = styled(MenuItem)`
  display: none;
  @media screen and (min-width: 768px) {
    display: block;
  }
`;

const ContentContainer = styled.div`
  flex: 1;

  & li {
    margin: 10px 20px;
    border-radius: 8px;
    background-color: var(--color-light-gray);
  }
`;

const Title = styled.h1`
  font-size: 25px;
  color: var(--color-main);
  margin-bottom: 20px;
  margin-left: 20px;
`;
