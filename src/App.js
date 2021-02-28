import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Body from './Components/Header/Body/Body';




function App() {

  const [people, setPeople] = useState([]);
  const [originalIncome, setOriginalIncome] = useState([]);
  const [total, setTotal] = useState(0);
  const [income, setIncome] = useState(0);
  const [selectedName, setSelectedName] = useState([]);

  useEffect(() => {
    fetch('https://api.mocki.io/v1/1890956c')
      .then(response => response.json())
      .then(data => setPeople(data));
  }, [])


  function handleName(prevIncome, name, newIncome) {

    if (!selectedName.includes(name)) {
      const newSelectedName = [...selectedName, name];
      setSelectedName(newSelectedName);
      handleTotal(prevIncome, newIncome);

      const newOriginalIncome = [...originalIncome, newIncome];
      setOriginalIncome(newOriginalIncome);

    }
    else {
      alert('It has been already selected');
    }

  }

  function handleTotal(prevIncome, newIncome) {

    setTotal(total + 1);
    setIncome(income + prevIncome);
    setOriginalIncome(newIncome);
  }


  return (
    <div>
      <Header />
      <Body persons={people} total={total} handleName={handleName} income={income} selectedName={selectedName} originalIncome={originalIncome} />
    </div>
  );
}

export default App;
