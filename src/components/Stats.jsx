import React from "react";
import styled from "styled-components";
import StatsEmp from "./StatsEmp";
import { CiDollar } from "react-icons/ci";
import { FaPercent } from "react-icons/fa";
const Stats = () => {
const empStats=[{
  id:1,
  icon:CiDollar,
  title:"Balance",
number:'+23%',
value:'$56,789',
graph:'',
},
{
  id:2,
  icon:FaPercent,
  title:"Sales",
number:'+12%',
value:'$56,789',
graph:'',
},
{
  id:3,
  icon:'xx',
  title:"Upgrade",
number:'+17%',
value:'$56,789',
graph:'',
},

]
    return(
      <Container>
      { empStats.map((stat)=>(
<StatsEmp key={stat.id} stat={stat}/>
      )) }
      </Container>
    );
}
 export default Stats;
 const Container = styled.div`
 width:100%;
height:100%;
display:flex;
justify-content:space-evenly;
align-items:center;
background-color:#242529;`

 