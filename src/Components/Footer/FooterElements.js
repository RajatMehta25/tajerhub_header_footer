import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #055F8F;
`;
export const FooterWrap = styled.div`
  display: flex;
  justify-content: center;
  padding: 48px 0;
  flex-wrap: wrap;

`;
export const FooterLinksContainer = styled.div`
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;


  @media screen and (max-width: 820px) {
    padding-top: 32px;
  

  }
`;
export const FooterLinksWrapper = styled.div`
  display: flex;
  /* justify-content:space-between; */
  flex-wrap: wrap;
  /* gap:150px; */
  
/* @media screen and (max-width: 1170px) {
    
    gap:80px;
  } 
  @media screen and (max-width: 820px) {
    flex-direction: column;
    gap:10px;
  } */
 
`;
export const FooterLinksItems = styled.div`
  display: flex;
  flex-direction: column;
  
  margin: 16px;
  text-align: left;
  
  box-sizing: border-box;
  color: #fff;

  @media screen and (max-width: 820px) {
    
    text-align: center;

  }

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterLinksItems1 = styled.div`
  display: flex;
  
  flex-direction: column;
  margin: 16px;
  text-align: left;
  
  box-sizing: border-box;
  color: #fff;
  

  @media screen and (max-width: 820px) {
    
    text-align: center;
    justify-content: center;
    align-items: center;


  }

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;
export const FooterTajerhubIcon=styled.div`



`;
export const FooterLinkTitle = styled.div`
font-family:Roboto;
font-weight:500;
color: #fff;
font-size: 14px;
margin-bottom: 16px;
letter-spacing: 0;
line-height:20px;

`;
export const FooterLink = styled(Link)`
  color: #fff;
  font-family:Lato;
  font-weight:300;
  text-decoration: none;
  margin-bottom: 0%.5rem;
  font-size: 14px;
  letter-spacing: 0;
line-height:26px;
  &:hover {
    color: #01bf71;
    transition: 0ms.3s ease-out;
  }
`;
export const FooterLink1 = styled(Link)`
  color: #ffffff;
  font-family:Roboto;
    font-weight:400;
    text-decoration: none;
  margin-bottom: 0%.5rem;
  font-size: 14px;
  letter-spacing: 0;
line-height:26px;
  &:hover {
    color: #01bf71;
    transition: 0ms.3s ease-out;
  }
`;
export const FooterLink2 = styled(Link)`
  color: #fff;
  font-family:Lato;
  font-weight:300;
  text-decoration: none;
  margin-top: 10px;
  margin-bottom: 0%.5rem;
  font-size: 13px;
  letter-spacing: 0;
line-height:26px;
display: flex;
align-items: center;
  &:hover {
    color: #01bf71;
    transition: 0ms.3s ease-out;
  }
`;

export const SocialMedia = styled.section`
  
  width: 100%;
  
  
`;

export const SocialMediaWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  
  margin: 0 auto 40px auto;
  
  border-top: 1px solid rgba(205, 205, 205, 0.2);

  border-bottom:1px solid rgba(205, 205, 205, 0.2);



padding: 50px 0;

  @media screen and (max-width: 820px) {
    flex-direction: column;
  }
`;

export const SocialLogo = styled(Link)`
  color: #fff;
  display: flex;
  
  cursor: pointer;
  text-decoration: none;
  font-size: 16px;
 
  align-items: center;
 
  font-weight: 400;
  font-family:Roboto;
  letter-spacing: 0;
line-height:20px;
text-transform: uppercase;
`;
export const AppstoreIcons=styled.div`
border-right: 1px solid rgba(205, 205, 205, 0.2);
padding: 10px;
text-align: center;
@media screen and (max-width: 820px) {
    border: none;
   
  }
  @media screen and (max-width: 420px) {
    text-align: center;
  }
 
`;
export const AndroidstoreImg=styled.img`


`;
export const ApplestoreImg=styled.img``;

export const WebsiteRights = styled.small`
  color: #fff;
  padding-bottom: 16px;
    font-size: 12px;
    font-family:Roboto;
    font-weight:400;
    letter-spacing: 0;
line-height:10px;
display: flex;
text-align: center;
justify-content: center;



`;

export const SocialIconLink = styled.a`
  color: #fff;
  font-size: 24px;
`;

export const SocialIcons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 240px;
`;

export const Text=styled.span`
padding-left:15px;
`;
export const Icon1=styled.img``;