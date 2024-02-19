import React from 'react';
import iCoffee from '../../../img/img-hero.png'
import S from './Enjoy.module.css'
import Cup from '../../../Header/img/coffee-cup.png'

export const Enjoy = () => {
  return (
    <div className={S.container}>
      <div className={S.imgContainer}>
        <div className={S.src}>
          <img src={iCoffee} alt="iCoffee"/>
        </div>
        <div className={S.text}>
          <div className={S.enjoyDiv}><i className={S.iText}>Enjoy</i> premium coffee at our charming cafe</div>
          <div className={S.invite}>With its inviting atmosphere and delicious coffee options, the Coffee House Resource
            is a popular
            destination for coffee lovers and those seeking a warm and inviting space to enjoy their favorite beverage.
          </div>
          <div className={S.buttonA}>
            <a href="/Coffee_House/menu/">
              <div className={S.button}>
                <p>Menu</p>
                <img src={Cup} alt="Cup"/>
              </div>
            </a>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Enjoy;