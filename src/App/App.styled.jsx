import styled from '@emotion/styled';

export const AppWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding: 30px;
  width: 100%;
`;

export const DevWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 30px;
`;

export const MainHeader = styled.h1`
  font-size: 40px;
  text-transform: uppercase;
`;
export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;


export const ScheduleWrapper = styled.div`
  display: flex;
  justify-content: center;
`;


export const AddButton = styled.button`
  cursor: pointer;
  margin-bottom: 10px;
  margin-left: 30px;
  min-width: 90px;
  font-family: 'Montserrat', sans-serif;
  background-color: #4aa412;
  padding: 8px;
  border-radius: 10px;
  border: none;
  font-size: 25px;
  color: #ffffff;
  font-weight: 700;

  transition: background-color 0.5s ease, transform 0.5s ease, color 0.5s ease;

  &:hover {
    background-color: #ffdd00;
    color: #515050;
    transform: scale(1.2);
  }
`;

