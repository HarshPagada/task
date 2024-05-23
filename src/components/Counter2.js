import React, { useState } from 'react'

const Counter = () => {
    const [count, setCount] = useState(0);

    const Increment = () => {
        setCount(count + 1)
    }
    return (
        <div>
            Counter value is {count}
            <br />
            <button type='button' onClick={Increment}>+</button>
        </div>
    )
}

export default Counter
