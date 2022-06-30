import { CardContainer, DatePicker, Content, Wrapper, Label, DateWrapper } from "./styled"

export function Card(props){
  return(
    <CardContainer>
        <Content>{props.number}</Content>      
      <Wrapper>
        <Label>Nome</Label>
        <Content>{props.name}</Content>   
      </Wrapper>  

      <DateWrapper>
        <Label>Data</Label>
        <Content>{props.data}</Content>   
      </DateWrapper>              
    </CardContainer>
    
  )
}