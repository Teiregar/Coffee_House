import React from 'react';
import S from './About.module.css'
import about1 from '../../../img/about-1.png'
import about2 from '../../../img/about-2.png'
import about3 from '../../../img/about-3.png'
import about4 from '../../../img/about-4.png'

export const About = () => {
  return (
    <div id='c2' className={S.container}>
      <div>
        Resource is <i>the perfect and cozy place</i> where you can enjoy a variety of hot beverages,
        relax, catch up with
        friends, or get some work done.
      </div>
      <div className={S.imagesContainer}>
        <div className={S.imagesCol1}>
          <div><img src={about1} alt=""/></div>
          <div><img src={about2} alt=""/></div>

        </div>
        <div className={S.imagesCol2}>
          <div><img src={about3} alt=""/></div>
          <div><img src={about4} alt=""/></div>
        </div>
      </div>
    </div>
  );
};

export default About;