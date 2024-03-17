import React, { ChangeEvent } from 'react';
import { Input } from './components';

export type InputPropsType = {
    value: string
    onBlur?: () => void
    onChange: (e: ChangeEvent<HTMLInputElement>) => void
    placeholder: string
    place?: string
}

const InputUi = (props: InputPropsType) => {
    return (
        <Input
            value={props.value}
            onChange={props.onChange}
            onBlur={props.onBlur}
            autoFocus
            placeholder={props.placeholder}
            place={props.place}
        />
    );
};

export default InputUi;