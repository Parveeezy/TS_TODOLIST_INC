import React, {ChangeEvent, useState} from 'react';

export type EditableSpanType = {
    value: string
    onChange: (str: string) => void
}

export const EditableSpan = ({value, onChange}: EditableSpanType) => {
    const [editMode, setEditMode] = useState<boolean>(false);
    const [title, setTitle] = useState<string>('');

    const activeEditMode = () => {
        setEditMode(true)
        setTitle(value)
    }

    const activeViewMode = () => {
        setEditMode(false)
        onChange(title)
    }

    const onChangeTitleHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        editMode
            ? <input
                value={title}
                onBlur={activeViewMode}
                onChange={(e) => onChangeTitleHandler(e)}
                autoFocus
            />
            : <span onDoubleClick={activeEditMode}>{value}</span>
    )
}