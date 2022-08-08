import React from 'react'
import ReactDOM from 'react-dom'

import { useId, useState} from 'react'


import { Card } from './components/Card';
import { Input, Label } from './components/Form/Input/styled'
import { Container } from './components/Container/styled';
import { Form, OptionsDivs, FormWrapper, BottomWrapper } from './components/Form/FormWrapper/styled'


import visa from './images/visa.png'
import master from './images/mastercard.jpg'


import './App.css';

function App() {
  const id = useId()  
  const [isVisa, setIsVisa] = useState(false)
  const [isMaster, setIsMaster] = useState(false)
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [number, setNumber] = useState('')
  const [brandImage, setBrandImage] = useState([])


  function creditCardValidation(e){    
    const visaReg = /^(?:4[0-9]{12}(?:[0-9]{3})?)$/
    const masterReg = /^(?:5[1-5][0-9]{14})$/
    
    setNumber((e.target.value).toUpperCase())   
    

    if(visaReg.test(number) === true) {
      setIsVisa(true)
      setBrandImage(visa)
    }
    if(masterReg.test(number) === true){
      setIsMaster(true)
      setBrandImage(master)
    }
    
    console.log('img',brandImage)
    console.log('e',e)
    console.log(`NUMERO${number}`)
    console.log('VISA', isVisa)
    console.log('MASTER',isMaster)
  }

  function handleDatePiker(e){
    setDate(e.target.value)
  }


  return (
    <>
    <Container>
      <h1>Credit Card - UI</h1>
      <h3>Project using React and Styled-Components</h3>
      <h3>{isVisa}</h3>
      <Card 
        name={name}
        number={number} 
        date={date}
        logo={brandImage} />  

        <Form>
          <FormWrapper>
          
            <Label htmlFor={id}>Numero do cartao</Label>
            <Input 
              id={id} 
              maxLength={16} 
              onInput = {(e) => creditCardValidation(e)}
            />
            <Label htmlFor={id}>Nome no cartao</Label>
            <Input id={id} maxLength={20} onInput={e => setName(e.target.value.toUpperCase())} />                                         
          </FormWrapper>

          <OptionsDivs>
            <BottomWrapper>
              <Label htmlFor={id}>Data expirção</Label>
              <Input id={id} maxLength={4} onInput={e => setDate(e.target.value)} />              
            </BottomWrapper>            
            <BottomWrapper>
              <Label htmlFor={id}>CVV</Label>
              <Input id={id} maxLength={3}></Input>
            </BottomWrapper>

          </OptionsDivs> 
                         
        </Form>  

    </Container>
    </>
  );
}

export default App;
