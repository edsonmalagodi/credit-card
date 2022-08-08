import styled from "styled-components";

export const Form = styled.div` 
  width: 500px;
  height: 280px;
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  border-radius: 10px;
  background-color: #FFF;
  display: flex;

  box-shadow: 10px 10px 10px 10px #e2dfdf;
`

export const FormWrapper = styled.div`
  margin: 40px 35px;
  display: flex;
  flex-direction: column;
  width: 500px;  

`

export const BottomWrapper = styled(FormWrapper)`
  width: 110px;
  margin-top: 10px;
`

export const OptionsDivs = styled.div`
  display: flex;
`