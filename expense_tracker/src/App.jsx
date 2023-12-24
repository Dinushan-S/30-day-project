import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Header } from './components/Header'
import { Balance } from './components/Balance'
import { ExpenseBox } from './components/ExpenseBox'
import TransectionList from './components/TransectionList'
import AddTransection from './components/AddTransection'

import { GlobalProvider } from './context/GlobalState'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <GlobalProvider>
      <div>
        <Header header="Expense Tracker" />
        <div className='container'>
          <Balance />
          <ExpenseBox />
          <TransectionList />
          <AddTransection />
        </div>
      </div>
    </GlobalProvider>
  )
}

export default App
