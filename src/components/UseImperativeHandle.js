import React, { useRef, useImperativeHandle, forwardRef } from 'react'

const UseImperativeHandle = () => {

    const internalRef = useRef(null);
    const childRef = useRef(null);

    useImperativeHandle(childRef, () => ({
        focus: () => {
            internalRef.current.focus();
        },
        getValue: () => {
            return internalRef.current.value;
        }
    }));

    const handleClick = () => {
        childRef.current.focus();
    };
 
    const handleGetValue = () => {
        const value = childRef.current.getValue();
        console.log(value);
    };

    return (
        <div>
            <h4>I am UseImperativeHandle</h4>
            <input ref={internalRef} />
            <button
                onClick={handleClick}>Focus Input</button>
            <button
                onClick={handleGetValue}>Get Value</button>
        </div>
    )
}

export default UseImperativeHandle
