import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  AddButton,
  AppWrapper,
  Option,
  ButtonWrapper,
  DevWrapper,
  Form,
  FormWrapper,
  Input,
  MainHeader,
  StyledSelect,
  Textarea,
  Text,
} from './App.styled';
import Schedule from 'components/Schedule/Schedule';

export const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScheduleActive, setIsScheduleActive] = useState(false);
  const [mySchedule, setMySchedule] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [day, setDay] = useState('monday');

  const fetchTasks = async () => {
    const response = await axios.get('http://localhost:5000/tasks');
    setMySchedule(response.data);
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  const addTask = async e => {
    e.preventDefault();
    if (!title || !description) return;

    const newTask = { name: title, description, day };
    const response = await axios.post('http://localhost:5000/tasks', newTask);
    setMySchedule([...mySchedule, response.data]);
    setTitle('');
    setDescription('');
    setDay('monday');
    setIsActive(false);
  };

  const handleDeleteTask = async taskId => {
    await axios.delete(`http://localhost:5000/tasks/${taskId}`);
    setMySchedule(mySchedule.filter(task => task._id !== taskId));
  };

  const openSchedule = () => {
    setIsScheduleActive(!isScheduleActive);
    setIsActive(false);
  };

  return (
    <AppWrapper>
      <DevWrapper>
        <MainHeader>week planner</MainHeader>
      </DevWrapper>
      <ButtonWrapper>
        <AddButton onClick={() => setIsActive(true)}>Add task</AddButton>
        <AddButton onClick={openSchedule}>
          {isScheduleActive ? 'Close Schedule' : 'Open schedule'}
        </AddButton>
      </ButtonWrapper>
      {isActive && (
        <FormWrapper>
          <Form onSubmit={addTask}>
            <Text>Choose day</Text>
            <StyledSelect value={day} onChange={e => setDay(e.target.value)}>
              <Option value="monday">Monday</Option>
              <Option value="tuesday">Tuesday</Option>
              <Option value="wednesday">Wednesday</Option>
              <Option value="thursday">Thursday</Option>
              <Option value="friday">Friday</Option>
              <Option value="saturday">Saturday</Option>
              <Option value="sunday">Sunday</Option>
            </StyledSelect>
            <Text>Title</Text>
            <Input value={title} onChange={e => setTitle(e.target.value)} />
            <Text>Description</Text>
            <Textarea
              value={description}
              onChange={e => setDescription(e.target.value)}
            />
            <AddButton type="submit">Submit</AddButton>
          </Form>
        </FormWrapper>
      )}
      {isScheduleActive && (
        <Schedule mySchedule={mySchedule} handleDeleteTask={handleDeleteTask} />
      )}
    </AppWrapper>
  );
};
