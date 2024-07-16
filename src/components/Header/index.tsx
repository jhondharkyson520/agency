import styled from "styled-components";
import ButtonGetStarted from "../ButtonGetStarted";
import NavHamburguer from "../NavHamburguer";
import { useState } from "react";

const HeaderContainer = styled.header`
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding-top: 10px;
    padding-bottom: 10px;
    z-index: 99;

    @media screen and (max-width: 1145px){
      
      justify-content: space-between;
      align-items: baseline;
      padding-bottom: 0px;
      
      
    }

`;

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;
    padding-left: 10rem;

    @media screen and (max-width: 1145px){
      padding-left: 3rem;
    }
`;

const HeaderLinks = styled.a`

      text-decoration: none;
      color: #161C2D;
      font-size: 15px;
      cursor: pointer;

      @media screen and (max-width: 1145px){
        display: none;
      }
`;

const ButtonContainer = styled.div`
    padding-right: 10rem;

    @media screen and (max-width: 1145px){
        display: none;
    }
`;

const Logo = styled.a`
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
    text-decoration: none;
    color: #161C2D;
    cursor: pointer;
    
    
`;

const ContainerButtonHamburguer = styled.div`
    background-color: transparent;
    display: none;

    @media screen and (max-width: 1145px){
        display: flex;

    }
`;

function Header() {

  const [openMenu, setOpenMenu] = useState(true);
  const toggleMenu = () => {
      setOpenMenu(!openMenu);
      
  };


    return (
      <HeaderContainer>
        <MenuContainer>
          {openMenu ? <Logo href="#" style={{fontSize: 25}}>Brainwave.io</Logo> : <></>}
          <HeaderLinks href="#">Demos</HeaderLinks>
          <HeaderLinks href="#">Pages</HeaderLinks>
          <HeaderLinks href="#">Support</HeaderLinks>
          <HeaderLinks href="#">Contact</HeaderLinks>
        </MenuContainer>
        <ButtonContainer>
          <ButtonGetStarted/>
        </ButtonContainer>
        
        <ContainerButtonHamburguer onClick={toggleMenu}>
          <NavHamburguer/>
        </ContainerButtonHamburguer>

      </HeaderContainer>
    )
  }
  
  export default Header;
  