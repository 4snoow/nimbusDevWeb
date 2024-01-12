import Card from "../Components/Card";
import NavBar from "../Components/NavBar";
import styled from "styled-components";
import Marquee from "react-fast-marquee";
import UserReview from "../Components/UserReview";
import { Fade } from "react-awesome-reveal";

import dash from "/dashico.png";
import codeico from "/codeico.png";
import mobileico from "/mobileico.png";
import ellipse from "/ellipse.png";
import brand1 from "/brand1.png";
import brand2 from "/brand2.png";
import brand3 from "/brand3.png";
import brand4 from "/brand4.png";
import brand5 from "/brand5.png";
import brand6 from "/brand6.png";
import rocketico from "/rocketico.png";
import arrowUp from "/arrowUp.png";
import arrowDown from "/arrowDown.png";
import logo from "/logo.png";

// import aspasico from "/aspasico.png";



const Main = styled.main`

  > .services{
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 4rem 10rem 15rem;
    gap: 7rem;
    align-items: center;
    justify-content: center;

    > .title-service {
      h2 {
        font-size: 3.5rem;
        text-align: center;
      }
    }

    > .card-service{
    width: 100%;
    height: auto;
    display: flex;
    align-items: center;
    justify-content: space-evenly;
    gap: 5rem;

    @media screen and (max-width:1024px){
      flex-wrap: wrap;
    }
    }

    @media screen and (max-width:480px){
      padding: 4rem 2rem 15rem;

    }

    @media screen and (max-width:850px){
      padding: 4rem 2rem 15rem;
    }
    
    
  }

  > .about{
    background-color: var(--component-background);
    width: 100%;
    height: auto;
    position: relative;
    overflow: auto;

    > img:nth-child(1){
      position: absolute;
      top: -3rem;
      left: 10rem;
      z-index: 1;
    }

    > img:nth-child(2){
      position: absolute;
      bottom: 79rem;
      left: 55%;
      display: none;

    }

    > .about-and-video{
      display: flex;
      width: 100%;
      height: auto;
      gap: 5rem;
      justify-content: space-between;
      padding: 20.9rem 10rem 20.4rem;
      position: relative;

      > img {
        position: absolute;
        bottom: -10rem;
        right: 25%;
      }


      > .about-text{
        width: 40%;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 3rem;
        justify-content: flex-start;

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

        > div p{
          color: var(--txt-two);
          text-align: justify;
          
          > span{
            color: var(--txt-title-two);
          }
        }

        > div a{
          text-decoration: none;
          color: var(--txt-title-two);
        }

        @media screen and (max-width:1180px) {
          width: 100%;
        }
      }

      > .about-video{
        width: 50%;
        height: 46rem;
        border-radius: 1rem;

        > .iframe {
          border-radius: 1rem;
        }

        @media screen and (max-width:1180px){
        width: 100%;

      }
      }

      @media screen and (max-width:1180px){
        flex-direction: column;

      }
      @media screen and (max-width:480px){
      padding: 20.9rem 2rem 20.4rem;

      }
    }

    > .partners{
    background-color: var(--component-background);
    width: 100%;
    height: auto;

    > h2{
        font-size: 3.5rem;
        color: var(--txt-one);
        padding: 0 10rem 0;
        z-index: 1;
        position: relative;

        &::before{
          content: ' ';
          width: 7rem;
          height: .5rem;
          display: flex;
          background: linear-gradient(225deg, #01C38E 0%, rgba(65, 135, 63, 0.50) 100%);
        }

        @media screen and (max-width:480px){
          padding: 0 2rem;
        }
      }

    .brands{
      width: 100%;
      height: 20rem;
      display: flex;
      background-color: var(--site-background);
      position: relative;
      z-index: 5;

      > .marque{
        height: 20rem;
        /* width: 100%; */
        /* height: auto; */
        /* display: flex; */
        /* gap:7rem;
        align-items: center; */
        
        > div {
          display: flex;

          > div img {
            padding: 0 2rem;
          }
        }

        /* > div {
          display: flex;
          flex-direction: row;
          gap: 5rem;
          width: 5rem;
          height: auto;
          justify-content: space-around;
        }

        > div img{
        height: fit-content;
        width: fit-content;

      } */
      }
    
    }
  }

    > .reviews {
      background-color: var(--component-background);
      width: 100%;
      height: auto;
      padding: 20.9rem 10rem 14rem;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5rem;
      overflow: hidden;

      > .explaim {
        max-width: 70rem;
        height: auto;
        display: flex;
        flex-direction: column;
        gap: 6rem;
        position: relative;

        >img:nth-child(1) {
          position: absolute;
          top:14rem;
          display: none;

                    
        @media screen and (max-width:658px){
          top: 19rem;
        }
        }

        >img:nth-child(2) {
          position: absolute;
          top:24rem;
          right: 0;
          transform: scaleX(-1);
          -webkit-transform: scaleX(-1);
          display: none;

          
        @media screen and (max-width:658px){
          top: 33rem;
        }
        }

        > h2 {
          color: var(--txt-title-four);
          text-align: center;
          font-size: 3.5rem;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;

          &::before{
          content: ' ';
          width: 7rem;
          height: .5rem;
          display: flex;
          background: linear-gradient(225deg, #01C38E 0%, rgba(65, 135, 63, 0.50) 100%);
        }
        }

        > p {
          color: var(--txt-footer);
          text-align: center;
          padding: 0 7rem;
          display: none;
        }
      }

      > .users-review {
        width: 100%;
        height: auto;

      }

      @media screen and (max-width:768px){
      padding: 20.9rem 2rem 14rem;

    }

    }
  }

  > .cases {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    padding: 4rem 10rem 15rem;
    align-items: center;
    justify-content: center;
    gap: 5.7rem;
    position: relative;

    > .arrUp{
      position: absolute;
      top: -15rem;
      left: 15rem;

      @media screen and (max-width:1024px){
        left: 0;
      }
    }

    > .arrDown{
      position: absolute;
      top: -15rem;
      right: 15rem;
      z-index: 1;

      @media screen and (max-width:1024px){
        top: -8rem;
      }

      @media screen and (max-width:680px){
        right: 0;
      }
    }

    > .title {
      max-width: 48rem;
      height: auto;
      text-align: center;
      z-index: 10;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

      &::before{
        content:' ';
        width: 6.9rem;
        height: .5rem;
        background: linear-gradient(225deg, #01C38E 0%, rgba(65, 135, 63, 0.50) 100%);
      }
      
      > h2{
        font-weight: 400;
        font-size: 3.5rem;
      }
    }

    > .cases-card{
      width: 100%;
      place-items: center;
      align-items: center;
      height: auto;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 2.5rem;
      
      > div div  {
        flex-direction: row;
        max-width:60rem;
        align-items: center;
        height: auto;

        > .card-img {
          background-color: var(--component-background);
          width: 15rem;
          height: 6rem;
          border-radius: 1rem;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        > .card-txt{
          width: auto;
          height: auto;
        }
      }

      @media screen and (max-width:1024px){
      grid-template-columns: 1fr;
    }
      
    }

    @media screen and (max-width:1200px){
      padding: 4rem 5rem 15rem;

    }
    
  }

`

const Footer = styled.footer`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--component-background);
  padding: 4rem 10rem 1rem;
  gap: 10rem;


  > .foot-one{
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-evenly;
    gap: 7rem;

    > .info1{
      width: auto;
      height: auto;

      > p{
        color: var(--txt-footer);
        max-width: 37rem;
        height: auto;
      }
    }

    > .info2{
      display: flex;
      flex-direction: column;
      width: auto;
      height: auto;
      gap: 1.7rem;

      > h4{
        color: var(--txt-footer);
      }

      > .info2-links{
        display: flex;
        flex-direction: column;
        gap: 2rem;

        > a{
          text-decoration: none;
          color: var(--txt-footer);
        }
      }
      
    }

    > .info3{
      display: flex;
      flex-direction: column;
      width: auto;
      height: auto;
      gap: 1.9rem;
      justify-content: flex-start;

      > h4, p, span{
        color:var(--txt-footer);
      }

      > p {
        max-width: 30rem;
        text-align: start;
        height: auto;
      }
    }
  }

  > .foot-two{
    width: 100%;
    height: auto;
    display: grid;
    place-items: center;

    > p{
      color: var(--txt-footer);
    }
  }

  @media screen and (max-width:1024px){
    padding: 4rem 5rem 1rem;
    
  }
`


function Mainpage () {
  return ( 
    <>
    <header>
      <NavBar/>
    </header>      
      <Main>
        
        <div className="services" id="services">
          <div className="title-service">
              <h2><strong>Nossos Serviços</strong></h2>
          </div>

          <div className="card-service">
            <Fade direction="up" duration={1000}>
          <Card>
            <img src={mobileico} alt="Icone de celular" />
            <h3>Connect Estoque</h3>
            <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
          </Card>
          <Card>
          <img src={codeico} alt="Icone de código" />
            <h3>Consultoria</h3>
            <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
          </Card>
          <Card>
          <img src={dash} alt="Icone de dashboard" />
            <h3>Connect Hub</h3>
            <p>A Website is an extension of yourself and we can help you to express it properly. Your website is your number one marketing asset because we live in a digital age.</p>
          </Card>
          </Fade>
          </div>
        </div>

        <div className="about" id="about">
        <img src={ellipse} alt="Imagem de uma esfera verde" />
        <img src={ellipse} alt="Imagem de uma esfera verde" />

          <div className="about-and-video">
          <img src={ellipse} alt="Imagem de uma esfera verde" />
            <div className="about-text">  
            <Fade direction="left" childClassName="about-text"> 
              <h2>Sobre a Empresa</h2>

              <p>We <span>add development capacity</span> to tech teams. Our value isn’t limited to building teams but is equally distributed across the project lifecycle. We are a custom software development company that guarantees the successful delivery of your project.</p>

              <a href="">See more Informations ➡</a>

            </Fade>
            </div>

            {/* <div className="about-video"> */}
            <Fade direction="right" className="about-video">
              <iframe className="iframe" width="100%" height="100%" src="https://www.youtube.com/embed/LFOx-vmYrts?si=vpJszRlx-51nx9wc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            </Fade>           
            {/* </div> */}
          </div>

        <div className="partners">
          <h2>Parceiros</h2>
          <div className="brands">
            <Marquee pauseOnHover={true} autoFill={true} className="marque">

            <img src={brand1} alt="Logo parceiro" />
            <img src={brand2} alt="Logo parceiro" />
            <img src={brand3} alt="Logo parceiro" />
            <img src={brand4} alt="Logo parceiro" />
            <img src={brand5} alt="Logo parceiro" />
            <img src={brand6} alt="Logo parceiro" />          
            </Marquee>
            
          </div>
        </div>

        <div className="reviews">
          {/* <div className="explaim"> */}
          <Fade direction="up" className="explaim">
            {/* <img src={aspasico} alt="Imagem aspas" /> */}
            {/* <img src={aspasico} alt="Imagem aspas" /> */}
            <h2>Por que os clientes adoram <br/> trabalhar conosco</h2>
            <p>Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.</p>
          </Fade>
          {/* </div> */}
          <div className="users-review">
            <Fade direction="up">
              <UserReview />
            </Fade>
          </div>
        </div>

        </div>

        <div className="cases" id="cases">
          <img className="arrUp" src={arrowUp} alt="Seta para cima" />
          <img className="arrDown" src={arrowDown} alt="Seta para baixo" />
          <div className="title">
            <h2>Our recent <br/> 
              <strong>Case studies</strong>
            </h2>
          </div>
          <div className="cases-card">
            <Fade direction="left" >
            <Card>
              <div className="card-img">
                <img src={rocketico} alt="Icone" />
              </div>
              <div className="card-txt">
                <h3>Case 1</h3>
                <p>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
              </div>
            </Card>
            <Card>
            <div className="card-img">
                <img src={rocketico} alt="" />
              </div>
              <div className="card-txt">
                <h3>Case 1</h3>
                <p>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
              </div>
            </Card>
            </Fade>

            <Fade direction="right">
            <Card>
            <div className="card-img">
                <img src={rocketico} alt="" />
              </div>
              <div className="card-txt">
                <h3>Case 1</h3>
                <p>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
              </div>
            </Card>
            <Card>
            <div className="card-img">
                <img src={rocketico} alt="" />
              </div>
              <div className="card-txt">
                <h3>Case 1</h3>
                <p>Unlike other companies, we are a UX first development company. Projects are driven by designers and they make sure design and experiences translate to code.</p>
              </div>
            </Card>
            </Fade>
          </div>
        </div>


      </Main>
      
      <Footer>
        <div className="foot-one">
          <div className="info1">
            <img src={logo} alt="Logo da empresa" />
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
          </div>
          <div className="info2">
            <h4>Links</h4>
            <div className="info2-links">
              <a href="">About Us</a>
              <a href="">Services</a>
              <a href="">Case Studies</a>
            </div>
          </div>
          <div className="info3">
            <h4>Contact us</h4>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. </p>
            <span>+923183561921</span>
          </div>

        </div>
        <div className="foot-two">
            <p>© 2023 Copyright by IK Developers. All rights reserved.</p>
        </div>
      </Footer>
    </>
   );
}

export default Mainpage;
