import styled from 'styled-components';

import { FaArrowRight } from 'react-icons/fa';

import imgGraphicDesign from '../../assets/Services/imgGraphicDesign.svg';
import imgWebDevelopment from '../../assets/Services/imgWebDevelopment.svg';
import imgContentWriting from '../../assets/Services/imgContentWriting.svg';
import imgCircules from '../../assets/Services/imgCircules.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const SectionContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2rem;

`;

const ServicesTitle = styled.h1`
    color: #F64B4B;
    font-size: 13px;

    

    
`;

const ServicesSubTitle = styled.h2`
    font-size: 36px;
    text-align: center;
    width: 580px;
    margin-bottom: 15px;

    @media screen and (max-width: 620px) {
        font-size: 25px;
        width: 300px;
    }
`;

const CardsContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    width: 1160px;
    gap: 2rem;

    @media screen and (max-width: 1145px) {
        flex-direction: column;
    }

`;

const GraphicDesign = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.5rem;
    padding: 0 1rem 0 1rem;
    text-align: center;

    width: 350px;
    height: 483px;
    border: none;
    border-radius: 10px;
    background-color: #68D585;
    color: #FFFFFF;
    
`;

const WebDevelopment = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.5rem;
    padding: 0 1rem 0 1rem;
    text-align: center;

    width: 350px;
    height: 483px;
    border: none;
    border-radius: 10px;
    background-color: #473BF0;
    color: #FFFFFF;
`;

const ContentWriting = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 2.5rem;
    padding: 0 1rem 0 1rem;
    text-align: center;

    width: 350px;
    height: 483px;
    border: none;
    border-radius: 10px;
    background-color: #F64B4B;
    color: #FFFFFF;
`;

const LinkLearnMoreContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

     a{
      color: #FFFFFF;
      font-size: 17px;
    }
`;

const CirculesImageBg = styled.img`
    position: relative;
    left: 32.5rem;
    bottom: 4rem;
    z-index: -1;

    @media screen and (max-width: 1145px) {
      left: 9rem;
      bottom: 4rem;
    }
`;


function Services() {



  function adjustAOSAttributes() {

    const graphicDesignImg = document.getElementById('graphic-design');
    const webDevelopmentImg = document.getElementById('web-development');
    const contentWritingImg = document.getElementById('content-writing');
  
    if (window.innerWidth < 1145) {

      graphicDesignImg?.setAttribute('data-aos-delay', '600');
      webDevelopmentImg?.setAttribute('data-aos-delay', '600');
      contentWritingImg?.setAttribute('data-aos-delay', '600');

    } else { 

      graphicDesignImg?.setAttribute('data-aos-delay', '600');
      webDevelopmentImg?.setAttribute('data-aos-delay', '900');
      contentWritingImg?.setAttribute('data-aos-delay', '1200');

    }

  }
  
  useEffect(() => {
    AOS.init();
    adjustAOSAttributes();
    window.addEventListener('resize', adjustAOSAttributes);
  
    return () => {
      window.removeEventListener('resize', adjustAOSAttributes);
    };
  }, []);


    return (
      <SectionContainer>

        <ServicesTitle>OUR SERVICES</ServicesTitle>
        <ServicesSubTitle data-aos="zoom-in" data-aos-delay="100" >We provide great services for our customers based on needs</ServicesSubTitle>

        <CardsContainer data-aos="zoom-in" data-aos-delay="400">

            <GraphicDesign  >
              <img id="graphic-design" src={imgGraphicDesign} alt="Graphic design in table" data-aos="flip-left" data-aos-delay="600" />
              <h1>Graphic Design</h1>
              <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
              
              <LinkLearnMoreContainer>
                <a href="#">Learn more</a>
                <FaArrowRight />
              </LinkLearnMoreContainer>
            </GraphicDesign>

            <WebDevelopment>
              <img id="web-development" src={imgWebDevelopment} alt="Web developer programming" data-aos="flip-left" data-aos-delay="900"/>
              <h1>Web Development</h1>
              <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
              
              <LinkLearnMoreContainer>
                <a href="#">Learn more</a>
                <FaArrowRight />
              </LinkLearnMoreContainer>
            </WebDevelopment>

            <ContentWriting >
              <img id="content-writing" src={imgContentWriting} alt="Content writing notes" data-aos="flip-left" data-aos-delay="1200"/>
              <h1>Content Writing</h1>
              <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>

              <LinkLearnMoreContainer>
                <a href="#">Learn more</a>
                <FaArrowRight />
              </LinkLearnMoreContainer>
            </ContentWriting>

        </CardsContainer>
        <CirculesImageBg data-aos="zoom-in" src={imgCircules} alt="" />
      </SectionContainer>
    )
  }
  
  export default Services;
  