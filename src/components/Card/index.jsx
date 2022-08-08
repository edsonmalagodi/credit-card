import React, { useState } from 'react'
import ReactDOM from 'react-dom'

import {FcSimCardChip} from 'react-icons/fc'

import { CardContainer, DatePicker, Content, NameWrapper, Label,ChipWrapper, DateWrapper, NumberWrapper, LogoWrapper, Logo, CardWrapper } from "./styled"

export function Card(props){

  return(
    <CardContainer>    
        <ChipWrapper>
          <Label><FcSimCardChip style={{fontSize: '2.5rem'}}/></Label>                    
        </ChipWrapper>

        <LogoWrapper>
          <Logo src={props.logo}/>         
        </LogoWrapper>

        <NumberWrapper>
          <Label>NUMERO DO CARTÃO</Label>
          <Content>{props.number}</Content>      
        </NumberWrapper>

        <NameWrapper>
          <Label style={{paddingTop: '30px;'}}>Nome</Label>
          <Content>{props.name}</Content>   
        </NameWrapper>  

        <DateWrapper>
          <Label>Valido até</Label>
          <div>
            <Content>{props.date} / </Content>                
          </div>
        </DateWrapper>              

    </CardContainer>
    
  )
}