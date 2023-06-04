import styled from 'styled-components';
import Filter from './Filter';
const Duration = styled.button`
  width: 23%;
  height: 39px;
  background-color: var(--color-gray);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  font-size: 14px;
  padding: 10px;
  margin-top: 10px;
`;

const DateWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-left: 10px;
`;

const DateBox = styled.div`
  display: flex;
`;

const DateBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const DateBoxContainer = styled.div`
  display: flex;
  position: absolute;
  background-color: white;
  border: 1px solid #987fc0;
  border-radius: 8px;
  padding: 10px;
`;

const DateName = styled.span`
  margin: auto;
`;

const DateSelectCompleteButton = styled.button`
  background-color: var(--color-sub);
  color: var(--color-white);
  border: none;
  border-radius: 8px;
  height: 95px;
  width: 50px;
  margin-top: auto;
  margin-left: 10px;
`;

const year = [2018, 2019, 2020, 2021, 2022, 2023];

const month = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const day = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31,
];

const DateBoxContainerWrap = ({
  startDate,
  endDate,
  setYear,
  setMonth,
  setDay,
  setShow,
}: {
  startDate: { year: number; month: number; day: number };
  endDate: { year: number; month: number; day: number };
  setYear: (date: number, start: boolean) => void;
  setMonth: (date: number, start: boolean) => void;
  setDay: (date: number, start: boolean) => void;
  setShow: () => void;
}) => {
  return (
    <DateBoxContainer>
      <DateBoxWrap>
        <DateBox>
          <DateName>Start</DateName>
          <DateWrap>
            <Filter
              value={startDate.year}
              onChange={(e) => {
                setYear(Number(e.target.value), true);
              }}
              Options={year}
              width={100}
            />
          </DateWrap>
          <DateWrap>
            <Filter
              value={startDate.month}
              onChange={(e) => {
                setMonth(Number(e.target.value), true);
              }}
              Options={month}
              width={100}
            />
          </DateWrap>
          <DateWrap>
            <Filter
              value={startDate.day}
              onChange={(e) => {
                setDay(Number(e.target.value), true);
              }}
              Options={day}
              width={100}
            />
          </DateWrap>
        </DateBox>
        <DateBox>
          <DateName>End</DateName>
          <DateWrap>
            <Filter
              value={startDate.year}
              onChange={(e) => {
                setYear(Number(e.target.value), true);
              }}
              Options={year}
              width={100}
            />
          </DateWrap>
          <DateWrap>
            <Filter
              value={endDate.month}
              onChange={(e) => {
                setMonth(Number(e.target.value), false);
              }}
              Options={month}
              width={100}
            />
          </DateWrap>
          <DateWrap>
            <Filter
              value={endDate.day}
              onChange={(e) => {
                setDay(Number(e.target.value), false);
              }}
              Options={day}
              width={100}
            />
          </DateWrap>
        </DateBox>
      </DateBoxWrap>
      <DateSelectCompleteButton onClick={setShow}>완료</DateSelectCompleteButton>
    </DateBoxContainer>
  );
};

//show에 따라 캘린더 표시 유무
const FilterDuration = ({
  show,
  setShow,
  startDate,
  endDate,
  setYear,
  setMonth,
  setDay,
}: {
  show: boolean;
  setShow: () => void;
  startDate: { year: number; month: number; day: number };
  endDate: { year: number; month: number; day: number };
  setYear: (date: number, start: boolean) => void;
  setMonth: (date: number, start: boolean) => void;
  setDay: (date: number, start: boolean) => void;
}) => {
  return (
    <>
      <Duration onClick={setShow}>스토어 기간</Duration>
      {show && (
        <DateBoxContainerWrap
          setShow={setShow}
          startDate={startDate}
          endDate={endDate}
          setYear={setYear}
          setMonth={setMonth}
          setDay={setDay}
        />
      )}
    </>
  );
};

export default FilterDuration;
