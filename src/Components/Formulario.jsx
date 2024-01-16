import { Fade } from "react-awesome-reveal";
import styled from "styled-components";

const Div = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;

  > div h2{
    font-size: 3.5rem;
    color: var(--txt-one);

    &::before{
          content: ' ';
          width: 7rem;
          height: .5rem;
          display: flex;
          background: linear-gradient(225deg, #01C38E 0%, rgba(65, 135, 63, 0.50) 100%);
        }
  }

  > div #btn-submit {
      width:20rem;
      height: auto;
      padding: 1rem;
      font-weight: 600;
      border: none;
      border-radius: 1rem;
      color: var(--txt-one);
      background-color: var(--button-background);
      cursor: pointer;
      transition: all .3s;
    
      &:hover{
        background-color: #5d975c;
      }
  }

  .form-fields{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    > div{
      display: flex;
      flex-direction: column;
      max-width: 60rem;
      gap: 1rem;
      height: auto;

      > label{
        color: var(--txt-one);
      }

      > input{
        border: none;
        border-radius: 1rem;
        width: auto;
        height: 4rem;
        padding:1rem;
        outline: none;
      }

      > textarea{
        width: auto;
        height: auto;
        border: none;
        outline: none;
        border-radius: 1rem;
        padding:1rem;
        resize: none;
      }
    }
  }
`

function Form() {
  return (  
    
    <Div>
      <Fade triggerOnce={true} direction="left" cascade={true}>
      <h2>Contato</h2>
      <div className="form-fields">
        <div>
          <label htmlFor="name">Nome</label>
          <input id="name" type="text" />
        </div>
        <div>
          <label htmlFor="mail">E-mail</label>
          <input id="mail" type="email" />
        </div>
        <div>
          <label htmlFor="message">Mensagem</label>
          <textarea name="Message" id="message"  cols="30" rows="10"></textarea>
        </div>
      </div>
      <button id="btn-submit" type="submit">Enviar</button>
    </Fade>
    </Div>
  );
}

export default Form;