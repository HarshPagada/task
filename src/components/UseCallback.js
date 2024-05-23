import React, { useCallback, useState } from 'react'
import Todos from './Todos';

const UseCallback = () => {
    const [todos, setTodos] = useState([]);

    const addTodos = useCallback(() => {
        setTodos((t) => [...t, "New Todo"]);
    }, [todos])
    return (
        <div>
            <h4>I am UseCallback</h4>
            <Todos todos={todos} addTodos={addTodos}/>

        </div>
    )
}

export default UseCallback
