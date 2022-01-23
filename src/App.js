import {useState} from 'react';
import { useSelector, useDispatch } from 'react-redux';
import './App.css';
import {addNumber, subNumber} from './redux/actions/numberActions';

function App() {
  const count = useSelector((state) => state.arithmeticSpan.count);
  console.log(count);
  const dispatch = useDispatch();
  
  const addSpan = () => {
  console.log(count);
  dispatch(addNumber(count));
  }
  const subSpan = () => {
  dispatch(subNumber(count));
  }

  return (
    <div className="App">
    <button onClick={addSpan}>+</button>
    <button onClick={subSpan}>-</button>
    <span>{count}</span>
    </div>
  );
}

export default App;
