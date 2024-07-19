import Header from "../../components/Header";
import styled from "styled-components";
import bgImage from '../../assets/Hero/Bitmap.svg';

import ImageCirculeDark from '../../assets/Hero/Circule-dark.svg';
import ImageCirculeGreen from '../../assets/Hero/Circule-green.svg';
import ImageFill from '../../assets/Hero/Fill.svg';
import ImagePerfil from '../../assets/Hero/Perfil.svg';
import ImagePoints from '../../assets/Hero/Points.svg';


import ButtonGetStarted from "../../components/ButtonGetStarted";

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ContainerMain = styled.main`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
    gap: 30px;

    @media screen and (max-width: 1000px) {
       flex-direction: column;
       gap: 0px;
       margin-top: 3rem;
    }
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;
    width: 50%;

    h1{
      color: #F64B4B;
      font-size: 13px;
      font-weight: bold;
    }

    h2{
      color: #161C2D;
      font-size: 45px;
      font-weight: bold;
    }

    p{
      color: #161C2D;
      font-size: 19px;
    }

    @media screen and (max-width: 620px) {
       h1{
        font-size: 17px;
        text-align: center;
       }
       h2{
        font-size: 20px;
        text-align: center;
       }
       p{
        font-size: 15px;
        text-align: center;
       }
       justify-content: center;
       align-items: center;
       max-width: 300px;
    }
`;

const ImageContainer = styled.div`
    position: relative;
    display: flex;
    
    height: 600px;
    margin-top: 3rem;
    width: 50%;
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 1145px) {
       
       max-width: 100vw;
       margin-top: 0rem;
       
    }
`;

const BgHero = styled.img`
    position: absolute;
    width: 100%;

`;

const ImgPerfil = styled.img`
    
    position: absolute;
    width: 463px;
    height: 463px;

    @media screen and (max-width: 1145px) {
        width: 313px;
        height: 313px;
    }
`;

const ImgPoints = styled.img`
    position: relative;
    
    bottom: 13rem;
    left: 2rem;
    
    

    @media screen and (max-width: 1145px) {
        bottom: 8.3rem;
        left: 3.5rem;
    }


`;

const ImgCirculeDark = styled.img`
    position: relative;
    right: 9rem;
    top: 10rem;


    @media screen and (max-width: 1145px) {
        right: 7rem;
        top: 7rem;
    }

`;

const ImgCirculeGreen = styled.img`
    position: relative;
    right: 15.8rem;
    top: 10.8rem;

    @media screen and (max-width: 1145px) {
        right: 13.8rem;
        top: 7.8rem;
    }

`;


const ImgFill01 = styled.img`
    position: relative;
    top: 8.3rem;
    left: 2rem;

    @media screen and (max-width: 1145px) {
        top: 6.7rem;
        left: -2.5rem;
    }

`;
const ImgFill02 = styled.img`
    position: relative;
    top: 8.3rem;
    left: 2.4rem;

    @media screen and (max-width: 1145px) {
        top: 6.7rem;
        left: -2.1rem;
    }

`;


const ButtonContainer = styled.div`
    z-index: 100;
      &:hover{
        button{
            background-color: #231f58;
        }
        
      }
`;


function Hero() {

    useEffect(() => {
        AOS.init();
      }, []);
 
    return (
      <HeroContainer>
          <Header/>

         <ContainerMain>

          <ContentContainer>
              <h1  data-aos="zoom-in" data-aos-delay="700">LET´S SHIFT YOUR BUSINESS</h1>
              <h2 data-aos="fade-right" data-aos-delay="1100">Shift your business fast with Shade Pro.</h2>
              <p data-aos="zoom-in" data-aos-delay="700">With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
              <ButtonContainer data-aos="zoom-in" data-aos-delay="500" >
                <ButtonGetStarted />
              </ButtonContainer>
              
          </ContentContainer>

            <ImageContainer data-aos="zoom-in" data-aos-delay="1000">

                <ImgPoints data-aos="zoom-in" src={ImagePoints} alt="" />

                <ImgPerfil data-aos="zoom-in" src={ImagePerfil} alt="" /> 

                <ImgCirculeDark data-aos="zoom-in" src={ImageCirculeDark} alt="" />

                <ImgCirculeGreen data-aos="zoom-in" src={ImageCirculeGreen} alt="" />
               
                <ImgFill01 data-aos="zoom-in" src={ImageFill} alt="" />
                
                <ImgFill02 data-aos="zoom-in" src={ImageFill} alt="" />
         

            </ImageContainer>

         </ContainerMain>

          <BgHero src={bgImage} alt=""/>
      </HeroContainer>
    )
  }
  
  export default Hero;
  