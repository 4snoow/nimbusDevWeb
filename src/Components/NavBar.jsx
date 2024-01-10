import styled from "styled-components";
import logo from "/logo.png";
import Button from "./Button";
import workImg from "/main-img.png";
import BurgerMenu from "./BurgerMenu";


const HeaderSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 6rem;
  width: 100%;
  height: 100%;
  background-color: var(--component-background);


  > .outdoor{
    width: 100%;
    height: 55rem;
    display: flex;
    justify-content: space-around;
    padding: 1rem 10rem;
    gap: 3rem;

    > .info1{
      display: flex;
      width: auto;
      height: auto;
      flex-direction: column;
      justify-content: space-evenly;

      > button{
          padding: 2rem;
          max-width: auto;
          height: auto;
        }

      > .texts{
        display: flex;
        width: 100%;
        height: auto;
        flex-direction: column;
        gap: 1rem;   

       > h1{
        color: var(--txt-one);
        font-size: 5rem;
        width: 100%;

        @media (max-width:1024px) {
          font-size: 3.5rem;
          text-wrap:nowrap;
        }

        @media (max-width:768px) {
          font-size: 3rem;
        }

       > span{
          font-weight: 700;
          background: linear-gradient(180deg, #01C38E 0%, rgba(65, 135, 63, 0.00) 100%);
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }


      }

      > p{
        color: var(--txt-two);
        font-size: 1.8rem;

        @media (max-width:1024px) {
          font-size: 1.5rem;
        }

      }

      @media (max-width:768px){
        align-items: center;
    }

      }

      @media (max-width:768px){
        gap: 2rem;
        width: 100%;
        align-items: center;
        justify-content: center;
        text-align: center;
    }
    }

    > .info-img{
      width: 60rem;
      height: 54rem;
      display: flex;
      align-items: center;



      > img {
        width: 100%;
        height: auto;
        object-fit: contain;

      @media (max-width:768px){
        width: 70%;
        height: auto;
    }
      }

      @media (max-width:768px){
        justify-content: center;
        width: 100%;
        height: auto;
     }
    }

    @media (max-width:1024px){
      padding: 1rem 5rem;
    }
    @media (max-width:768px){
      padding: 1rem 10rem;
      flex-direction: column-reverse;
      align-items: center;
      justify-content: center;
      margin-top: 6rem;
    }
    @media screen and (max-width:480px){
      padding: 1rem 2rem;

      }
  }
`

const Header = styled.div`
  width: 100%;
  height: auto;
  padding: 1rem 12rem;
  display: flex;
  justify-content: space-between;
  background-color: var(--component-background);

  > img{
    width: auto;
    height: auto;
  }

  > .nav-links{
    display: flex;
    width: 100%;
    height: auto;
    align-items: center;
    justify-content: center;
    gap: 6rem;

    > a{
    text-decoration: none;
    color:var(--txt-one);
  }

  @media (max-width:768px){
     display: none;
    }
  } 

  > .buttons{
    display: flex;
    gap: 2rem;
    align-items: center;
    width: auto;
    height: auto;
  }


  @media (max-width:768px){
      padding: 1rem 7rem;
      position: fixed;
      z-index: 1000;
    }
`

function NavBar() {
  return ( 
    <HeaderSection>
      <Header id="navbar">
        <img src={logo} alt="Logo da página" title="Logo da página" />
        
        <div className="nav-links">
          <a href="#navbar">Home</a>
          <a href="">Sobre</a>
          <a href="">Serviços</a>
        </div>
        
        <div className="buttons">
        <Button>
          Contato
        </Button>

        <BurgerMenu/>
        </div>

        
      </Header>

    <div className="outdoor">
      <div className="info1">
        <div className="texts">
          <h1>Great <span>Product</span> is <br/>
            <strong>built by great</strong> <span>teams</span></h1>
          <p>We help build and manage a team of world-class developers <br/> to bring your vision to life</p>
        </div>       
        <Button>Entre em contato</Button>
      </div>
      <div className="info-img">
        <img src={workImg} alt="Imagem de pessoas conversando e trabalhando" />
      </div>
    </div>

    </HeaderSection>
   );
}

export default NavBar;