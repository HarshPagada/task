import React, { useLayoutEffect, useState } from 'react'

const UseLayoutEffect = () => {
    const [value, setValue] = useState("jamnagar");

    useLayoutEffect(() => {
        console.log("UseLayoutEffect is called with the value of ", value);
    }, [value]);

    setTimeout(() => {
        setValue("Rajkot");
    }, 2000);

    return (
        <div>
            <h4>I am UseLayoutEffect</h4>
            <h1 style={{ color: "green" }}>{value}</h1> 
        </div>
    )
}

export default UseLayoutEffect
