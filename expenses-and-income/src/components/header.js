import React from 'react';
import logo from '../images/icon.png'
import '../style/style.css';

function Header() {
    return (
      <div className="header">
        <img className="header__logo" src={logo} alt={"Логотип"}/>
        <div className="header__block">
          <h1 className="header__name">Иван</h1>
          <h2 className='header__name_app'>Расходы и доходы</h2>
        </div>
        
      </div>
    );
  }
  
  export default Header; 