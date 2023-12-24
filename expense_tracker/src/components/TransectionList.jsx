import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';
import { Transection } from './Transaction';


function TransectionList() {
  const { transactions } = useContext(GlobalContext);
  return (
    <div>
      <h3>History</h3>
      <ul id='list' className='list'>
        {transactions.map(transactions => (
          <Transection key={transactions.id} transactions={transactions} />
        ))}

      </ul>
    </div>
  )
}

export default TransectionList