import React from 'react';
import { StyledButtonWrapper } from './components';

type ButtonPropsTypes = {
    title: string
    onClick: () => void
};

export const StatusButtonUi = ({ title, onClick }: ButtonPropsTypes) => {

    return (
        <StyledButtonWrapper onClick={onClick}>
            {title}
        </StyledButtonWrapper>
    );
};