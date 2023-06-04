import styled from 'styled-components';

interface Props {
  title: string;
  number: number;
}

const ProfileFollow = ({ title, number }: Props) => {
  return (
    <Container>
      <p className="userinfo-title">{title}</p>
      <p className="userinfo-num">{number.toLocaleString()}</p>
    </Container>
  );
};

const Container = styled.div`
  width: 100px;
  text-align: center;

  .userinfo-title {
    font-size: var(--font-micro);
    font-weight: var(--weight-regular);
  }

  .userinfo-num {
    margin-top: 10px;
    font-size: var(--font-regular);
    font-weight: var(--weight-regular);
  }

  @media all and (max-width: 767px) {
    width: 75px;

    .userinfo-num {
      font-size: var(--font-small);
    }
  }
`;

export default ProfileFollow;
