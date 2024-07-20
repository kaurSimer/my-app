import React from "react";
import styled from "styled-components";
import LOData from "./LOData";
const LastOrders = () => {
const LastOrdersData =
[ {
    id:1,
img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSAtDFxX2Rehk2Jlnh-ALXcZqTQ2npj0kMNdQ&s",
name:"Ann",
amnt:"$7823",
des:"pending",
date:"",
},
{
    id:2,
img:"https://cdn.prod.website-files.com/650865454c2393ac25711ff2/650865454c2393ac257122e2_facetune-linkedin-img2.jpg",
name:"Faith",
amnt:"$8327",
des:"completed",
date:"",
},
{
    id:3,
img:"https://images.squarespace-cdn.com/content/v1/5fec84c2a997ad673607590f/6d46f8a1-f2a5-4746-b167-d607c48040e6/Don+Evans+Photography+in+Greensboro+NC+Professional+Headshot+of+business+owner+wearing+a+blue+suit+jacket+and+white+shirt+during+his+onsite+professional+headshot+session.jpg",
name:"Tiffany",
amnt:"$6573",
des:"completed",
date:"",
},
]
    return(
     
        <Container>
          <UpperContainer>
<UpperHeading>User in The last Week</UpperHeading>
<StatHeading>
    <Number>+3,2%</Number>
    <Des>See Statistics for all time</Des>
</StatHeading>
          </UpperContainer>

          <LowerContainer>
<LowerHeading>
    Last Orders
</LowerHeading>
<LowerHead>Data Updates Every 3 Hours</LowerHead>
<Orders>View All Orders</Orders>
</LowerContainer>
<Data>
{LastOrdersData.map((stat)=> (
    <LOData key={stat.id} stat={stat}/>
))}
</Data>

        
        </Container>
    );
}
 export default LastOrders;

 const Container = styled.div`
 width:100%;
height:100%;
`
const UpperContainer = styled.div`
color:white;

`
const UpperHeading = styled.div`
margin-left:10px;`
const StatHeading = styled.div`
display:flex;
color:grey;
justify-content:space-between;
align-items:center;
margin:10px;`
const Number = styled.div`
font-size:22px;
font-weight:bold;
`
const Des = styled.div`font-size:12px;`
const LowerContainer = styled.div`
color:white;
display:flex;
justify-content:space-between;
align-items:center;

`
const LowerHeading = styled.div`
margin-left:10px;
`
const LowerHead = styled.div`color:grey;
border:1px solid grey;
border-radius:10px;
padding:8px;
font-size:12px;
margin-left:40%;
`
const Orders = styled.div`
color:grey;
margin-right:10px;`

const Data = styled.div`
width:90%;
display:flex;
margin-top:10px;
flex-direction:column;
justify-content:center;
align-items:center;
align-self:center;
`
