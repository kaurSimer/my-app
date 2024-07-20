import React from "react";
import styled from 'styled-components';
import DashboardOptions from "./DashboardOptions";
import { MdDashboard } from "react-icons/md";
import { FcStatistics } from "react-icons/fc";
import { MdOutlinePayment } from "react-icons/md";
import { AiOutlineTransaction } from "react-icons/ai";
import { MdProductionQuantityLimits } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { CiLogout } from "react-icons/ci";
import { FaBoxOpen } from "react-icons/fa";



const Dashboard = () => {
const options =[
    {
        id:1,
        title:"Dashboard",
        icon:MdDashboard,
    },
    {
        id:2,
        title:"Statistics",
        icon:FcStatistics
        ,
    },
    {
        id:3,
        title:"Payments",
        icon:MdOutlinePayment,
    },
    {
        id:4,
        title:"Transaction",
        icon:AiOutlineTransaction,
    },
    {
        id:5,
        title:"Products",
        icon:MdProductionQuantityLimits,
    },
    {
        id:6,
        title:"Messages",
        icon:TiMessages,
    },
]

    return(
      <Container>
        <Logo>
            <LogIcon style={{color:'yellow'}}> <FaBoxOpen /></LogIcon>
            
       

          Zarss
        </Logo>
        <Profile>
        <Image src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdYsY1vPvO0SU9rSHw4V-mmN37OtOXM8bfUA&s" alt="logo"/>       
        <h5 style={{ fontSize: '10px'}}>Welcome Back,</h5>  
        <h4 style={{marginTop:"-10px", fontSize: '14px'}}>Merry Anna</h4>
        </Profile>
       <List>
        {
            options.map((option) =>(
                <DashboardOptions key={option.id}
option={option}    />        ))
        }
       </List>
       <Log>
<LogIcon>
     <CiLogout />
     </LogIcon>
      
       <LogHeading> 
        Log Out
        </LogHeading>
       
       </Log>
      </Container>
    );
}
 export default Dashboard;

const Container = styled.div`

width:100%;
height:100%;
background-color:#242529;

`
const List = styled.div`


`
const Logo = styled.div`
font-size:25px;
font-weight:bold;
color:white;
display:flex;
align-items:center;
justify-content:center;
`
const Log = styled.div`

color:grey;
display:flex;
justify-content:space-evenly;
align-items:center;
margin-top:20%;
&:hover{
background-color: #36383e;
color:#ffffff !important;
border-left: 2px solid #7af0a9 ;


}
`
const LogHeading = styled.div`
font-size:12px;
margin-left:-40px;

`
const LogIcon = styled.div`
margin-right:7px;
justify-content:center;
align-items:center;
display:flex;

`
const Profile = styled.div`
color:white;
display:flex;
margin-top:20px;
align-items:center;
justify-content:center;
flex-direction:column;

`
const Image = styled.img`
width:100px;
height:100px;
border-radius:50%;`
