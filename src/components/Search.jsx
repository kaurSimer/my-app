import React from "react";
import styled from "styled-components";
import { CiSearch } from "react-icons/ci";

const Search = () => {

    return(
       <Container>
        <LeftSection>
        <Heading>Dashboard</Heading>
        <span style={{fontSize:'10px'}}>Payments Updates</span>
        </LeftSection>
        <CiSearch/>
       <SearchInput type="text" placeholder= "Search"/>

       
       </Container>
    );
}
 export default Search;
 const Container = styled.div`
 width:100%;
height:100%;
background-color:#242529;
display:flex;
align-items:center;
justify-content:center;`

const SearchInput = styled.input`
 height:10%;
margin-left:30%;

   width:35%;
  border-radius:10px;
  border:1px solid gray;
  padding:14px;
 background-color:#242529;


`
const Heading = styled.div`
color:white;
font-size:18px;
margin-bottom:2px;
`
const LeftSection = styled.div`
display:flex;
flex-direction:column;
justify-content:center;
align-items:center;
color:grey;
margin-left:20px;
padding:5px;


`
