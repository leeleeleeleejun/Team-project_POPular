import styled from 'styled-components';
import ProfileUploadButton from './ProfileUploadButton';
import ProfileButton from './ProfileButton';
import { User } from '../../../types/user';

interface Props {
  user: User[];
}

const ProfileImageModify = ({ user }: Props) => {
  if (user.length === 0 || !user) {
    return null;
  }

  return (
    <Container>
      <p className="update-title">회원정보 수정</p>
      <p className="update-description">프로필과 정보를 변경할 수 있습니다.</p>
      <ProfileContents>
        <ProfilImage>
          <div className="profile-frame">
            <img src={user[0].profile} alt={user[0].nickname} />
          </div>
        </ProfilImage>
        <ProfileButtonList>
          <ProfileUploadButton text={'사진변경'} />
          <ProfileButton className="button-gap" text={'제거'} type={'blank'} />
        </ProfileButtonList>
      </ProfileContents>
    </Container>
  );
};

const Container = styled.div`
  width: 70%;
  margin: 0 auto;
  transition: all 0.3s;

  @media all and (max-width: 767px) {
    width: 100%;
    margin: 0 auto;
  }

  .update-title {
    font-size: var(--font-small);
    font-weight: var(--weight-semi-bold);
  }
  .update-description {
    font-size: var(--font-micro);
    color: var(--color-light-black);
    margin-top: 7px;
  }
`;

const ProfileContents = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;
const ProfilImage = styled.div`
  .profile-frame {
    max-width: 75px;
    min-width: 50px;
    background-color: #999;
    border-radius: 50%;
    overflow: hidden;

    img {
      width: 100%;
      display: flex;
    }
  }
`;
const ProfileButtonList = styled.div`
  .button-gap {
    margin-left: 3px;
  }
`;

export default ProfileImageModify;