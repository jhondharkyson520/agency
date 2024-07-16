import styled from "styled-components";

const ButtonContainer = styled.button`
    font-size: 17px;
    font-weight: bold;
    width: 209px;
    height: 50px;
    background-color: #473BF0;
    color: #FFFFFF;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    z-index: 100;
`;

function ButtonGetStarted() {
 
    return (
      <ButtonContainer>
        Get started a project
      </ButtonContainer>
    )
  }
  
  export default ButtonGetStarted;
  