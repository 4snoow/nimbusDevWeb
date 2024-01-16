import styled from "styled-components";

const ButtonD = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: auto;
  padding: 1rem 2rem;
  background-color: var(--button-background);
  border-radius: 1rem;
  color: var(--txt-one);
  border: none;
  cursor: pointer;
  transition: all .3s;

  > a{
    color: var(--txt-one);
    text-decoration: none;
    font-weight: 600;
  }

  &:hover{
    background-color: #5d975c;
  }
`


// eslint-disable-next-line react/prop-types
function Button({children}) {
  return (  
    <ButtonD title="Contato">
      {children}
    </ButtonD>
  );
}

export default Button; 

