import styled from 'styled-components';
import { ButtonGroup } from '@mui/material';

export const TodoListWrapper = styled('div')({
    background: `linear-gradient(135deg, 
    rgba(170,95,161,0.930453431372549) 0%,
     rgba(9,9,121,0.8772321428571429) 38%, 
     rgba(6,81,168,0.8800332633053222) 60%, 
     rgba(175,0,255,0.7511817226890756) 100%)`,
    width: 280,
    marginTop: 30,
    border: '1px solid #ffffff',
    borderRadius: 15,
    padding: 30,
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    color: '#ffffff'
});

export const TodoListTasksWrapper = styled('ul')({
    margin: 0,
    padding: 0,
});

export const TodoListTask = styled('li')({
    display: 'flex',
    justifyContent: 'start',
    alignItems: 'center',
    marginTop: 10,
    borderBottom: '1px solid #2377c4',
    paddingBottom: 10,
});

export const TodoListButtonsStatusGroup = styled(ButtonGroup)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
});