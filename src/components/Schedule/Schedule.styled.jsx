import styled from '@emotion/styled';

export const ScheduleWrapper = styled.div`
  min-width: 800px;
  margin: 0 auto;
  padding-left:20px;
  padding-right:20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
`;

export const StyledUl = styled.ul`
  display: flex;
  justify-content: space-between;
  list-style-type: none;
  padding: 0;
`;

export const StyledLi = styled.li`
  flex: 1;
  margin: 0 10px;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StyledH2 = styled.h2`
  font-size: 30px;
  color: #333;
  margin-bottom: 10px;
  text-align: center;
`;

export const TaskDiv = styled.div`
  margin-top: 10px;
  padding: 10px;
  border: 1px solid #eee;
  border-radius: 4px;
  background-color: #fafafa;
`;

export const StyledTaskName = styled.p`
  font-weight: bold;
  margin: 0;
  color: #333;
`;

export const StyledTaskNumber = styled.span`
  font-weight: normal;
  color: #888;
  margin-right: 5px;
`;

export const StyledP = styled.p`
  margin: 5px 0;
  color: #555;
  font-size: 14px;
`;

export const Button = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  margin: 0 5px;
  font-size: 15px;
  color: #333;

  &:hover {
    color: #007bff; 
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
`;

export const IconSpan = styled.span`
  font-size: 18px;
  color: #333;

  &:hover {
    color: #007bff;
  }
`;