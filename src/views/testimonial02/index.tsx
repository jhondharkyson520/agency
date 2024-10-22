import styled from "styled-components";

import imgBg from '../../assets/Testimonial02/imgBg.svg';
import imgProfile from '../../assets/Testimonial02/imgProfile.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const SectionContainer = styled.section`
    background-color: #473BF0;
    height: 665px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    margin-top: 2rem;
`;

const ImageBackground = styled.img`
    position: absolute;

    @media screen and (max-width: 640px) {
        width: 500px;
        height: 100%;
    }

    @media screen and (max-width: 400px) {
        width: 350px;
        height: 100%;
    }
`;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 665px;
    gap: 3rem;

    @media screen and (max-width: 640px) {
        width: 400px;
    }

    @media screen and (max-width: 400px) {
        width: 300px;
    }
`;

const TitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 2rem;

    h1{
        color: #68D585;
        font-size: 13px;
        font-weight: bold;
    }
    h2{
        color: #FFFFFF;
        font-size: 32px;
        font-weight: bold;

        @media screen and (max-width: 400px) {
            font-size: 25px;
        }
    }
`;

const ProfileContainer = styled.div`
    h1{
        margin-top: 1rem;
        color: #FFFFFF;
        font-size: 17px;
        font-weight: bold;
    }

    p{
        margin-top: 1rem;
        color: #FFFFFF;
        font-size: 15px;
    }
`;

function Testimonial02() {

  useEffect(() => {
    AOS.init();
  }, []);
 
    return (
      <SectionContainer>
        <ImageBackground src={imgBg} alt="Image background" />

        <Container>

          <TitleContainer>
            <h1 data-aos="zoom-in" data-aos-delay="150" >TESTIMONIAL</h1>
            <h2 data-aos="zoom-in" data-aos-delay="250" >“Simply the best. Better than all the rest. I’d recommend this product to beginners and advanced users.”</h2>
          </TitleContainer>

          <ProfileContainer data-aos="zoom-in" data-aos-delay="150" >
            <img src={imgProfile} alt="Image profile" />
            <h1>Ian Klein</h1>
            <p>Digital Marketer</p>
          </ProfileContainer>

        </Container>

      </SectionContainer>
    )
  }
  
  export default Testimonial02;
  