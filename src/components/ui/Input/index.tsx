import React, { ChangeEvent } from 'react';
import { Input } from './components';

type InputPropsType = {
    value: string
    onBlur?: () => void
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder: string
}

const InputUi = (props: InputPropsType) => {
    return (
        <Input
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            autoFocus
            placeholder={props.placeholder}
        />
    );
};

export default InputUi;