import PostRegisterButton from '../components/PostRegisterButton';
import PostRegisterButtonWrap from '../components/PostRegisterButtonWrap';
import { useAppSelector, useAppDispatch } from '../../../Hooks/useSelectorHooks';
import { WritePostSliceActions } from '../WritePostSlice';
import { useState, useEffect } from 'react';
import { useNavigate, NavigateFunction } from 'react-router-dom';
import { CLIENT_PATH } from '../../../constants/path';
import { createFeed, updateFeed, writePostBody } from '../../../api/feedApi';

// 게시글 생성 스키마 확인
const PostRegisterButtonContainer = () => {
  const navigate: NavigateFunction = useNavigate();
  const tab = useAppSelector((state) => state.WritePostSlice.tab);
  const UserData = useAppSelector((state) => state.UserSlice.user);
  const postTitle = useAppSelector((state) => state.WritePostSlice.postTitle);
  const postContent = useAppSelector((state) => state.WritePostSlice.postContent);
  const ratings = useAppSelector((state) => state.WritePostSlice.ratings);
  const choiceStoreId = useAppSelector((state) => state.WritePostSlice.choiceStoreId);
  const isUpdate = useAppSelector((state) => state.WritePostSlice.isUpdate);

  const dispatch = useAppDispatch();
  const setPostContent = (content: string) => dispatch(WritePostSliceActions.setPostContent(content));
  const setPostTitle = (title: string) => dispatch(WritePostSliceActions.setPostTitle(title));
  const setChoiceStoreId = (id: string) => dispatch(WritePostSliceActions.setChoiceStoreId(id));
  const setIsUpdate = (isUpdate: { use: boolean; id: string }) => dispatch(WritePostSliceActions.setIsUpdate(isUpdate));

  const [gone, setGone] = useState(false);

  const currTab = tab === '자유게시판' ? 'free' : tab === '후기게시판' ? 'review' : 'gather';

  const register = async () => {
    const data: writePostBody = {
      title: postTitle,
      author: UserData?._id,
      board: currTab,
      content: postContent,
      ...(currTab !== 'free' && { store_id: choiceStoreId }),
      ...(currTab === 'review' && { ratings: ratings }),
    };
    if (data.title.length === 0) {
      alert('제목을 입력해주세요');
      return;
    }
    if (data.content.length === 0) {
      alert('내용을 입력해주세요');
      return;
    }
    if (currTab !== 'free' && data.store_id?.length === 0) {
      alert('스토어를 선택해주세요');
      return;
    }
    try {
      let response: Response;

      if (isUpdate.use) {
        response = await updateFeed(isUpdate.id, data);
      } else {
        response = await createFeed(data);
      }

      if (response.ok) {
        navigate(CLIENT_PATH.BOARD.replace(':category', currTab));
      }
    } catch (err: any) {
      throw new Error(err);
    }
  };

  //페이지 벗어날 경우 작성했던 데이터 초기화
  useEffect(() => {
    return () => {
      if (!isUpdate.use) {
        setPostTitle('');
        setPostContent('');
        setChoiceStoreId('');
      } else {
        // 페이지 떠날 때만 실행
        if (gone) {
          setGone(false);
          setIsUpdate({ use: false, id: '' });
        } else {
          setGone(true);
        }
      }
    };
  }, [location, gone]);
  return (
    <PostRegisterButtonWrap>
      <PostRegisterButton
        isUpdate={true}
        onClick={() => {
          const answer = confirm('해당 페이지를 벗어나면 작성한 내용이 사라집니다.');
          if (answer) {
            navigate(-1);
          }
        }}
      >
        취소
      </PostRegisterButton>
      <PostRegisterButton isUpdate={false} onClick={register}>
        {isUpdate.use ? '수정하기' : '작성하기'}
      </PostRegisterButton>
    </PostRegisterButtonWrap>
  );
};

export default PostRegisterButtonContainer;
