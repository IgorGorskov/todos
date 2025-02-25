import { useState } from "react"
import "./TodoItem.css"

export interface TodoItem{
    value: string,
    id: string,
    done: boolean,
}

export interface TodoItemProps {
    todoItem: TodoItem
    onChange: (item: TodoItem) => void,
    onDelete: (id: string) => void,
  }


  

export const TodoItem = ({todoItem: {id, value, done}, onChange, onDelete}: TodoItemProps) =>{
    const [localValue, setValue] = useState(value)
    const handleChange = (value: string) => {
        setValue(value)
    }

    const onBlur = () => {
        onChange({id, value: localValue, done})
    }

    const handleDone = () => {
        onChange({id, value, done: !done})
    }

    const handleDelete = () => {
        onDelete(id)
    }

    return (
        <div className= {done ? "done item" : "item"} >
            <input 
                className="item__name"
                type="text" value={localValue}
                onChange={(event) => handleChange(event.target.value)}
                onBlur={onBlur}
            />
            <button onClick={handleDone} className="item__done-button item__button">Сделано</button>
            <button onClick={handleDelete} className="item__delet-button item__button">Удалить</button>
        </div>
    )  
}