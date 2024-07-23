import styled from "styled-components";

import img01 from '../../assets/Works/img01.svg';
import img02 from '../../assets/Works/img02.svg';
import img03 from '../../assets/Works/img03.svg';
import img04 from '../../assets/Works/img04.svg';

import { FaArrowRight } from 'react-icons/fa';

import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";


const SectionContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 2rem;
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
        font-size: 35px;
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

const ImagesContainer = styled.div`
    margin-top: 3rem;
    display: flex;
    width: 1100px;
    flex-wrap: wrap;
    justify-content: center;
    gap: 3rem;

    p{
        margin-top: 1rem;
        margin-left: 2rem;
        font-size: 15px;
    }

    h1{
        margin-top: 1rem;
        margin-left: 2rem;
        font-size: 24px;
    }

    @media screen and (max-width: 1090px) {
         width: 500px;
         text-align: center;

         p{
            margin-left: 0rem;
         }

         h1{
            margin-left: 0rem;
            font-size: 20px;
         }

    }

    @media screen and (max-width: 660px) {
         img{
            width: 250px;
         }
        

    }

`;

const ItemContainer = styled.div`
    margin-top: 12rem;

    @media screen and (max-width: 660px) {
        margin-top: 0rem;

    }

    @media screen and (max-width: 1090px) {
        margin-top: 0rem;

    }
`;

const LinkSeeAll = styled.a`
    text-decoration: none;
    margin-top: 3rem;
    color: #473BF0;
    font: 21px;
    font-weight: bold;
    align-items: center;
    justify-content: center;
    display: flex;
    gap: 2rem;

    &:hover{
        color: #3a3679;
    }
`;

function Works() {

    useEffect(()=> {
        AOS.init();
    },[]);
 
    return (
      <SectionContainer>
        <TitleContainer>
          <h1>CASE STUDIES</h1>
          <h2 data-aos="zoom-in" data-aos-delay="150"> Our works describe why we are the best in the business</h2>
        </TitleContainer>

        <ImagesContainer>
            <div data-aos="zoom-in" data-aos-delay="150">
                <img src={img01} alt="Image Aura Branding Design" />
                <p data-aos="zoom-in" data-aos-delay="150">Graphic Design</p>
                <h1 data-aos="zoom-in" data-aos-delay="150">Aura Branding Design</h1>
            </div>

            <div data-aos="zoom-in" data-aos-delay="150">
                <img src={img02} alt="Image snack package mockup" />
                <p data-aos="zoom-in" data-aos-delay="150">Graphic Design</p>
                <h1 data-aos="zoom-in" data-aos-delay="150">AB.S Snack Packaging</h1>
            </div>

            <ItemContainer data-aos="zoom-in" data-aos-delay="150">
                <img src={img03} alt="Image Making Gradients Great Again" />
                <p data-aos="zoom-in" data-aos-delay="150">Web Development</p>
                <h1 data-aos="zoom-in" data-aos-delay="150">Gradient Website Development</h1>
            </ItemContainer>

            <div data-aos="zoom-in" data-aos-delay="150">
                <img src={img04} alt="Image Magazine Mockup" />
                <p data-aos="zoom-in" data-aos-delay="150">Content Writing</p>
                <h1 data-aos="zoom-in" data-aos-delay="150">Magazine Content Writing</h1>
            </div>
        </ImagesContainer>

        <LinkSeeAll href="#">See all works <FaArrowRight/></LinkSeeAll>
        
      </SectionContainer>
    )
  }
  
  export default Works;
  