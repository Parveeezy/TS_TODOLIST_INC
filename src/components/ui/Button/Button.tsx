import React from 'react';

type ButtonPropsTypes = {
    title: string
    onClick: () => void
};

const Button = ({title, onClick}: ButtonPropsTypes) => {

    return (
        <button onClick={onClick} style={{marginTop: 10}}>
            {title}
        </button>
    )
};

export default Button;