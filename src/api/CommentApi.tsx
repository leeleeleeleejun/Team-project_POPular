import { Comment } from '../types/comment';
import { API_PATH } from '../constants/path';
import { useMutation, useQuery } from '@tanstack/react-query';
import callApi from '../utils/callApi';
type createCommentBody = {
  author: string;
  content: string;
  parent: {
    type: string;
    id: string;
  };
  recomments: createCommentBody[];
};

export const getComments = async (postId = '') => {
  const response = await (await fetch(API_PATH.COMMENT.GET.BY_POST.replace(':postId', postId))).json();
  return response;
};

export const createComment = async (data: createCommentBody) => {
  await callApi('POST', API_PATH.COMMENT.POST, JSON.stringify(data));
};

export const deleteComment = async (commentId: string) => {
  await callApi('DELETE', API_PATH.COMMENT.DELETE, JSON.stringify([commentId]));
};

export const useGetFeedComments = (postId: string, option?: object) => {
  return useQuery<Comment[]>(['feedComments', postId], () => getComments(postId), option);
};

export const useCreateComment = (option?: object) => {
  return useMutation(createComment, option);
};

export const useDeleteComment = (option?: object) => {
  return useMutation(deleteComment, option);
};

// onSuccess: () => {
//   // postTodo가 성공하면 todos로 맵핑된 useQuery api 함수를 실행합니다.
//   queryClient.invalidateQueries("todos");
// }
