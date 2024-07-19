import styled, { keyframes } from "styled-components";
import ButtonGetStarted from "../ButtonGetStarted";
import NavHamburguer from "../NavHamburguer";
import { useEffect, useState } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';


const scaleButton = keyframes`
  to{
    transform: scale(1.08);
  }
  from{
    transform: scale(1);
  }

`;

const HeaderContainer = styled.header`
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-around;
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
    padding-right: 5rem;

    @media screen and (max-width: 1145px){
      padding-left: 3rem;
    }
`;

const HeaderLinks = styled.a`

      text-decoration: none;
      color: #161C2D;
      font-size: 15px;
      cursor: pointer;
      
      
      
      
      &:hover{
        color: #473BF0;
        
        animation: ${scaleButton} 1s infinite alternate;
        
      }

      @media screen and (max-width: 1145px){
        display: none;
      }
`;

const ButtonContainer = styled.div`
          
      &:hover{
        button{
            background-color: #231f58;
        }

        animation: ${scaleButton} 0.99s infinite alternate;
        
      }

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

  useEffect(() => {
    AOS.init();
  }, []);


    return (
      <HeaderContainer data-aos="fade-down" data-aos-delay="500">
        <MenuContainer>
          {openMenu ? <Logo  href="#" style={{fontSize: 25}}>Brainwave.io</Logo> : <></>}
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
  