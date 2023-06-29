import styled from 'styled-components';

const CommentInputWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 10px;
`;

const Input = styled.input`
  border: 1px solid #987fc0;
  width: 98%;
  height: 50px;
  border-radius: 8px;
  margin-bottom: 5px;
  padding-left: 15px;
`;
const RegisterButton = styled.button`
  background-color: var(--color-main);
  color: var(--color-white);
  border-radius: 8px;
  width: 30%;
  height: 40px;
  cursor: pointer;
`;

const CommentInput = ({
  value,
  onChange,
  RegisterComment,
}: {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  RegisterComment: () => void;
}) => {
  return (
    <CommentInputWrap>
      <Input
        placeholder="댓글을 입력해주세요"
        onChange={onChange}
        value={value}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && e.nativeEvent.isComposing === false) {
            RegisterComment();
          }
        }}
      />
      <RegisterButton onClick={RegisterComment}>등록하기</RegisterButton>
    </CommentInputWrap>
  );
};

export default CommentInput;
