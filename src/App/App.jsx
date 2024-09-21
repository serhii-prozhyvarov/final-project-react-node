import { useEffect, useState } from 'react';
import axios from 'axios';
import {
  AddButton,
  AppWrapper,
  ButtonWrapper,
  DevWrapper,
  MainHeader,
} from './App.styled';
import Schedule from 'components/Schedule/Schedule';
import AddForm from 'components/Form/Form';

export const App = () => {
  const [isActive, setIsActive] = useState(false);
  const [isScheduleActive, setIsScheduleActive] = useState(false);
  const [mySchedule, setMySchedule] = useState([]);
  const [editingTaskId, setEditingTaskId] = useState(null);
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

  const addOrUpdateTask = async e => {
    e.preventDefault();
    if (!title || !description) return;

    const taskData = { name: title, description, day };

    if (editingTaskId) {
      const response = await axios.put(
        `http://localhost:5000/tasks/${editingTaskId}`,
        taskData
      );
      setMySchedule(
        mySchedule.map(task =>
          task._id === editingTaskId ? response.data : task
        )
      );
    } else {
      const response = await axios.post(
        'http://localhost:5000/tasks',
        taskData
      );
      setMySchedule([...mySchedule, response.data]);
    }

    resetForm();
  };

  const toggleTaskfrom = () => {
    setIsActive(!isActive)

  }

  const handleEditTask = task => {
    setEditingTaskId(task._id);
    setTitle(task.name);
    setDescription(task.description);
    setDay(task.day);
    setIsActive(true);
  };

  const handleDeleteTask = async taskId => {
    await axios.delete(`http://localhost:5000/tasks/${taskId}`);
    setMySchedule(mySchedule.filter(task => task._id !== taskId));
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setDay('monday');
    setEditingTaskId(null);
    setIsActive(false);
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
        <AddButton onClick={toggleTaskfrom}>
          {isActive ? 'Close task' : 'Add task'}
        </AddButton>
        <AddButton onClick={openSchedule}>
          {isScheduleActive ? 'Close Schedule' : 'Open schedule'}
        </AddButton>
      </ButtonWrapper>
      {isActive && (
        <AddForm
          addOrUpdateTask={addOrUpdateTask}
          editingTaskId={editingTaskId}
          day={day}
          setDay={setDay}
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
        />
      )}
      {isScheduleActive && (
        <Schedule
          mySchedule={mySchedule}
          handleDeleteTask={handleDeleteTask}
          handleEditTask={handleEditTask}
        />
      )}
    </AppWrapper>
  );
};
