import {useState} from 'react';
import styles from '../styles/Home.module.css'


const Home = () => {
  
  const [counter, setCounter] = useState(0);
  const [inputValue, setInputValue] = useState(1);

  const addFunction = () => {
    setCounter(counter+inputValue);
  }

  const subtractFunction = () => {
    setCounter(counter-inputValue);
  }

  return (
    <div className={styles.container}>
      <h3 data-testid='title'>Counter</h3>
      <p className={`${counter > 100 ? styles.green : ""}${counter < -100 ? styles.red : ""}`} data-testid='counter'>{counter}</p>
      <button data-testid='subtractButton' onClick={subtractFunction}>-</button>
      <input data-testid='input' value={inputValue} onChange={(e) => setInputValue(parseInt(e.target.value))}></input>
      <button data-testid='addButton' onClick={addFunction}>+</button>

      
    </div>
)}

export default Home
