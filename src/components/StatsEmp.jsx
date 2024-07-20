import React from 'react';
import styled from 'styled-components';
const StatsEmp = ({stat}) => {
    const Icon = stat.icon
    return(
        <Container >
<ContentContainer>
    <IconContainer>  {Icon && <Icon style={{fontSize:14, color:"white", backgroundColor:"gray"}}/>}</IconContainer>
<Title>  {stat.title}</Title>
<Number> {stat.number}</Number>
</ContentContainer>
  <Value> {stat.value}</Value>
           <Graph>    {stat.graph}</Graph>
        
        </Container>
    )
}
   export default StatsEmp
   const Container = styled.div`
   margin-top:-50px;
   display:flex;
   padding:20px;
   justify-content:center;
   align-items:center;
   border-radius:20px;
   background-color:gray;
   height:80px;
   width:150px;
flex-wrap:wrap;
   `
   const ContentContainer = styled.div`
   display:flex;
     justify-content:space-evenly;
   align-items:center;
   `
   const IconContainer = styled.div`
   
  `
   const Title = styled.div``
   const Value = styled.div`
flex-basis:100%;
   color:white;
   font-size:20px;
   font-weight:bold;
  
   `
   const Number = styled.div`
   background-color:green;`
   const Graph = styled.div``
