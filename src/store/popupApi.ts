import { Store } from '../types/store';
import { baseSplitApi as api } from './baseApi';

const injectedRtkApi = api.injectEndpoints({
  endpoints: (build) => ({
    // 스토어 API
    storeControllerGetAllStore: build.query<StoreControllerGetAllStoreApiResponse, StoreControllerGetAllStoreApiArg>({
      query: () => ({ url: `/stores` }),
    }),
    storeControllerCreate: build.mutation<StoreControllerCreateApiResponse, StoreControllerCreateApiArg>({
      query: (queryArg) => ({ url: `/stores`, method: 'POST', body: queryArg.storeRequestDto }),
    }),
    storeControllerGetStoreById: build.query<StoreControllerGetStoreByIdApiResponse, StoreControllerGetStoreByIdApiArg>(
      {
        query: (queryArg) => ({ url: `/stores/${queryArg.id}` }),
      },
    ),
    storeControllerUpdate: build.mutation<StoreControllerUpdateApiResponse, StoreControllerUpdateApiArg>({
      query: (queryArg) => ({ url: `/stores/${queryArg.id}`, method: 'PUT', body: queryArg.storeRequestDto }),
    }),
    storeControllerDelete: build.mutation<StoreControllerDeleteApiResponse, StoreControllerDeleteApiArg>({
      query: (queryArg) => ({ url: `/stores/${queryArg.id}`, method: 'DELETE' }),
    }),
    storeControllerUpdateScrap: build.mutation<StoreControllerUpdateScrapApiResponse, StoreControllerUpdateScrapApiArg>(
      {
        query: (queryArg) => ({ url: `/stores/${queryArg.id}/scrap/${queryArg.scrap}`, method: 'PATCH' }),
      },
    ),

    // 유저 API

    userControllerGetAllUsers: build.query<UserControllerGetAllUsersApiResponse, UserControllerGetAllUsersApiArg>({
      query: () => ({ url: `/users` }),
    }),
    userControllerCreateUser: build.mutation<UserControllerCreateUserApiResponse, UserControllerCreateUserApiArg>({
      query: (queryArg) => ({ url: `/users`, method: 'POST', body: queryArg.userSignupDto }),
    }),
    userControllerGetUserById: build.query<UserControllerGetUserByIdApiResponse, UserControllerGetUserByIdApiArg>({
      query: (queryArg) => ({ url: `/users/${queryArg.id}` }),
    }),
    userControllerUpdateUser: build.mutation<UserControllerUpdateUserApiResponse, UserControllerUpdateUserApiArg>({
      query: (queryArg) => ({ url: `/users/${queryArg.id}`, method: 'PATCH', body: queryArg.userUpdateDto }),
    }),
    userControllerDeleteUser: build.mutation<UserControllerDeleteUserApiResponse, UserControllerDeleteUserApiArg>({
      query: (queryArg) => ({ url: `/users/${queryArg.id}`, method: 'DELETE' }),
    }),

    // 포스트 API

    postsControllerGetAllPosts: build.query<PostsControllerGetAllPostsApiResponse, PostsControllerGetAllPostsApiArg>({
      query: () => ({ url: `/posts` }),
    }),
    postsControllerCreatePost: build.mutation<PostsControllerCreatePostApiResponse, PostsControllerCreatePostApiArg>({
      query: (queryArg) => ({ url: `/posts`, method: 'POST', body: queryArg.postCreateDto }),
    }),
    postsControllerGetAllGatherPosts: build.query<
      PostsControllerGetAllGatherPostsApiResponse,
      PostsControllerGetAllGatherPostsApiArg
    >({
      query: () => ({ url: `/posts/gather` }),
    }),
    postsControllerGetAllReviewPosts: build.query<
      PostsControllerGetAllReviewPostsApiResponse,
      PostsControllerGetAllReviewPostsApiArg
    >({
      query: () => ({ url: `/posts/review` }),
    }),
    postsControllerGetAllFreePosts: build.query<
      PostsControllerGetAllFreePostsApiResponse,
      PostsControllerGetAllFreePostsApiArg
    >({
      query: () => ({ url: `/posts/free` }),
    }),
    postsControllerGetPostById: build.query<PostsControllerGetPostByIdApiResponse, PostsControllerGetPostByIdApiArg>({
      query: (queryArg) => ({ url: `/posts/${queryArg.id}` }),
    }),
    postsControllerUpdatePost: build.mutation<PostsControllerUpdatePostApiResponse, PostsControllerUpdatePostApiArg>({
      query: (queryArg) => ({ url: `/posts/${queryArg.id}`, method: 'PATCH', body: queryArg.postUpdateDto }),
    }),
    postsControllerDeletePost: build.mutation<PostsControllerDeletePostApiResponse, PostsControllerDeletePostApiArg>({
      query: (queryArg) => ({ url: `/posts/${queryArg.id}`, method: 'DELETE' }),
    }),

    postsControllerIncrementViewCount: build.mutation<
      PostsControllerIncrementViewCountApiResponse,
      PostsControllerIncrementViewCountApiArg
    >({
      query: (queryArg) => ({ url: `/posts/${queryArg.id}/views`, method: 'PATCH' }),
    }),

    // 알림 API

    notificationsControllerGetNotifications: build.query<
      NotificationsControllerGetNotificationsApiResponse,
      NotificationsControllerGetNotificationsApiArg
    >({
      query: () => ({ url: `/notifications` }),
    }),
    notificationsControllerCreateNotification: build.mutation<
      NotificationsControllerCreateNotificationApiResponse,
      NotificationsControllerCreateNotificationApiArg
    >({
      query: (queryArg) => ({ url: `/notifications`, method: 'POST', body: queryArg.notificationCreateDto }),
    }),
    notificationsControllerGetUserNotifications: build.query<
      NotificationsControllerGetUserNotificationsApiResponse,
      NotificationsControllerGetUserNotificationsApiArg
    >({
      query: (queryArg) => ({ url: `/notifications/user/${queryArg.userId}` }),
    }),
    notificationsControllerGetNotificationsById: build.query<
      NotificationsControllerGetNotificationsByIdApiResponse,
      NotificationsControllerGetNotificationsByIdApiArg
    >({
      query: (queryArg) => ({ url: `/notifications/${queryArg.id}` }),
    }),
    notificationsControllerUpdateNotification: build.mutation<
      NotificationsControllerUpdateNotificationApiResponse,
      NotificationsControllerUpdateNotificationApiArg
    >({
      query: (queryArg) => ({
        url: `/notifications/${queryArg.id}`,
        method: 'PATCH',
        body: queryArg.notificationUpdateDto,
      }),
    }),
    notificationsControllerDeleteNotification: build.mutation<
      NotificationsControllerDeleteNotificationApiResponse,
      NotificationsControllerDeleteNotificationApiArg
    >({
      query: (queryArg) => ({ url: `/notifications/${queryArg.id}`, method: 'DELETE' }),
    }),

    // 댓글 API

    commentsControllerGetAllComments: build.query<
      CommentsControllerGetAllCommentsApiResponse,
      CommentsControllerGetAllCommentsApiArg
    >({
      query: () => ({ url: `/comments` }),
    }),
    commentsControllerCreatePost: build.mutation<
      CommentsControllerCreatePostApiResponse,
      CommentsControllerCreatePostApiArg
    >({
      query: (queryArg) => ({ url: `/comments`, method: 'POST', body: queryArg.commentCreateDto }),
    }),
    commentsControllerGetCommentById: build.query<
      CommentsControllerGetCommentByIdApiResponse,
      CommentsControllerGetCommentByIdApiArg
    >({
      query: (queryArg) => ({ url: `/comments/${queryArg.id}` }),
    }),
    commentsControllerUpdateComment: build.mutation<
      CommentsControllerUpdateCommentApiResponse,
      CommentsControllerUpdateCommentApiArg
    >({
      query: (queryArg) => ({ url: `/comments/${queryArg.id}`, method: 'PATCH', body: queryArg.commentUpdateDto }),
    }),
    commentsControllerDeleteComment: build.mutation<
      CommentsControllerDeleteCommentApiResponse,
      CommentsControllerDeleteCommentApiArg
    >({
      query: (queryArg) => ({ url: `/comments/${queryArg.id}`, method: 'DELETE' }),
    }),
    authControllerLogIn: build.mutation<AuthControllerLogInApiResponse, AuthControllerLogInApiArg>({
      query: (queryArg) => ({ url: `/auth/login`, method: 'POST', body: queryArg.userLoginDto }),
    }),
    authControllerGetProfile: build.query<AuthControllerGetProfileApiResponse, AuthControllerGetProfileApiArg>({
      query: () => ({ url: `/auth/profile` }),
    }),
  }),
  overrideExisting: false,
});
export { injectedRtkApi as popupApi };
export type AppControllerGetHelloApiResponse = unknown;
export type AppControllerGetHelloApiArg = void;
export type StoreControllerGetAllStoreApiResponse = Store[];
export type StoreControllerGetAllStoreApiArg = void;
export type StoreControllerCreateApiResponse = unknown;
export type StoreControllerCreateApiArg = {
  storeRequestDto: StoreRequestDto;
};

export type StoreControllerGetStoreByIdApiResponse = unknown;
export type StoreControllerGetStoreByIdApiArg = {
  id: string;
};
export type StoreControllerUpdateApiResponse = unknown;
export type StoreControllerUpdateApiArg = {
  id: string;
  storeRequestDto: StoreRequestDto;
};
export type StoreControllerDeleteApiResponse = unknown;
export type StoreControllerDeleteApiArg = {
  id: string;
};
export type StoreControllerUpdateScrapApiResponse = unknown;
export type StoreControllerUpdateScrapApiArg = {
  id: string;
  scrap: number;
};
export type UserControllerGetAllUsersApiResponse = unknown;
export type UserControllerGetAllUsersApiArg = void;
export type UserControllerCreateUserApiResponse = unknown;
export type UserControllerCreateUserApiArg = {
  userSignupDto: UserSignupDto;
};
export type UserControllerGetUserByIdApiResponse = unknown;
export type UserControllerGetUserByIdApiArg = {
  id: string;
};
export type UserControllerUpdateUserApiResponse = unknown;
export type UserControllerUpdateUserApiArg = {
  id: string;
  userUpdateDto: UserUpdateDto;
};
export type UserControllerDeleteUserApiResponse = unknown;
export type UserControllerDeleteUserApiArg = {
  id: string;
};
export type PostsControllerGetAllPostsApiResponse = unknown;
export type PostsControllerGetAllPostsApiArg = void;
export type PostsControllerCreatePostApiResponse = unknown;
export type PostsControllerCreatePostApiArg = {
  postCreateDto: PostCreateDto;
};
export type PostsControllerGetAllGatherPostsApiResponse = unknown;
export type PostsControllerGetAllGatherPostsApiArg = void;
export type PostsControllerGetAllReviewPostsApiResponse = unknown;
export type PostsControllerGetAllReviewPostsApiArg = void;
export type PostsControllerGetAllFreePostsApiResponse = unknown;
export type PostsControllerGetAllFreePostsApiArg = void;
export type PostsControllerGetPostByIdApiResponse = unknown;
export type PostsControllerGetPostByIdApiArg = {
  id: string;
};
export type PostsControllerUpdatePostApiResponse = unknown;
export type PostsControllerUpdatePostApiArg = {
  id: string;
  postUpdateDto: PostUpdateDto;
};
export type PostsControllerDeletePostApiResponse = unknown;
export type PostsControllerDeletePostApiArg = {
  id: string;
};
export type PostsControllerIncrementViewCountApiResponse = unknown;
export type PostsControllerIncrementViewCountApiArg = {
  id: string;
};
export type NotificationsControllerGetNotificationsApiResponse = unknown;
export type NotificationsControllerGetNotificationsApiArg = void;
export type NotificationsControllerCreateNotificationApiResponse = unknown;
export type NotificationsControllerCreateNotificationApiArg = {
  notificationCreateDto: NotificationCreateDto;
};
export type NotificationsControllerGetUserNotificationsApiResponse = unknown;
export type NotificationsControllerGetUserNotificationsApiArg = {
  userId: string;
};
export type NotificationsControllerGetNotificationsByIdApiResponse = unknown;
export type NotificationsControllerGetNotificationsByIdApiArg = {
  id: string;
};
export type NotificationsControllerUpdateNotificationApiResponse = unknown;
export type NotificationsControllerUpdateNotificationApiArg = {
  id: string;
  notificationUpdateDto: NotificationUpdateDto;
};
export type NotificationsControllerDeleteNotificationApiResponse = unknown;
export type NotificationsControllerDeleteNotificationApiArg = {
  id: string;
};
export type CommentsControllerGetAllCommentsApiResponse = unknown;
export type CommentsControllerGetAllCommentsApiArg = void;
export type CommentsControllerCreatePostApiResponse = unknown;
export type CommentsControllerCreatePostApiArg = {
  commentCreateDto: CommentCreateDto;
};
export type CommentsControllerGetCommentByIdApiResponse = unknown;
export type CommentsControllerGetCommentByIdApiArg = {
  id: string;
};
export type CommentsControllerUpdateCommentApiResponse = unknown;
export type CommentsControllerUpdateCommentApiArg = {
  id: string;
  commentUpdateDto: CommentUpdateDto;
};
export type CommentsControllerDeleteCommentApiResponse = unknown;
export type CommentsControllerDeleteCommentApiArg = {
  id: string;
};
export type AuthControllerLogInApiResponse = unknown;
export type AuthControllerLogInApiArg = {
  userLoginDto: UserLoginDto;
};
export type AuthControllerGetProfileApiResponse = unknown;
export type AuthControllerGetProfileApiArg = void;
export type Day = any;

export type Coordinfo = {
  lat: string;
  lng: string;
};

export type StoreRequestDto = {
  title: string;
  description: string;
  brand: string;
  start_date: string;
  end_date: string;
  hours: Day;
  location: string;
  coord: Coordinfo;
  price: number;
  sns: string[];
  reservation_required: boolean;
  images: string[];
  scrap: number;
};
export type UserSignupDto = {
  email: string;
  pw: string;
  name: string;
  nickname: string;
  phone_number: string;
  allow_notification: boolean;
};
export type UserUpdateDto = {
  profile: string;
  introduce: string;
  nickname: string;
  pw: string;
  phone_number: string;
};

export type ObjectId = string;

export type PostCreateDto = {
  title: string;
  author: ObjectId;
  board: string;
  content: string;
  storeId: ObjectId;
  ratings: number;
  images: string[];
  likes: string[];
  reports: string[];
  comments: string[];
  views: number;
};
export type PostUpdateDto = {
  title: string;
  content: string;
  images: string[];
  storeId: string;
  ratings: number;
};
export type NotificationCreateDto = {
  type: string;
  board: string;
  userId: ObjectId;
  content: ObjectId;
  contentModel: string;
};
export type NotificationUpdateDto = {
  checked: boolean;
};
export type CommentCreateDto = {
  author: ObjectId;
  content: string;
  recomments: string[];
};
export type CommentUpdateDto = {
  content: string;
};
export type UserLoginDto = {
  email: string;
  pw: string;
};
export const {
  useStoreControllerGetAllStoreQuery,
  useStoreControllerCreateMutation,
  useStoreControllerGetStoreByIdQuery,
  useStoreControllerUpdateMutation,
  useStoreControllerDeleteMutation,
  useStoreControllerUpdateScrapMutation,
  useUserControllerGetAllUsersQuery,
  useUserControllerCreateUserMutation,
  useUserControllerGetUserByIdQuery,
  useUserControllerUpdateUserMutation,
  useUserControllerDeleteUserMutation,
  usePostsControllerGetAllPostsQuery,
  usePostsControllerCreatePostMutation,
  usePostsControllerGetAllGatherPostsQuery,
  usePostsControllerGetAllReviewPostsQuery,
  usePostsControllerGetAllFreePostsQuery,
  usePostsControllerGetPostByIdQuery,
  usePostsControllerUpdatePostMutation,
  usePostsControllerDeletePostMutation,
  usePostsControllerIncrementViewCountMutation,
  useNotificationsControllerGetNotificationsQuery,
  useNotificationsControllerCreateNotificationMutation,
  useNotificationsControllerGetUserNotificationsQuery,
  useNotificationsControllerGetNotificationsByIdQuery,
  useNotificationsControllerUpdateNotificationMutation,
  useNotificationsControllerDeleteNotificationMutation,
  useCommentsControllerGetAllCommentsQuery,
  useCommentsControllerCreatePostMutation,
  useCommentsControllerGetCommentByIdQuery,
  useCommentsControllerUpdateCommentMutation,
  useCommentsControllerDeleteCommentMutation,
  useAuthControllerLogInMutation,
  useAuthControllerGetProfileQuery,
} = injectedRtkApi;
