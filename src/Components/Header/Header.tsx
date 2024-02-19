import React from 'react';
import iLogo from './img/logo.png'
import iCup from './img/coffee-cup.png'
import S from './Header.module.css'
import Burger from "../Footer/Burger/Burger";

export const Header = () => {

  return (
    <div>
      {/*<div className={S.burgerButt}>*/}
      {/*  <Burger/>*/}
      {/*</div>*/}
      <div className={S.headerContainer}>
        <div>
          <a href="/Coffee_House/"><img src={iLogo} alt=""/></a>
        </div>
        <div className={S.burger}>
          <div className={S.navBar}>
            <div>Favorite coffee</div>
            <div>About</div>
            <div>Mobile app</div>
            <div>Contact us</div>
          </div>
          <div className={S.bottomContainer}>
            <a href="/Coffee_House/menu">
              <div className={S.bottom}>
                Menu
                <img src={iCup} alt=""/>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>

  );
};

export default Header;