import { ChangeEvent, useState } from 'react';
import InputUi from '../ui/Input';

type EditableSpanPropsType = {
    title: string
    onChange: (title: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.title);
    };

    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title);
    };

    const onChangeTitleValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value);
    };
    return (
        editMode
            ? <InputUi
                value={title}
                onBlur={activateViewMode}
                onChange={onChangeTitleValue}
                placeholder={'Edit your task'}
            />
            : <span onDoubleClick={activateEditMode} style={{marginRight: 10}}>{props.title}</span>
    );
}