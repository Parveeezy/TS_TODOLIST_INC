import {ChangeEvent, useState} from "react";

type EditableSpanPropsType = {
    title: string
    onChange: (title: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    const [editMode, setEditMode] = useState<boolean>(false)
    const [title, setTitle] = useState<string>('')

    const activateEditMode = () => {
        setEditMode(true);
        setTitle(props.title)
    }

    const activateViewMode = () => {
        setEditMode(false);
        props.onChange(title)
    }

    console.log(title)

    const onChangeTitleValue = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }

    return (
        editMode
            ? <input
                value={title}
                onBlur={activateViewMode}
                onChange={onChangeTitleValue}
                autoFocus
            />
            : <span onDoubleClick={activateEditMode}>{props.title}</span>
    )
}