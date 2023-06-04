import styled from 'styled-components';
import FormField from './FormField';

const SignupForm = () => {
  return (
    <FormContainer>
      <FormField label={'이름'} name={'name'} type={'text'}></FormField>
      <FieldContainer>
        <NicknameLabel>
          <Label htmlFor="nickname">닉네임</Label>
          <NicknameCheckMessage>다른 유저가 사용 중인 닉네임입니다.</NicknameCheckMessage>
        </NicknameLabel>
        <NicknameInput>
          <input type="text" name="nickname" id="nickname" />
          <button>중복확인</button>
        </NicknameInput>
      </FieldContainer>
      <FormField label={'이메일'} name={'email'} type={'email'}></FormField>
      <FormField label={'비밀번호'} name={'password'} type={'password'}></FormField>
      <FormField label={'비밀번호 확인'} name={'passwordConfirm'} type={'password'}></FormField>
      <FormField label={'전화번호'} name={'phoneNumber'} type={'number'}></FormField>
      <CheckboxContainer>
        <input type="checkbox" name="allowNotification" id="allowNotification" />
        <p>팔로우∙댓글∙팝업스토어 알림 허용</p>
      </CheckboxContainer>
      <WarningMessage>이메일 형식이 올바르지 않습니다.</WarningMessage>
      <SignupButton type="submit">가입하기</SignupButton>
    </FormContainer>
  );
};

export default SignupForm;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
`;

const FieldContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 14px;
`;

const NicknameLabel = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;
`;

const Label = styled.label`
  font-size: var(--font-small);
  padding-left: 8px;
  margin-bottom: 8px;
`;

const NicknameCheckMessage = styled.p`
  font-size: var(--font-micro);
  margin-right: 4px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
`;

const NicknameInput = styled.div`
  width: 270px;
  display: flex;
  justify-content: space-between;

  & input {
    width: 180px;
    height: 30px;
    padding: 8px;
    box-sizing: border-box;
    border: 1px solid var(--color-sub);
    border-radius: var(--border-radius-input);
    font-size: var(--font-small);
    color: var(--color-black);
  }

  & button {
    width: 80px;
    height: 30px;
    font-size: 12px;
    color: var(--color-white);
    background-color: var(--color-main);
    border-radius: var(--border-radius-button);
  }
`;

const CheckboxContainer = styled.div`
  width: 270px;
  font-size: var(--font-small);
  display: flex;
  margin-bottom: 20px;

  & input {
    accent-color: var(--color-main);
    width: 16px;
    height: 16px;
    margin: 0 4px;
  }

  & p {
    margin-left: 2px;
  }
`;

const WarningMessage = styled.p`
  font-size: var(--font-small);
  color: var(--color-red);
  padding-top: 10px;
`;

const SignupButton = styled.button`
  width: 270px;
  height: 40px;
  color: var(--color-white);
  background-color: var(--color-main);
  border-radius: var(--border-radius-button);
  margin: 10px 0;
  cursor: pointer;
`;
