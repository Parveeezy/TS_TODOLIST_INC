import React from 'react';

type ButtonPropsTypes = {
    title: string
    onClick: () => void
};

const Button = ({ title, onClick }: ButtonPropsTypes) => {

    return (
        <button onClick={onClick}>
            {title}
        </button>
    );
};

export default Button;