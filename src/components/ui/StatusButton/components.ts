import styled from 'styled-components';
import { Button } from '@mui/material';

export const StyledButtonWrapper = styled(Button)({
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&.MuiButton-root': {
        color: '#ffffff',
        borderColor: '#ffffff',
        fontFamily: `Yatra One, system-ui`,
        fontWeight: 400,
        fontStyle: 'normal',
    },
});