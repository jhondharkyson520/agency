import styled from "styled-components";
import ButtonGetStarted from "../ButtonGetStarted";

import { FaFacebookSquare, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

import imgLine from '../../assets/Footer/imgLine.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const FooterContainer = styled.footer`
    background-color: #161C2D;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 5rem;
    padding-bottom: 6rem;
    overflow-x: hidden;

`;

const NextProjectContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    width: 1110px;
    align-items: center;
    justify-content: space-between;

    button{
      &:hover{
        background-color: #3f6d99;
      }
    }

    @media screen and (max-width: 1150px) {
        flex-direction: column;
        justify-content: center;
        text-align: center;
        width: 600px;
        
        button{
          margin-top: 2rem;
        }
    }

    
`;

const TitleContainer = styled.div`
    width: 589px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1{
      color: #FFFFFF;
      font-size: 32px;
      font-weight: bold;
    }

    p{
      color: #FFFFFF;
      font-size: 19px;
    }

    @media screen and (max-width: 660px) {
      width: 250px;
      h1{
        font-size: 25px;
      }

      p{
        font-size: 19px;
      }
    }
`;

const InformationsContainer = styled.div`
    display: flex;
    width: 1110px;
    justify-content: space-between;

    @media screen and (max-width: 1150px) {
      width: 100%;
      text-align: center;
      align-items: center;
      flex-direction: column;
      justify-content: center;
      gap: 2rem;
        
    }

    @media screen and (max-width: 660px) {
      width: 100%;
      text-align: center;
      align-items: center;
      justify-content: center;
      gap: 2rem;
    }
   
  
`;

const ContainerBrainwaveIo = styled.div`
    width: 274px;
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1{
        color: #FFFFFF;
        font-size: 28px;
        font-family: 'Roboto', sans-serif;
        font-weight: bold;
    }

    p{
      color: #FFFFFF;
      font-size: 15px;
    }

    div{
        display: flex;
        gap: 2rem; 
    }

    @media screen and (max-width: 660px) {
      width: 200px;
    }
`;

const ContainerCompany = styled.div`
    width: 144px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2{
      color: #999999;
      font-size: 15px;
    }
    a{
      color: #FFFFFF;
      font-size: 17px;
      text-decoration: none;
    }
`;

const ContainerProduct = styled.div`
    width: 125px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2{
      color: #999999;
      font-size: 15px;
    }
    a{
      color: #FFFFFF;
      font-size: 17px;
      text-decoration: none;
    }
`;

const ContainerServices = styled.div`
    width: 156px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2{
      color: #999999;
      font-size: 15px;
    }
    a{
      color: #FFFFFF;
      font-size: 17px;
      text-decoration: none;
    }
`;

const ContainerLegal = styled.div`
    width: 161px;
    display: flex;
    flex-direction: column;
    gap: 1rem;

    h2{
      color: #999999;
      font-size: 15px;
    }
    a{
      color: #FFFFFF;
      font-size: 17px;
      text-decoration: none;
    }
`;

function Footer() {

  useEffect( () => {
    AOS.init();
  }, []);
 
    return (
      <FooterContainer>

        <NextProjectContainer>

          <TitleContainer>
            <h1>Ready to launch your next project?</h1>
            <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
          </TitleContainer>
          
          <div data-aos="zoom-in" data-aos-delay="150">
            <ButtonGetStarted/>
          </div>

        </NextProjectContainer>

        <img src={imgLine} alt="" />

        <InformationsContainer>

          <ContainerBrainwaveIo>
            <h1>Brainwave.io</h1>
            <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            <div>
              <a href="#" data-aos="flip-left" data-aos-delay="100"><FaTwitter color="#68D585" size={20}/></a>
              <a href="#" data-aos="flip-left" data-aos-delay="250"><FaFacebookSquare color="#7D818D" size={20}/></a>
              <a href="#" data-aos="flip-left" data-aos-delay="350"><FaInstagram color="#7D818D" size={20}/></a>
              <a href="#" data-aos="flip-left" data-aos-delay="400"><FaLinkedin color="#7D818D" size={20}/></a>
            </div>
          </ContainerBrainwaveIo>

          <ContainerCompany data-aos="zoom-in" data-aos-delay="150">
            <h2>Company</h2>
            <a href="#">About us</a>
            <a href="#">Contact us</a>
            <a href="#">Careers</a>
            <a href="#">Press</a>
          </ContainerCompany>

          <ContainerProduct data-aos="zoom-in" data-aos-delay="150">
            <h2>Product</h2>
            <a href="#">Features</a>
            <a href="#">Pricing</a>
            <a href="#">News</a>
            <a href="#">Help desk</a>
            <a href="#">Support</a>
          </ContainerProduct>

          <ContainerServices data-aos="zoom-in" data-aos-delay="150">
            <h2>Services</h2>
            <a href="#">Digital Marketing</a>
            <a href="#">Content Writing</a>
            <a href="#">SEO for Business</a>
            <a href="#">UI Design</a>
          </ContainerServices>

          <ContainerLegal data-aos="zoom-in" data-aos-delay="150">
            <h2>Legal</h2>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
            <a href="#">Return Policy</a>
          </ContainerLegal>
        </InformationsContainer>

      </FooterContainer>
    )
  }
  
  export default Footer;
  