import React from 'react';
import S from './MobileApp.module.css'
import mobile from '../../../img/mobile-screens.png'
import google from './svg/button-google-play.svg'
import apple from './svg/button-app-store.svg'

export const MobileApp = () => {
  return (
    <div id='c3' className={S.container}>
      <div className={S.textContainer}>
        <div className={S.textDown}><i className={S.i}>Download</i> our apps to start ordering</div>
        <div className={S.textInfo}>Download the Resource app today and experience the comfort of ordering your favorite coffee from wherever you are</div>
        <div className={S.svgIcons}>
          <img src={apple} alt="apple"/>
          <img src={google} alt="google"/>
        </div>
      </div>
      <div className={S.mobileImg}><img src={mobile} alt="mobile"/></div>
    </div>
  );
};

export default MobileApp;