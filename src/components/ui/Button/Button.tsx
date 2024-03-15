import React from 'react';
import Button from '@mui/material/Button';

type ButtonPropsTypes = {
    title: string
    onClick: () => void
};

export const ButtonUi = ({ title, onClick }: ButtonPropsTypes) => {

    return (
        <Button onClick={onClick}>
            {title}
        </Button>
    );
};