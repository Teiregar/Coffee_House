import React from 'react';
import S from './Menu.module.css'
import iCoffee from './img/Coffee.png'
import iTea from './img/Tea.png'
import iCake from './img/Cake.png'

const Menu = () => {
  return (
    <div>
      <div className={S.container}>
        <div className={S.textContainer}>
          <div className={S.text}>
            Behind each of our cups hides an <i>amazing surprise</i>
          </div>
        </div>
        <div className={S.buttonContainer}>
          <div className={S.button}>
            <a href="/Coffee_House/menu/">
              <div><span><img src={iCoffee} alt="Coffee"/></span>Coffee</div>
            </a>
            <a href="/Coffee_House/menu/tea">
              <div><span><img src={iTea} alt="Tea"/></span>Tea</div>
            </a>
            <a href="/Coffee_House/menu/dessert">
              <div><span><img src={iCake} alt="Cake"/></span>Dessert</div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;