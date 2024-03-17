import styled from 'styled-components';
import { TextField } from '@mui/material';
import { InputPropsType } from './index';

export const Input = styled(TextField)<InputPropsType>(({ place }) => ({
    '& .MuiOutlinedInput-root': {
        color: '#ffffff',
        height: 24,
        marginRight: 5,
        padding: place === 'newTodoList' ? 25 : 10,
        border: '1px solid transparent',

        '& fieldset': {
            borderColor: '#ffffff',
        },

        '&.Mui-focused fieldset': {
            border: '1px solid #6b01ff'
        },
    },
    '&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline': {
        borderColor: '#a1d0ff',
    },


}));

