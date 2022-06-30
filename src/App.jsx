import { useId, useState} from 'react'

import { Card } from './components/Card';
import { Input } from './components/Form/Input/styled'
import { Container } from './components/Container/styled';
import { FormWrapper, OptionsDivs } from './components/Form/FormWrapper/styled'

import { Wrapper } from './components/Card/styled';

import './App.css';

function App() {
  const id = useId()
  const [count, setCount] = useState(0)
  const [name, setName] = useState('')
  const [month, setMonth] = useState(['Jan, Fev, Mar, Abr, Mai, Jun, Jul, Ago, Set, Out, Nov, Dez'])
  const [year, setYear] = useState(['2021, 2022, 2023, 2024'])
  const [number, setNumber] = useState('')

  function handleYearPicker(e){
    setYear(e.target.value)
    console.log(year)
  }

  function handleMonthPicker(e){
    setMonth(e.target.value)
    console.log(year)
  }


  return (
    <Container>
      <Card name={name} number={number}/>  

        <FormWrapper>
          <label htmlFor={id}>Nome no cartao</label>
          <Input id={id} onInput={e => setName(e.target.value.toUpperCase())} />          

          <label htmlFor={id}>Numero do cartao</label>
          <Input id={id} onInput={e => setNumber(e.target.value.toUpperCase())} />  

          <OptionsDivs>
            <label htmlFor={id}>Ano expiração</label>
            <select
              defaultValue={year[0]}  
              onChange={handleYearPicker}
            >
              <option id={id}></option>
            </select>
            <option id={id}></option>

            <label htmlFor={id}>Mes</label>
            <option id={id}>Teste</option>

            <label htmlFor={id}>CVV</label>
            <Input id={id}></Input>
          </OptionsDivs> 
                         
        </FormWrapper>  

    </Container>
  );
}

export default App;
