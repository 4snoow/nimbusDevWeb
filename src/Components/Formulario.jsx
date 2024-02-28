import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import styled from "styled-components";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { z } from "zod";

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

const FormDataSchema = z.object({
  nome: z.string(),
  email: z.string().email(),
  message: z.string(),
  phone: z.string(),
  contacted: z.string(),
});

const [dataForm, setDataForm] = useState({
  nome:'',
  email:'',
  message:'',
  phone:'',
  contacted:'',
})

const messageData = {
  embeds:[
    {
      "type": "rich",
      "title": `Formulário`,
      "description": "",
      "color": 0x00ff15,
      "fields": [
        {
          "name": `Nome:`,
          "value": dataForm.nome,
          "inline": true
        },
        {
          "name": `Email:`,
          "value": dataForm.email,
          "inline":true
        },
        {
          "name": `WhatsApp`,
          "value": dataForm.phone,
          "inline": true
        },
        {
          "name": `Por onde nos conheceu:`,
          "value": dataForm.contacted
        },
        {
          "name": `Mensagem:`,
          "value": dataForm.message
        }
      ],
      "image": {
        "url": `https://images.unsplash.com/photo-1533750446969-255bbf191920?q=80&w=2040&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D`,
        "height": 100,
        "width": 100
      }
    }
  ]
}

const handleValue = (event) => {
  setDataForm((dataForm) =>({
    ...dataForm,[event.target.name]:event.target.value
  }))
}

const handleForm = async (event) => {
  event.preventDefault()

  try {
    FormDataSchema.parse(dataForm);
  } catch (error) {
    toast.error("Erro nos dados do formulário. Verifique os campos.");
    return
  }

  try {
    await axios.post('https://discord.com/api/webhooks/1212384829539094620/uLeEwfj1UgrKBJbLsVj0ff8XCiP9uBjzBmpfSaMm2k4gfcKz7OLaJaVobgZwTdztntUr', messageData)
    toast.success("Formulário enviado com sucesso!")
  } catch (error) {
    toast.error("Erro ao enviar formulário");
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
        <input required={true} name="nome" id="name" type="text" onChange={handleValue} />
      </div>
      <div>
        <label htmlFor="mail">E-mail</label>
        <input required={true} name="email" id="mail" type="email" onChange={handleValue}/>
      </div>
      <div>
        <label htmlFor="phone">WhatsApp</label>
        <input required={true} name="phone" id="phone" type="tel" maxLength="15" onKeyUp={handlePhone}  onChange={handleValue}/>
      </div>
      {/* <div>
        <label htmlFor="cnpj">WhatsApp</label>
        <input name="cnpj" id="cnpj" type="" maxLength="15" onKeyUp={handlePhone}  onChange={handleValue}/>
      </div> */}
      <div>
        <label htmlFor="contacted">Por onde nos conheceu</label>
        <input required={true} name="contacted" id="contacted" type="text" placeholder="WhatsApp, Facebook, Twitter..." onChange={handleValue} />
      </div>
      <div>
        <label htmlFor="message">Mensagem</label>
        <textarea required={true} name="message" id="message"  cols="30" rows="10" onChange={handleValue}></textarea>
      </div>
    </div>
    <button  id="btn-submit" type="submit">Enviar</button>
    </form>
  </Fade>
  <ToastContainer 
  position="top-right"
  autoClose={2000}
  hideProgressBar={false}
  newestOnTop={false}
  closeOnClick
  rtl={false}
  pauseOnFocusLoss
  draggable
  pauseOnHover
  theme="dark"
/>
  </Div>
);
}
 


export default Form;