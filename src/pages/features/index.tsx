import styled from "styled-components";

import imgFeedback from '../../assets/Features/imgFeedbackSharing.svg';
import imgNeverMiss from '../../assets/Features/imgNeverMiss.svg';
import imgOrganizedTasks from '../../assets/Features/imgOrganizedTasks.svg';
import imgProjectManager from '../../assets/Features/imgProjectManager.svg';

import imgPoints from '../../assets/Features/imgPoints.svg';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import ButtonGetStarted from "../../components/ButtonGetStarted";

const SectionContainer = styled.section`
    background-color: #F4F7FA;
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 100%;
   
    
`;

const TitleContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    width: 521px;
    h1{
        font-size: 13px;
        color: #F64B4B;
        text-align: center;

    }

    h2{
        font-size: 36px;
        text-align: center;

        

    }

    @media screen and (max-width: 660px) {
          h2{
            font-size: 25px;
          }
          width: 100%;
          padding: 0 4rem 0 4rem;


    }
`;

const FeaturesContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
   
    width: 1000px;

    gap: 2rem;
    margin-bottom: 3rem;

    @media screen and (max-width: 1060px) {
      width: 100%;
      justify-content: center;
    }
 
   
`;

const FeaturesItems = styled.div`
   
      display: flex;
      gap: 2rem;
     

      img{
        width: 79px;
        height: 79px;
        
      }
      
`;

const DetailsFeatures = styled.div`

    display: flex;
    flex-direction: column;
    gap: 1rem;
  
      p{
        font-size: 17px;
        width: 300px;
      }

      h1{
        font-size: 21px;
        font-weight: bold;
        width: 300px;
      }

      @media screen and (max-width: 660px) {
          h1{
            font-size: 18px;
            width: 200px;
          }
          
          p{
            font-size: 14px;
            width: 200px;
          }


    }
`;

const ImagePoints = styled.img`
    position: absolute;
    left: -2rem;
`;

const Line = styled.div`
    width: 1111px;
    height: 1px;
    margin-top: 3rem;
    margin-bottom: 3rem;
    background-color: #181616;
`;

const NextProjectContainer = styled.div`
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 8rem;
      margin-bottom: 4rem;
      
      
        
        button{
          &:hover{
            background-color: #231f58;
        }        
      
      }

      @media screen and (max-width: 855px) {
        gap: 3rem;
    }

    @media screen and (max-width: 780px) {
        flex-direction: column;
    }
`;

const ReadyNextProjectContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 500px;
    gap: 1.4rem;

    @media screen and (max-width: 780px) {
        width: 100%;
        padding: 0 4rem 0 4rem;
         h1{
          text-align: center;
         }

         p{
          text-align: center;
         }
    }
`;

function Features() {

  useEffect( () => {
    AOS.init();
  },[])

    return (
      <SectionContainer>
          
          <TitleContainer>
            <h1 data-aos="fade-right" data-aos-delay="150" >WHY CHOOSE US</h1>            
            <h2 data-aos="zoom-in" data-aos-delay="250" >People choose us because we serve the best for everyone</h2>
            <ImagePoints data-aos="zoom-in" data-aos-delay="350"  src={imgPoints} alt="Image points detail" />
          </TitleContainer>

          <FeaturesContainer data-aos="zoom-in" data-aos-delay="350">
          
            <FeaturesItems>
              <img src={imgProjectManager} alt="" />
              <DetailsFeatures>
                <h1>Dedicated project manager</h1>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
              </DetailsFeatures>
            </FeaturesItems>

            <FeaturesItems>
              <img src={imgOrganizedTasks} alt="" />
              <DetailsFeatures>
                <h1>Organized tasks</h1>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
              </DetailsFeatures>
            </FeaturesItems>

            <FeaturesItems>
              <img src={imgFeedback} alt="" />
              <DetailsFeatures>
                <h1>Easy feedback sharing</h1>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
              </DetailsFeatures>
            </FeaturesItems>

            <FeaturesItems>
              <img src={imgNeverMiss} alt="" />
              <DetailsFeatures>
                <h1>Never miss deadline</h1>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
              </DetailsFeatures>
            </FeaturesItems>
            
          </FeaturesContainer>

          <Line><p>.</p></Line>

          <NextProjectContainer>

              <ReadyNextProjectContainer>
                <h1>Ready to launch your next project?</h1>
                <p>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
              </ReadyNextProjectContainer>

              <ButtonGetStarted/>

          </NextProjectContainer>
      </SectionContainer>
    )
  }
  
  export default Features;
  