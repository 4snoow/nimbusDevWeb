import styled from "styled-components";
import Slider from "react-slick";

import star from "/star-rate.png"
import aspasico from "/aspasico.png";
import rightArrow from "/arrow.png";



import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

const settings = {
       dots: false,
       infinite: true,
       speed: 500,
       slidesToShow: 1,
       slidesToScroll: 1,
       rows: 1,
       slidesToRow: 1,
       prevArrow: <ArrowPrev/>,
       nextArrow: <ArrowNext/>,
       responsive :[
        {
          breakpoint:768,
          settings: {
            arrows:false,
            autoplay: true,
            autoplaySpeed: 5000,
          }
        }
       ]
      //  adaptiveHeight: true
  }

const reviews = {
  
  two: [
    {
      id:0,
      rev: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
      pictures: [
        {
          image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          star: {star},
          name: "Fulano"
        },
        {
          image:'https://images.unsplash.com/photo-1704636487596-076a101c28bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          star: {star},
          name: "Fulano"
        },
        {
          image:'https://images.unsplash.com/photo-1587723958656-ee042cc565a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          star: {star},
          name: "Fulano"
        },
        {
          image:'https://images.unsplash.com/photo-1704402838495-7d2ac0798b8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          star: {star},
          name: "Fulano"
        },
      ]
    },
    {
      id:1,
      rev: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
      pictures: [
        {
          image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          star: {star},
          name: "Fulano"
        },
        {
          image:'https://images.unsplash.com/photo-1704636487596-076a101c28bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          star: {star},
          name: "Fulano"
        },
        {
          image:'https://images.unsplash.com/photo-1587723958656-ee042cc565a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          star: {star},
          name: "Fulano"
        },
        {
          image:'https://images.unsplash.com/photo-1704402838495-7d2ac0798b8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          star: {star},
          name: "Fulano"
        },
      ]
    },
    {
      id:2,
      rev: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
      pictures: [
        {
          image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          star: {star},
          name: "Fulano"
        },
        {
          image:'https://images.unsplash.com/photo-1704636487596-076a101c28bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          star: {star},
          name: "Fulano"
        },
        {
          image:'https://images.unsplash.com/photo-1587723958656-ee042cc565a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          star: {star},
          name: "Fulano"
        },
        {
          image:'https://images.unsplash.com/photo-1704402838495-7d2ac0798b8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          star: {star},
          name: "Fulano"
        },
      ]
    },
    {
      id:3,
      rev: "Without any doubt I recommend Alcaline Solutions as one of the best web design and digital marketing agencies. One of the best agencies I’ve came across so far. Wouldn’t be hesitated to introduce their work to someone else.",
      pictures: [
        {
          image:'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          star: {star},
          name: "Fulano"
        },
        {
          image:'https://images.unsplash.com/photo-1704636487596-076a101c28bf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          star: {star},
          name: "Fulano"
        },
        {
          image:'https://images.unsplash.com/photo-1587723958656-ee042cc565a1?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          star: {star},
          name: "Fulano"
        },
        {
          image:'https://images.unsplash.com/photo-1704402838495-7d2ac0798b8d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
          star: {star},
          name: "Fulano"
        },
      ]
    },
]
}


const Div = styled.div`
display: flex;
flex-direction: row;
width: 100%;
height: auto;
align-items: center;
justify-content: space-between;
padding: 0 20%;
/* padding: 1rem 25%; */
margin-top: 2rem;
gap: 1rem;


> .profiles{
  display: flex !important;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  justify-content: center !important;;
  max-width: 12.1rem;
  height: auto;

  > h4{
    color: var(--txt-two);
    font-size: 1.4rem;
  }

  > .file-pic{
    width: 10rem;
    height: 10rem;
    border-radius: 50%;
    overflow: hidden;

    > img{
      width: 100%;
      height: 100%;
      object-fit: fill;

    }
  }

  > .star{
    width: 100%;
    height: auto;

    > img{
      width: 100%;
      height: auto;
    }
  }
}

> .explaim-two {
        max-width: 100%;
        height: auto;
        display: flex;
        flex-direction: column;
        position: relative;

        >img:nth-child(1) {
          position: absolute;
          top:0;                 
        }

        >img:nth-child(2) {
          position: absolute;
          right: 0;
          bottom: 0;
          transform: scaleX(-1);
          -webkit-transform: scaleX(-1);
        }

        > p {
          color: var(--txt-footer);
          text-align: center;
          padding: 0 7rem;
        }
}

@media screen and (max-width:1024px){
  padding: 0 10%;
}

@media screen and (max-width:768px){
  padding: 0 5%;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

@media screen and (max-width:490px){
  padding: 0 5%;
}

`

const RightArrow = styled.button`

  width: 4.5rem;
  height: 4.5rem;
  display: flex;
  align-items: center;
  border-radius: 50%;

  > img{
    width: 100%;
    height: auto;
    object-fit: cover;
    transform: rotate(180deg);

  }

` 
const LeftArrow = styled.button`
 width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;

  > img{
    width: 100%;
    height: auto;
    object-fit: cover;
  }
`


function UserReview() {
  return ( 
    <>
    <Slider {...settings}>
    {reviews.two.map((item,index)=>{
          return(
            <>
                <Div key={index}>
                <div className="explaim-two">
                <img src={aspasico} alt="Imagem aspas" />
                <img src={aspasico} alt="Imagem aspas" />
                <p>{item.rev}</p>
             </div>
              </Div>

              <Div> 
              {item.pictures.map((picture, ind)=>{
                return(                             
                  <div key={ind} className="profiles">
                  <div className="file-pic">
                    <img src={picture.image} alt="Foto de perfil do usuário" />
                  </div>
                  <div className="star">
                    <img src={star} alt="Imagem de estrelas - satisfação" />
                  </div>
                  <h4>{picture.name}</h4>
                 </div>          
                )              
              })}
            </Div>
              
            </>
           
        )
  })}
         </Slider>
    </>
   );
}

function ArrowPrev(props){
  // eslint-disable-next-line react/prop-types
  const {onClick} = props;
  return(
    <>
    <LeftArrow style={{background:'black', border:'none', position: 'absolute', left: '0', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', zIndex:"10" }} className="custom-prev-arrow" onClick={onClick}>
      <img className="left"  src={rightArrow} alt="Flecha para esquerda" />
    </LeftArrow>
    </>
  )
}


function ArrowNext(props){
  // eslint-disable-next-line react/prop-types
  const {onClick} = props;
  return(
    <>
    <RightArrow style={{background:'black', border:'none',  position: 'absolute', right: '0', top: '50%', transform: 'translateY(-50%)', cursor: 'pointer', }} className="custom-next-arrow" onClick={onClick}>
      <img className="right" src={rightArrow} alt="Flecha para direita" />
    </RightArrow>
    </>
  )
}

export default UserReview;
