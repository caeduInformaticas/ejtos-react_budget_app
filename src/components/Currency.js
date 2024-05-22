
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {currency, currencies, dispatch} = useContext(AppContext)
    const updateCurrency = (event) => {
        const value = event.target.value
        console.log(value)
        const selected = currencies[value]
        dispatch({
            type: 'CHG_CURRENCY',
            payload: selected,
        });
    }
    return (
        <div className='alert alert-secondary'>
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputCurrency">Currency {currency.symbol} {currency.name}</label>
            </div>
            <select className="custom-select" id="inputCurrency" onChange={updateCurrency}>
                {currencies.map(({symbol, name}, index) => <option value={index} >{symbol} {name}</option>)}
            </select>
        </div>
    )
}

export default Currency