import React from 'react'

const Todos = ({todos, addTodos}) => {
  return (
    <div>
      {todos.map((todo, index) => {
        return <p key={index}>{todo}</p>;
      })}
      <button onClick={addTodos}>Add Todo</button>
    </div>
  )
}

export default Todos
