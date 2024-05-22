import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const Increment = () => {
        dispatch({ type: 'INCREMENT' })
    }

    const Decrement = () => {
        dispatch({ type: 'DECREMENT' })
    }

    return (
        <div>
            <h3>I am Redux</h3>
           <strong> counter value is {count} </strong>
           <br/>
            <button onClick={Increment}>increment</button>
            <button onClick={Decrement}>decrement</button>
        </div>
    )
}

export default Counter
