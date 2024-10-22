import styled from 'styled-components';

import imgPerson01 from '../../assets/About/imgPerson01.svg';
import imgPerson02 from '../../assets/About/imgPerson02.svg';
import imgPerson03 from '../../assets/About/imgPerson03.svg';

import imgPoints from '../../assets/About/imgPoints.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const SectionContainer = styled.section`
    display: flex;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;
    padding: 6rem 8rem 0 8rem;

    @media screen and (max-width: 1125px) {
        align-items: center;
    }
    

`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;   
    width: 470px;
    
    h1{

      color: #F64B4B;
      font-weight: bold;
      font-size: 13px;

      
    }
    h2{

      font-size: 30px;
      color: #161C2D;
      font-weight: bold;

      @media screen and (max-width: 600px) {
        font-size: 20px;
        width: 300px;
        
      }


    }

    @media screen and (max-width: 600px) {
        align-items: center;
      }

`;

const ContainerPersonFull = styled.div`

    img{
      
      margin-top: 5rem;

      @media screen and (max-width: 1335px) {
        width: 300px;
      }

      
    }

    @media screen and (max-width: 1125px) {
        display: none;
    }

    

`;

const ContainerPersonDescription = styled.div`
    width: 550px;
    p{
      margin-top: 5rem;
      width: 450px;
      font-size: 17px;

      @media screen and (max-width: 600px) {
        align-items: center;
        width: 300px;
        margin-top: 2rem;
      }
    }

    @media screen and (max-width: 600px) {
      display: flex;
      flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`;

const ContainerImages = styled.div`
    display: flex;

    @media screen and (max-width: 600px) {
        align-items: center;
        justify-content: center;
    }

`;

const ImagePerson02 = styled.img`
    margin-top: 3rem;

    @media screen and (max-width: 600px) {
      width: 218px;
    }
`;

const ImagePoints = styled.img`
    position: relative;
    bottom: 7.5rem;
    right: 3.5rem;

    @media screen and (max-width: 600px) {
      width: 80px;
      bottom: 4.9rem;
      right: 3rem;
    }
`;

const ImagePerson03 = styled.img`
    @media screen and (max-width: 600px) {
        display: none;
    }
`;

const ContainerDestails = styled.div`
    display: flex;
    gap: 5rem;

    @media screen and (max-width: 1335px) {
        gap: 2rem;
    }

    @media screen and (max-width: 1125px) {
        flex-direction: column;
    }
`;


function About() {

  useEffect(() => {
    AOS.init();
  }, []);
 
    return (
      <SectionContainer>

        <TitleContainer>
          <h1 data-aos="fade-right" data-aos-delay="150" >OUR STORY</h1>
          <h2 data-aos="zoom-in" data-aos-delay="250">We know how everything works and why your business is failing over and over again.</h2>
        </TitleContainer>

        <ContainerDestails>
          <ContainerPersonFull>
            <img data-aos="zoom-in" data-aos-delay="350" src={imgPerson01} alt="Man profile" />
          </ContainerPersonFull>

          <ContainerPersonDescription>

            <ContainerImages>
              <ImagePerson02  src={imgPerson02} alt="Woman profile" />
              <ImagePoints data-aos="zoom-in" data-aos-delay="250" src={imgPoints} alt="Image points" />
              <ImagePerson03  src={imgPerson03} alt="Woman with lollipop" />
            </ContainerImages>

            <p data-aos="zoom-in" data-aos-delay="150">
              We share common trends and strategies for improving your rental income and making sure you stay in 
              high demand. With lots of unique blocks, you can easily build a page without coding. 
              Build your next landing page.
            </p>
          </ContainerPersonDescription>
        </ContainerDestails>

      </SectionContainer>
    )
  }
  
  export default About;
  