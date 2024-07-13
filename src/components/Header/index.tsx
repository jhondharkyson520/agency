import styled from "styled-components";
import ButtonGetStarted from "../ButtonGetStarted";

const HeaderContainer = styled.header`
    margin-top: 15px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1300px;
    padding-top: 10px;
    padding-bottom: 10px;

`;

const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 50px;

    a{
      text-decoration: none;
      color: #161C2D;
      font-size: 15px;
    }
`;

const Logo = styled.a`
    font-family: 'Roboto', sans-serif;
    font-weight: bolder;
    text-decoration: none;
    color: #161C2D;
`;

function Header() {
 
    return (
      <HeaderContainer>
        <MenuContainer>
          <Logo href="#" style={{fontSize: 25}}>Brainwave.io</Logo>
          <a href="#">Demos</a>
          <a href="#">Pages</a>
          <a href="#">Support</a>
          <a href="#">Contact</a>
        </MenuContainer>
        <div>
          <ButtonGetStarted/>
        </div>
      </HeaderContainer>
    )
  }
  
  export default Header;
  