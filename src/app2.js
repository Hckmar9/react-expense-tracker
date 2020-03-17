import React, { useState } from 'react'
import { Button, Container, Input } from 'reactstrap'

function App() {
  const [count, setCount] = useState(0)
  const [expense, setExpense] = useState("")

  const handleInputChange = (event, func) => {
    func(event.target.value)
  }
  
   return (
    <Container style={{ marginTop: 20 }}>
       <p className='text-primary'>You clicked {count} times.</p>
       <hr/>
       <Button onClick={() => setCount(count + 1)} color='success'>
         Increase the count
       </Button>
       <hr />
       <label>Expense:</label>
       <Input value={ expense } onChange={ event => handleInputChange(event, setExpense) } />
       <br />
       <label>Amount$:</label>
       <Input type="number" step=".01" />
       <br />
       <Button onClick={() => setCount()} color="primary">Save expense</Button>
   
    </Container>
    
)
}
export default App
