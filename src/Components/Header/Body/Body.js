import React from 'react';
import './body.css';
import Persons from '../Persons/Persons';
import Info from '../Info/Info';

const body = (props) => {
    const { persons, total, handleTotal} = props;

    return (
        <div className="main-body">
            <div className="person-container">
                {
                    persons.map(person => <Persons person={person} total={total} handleTotal={handleTotal}/>)
                }
            </div>
            <div className="info-container">
                <Info total={total}/>
            </div>

        </div>
    );
};

export default body;