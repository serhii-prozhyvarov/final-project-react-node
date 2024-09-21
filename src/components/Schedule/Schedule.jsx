import React from 'react';
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

const Schedule = ({ mySchedule, handleDeleteTask, handleEditTask }) => {
  const days = [
    'monday',
    'tuesday',
    'wednesday',
    'thursday',
    'friday',
    'saturday',
    'sunday',
  ];

  const groupedTasks = days.reduce((acc, day) => {
    acc[day] = mySchedule.filter(task => task.day === day);
    return acc;
  }, {});

  return (
    <ScheduleWrapper>
      <StyledUl>
        {days.map(day => (
          <StyledLi key={day}>
            <StyledH2>{day.charAt(0).toUpperCase() + day.slice(1)}</StyledH2>
            {groupedTasks[day].map((task, index) => (
              <TaskDiv key={task._id}>
                <StyledTaskName>
                  <StyledTaskNumber>{index + 1}.</StyledTaskNumber>
                  {task.name}
                </StyledTaskName>
                <StyledP>{task.description}</StyledP>
                <ButtonContainer>
                  <Button onClick={() => handleEditTask(task)}>
                    <IconSpan role="img" aria-label="edit">
                      ✏️
                    </IconSpan>
                  </Button>
                  <Button onClick={() => handleDeleteTask(task._id)}>
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
