import styled from 'styled-components';
import { TextField } from '@mui/material';

export const Input = styled(TextField)({
    '& .MuiOutlinedInput-root': {
        color: '#ffffff',
        height: 24,
        marginRight: 5,
    },
    "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
        border: '1px solid #2377c4'
    },
    "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
        borderColor: "#a1d0ff"
    },
});