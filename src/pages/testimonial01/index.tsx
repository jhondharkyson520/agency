import styled from 'styled-components';

import imgProfile from '../../assets/Testimonial01/imgProfile.svg';
import imgStars from '../../assets/Testimonial01/imgStars.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const SectionContainer = styled.section`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5rem;

    @media screen and (max-width: 600px) {
      flex-direction: column;
      gap: 1rem;
    }
    
    
`;

const ImageProfile = styled.img`
      width: 164px;
      height: 164px;
`;

const DetailsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    justify-content: center;
    gap: 2rem;
    width: 735px;

    @media screen and (max-width: 1007px) {
      width: 500px;
    }

    @media screen and (max-width: 777px) {
      width: 300px;
    }
`;

const ImageStarsContainer = styled.div`
    
@media screen and (max-width: 600px) {
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

`;

const ImageStars = styled.img`
    width: 123px;
    height: 19px;

    
`;



function Testimonial01() {

    useEffect(() => {
      AOS.init();
      
    }, []);

 
    return (
      <SectionContainer>

        <ImageProfile src={imgProfile} alt="Photo profile" data-aos="zoom-in" data-aos-delay="200" />
        
        <DetailsContainer>

          <ImageStarsContainer>
            <ImageStars src={imgStars} alt="Level stars" data-aos="zoom-in" data-aos-delay="450"/>
          </ImageStarsContainer>
            

          <h2 data-aos="zoom-in" data-aos-delay="300" >“OMG! I cannot believe that I have got a brand new landing page after getting Albino. It was super easy to edit and publish.”</h2>
          <p data-aos="fade-right" data-aos-delay="400"><strong>Franklin Hicks</strong> Web Developer</p>

        </DetailsContainer>

      </SectionContainer>
    )
  }
  
  export default Testimonial01;
  