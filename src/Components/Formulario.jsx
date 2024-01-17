import { useState } from "react";
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

  > div form{
    display: flex;
    flex-direction: column;
    gap: 3rem;
    width: auto;
    height: auto;
  }
`

function Form() {
const [dataForm, setDataForm] = useState({
  nome:'',
  email:'',
  message:'',
  phone:'',
  contacted:'',
})

const handleValue = (event) => {
  setDataForm((dataForm) =>({
    ...dataForm,[event.target.name]:event.target.value
  }))
}
const handleForm = async (event) => {
  event.preventDefault()
 
  try {
    const response = await fetch('http://localhost:300/enviar-form', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataForm),
    });

    if (response.ok) {
      console.log('Submissão do formulário enviada com sucesso.');

    } else {
      console.error('Erro ao enviar submissão do formulário.');
    }
  } catch (error) {
    console.error('Erro ao enviar submissão do formulário:', error.message);
  }
};

const handlePhone = (event) => {
  let input = event.target
  input.value = phoneMask(input.value)
}

const phoneMask = (value) => {
  if (!value) return ""
  value = value.replace(/\D/g,'')
  value = value.replace(/(\d{2})(\d)/,"($1) $2")
  value = value.replace(/(\d)(\d{4})$/,"$1-$2")
  return value
}

return (    
  <Div>
    <Fade triggerOnce={true} direction="left" cascade={true}>
    <h2>Contato</h2>
    <form action="" onSubmit={handleForm}>
    <div className="form-fields">
      <div>
        <label htmlFor="name">Nome</label>
        <input name="nome" id="name" type="text" onChange={handleValue} />
      </div>
      <div>
        <label htmlFor="mail">E-mail</label>
        <input name="email" id="mail" type="email" onChange={handleValue}/>
      </div>
      <div>
        <label htmlFor="phone">WhatsApp</label>
        <input name="phone" id="phone" type="tel" maxLength="15" onKeyUp={handlePhone}  onChange={handleValue}/>
      </div>
      {/* <div>
        <label htmlFor="cnpj">WhatsApp</label>
        <input name="cnpj" id="cnpj" type="" maxLength="15" onKeyUp={handlePhone}  onChange={handleValue}/>
      </div> */}
      <div>
        <label htmlFor="contacted">Por onde nos conheceu</label>
        <input name="contacted" id="contacted" type="text" placeholder="WhatsApp, Facebook, Twitter..." onChange={handleValue} />
      </div>
      <div>
        <label htmlFor="message">Mensagem</label>
        <textarea name="message" id="message"  cols="30" rows="10" onChange={handleValue}></textarea>
      </div>
    </div>
    <button id="btn-submit" type="submit">Enviar</button>
    </form>
  </Fade>
  </Div>
);
}
 


export default Form;