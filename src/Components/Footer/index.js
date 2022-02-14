import React from 'react';
import {

  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { GoLocation } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import { ImMobile } from "react-icons/im";

import {
  FooterContainer,
  FooterWrap,
  SocialIcons,
  SocialIconLink,
  SocialLogo,
  WebsiteRights,
  FooterLinksContainer,
  SocialMediaWrap,
  FooterLinksWrapper,
  SocialMedia,
  FooterLinksItems,
  FooterLinkTitle,
  FooterLink,
  FooterLink1,
  FooterTajerhubIcon,
  FooterLink2,
  FooterLinksItems1,
  AppstoreIcons,
  AndroidstoreImg,
  ApplestoreImg,
  Text,
  Icon1
} from "./FooterElements";
const Footer = () => {
  return (
  <>
  

  <FooterContainer>
        <FooterWrap>
          <FooterLinksContainer>
            <FooterLinksWrapper >
              
              <FooterLinksItems1  >
                <FooterTajerhubIcon> <Icon1 src={require("../../Images/Icon1.svg").default}/></FooterTajerhubIcon>
{/* renamed footerlink to footerlink2 for CSS CHANGE */}
                <FooterLink2 to="/"><GoLocation style={{fontSize:20}}/>  <Text>GOKHAN SOk. No. 106934 SINCAN TURKEY</Text></FooterLink2>
                <FooterLink2 to="/"> <ImMobile style={{fontSize:20}}/><Text>  +8801955544925</Text></FooterLink2>
                <FooterLink2 to="/"> <HiOutlineMail style={{fontSize:20}}/> <Text>support@zoomrid.com</Text></FooterLink2>
              
              </FooterLinksItems1>
              <FooterLinksItems>
                <FooterLinkTitle>INFORMATION</FooterLinkTitle>
{/* renamed Footerlink to Footerlink1 for CSS CHANGE */}
                <FooterLink1 to="/">Terms & Conditions</FooterLink1>
                <FooterLink1 to="/">Site Map</FooterLink1>
                <FooterLink1 to="/">Privacy policy</FooterLink1>
                <FooterLink1 to="/">Return and Refund Policy</FooterLink1>
                <FooterLink1 to="/">FAQ's</FooterLink1>
              </FooterLinksItems>
            {/* </FooterLinksWrapper> */}
            {/* <FooterLinksWrapper> */}
              <FooterLinksItems>
                <FooterLinkTitle>CUSTOMER SERVICE</FooterLinkTitle>

                <FooterLink to="/">Cancellation and Returns</FooterLink>
                <FooterLink to="/">Payments</FooterLink>
                <FooterLink to="/">About Us</FooterLink>
                <FooterLink to="/">Shipping</FooterLink>
              </FooterLinksItems>
              <FooterLinksItems>
                <FooterLinkTitle>MY ACCOUNT</FooterLinkTitle>

                <FooterLink to="/">My Account</FooterLink>
                <FooterLink to="/">Order History</FooterLink>
                <FooterLink to="/">Wishlist</FooterLink>
                <FooterLink to="/">Newsletter</FooterLink>
                <FooterLink to="/">Track Order</FooterLink>
              </FooterLinksItems>
            </FooterLinksWrapper>
          </FooterLinksContainer>
         
        </FooterWrap>
        <SocialMedia >
            <SocialMediaWrap  >
              <SocialLogo to="/" >
                DOWNLOAD THE JAICHAI APP TODAY
              </SocialLogo>
              <AppstoreIcons>
          <ApplestoreImg src={require("../../Images/play_store.svg").default} style={{padding:"20px"}} />
          <AndroidstoreImg src={require("../../Images/app_store.svg").default} style={{padding:"20px"}}/>
                </AppstoreIcons>
             
              <SocialLogo to="/" style={{padding:"15px"}} >
                CONNECT WITH US
              </SocialLogo>
              <SocialIcons >
                <SocialIconLink href="!#" target="_blank" aria-label="Facebook">
                  <FaFacebook />
                </SocialIconLink>
                <SocialIconLink href="!#" target="_blank" aria-label="Twitter">
                  <FaTwitter />
                </SocialIconLink>
                <SocialIconLink href="!#" target="_blank" aria-label="Pinterest">
                  <FaPinterest />
                </SocialIconLink>
                <SocialIconLink
                  href="!#"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FaInstagram />
                </SocialIconLink>
                <SocialIconLink href="!#" target="_blank" aria-label="Youtube">
                  <FaYoutube />
                </SocialIconLink>
               
              </SocialIcons>
            </SocialMediaWrap>
            <WebsiteRights>
                &#169; {new Date().getFullYear()} Zoomrid <br/><br/> Please read our Privacy Policy,Terms & Conditions,About Our Ads,Legal Notices
              </WebsiteRights>
          </SocialMedia>
      </FooterContainer>

  
  </>);
};

export default Footer;
