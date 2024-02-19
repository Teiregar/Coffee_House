import React from 'react';
import S from './Burger.module.css'

const Burger = () => {



  return (
    <div>
      <div className={S.hamburgerMenu}>
        <input id={S.menu__toggle} type="checkbox"/>
        <label className={S.menu__btn} htmlFor={S.menu__toggle}>
          <span></span>
        </label>
        <ul className={S.menu__box}>
          <li><a className={S.menu__item} href="#">Favorite coffee</a></li>
          <li><a className={S.menu__item} href="#">About</a></li>
          <li><a className={S.menu__item} href="#">Mobile app</a></li>
          <li><a className={S.menu__item} href="#">Contact us</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Burger;