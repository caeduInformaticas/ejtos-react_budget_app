
import React, { useContext } from 'react';
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
    const getValue = () => {
        return currencies.findIndex(c => c.symbol === currency.symbol)
    }

    return (
        <div className='alert alert-secondary'>
            <div className="input-group-prepend">
                <label className="input-group-text" htmlFor="inputCurrency">Currency {currency.symbol} {currency.name}</label>
            </div>
            <select value={getValue()} className="custom-select" id="inputCurrency" onChange={updateCurrency}>
                {currencies.map(({symbol, name}, index) => <option value={index} key={index} >{symbol} {name}</option>)}
            </select>
        </div>
    )
}

export default Currency