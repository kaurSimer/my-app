import React from 'react';
import styled from 'styled-components';
const DashboardOptions = ({option}) => {
    const Icon = option.icon
    return(
     <Container>
        <InnerContainer>
        <Icons>
       {Icon && < Icon />} 
       </Icons>
       <Title>
        {option.title}
        </Title>
        </InnerContainer>
        </Container>
    )
}
   export default DashboardOptions
const Container = styled.div`
height:10%;
width:100%;
justify-content:center;
display:flex;
align-items:center;
margin:5px;

border-radius:5px;


`
const InnerContainer= styled.div`
color:gray;
width:100%;
height:100%;
display:flex;
padding:9px;
justify-content:center;
&:hover{
background-color: #36383e;
color:#ffffff !important;
border-left: 2px solid #7af0a9 ;


}
`
const Icons = styled.div`
margin-right:15px;
font-size:14px;
width:10%;

justify-content:center;
align-items:center;
`

const Title = styled.div`
font-size:14px;

width:100%;
justify-content:center;
align-items:center;
`
