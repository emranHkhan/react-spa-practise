import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Header/Body/Body';

function App() {
  const [persons, setPerson] = useState([]);
  const [total, setTotal] = useState(0);

  function handleTotal() {
    setTotal(total + 1);
    console.log(total);
  }



  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => setPerson(data));
  }, [])

  return (
    <div>
      <Header />
      <Body persons={persons} total={total} handleTotal={handleTotal} />
    </div>
  );
}

export default App;
