import styled from "styled-components";


const CardBox = styled.div`
  display: flex;
  max-width: 30rem;
  height: auto;
  gap: 2rem;
  flex-direction: column;
  justify-content: flex-start;
  padding: 3rem 1.6rem;
  border: 1px solid var(--border-card);
  border-radius: 1rem;

  > img{
    width: 4.2rem;
    height: 4.2rem;
    padding: .5rem;
    border-radius: 50%;
    border: 1px solid var(--border-card);
  }
`

// eslint-disable-next-line react/prop-types
function Card ({children}) {
  return ( 

    <CardBox>
      {children}
    </CardBox>

   );
}

export default Card ;