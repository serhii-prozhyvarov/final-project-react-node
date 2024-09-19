import React, { useState } from 'react';
import {
  mondayTasks as initialMondayTasks,
  tuesdayTasks as initialTuesdayTasks,
  wednesdayTasks as initialWednesdayTasks,
  thursdayTasks as initialThursdayTasks,
  fridayTasks as initialFridayTasks,
  saturdayTasks as initialSaturdayTasks,
  sundayTasks as initialSundayTasks,
} from '../../schedule';
import {
  StyledUl,
  ScheduleWrapper,
  StyledLi,
  StyledH2,
  TaskDiv,
  StyledP,
  StyledTaskName,
  StyledTaskNumber,
  Button,
  ButtonContainer,
  IconSpan,
} from './Schedule.styled';

const Schedule = () => {
  const [mondayTasks, setMondayTasks] = useState(initialMondayTasks);
  const [tuesdayTasks, setTuesdayTasks] = useState(initialTuesdayTasks);
  const [wednesdayTasks, setWednesdayTasks] = useState(initialWednesdayTasks);
  const [thursdayTasks, setThursdayTasks] = useState(initialThursdayTasks);
  const [fridayTasks, setFridayTasks] = useState(initialFridayTasks);
  const [saturdayTasks, setSaturdayTasks] = useState(initialSaturdayTasks);
  const [sundayTasks, setSundayTasks] = useState(initialSundayTasks);

  const handleDeleteTask = (day, taskId) => {
    switch (day) {
      case 'Monday':
        setMondayTasks(mondayTasks.filter(task => task.id !== taskId));
        break;
      case 'Tuesday':
        setTuesdayTasks(tuesdayTasks.filter(task => task.id !== taskId));
        break;
      case 'Wednesday':
        setWednesdayTasks(wednesdayTasks.filter(task => task.id !== taskId));
        break;
      case 'Thursday':
        setThursdayTasks(thursdayTasks.filter(task => task.id !== taskId));
        break;
      case 'Friday':
        setFridayTasks(fridayTasks.filter(task => task.id !== taskId));
        break;
      case 'Saturday':
        setSaturdayTasks(saturdayTasks.filter(task => task.id !== taskId));
        break;
      case 'Sunday':
        setSundayTasks(sundayTasks.filter(task => task.id !== taskId));
        break;
      default:
        break;
    }
  };

  const days = [
    { name: 'Monday', tasks: mondayTasks },
    { name: 'Tuesday', tasks: tuesdayTasks },
    { name: 'Wednesday', tasks: wednesdayTasks },
    { name: 'Thursday', tasks: thursdayTasks },
    { name: 'Friday', tasks: fridayTasks },
    { name: 'Saturday', tasks: saturdayTasks },
    { name: 'Sunday', tasks: sundayTasks },
  ];

  return (
    <ScheduleWrapper>
      <StyledUl>
        {days.map(day => (
          <StyledLi key={day.name}>
            <StyledH2>{day.name}</StyledH2>
            {day.tasks.map((task, index) => (
              <TaskDiv key={task.id}>
                <StyledTaskName>
                  <StyledTaskNumber>{index + 1}.</StyledTaskNumber>
                  {task.name}
                </StyledTaskName>
                <StyledP>{task.description}</StyledP>
                <ButtonContainer>
                  <Button>
                    <IconSpan role="img" aria-label="edit">
                      ✏️
                    </IconSpan>
                  </Button>
                  <Button onClick={() => handleDeleteTask(day.name, task.id)}>
                    <IconSpan role="img" aria-label="delete">
                      🗑️
                    </IconSpan>
                  </Button>
                </ButtonContainer>
              </TaskDiv>
            ))}
          </StyledLi>
        ))}
      </StyledUl>
    </ScheduleWrapper>
  );
};

export default Schedule;
