import styled from 'styled-components';


const SectionContainer = styled.section`
   
    padding: 0 5rem 0 5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 4rem;
    gap: 5rem;

    @media screen and (max-width: 670px) {
        display: grid;
    }
`;

const ContainerItems = styled.div`
    display: flex;
    flex-direction: column;
    width: 314px;
    align-items: center;
    justify-content: space-between;
    text-align: center;
    gap: 1.5rem;

    h1{
      font-size: 48px;
      font-weight: bold;

      @media screen and (max-width: 815px) {
        font-size: 28px;
      }
    }

    p{
      font-size: 19px;

      @media screen and (max-width: 815px) {
        font-size: 17px;
      }
      
    }


`;

function Facts() {
 
    return (
      <SectionContainer>
        <ContainerItems>
          <h1>1M+</h1>
          <p>Customers visit Omega every month to get their service done.</p>
        </ContainerItems>

        <ContainerItems>
          <h1>92%</h1>
          <p>Satisfaction rate comes from our awesome customers.</p>
        </ContainerItems>

        <ContainerItems>
          <h1>4.9/5.0</h1>
          <p>Average customer ratings we have got all over internet.</p>
        </ContainerItems>
        
      </SectionContainer>
    )
  }
  
  export default Facts;
  