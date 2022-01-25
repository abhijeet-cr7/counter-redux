import React from 'react';
import {addNumber, subNumber} from '../redux/actions/numberActions';
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';

const CompOne = () => {
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
  return (<div>
    <button onClick={addSpan}>+</button>
    <button onClick={subSpan}>-</button>
    <span>{count}</span>
    <Link to="/Two">Click me</Link>
  </div>)
}

export default CompOne;
