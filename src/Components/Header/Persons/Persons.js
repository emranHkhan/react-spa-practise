import React from 'react';
import './persons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

const Persons = (props) => {
    const { person, handleName, income} = props;
   
    return (

        <div className="person-card">
            <div className="img">
                <img src={person.image} alt=""/>
            </div>

            <div className="info">
                <h2>Name: {person.name}</h2>
                <h4>Email: {person.email}</h4>
                <h5>City: {person.address.city}</h5>
                <button className="btn" onClick={() => handleName(income, person.name, person.income)}><FontAwesomeIcon icon={faPlus}/> Add</button>
      
            </div>

        </div>


    );
};

export default Persons;