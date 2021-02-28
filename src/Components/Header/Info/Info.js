import React from 'react';
import './info.css';

const Info = (props) => {
    const selectedName = props.selectedName;
    const originalIncome = props.originalIncome;
    return (
        <div className="info">
            <h2>Total Added: {props.total}</h2>
            <h2>Total Income: {props.income}</h2>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div>
                    {
                        selectedName.map(name => <h3 key={Math.floor(Math.random() * 10000)}>{name}</h3>)

                    }
                </div>

                <div>
                    {
                        originalIncome.map(income => <h3 key={Math.floor(Math.random() * 10000)}>{income}</h3>)
                    }
                </div>


            </div>

        </div>
    );
};

export default Info;