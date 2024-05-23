import React, { useRef } from 'react'

const UseRef = () => {
    const ref = useRef(0)

    const handleClick=()=>{
        ref.current = ref.current + 1
        alert('you have clicked me ' + ref.current + ' time')
    }

    return (
        <div>
            <h4>I am UseRef</h4>
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default UseRef
