import { useState } from "react";
import "./TodoForm.css"

interface TodoFormProps {
    handleCreate: (value: string) => void
}

export const TodoForm = ({handleCreate}: TodoFormProps) => {
    const [value, setValue] = useState("")

    const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault()
        if (!value.trim()) return
        handleCreate(value)
        setValue("")
    };

    return (
        <form className="form" onSubmit={handleSubmit}> 
            <input 
                className="form__input" 
                placeholder="Новое дело" 
                tabIndex={-1}  type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button className="form__button">Добавить</button>
        </form>
    )
}