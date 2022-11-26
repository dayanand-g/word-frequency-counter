import React, { useState } from 'react'
import './App.css';
import BarChart from './BarChart';

function App() {
  const [open, setOpen] = useState(false);

  const onClickHandle = () => {
    setOpen(true);
  };


  return (
    <div className="App">
      <button className='btn' onClick={onClickHandle}>Submit</button>
      <BarChart open={open}></BarChart>
    </div>
  );
}

export default App;
