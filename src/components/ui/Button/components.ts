import styled from 'styled-components';
import Button from '@mui/material/Button';

export const StyledButtonWrapper = styled(Button)({
    '&.MuiButton-root': {
        minWidth: 20,
        height: 20,
        color: '#ffffff',
        border: '1px solid #ffffff',
        borderRadius: 5,
        alignContent: 'center',
        padding: 5,
        margin: 0,
        fontFamily: `Yatra One, system-ui`,
        fontWeight: 400,
        fontStyle: 'normal',
    }
})