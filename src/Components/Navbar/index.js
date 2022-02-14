import React from 'react';
import { Icon1, Text } from '../Footer/FooterElements';
import { NavbarContainer,NavbarWrap1 ,Navbaritem1, NavbarWrap2,Bidingicon,Navbaritem2,Searchbar,Searchicon} from './NavbarElements';
import { IoEarth,IoNotifications } from "react-icons/io5";
import { BsHeartFill,BsHandbag,BsChevronDown } from "react-icons/bs";
import { HiLocationMarker } from "react-icons/hi";
// import SearchBar from "material-ui-search-bar";
import { GoSearch } from "react-icons/go";
import { CgProfile } from "react-icons/cg";



const Navbar = () => {
  return (<>
  <NavbarContainer>
<NavbarWrap1>
<Navbaritem1 style={{flex:0.8}}><HiLocationMarker style={{margin:"2px"}}/> location details<BsChevronDown/> </Navbaritem1>
<Navbaritem1>missing icon switch to social</Navbaritem1>
<Navbaritem1 ><IoEarth style={{margin:"2px"}}/>Language<BsChevronDown/></Navbaritem1>
<Navbaritem1><BsHeartFill style={{margin:"2px"}}/>Wishlist</Navbaritem1>
<Navbaritem1><IoNotifications style={{margin:"2px"}}/> Notification</Navbaritem1>
</NavbarWrap1>
<NavbarWrap2>
    <Icon1 src={require("../../Images/Icon1.svg").default}/>
    <Bidingicon src={require("../../Images/Bidingicon.svg").default} style={{marginLeft:"20px"}}/>
   {/* <SearchBar/> */}
<Navbaritem2 style={{flex:0.8}}><Searchbar placeholder="Search products, brands and more"/><Searchicon src={require("../../Images/Searchicon.svg").default}/><GoSearch style={{zIndex:1,fontSize:"20px",marginLeft:"-30px"}}/></Navbaritem2>
<Navbaritem2><CgProfile style={{fontSize:"20px"}}/><Text>My Account</Text><BsChevronDown/></Navbaritem2>
<Navbaritem2><BsHandbag style={{fontSize:"20px"}}/></Navbaritem2>
    </NavbarWrap2>

  </NavbarContainer>
  
  </>);
};

export default Navbar;
