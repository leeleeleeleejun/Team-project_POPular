import LikesAndReports from '../components/LikeAndReportButton';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { useAppSelector } from '../../../Hooks/useSelectorHooks';
import { API_PATH } from '../../../constants/path';
import callApi from '../../../utils/callApi';
import LoginModal from '../../common/Modals/LoginModal';

const LikesAndReportsContainer = ({
  likes,
  reports,
  setLikes,
  setReports,
}: {
  likes: string[];
  reports: string[];
  setLikes: React.Dispatch<React.SetStateAction<string[]>>;
  setReports: React.Dispatch<React.SetStateAction<string[]>>;
}) => {
  const postId = useParams().postId || '';
  const UserData = useAppSelector((state) => state.UserSlice.user);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [checkLike, setCheckLike] = useState<boolean>();
  const [checkReport, setCheckReport] = useState<boolean>();

  useEffect(() => {
    if (UserData) {
      setCheckLike(likes.includes(UserData._id));
      setCheckReport(reports.includes(UserData._id));
    }
  }, [UserData, likes, reports]);

  async function FetchData(LikeOrReport: string) {
    if (!UserData) {
      setIsModalOpen(true);
      return;
    }
    const data = { [LikeOrReport]: UserData._id };
    const response = await callApi(
      'PATCH',
      `${API_PATH.POST.GET.BY_ID.replace(':postId', postId)}/${LikeOrReport}`,
      JSON.stringify(data),
    );
    const result = await response.json();
    LikeOrReport === 'like' ? setLikes(result.likes) : setReports(result.reports);
  }

  return (
    <>
      <LikesAndReports
        checkLike={checkLike}
        checkReport={checkReport}
        likes={likes.length}
        reports={reports.length}
        onClick={FetchData}
      ></LikesAndReports>
      {isModalOpen && <LoginModal onClose={setIsModalOpen} />}
    </>
  );
};

export default LikesAndReportsContainer;
