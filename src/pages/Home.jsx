import React from "react";
import styled from 'styled-components';
import Dashboard from "../components/Dashboard";
import Search from "../components/Search";
import Stats from "../components/Stats";
import LastOrders from "../components/LastOrders";
import MonthlyProfits from "../components/MonthlyProfits";
const Home = () => {
     return (
      <Container>
         {/*Dashboard at left  */}
        <VerticalNav>
        <Dashboard/>
        </VerticalNav>
{/* middle */}
        <Middle>

<SearchTop>
    <Search/>
</SearchTop>


<Statistics>
    <Stats/>
</Statistics>

<BottomOrders>
    <LastOrders/>
</BottomOrders>
</Middle>
{/* right section */}
<RightSection>
    <MonthlyProfits/>
</RightSection>
      </Container>)}

      export default Home;   
      const Container = styled.div`
      height: 100%;
      width: 100%;

      display:flex;
      `
const VerticalNav = styled.div`
background-color:red;
height: 100vh;
   width:18vw;
   border-right:1px solid grey;
`
const SearchTop = styled.div`
width:59vw;
height:15vh; 

`
const Statistics = styled.div`
height:31vh;
width:59vw;



`
const RightSection = styled.div`
height:100vh;
width:30vw;
background-color:orange;

`
const Middle = styled.div`
flex-direction:column;
display:flex;
`
const BottomOrders = styled.div`
background-color:#242529;
height:54vh;
width:59vw;
`