import React from "react";
import styled from "styled-components"; 

const LOData =({stat}) =>{
return(
    <Container>
        <Image src={stat.img} alt="image" />
    <Name>  {stat.name}</Name>
  <Amount>   {stat.amnt}</Amount>
 <Des>{stat.des}</Des>
 <Date>{ stat.date}</Date>   

    </Container>
);
}

export default LOData;

const Container = styled.div`
width:100%;
margin:5px;
display:flex;
justify-content:space-between;
align-items:center;
color:white;
align-self:center;
`
const Image = styled.img`
width:50px;
height:50px;
border-radius:10px;

`
const Name = styled.div``
const Des = styled.div``
const Amount = styled.div``
const Date = styled.div``