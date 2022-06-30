import styled from 'styled-components'

export const CardContainer = styled.div`
  width: 400px;
  height: 160px;
  margin-top: 100px;
  display: grid;  
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  border-radius: 20px;
  background-color: antiquewhite;
`
export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;  
  margin-left: 10px;
  height: 40px;
  background-color: red;
  width: 260px;
  margin-top: 100px;
`
export const DateWrapper = styled(Wrapper)`
  width: 100px;
`

export const Label = styled.label`  
  font-size: .7rem;
  font-weight: 500;
  margin-bottom: auto;
`

export const Content = styled.label`
  font-size: 1rem;
  font-family: 'Roboto' sans-serif;
  font-weight: 600;
`

