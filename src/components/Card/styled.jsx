import styled from 'styled-components'
import {themes} from '../../styles/themes.jsx'

export const CardContainer = styled.div`
  width: 400px;
  height: 210px;  
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  border-radius: 20px;
  background-color: #08519B;
  color: #FFF;
`
export const CardWrapper = styled.div`
  height: 100px;
  display: flex;
  flex-wrap: wrap;
`

export const NameWrapper = styled.div`
  display: flex;
  flex-direction: column;  
  margin: 20px 0 5px 15px;
  height: 20px;  
  width: 260px;  

`
export const DateWrapper = styled(NameWrapper)`
  width: 100px;
 
`

export const NumberWrapper = styled(NameWrapper)`
  width: 240px;
`

export const LogoWrapper = styled(NameWrapper)`
  width: 180px;
  align-items: flex-end;
`

export const ChipWrapper = styled(NameWrapper)`
  width: 180px;
`


export const Label = styled.label`  
  font-size: .8rem;
  font-weight: 400;
  margin-bottom: auto;
`

export const Content = styled.label`
  font-size: 1rem;
  font-family: 'Roboto' sans-serif;
  font-weight: 600;
`

export const Logo = styled.img`
  width: 100px;
  background-color: #FFF;
  background-attachment: fixed;
  background-size: cover;
  
`
