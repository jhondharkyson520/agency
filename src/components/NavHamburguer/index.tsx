import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import styled from "styled-components";

const NavContainer = styled.nav`

    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin-right: 3rem;
    width: 1000px;
    gap: 1.6rem;
    z-index: 150;
    border-radius: 10px 0 10px 10px;
    padding: 2rem;
       
`;

const HeaderLinks = styled.a`

      text-decoration: none;
      color: #161C2D;
      font-size: 25px;
      cursor: pointer;

      
`;

const ButtonHamburguer = styled.button`
    
    background-color: transparent;
    border: none;
    display: none;

    @media screen and (max-width: 1145px) {
        display: flex;
        align-items: center;
        justify-content: center;
        
        &:hover{
            cursor: pointer;
            color: #5F92BB;
        }
    }
`;

const HamburguerBtIcon = styled(IoMenu)`
    size: 30;
    margin-right: 2rem;
`;


function NavHamburguer() {

  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = () => {
      setOpenMenu(!openMenu);
      
  };

  const closeMenu = () => {
      setOpenMenu(false);
  };
  
    return (
      <>
          {openMenu ? <></> :  
            <ButtonHamburguer onClick={toggleMenu}>
                <HamburguerBtIcon size={35}/>
            </ButtonHamburguer> 
          }
          {openMenu ? (
            <NavContainer>
                <HeaderLinks href="#" onClick={toggleMenu}>Demos</HeaderLinks>
                <HeaderLinks href="#" onClick={toggleMenu}>Pages</HeaderLinks>
                <HeaderLinks href="#" onClick={toggleMenu}>Support</HeaderLinks>
                <HeaderLinks href="#" onClick={toggleMenu}>Contact</HeaderLinks>
                <HeaderLinks onClick={closeMenu}>Close</HeaderLinks>
            </NavContainer>) : <></>
          }
      </>
    )
  }
  
  export default NavHamburguer;
  