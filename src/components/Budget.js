
import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, dispatch, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);


    const handleBudgetChange = (event) => {
        const value = event.target.value
        console.log(value)
        if (value > 20000) {
            alert('The value connot exceded 20000')
        } else if (value < totalExpenses) {
            alert('The value connot exceded the spent')
        }
        else {
            setNewBudget(value);
            dispatch({
                type: 'SET_BUDGET',
                payload: newBudget,
            });
        }
    }

    

    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency.symbol}{budget}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;