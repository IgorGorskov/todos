import { useState } from "react"
import { TodoItem } from "../TodoItem/TodoItem"
import "./TodoList.css"


export interface TodoListProps{
    todoList: TodoItem[],
    onChange: (item: TodoItem) => void,
    onDelete: (id: string) => void,
}

enum FILTERS {
    ALL = 'all',
    DONE = 'done',
    UNDONE = 'undone'
}

export const TodoList = ({todoList, onChange, onDelete}: TodoListProps) => {
    const [filter, setFilter] = useState(FILTERS.ALL)

    function toFilter(item: TodoItem) {
        if (filter == FILTERS.ALL){
            return true
        }
        if (filter == FILTERS.UNDONE && item.done == false){
            return true
        }
        if (filter == FILTERS.DONE && item.done == true){
            return true
        }
    }

    return(
        
    <>
        <div className="filter">
            <button onClick={()=>setFilter(FILTERS.ALL)} className="filter__button">
                Все задачи
            </button>
            <button onClick={()=>setFilter(FILTERS.UNDONE)} className="filter__button">
                Актуальные
            </button>
            <button onClick={()=>setFilter(FILTERS.DONE)} className="filter__button">
                Сделанные
            </button>
        </div>

        <ul className="list">
            {todoList.filter(item => toFilter(item)).map((item) =>(
                <li key={item.id}>
                    <TodoItem 
                        todoItem={item}
                        onChange={onChange}
                        onDelete={onDelete}
                    />
                </li>)
            )}
        </ul>
        </>
    )
}