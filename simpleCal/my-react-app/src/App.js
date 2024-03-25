import { useState } from 'react';
import './App.css';
import Button from './components/Button';
import Display from './components/Display';

function App() {
  const [count, setCount] = useState(0);

  const setToZero = () => {
    setCount(0);
  };
  const addFive = () => {
    console.log('you there?');
    setCount(count + 5);
  };
  const minusFifteen = () => {
    console.log('you there?');
    setCount(count - 15);
  };
  const plusTen = () => {
    console.log('you there?');
    setCount(count + 10);
  };

  return (
    <>
      <Display count={count} />
      <Button onClick={setToZero} text="0" />
      <Button onClick={addFive} text="+5" />
      <Button onClick={plusTen} text="+10" />
      <Button onClick={minusFifteen} text="-15" />
    </>
  );
}

export default App;
