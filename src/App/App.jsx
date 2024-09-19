import { useState } from 'react';
import {
  AppWrapper,
  DevWrapper,
  MainHeader,
  AddButton,
  ButtonWrapper,
  Text,
  Input,
  Textarea,
  FormWrapper,
  Form,
  StyledSelect,
  Option,
} from './App.styled';
import Schedule from 'components/Schedule/Schedule';

export const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScheduleActive, setIsScheduleActive] = useState(false);

  const addTask = () => {
    setIsActive(!isActive);
    setIsScheduleActive(false);
  };

  const openSchedule = () => {
    setIsScheduleActive(!isScheduleActive);
    setIsActive(false)
  }

  return (
    <AppWrapper>
      <DevWrapper>
        <MainHeader>week planer</MainHeader>
      </DevWrapper>
      <ButtonWrapper>
        <AddButton onClick={addTask}>
          {isActive ? 'Submit' : 'Add task'}
        </AddButton>
        <AddButton onClick={openSchedule}>
          {isScheduleActive ? 'Close Schedule' : 'Open schedule'}
        </AddButton>
      </ButtonWrapper>
      {isActive && (
        <FormWrapper>
          <Form>
            <Text>Choose day</Text>
            <StyledSelect id="weekdaySelect">
              <Option value="monday">Monday</Option>
              <Option value="tuesday">Tuesday</Option>
              <Option value="wednesday">Wednesday</Option>
              <Option value="thursday">Thursday</Option>
              <Option value="friday">Friday</Option>
              <Option value="saturday">Saturday</Option>
              <Option value="sunday">Sunday</Option>
            </StyledSelect>
            <Text>Task name</Text>
            <Input />
            <Text>Description</Text>
            <Textarea />
          </Form>
        </FormWrapper>
      )}
      {isScheduleActive && <Schedule />}
    </AppWrapper>
  );
};
