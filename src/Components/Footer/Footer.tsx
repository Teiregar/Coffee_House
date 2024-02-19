import React from 'react';
import S from './Footer.module.css'
import tw from './svg/button-icon-tw.svg'
import inst from './svg/button-icon-inst.svg'
import face from './svg/button-icon-face.svg'
import geo from './svg/geo.svg'
import phone from './svg/phone.svg'
import clock from './svg/clock.svg'

export const Footer = () => {
  return (
    <div id='c4' className={S.container}>
      <div className={S.containerAll}>
        <div className={S.text}>
          <div>Sip, Savor, Smile. <i>It’s coffee time!</i></div>
          <div className={S.icons}>
            <img src={tw} alt=""/>
            <img src={inst} alt=""/>
            <img src={face} alt=""/>
          </div>
        </div>
        <div className={S.contactUs}>
          <div> Contact us</div>
          <div><img src={geo} alt=""/> 8558 Green Rd., LA</div>
          <div><img src={phone} alt=""/> +1 (603) 555-0123</div>
          <div><img src={clock} alt=""/> Mon-Sat: 9:00 AM – 23:00 PM</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;