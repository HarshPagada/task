import React, { useMemo, useState } from 'react'

const factorial = (n) => {
  console.log('Calculating factorial...');
  if (n < 0) return 'Invalid input';
  if (n === 0) return 1;
  let result = 1;
  for (let i = 1; i <= n; i++) {
    result *= i;
  }
  return result;
};

const Usememo = () => {

  const [number, setNumber] = useState();
  const [other, setOther] = useState();

  // const result = useMemo(() => factorial(number), [number]);

  const result = useMemo(() => {
    if (number === '' || isNaN(number) || number < 0) return 'Invalid input';
    return factorial(Number(number));
  }, [number]);

  return (
    <div>
      <h1>Factorial of {number} is {result}</h1>
      <input type='number' value={number} onChange={(event) => setNumber(parseInt(event.target.value))}></input>
      <br />
      <input type='text' value={other} onChange={(event) => setOther(event.target.value)}></input>
    </div>
  )
}

export default Usememo
