import {  stack as Menu } from 'react-burger-menu'
import {} from '../styles/burger.css'


function BurgerMenu () {
  return ( 
    <Menu right >
     <div className="nav-links-mob">
          <a href="#navbar">Home</a>
          <a href="">Sobre</a>
          <a href="">Serviços</a>
      </div>
    </Menu>
   );
}

export default BurgerMenu ;