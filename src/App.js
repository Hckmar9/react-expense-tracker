import React, { useState } from 'react'
import { Jumbotron, Container } from 'reactstrap'
import Logo from './logo.svg'
import Form from './components/Form'
import List from './components/List'

const ALL_EXPENSES = [

  {id: 1, name: 'Buy a book', amount: 400},
  {id: 2, name: 'Buy juice', amount: 30},
  {id: 3, name: 'Buy energy drink', amount: 15}
]

function App() {
  const [expenses, setExpenses] = useState(ALL_EXPENSES)

  return (
    <Container className='text-center'>
      <Jumbotron fluid>
        <h3 className='display-6'>
          Expense Tracker App in React
          <img src={Logo} style={{width: 50, height: 50}} alt='react-logo' />
        </h3>
        
        <div>
          <p>
            Total Expense:{' '}
            <span className='text-success'>
              ${' '}
              {expenses.reduce((accumulator, currentValue) => {
                return (accumulator += parseInt(currentValue.amount))
              }, 0)}
            </span>
          </p>
        </div>
        <Form />
        <List expenses={expenses} />
      </Jumbotron>
    </Container>
        
  )
}
export default App
