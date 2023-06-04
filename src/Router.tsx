import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/common/Layout';
import HomePage from './pages/Homepage';
import { CLIENT_PATH } from './constants/path';
import MapPage from './pages/MapPage';
import SearchPage from './pages/SearchPage';
import CommunityPage from './pages/CommunityPage';
import UserPage from './pages/UserPage';
import LoginPage from './pages/LoginPage';
import WritePostPage from './pages/WritePostPage';
import StoreDetailPage from './pages/StoreDetailPage';
import SignupPage from './pages/SignupPage';
import RecentListPage from './pages/RecentListPage';
import UserMenuPage from './pages/UserMenuPage';
import ScrapPage from './pages/ScrapPage';
import NotificationsPage from './pages/NotificationsPage';
import MyPostPage from './pages/MyPostPage';
import MyCommentPage from './pages/MyCommentPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path={CLIENT_PATH.WRITE} element={<WritePostPage />}></Route>
          <Route path={CLIENT_PATH.HOME} element={<HomePage />}></Route>
          <Route path={CLIENT_PATH.MAP} element={<MapPage />}></Route>
          <Route path={CLIENT_PATH.SEARCH} element={<SearchPage />}></Route>
          <Route path={CLIENT_PATH.BOARD} element={<CommunityPage />}></Route>
          <Route path={CLIENT_PATH.USER_MENU} element={<UserMenuPage />}></Route>
          <Route path={CLIENT_PATH.USER_SCRAP} element={<ScrapPage />}></Route>
          <Route path={CLIENT_PATH.USER_NOTIFICATIONS} element={<NotificationsPage />}></Route>
          <Route path={CLIENT_PATH.USER_DETAIL} element={<UserPage />}></Route>
          <Route path={CLIENT_PATH.LOGIN} element={<LoginPage />}></Route>
          <Route path={CLIENT_PATH.STORE_DETAIL} element={<StoreDetailPage />}></Route>
          <Route path={CLIENT_PATH.SIGNUP} element={<SignupPage />}></Route>
          <Route path={CLIENT_PATH.USER_RECENT} element={<RecentListPage />}></Route>
          <Route path={CLIENT_PATH.USER_POSTS} element={<MyPostPage />}></Route>
          <Route path={CLIENT_PATH.USER_COMMENTS} element={<MyCommentPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
