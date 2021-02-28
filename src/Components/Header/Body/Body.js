import React from 'react';
import './body.css';
import Persons from '../Persons/Persons';
import Info from '../Info/Info';

const body = (props) => {
    const {persons, total, handleName, income} = props;

    return (
        <div className="main-body">
            <div className="person-container">
                {
                    persons.map(person => <Persons key={person.id} person={person} handleName={handleName} income={person.income}/>)
                }
            </div>
            <div className="info-container">
                <Info total={total} income={income} selectedName={props.selectedName} originalIncome={props.originalIncome}/>
            </div>

        </div>
    );
};

export default body;