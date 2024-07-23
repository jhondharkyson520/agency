import styled from "styled-components";

import img01 from '../../assets/Works/img01.svg';
import img02 from '../../assets/Works/img02.svg';
import img03 from '../../assets/Works/img03.svg';
import img04 from '../../assets/Works/img04.svg';

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
    align-items: center;
    gap: 3rem;

`;

const ItemContainer = styled.div`

`;

function Works() {
 
    return (
      <SectionContainer>
        <TitleContainer>
          <h1>CASE STUDIES</h1>
          <h2> Our works describe why we are the best in the business</h2>
        </TitleContainer>

        <ImagesContainer>
            <ItemContainer>
                <img src={img01} alt="" />
                <p>Graphic Design</p>
                <h1>Aura Branding Design</h1>
            </ItemContainer>

            <ItemContainer>
                <img src={img02} alt="" />
                <p>Graphic Design</p>
                <h1>AB.S Snack Packaging</h1>
            </ItemContainer>

            <ItemContainer>
                <img src={img03} alt="" />
                <p>Web Development</p>
                <h1>Gradient Website Development</h1>
            </ItemContainer>

            <ItemContainer>
                <img src={img04} alt="" />
                <p>Content Writing</p>
                <h1>Magazine Content Writing</h1>
            </ItemContainer>
        </ImagesContainer>

        <a href="#">See all works --- </a>
        
      </SectionContainer>
    )
  }
  
  export default Works;
  