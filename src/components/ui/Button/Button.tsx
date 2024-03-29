import React from 'react';
import { StyledButtonWrapper } from './components';

type ButtonPropsTypes = {
    title: string
    onClick: () => void
};

export const ButtonUi = ({ title, onClick }: ButtonPropsTypes) => {

    return (
        <StyledButtonWrapper onClick={onClick}>
            {title}
        </StyledButtonWrapper>
    );
};