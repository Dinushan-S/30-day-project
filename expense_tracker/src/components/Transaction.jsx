import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { GlobalContext } from '../context/GlobalState';

export const Transection = ({ transactions }) => {
    const sign = transactions.amount < 0 ? '-' : '+';
    const { deleteTransaction } = useContext(GlobalContext);
    return (
        <li className={transactions.amount < 0 ? "minus" : "plus"}>
            {transactions.text}
            <span>{sign}${Math.abs(transactions.amount)}
            </span>
            <button className='delete-btn' onClick={() => deleteTransaction(transactions.id)}>x</button>
        </li>
    )
}

Transection.propTypes = {
    transactions: PropTypes.shape({
        text: PropTypes.string.isRequired,
        amount: PropTypes.number.isRequired,

    }).isRequired,
}