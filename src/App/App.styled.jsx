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
export const FormWrapper = styled.div`
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

export const Text = styled.p`
  font-size: 20px;
  padding: 10px 0px;
`;

export const Input = styled.input`
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  color: #000000;
  font-size: 14px;
  display: block;
  border: 2px solid #4aa412;
  height: 20px;
  border-radius: 5px;
  padding-left: 5px;
  width: 250px;
  height: 30px;
  transition: border-color 0.5s ease;
  &:hover {
    outline: none;
    border-color: #ffdd00;
  }

  &:focus {
    outline: none;
    border-color: #ffdd00;
  }
`;

export const Textarea = styled.textarea`
  cursor: pointer;
  font-family: 'Montserrat', sans-serif;
  color: #000000;
  font-size: 14px;
  display: block;
  border: 2px solid #4aa412;
  height: 20px;
  border-radius: 5px;
  padding: 5px;
  width: 100%;
  height: 100px;
  transition: border-color 0.5s ease;
  &:hover {
    outline: none;
    border-color: #ffdd00;
  }

  &:focus {
    outline: none;
    border-color: #ffdd00;
  }
`;

export const Form = styled.form`
width:300px;
display: flex;
flex-direction:column;
justify-content: center;
align-items: center;
`

export const StyledSelect = styled.select`

  padding: 5px;
  font-size: 16px;
  border: 2px solid #4aa412;
  border-radius: 5px;
  background-color: white;
  cursor: pointer;
  transition: border-color 0.5s ease;

  &:hover {
    outline: none;
    border-color: #ffdd00;
  }

  &:focus {
    outline: none;
    border-color: #ffdd00;
  }
`;

export const Option = styled.option`
font-size:20px;
`