import styled from "styled-components";
import logo from "/logo.png"
import Button from "./Button";
import workImg from "/main-img.png"


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
    justify-content:center;
    gap: 10rem;

    > .info1{
      display: flex;
      width: auto;
      height: auto;
      flex-direction: column;
      justify-content: space-evenly;

      > button{
          padding: 2rem 3rem;
        }

      > .texts{
        display: flex;
        width: 100%;
        height: auto;
        flex-direction: column;
        gap: 1rem;   

       > h1{
        color: var(--txt-one);
        font-size: clamp(2rem, 5.5rem, 4rem);
        width: 35rem;

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
      }

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
        object-fit: cover;
      }
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
  } 
`

function NavBar() {
  return ( 
    <HeaderSection>
      <Header>
        <img src={logo} alt="Logo da página" title="Logo da página" />

        <div className="nav-links">
          <a href="">Home</a>
          <a href="">Sobre</a>
          <a href="">Serviços</a>
        </div>

        <Button>
          Contato
        </Button>
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