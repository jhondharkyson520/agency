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
`;

const ContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 30px;

    h1{
      color: #F64B4B;
      font-size: 13px;
      font-weight: bold;
    }

    h2{
      color: #161C2D;
      font-size: 60px;
      font-weight: bold;
    }

    p{
      color: #161C2D;
      font-size: 19px;
    }
`;

const ImageContainer = styled.div`
`;

const BgHero = styled.img`
    position: absolute;
    min-width: 100%;
`;

const ImgPerfil = styled.img`
    width: 463px;
    height: 504px;
`;

const ImgPoints = styled.img`
    position: absolute;

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
                <ImgPerfil src={ImagePerfil} alt="" />
                <ImgPoints src={ImagePoints} alt="" />
                <img src={ImageCirculeDark} alt="" />
                <img src={ImageCirculeGreen} alt="" />
                <img src={ImageFill} alt="" />
                <img src={ImageFill} alt="" />
            </ImageContainer>
         </ContainerMain>

          <BgHero src={bgImage} alt=""/>
      </HeroContainer>
    )
  }
  
  export default Hero;
  