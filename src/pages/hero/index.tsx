import Header from "../../components/Header";
import styled from "styled-components";
import bgImage from '../../assets/Hero/Bitmap.svg';

import ImageCirculeDark from '../../assets/Hero/Circule-dark.svg';
import ImageCirculeGreen from '../../assets/Hero/Circule-green.svg';
import ImageFill from '../../assets/Hero/Fill.svg';
import ImagePerfil from '../../assets/Hero/Perfil.svg';
import ImagePoints from '../../assets/Hero/Points.svg';


import ButtonGetStarted from "../../components/ButtonGetStarted";

const HeroContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const ContainerMain = styled.main`
    margin-top: 8rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1200px;
    gap: 50px;

    @media screen and (max-width: 1145px) {
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
    width: 550px;

    h1{
      color: #F64B4B;
      font-size: 13px;
      font-weight: bold;
    }

    h2{
      color: #161C2D;
      font-size: 52px;
      font-weight: bold;
    }

    p{
      color: #161C2D;
      font-size: 19px;
    }

    @media screen and (max-width: 1145px) {
       h1{
        font-size: 15px;
        text-align: center;
       }
       h2{
        font-size: 18px;
        text-align: center;
       }
       p{
        font-size: 13px;
        text-align: center;
       }
       justify-content: center;
       align-items: center;
       max-width: 300px;
    }
`;

const ImageContainer = styled.div`

    display: flex;
    width: 463px;
    height: 504px;
    position: relative;

    @media screen and (max-width: 1145px) {
       
       max-width: 100vw;
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
       
    }
`;

const ImgPoints = styled.img`
    position: absolute;
    width: 107px;
    height: 109px;
    

    @media screen and (max-width: 1145px) {
      
    }


`;

const ImgCirculeDark = styled.img`
    position: absolute;
    @media screen and (max-width: 1145px) {
       
    }

`;

const ImgCirculeGreen = styled.img`
    position: absolute;
    @media screen and (max-width: 1145px) {
       
    }

`;

const ContainerImgCircules = styled.div`
    width: 124px;
    height: 107.06px;

`;

const ImgFill01 = styled.img`
    position: absolute;
    @media screen and (max-width: 1145px) {
        
    }

`;

const ContainerImgFill = styled.div`
    width: 24.21px;
    height: 78.35px;
    display: flex;
    gap: 2rem;
   
   

    @media screen and (max-width: 1145px) {

    }

`;

function Hero() {
 
    return (
      <HeroContainer>
          <Header/>

         <ContainerMain>
          <ContentContainer>
              <h1>LET´S SHIFT YOUR BUSINESS</h1>
              <h2>Shift your business fast with Shade Pro.</h2>
              <p>With lots of unique blocks, you can easily build a page without coding. Build your next consultancy website within few minutes.</p>
              <ButtonGetStarted/>
          </ContentContainer>

            <ImageContainer>
                <ImgPoints src={ImagePoints} alt="" />
                <ImgPerfil src={ImagePerfil} alt="" />                
                <ContainerImgCircules>
                    <ImgCirculeDark src={ImageCirculeDark} alt="" />
                    <ImgCirculeGreen src={ImageCirculeGreen} alt="" />
                </ContainerImgCircules>
                <ContainerImgFill>
                    <ImgFill01 src={ImageFill} alt="" />
                    <ImgFill01 src={ImageFill} alt="" />
                </ContainerImgFill>
            </ImageContainer>
         </ContainerMain>

          <BgHero src={bgImage} alt=""/>
      </HeroContainer>
    )
  }
  
  export default Hero;
  