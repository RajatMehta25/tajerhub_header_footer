import styled from "styled-components";
import { Link } from "react-router-dom";


export const NavbarContainer=styled.nav`
position: sticky;
top: 0;

`; 
export const NavbarWrap1=styled.div`
    display: flex;
    background-color: #055F8F;
    justify-content: center;
    flex-wrap: wrap;
  
    `;
    export const Navbaritem1=styled.div`
    color: #fff;
    font-size: 12px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    line-height:16px;
    letter-spacing: 0;
    padding: 10px;
    display: flex;
    align-items: center;
    @media screen and (max-width: 420px) {
    width:100vw;
    border:none;
    justify-content: center;
    text-align: center;
    }
    `;

    export const NavbarWrap2=styled.div`
    display: flex;
    background-color: #0288D1;
    justify-content: center;
    flex-wrap: wrap;
    align-items: center;
    
    `;
    export const Bidingicon=styled.img``;
    export const Switchtosocialicon=styled.img``;

    export const Navbaritem2=styled.div`
    color: #fff;
    font-size: 14px;
    font-weight: 400;
    font-family: "Roboto", sans-serif;
    line-height:16px;
    letter-spacing: 0;
    padding: 10px;
    align-items: center;
    display: flex;
    justify-content: center;
    `;
    export const Searchbar=styled.input`
    border-radius:20px;
    border:none;
    padding-inline-start:20px;
    height:6vh;
    width:30vw;
    &:focus{
        outline:none;
    }
    @media screen and (max-width: 820px) {
    width:90vw;
    gap:10px;
    }
     @media screen and (min-width: 1300px) {
    height:5.5vh;
    }
    `;
    export const Searchicon=styled.img`
    margin-left:-40px;
    margin-top:2px
    font-size: 12px;
    padding: 2px;
   
    `;