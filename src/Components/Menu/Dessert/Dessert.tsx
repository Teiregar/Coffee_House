import React from 'react';
import Dessert1 from './img/dessert-1.png'
import Dessert2 from './img/dessert-2.png'
import Dessert3 from './img/dessert-3.png'
import Dessert4 from './img/dessert-4.png'
import Dessert5 from './img/dessert-5.png'
import Dessert6 from './img/dessert-6.png'
import Dessert7 from './img/dessert-7.png'
import Dessert8 from './img/dessert-8.png'
import S from "../Coffee/Coffee.module.css";
import Menu from "../Menu";

const Dessert = () => {
  const srcDessert1: string = Dessert1 as string
  const srcDessert2: string = Dessert2 as string
  const srcDessert3: string = Dessert3 as string
  const srcDessert4: string = Dessert4 as string
  const srcDessert5: string = Dessert5 as string
  const srcDessert6: string = Dessert6 as string
  const srcDessert7: string = Dessert7 as string
  const srcDessert8: string = Dessert8 as string

  const dessertData = [
    {
      id: 1,
      src: srcDessert1,
      title: 'Marble cheesecake',
      description: 'Philadelphia cheese with lemon zest on a light sponge cake and red currant jam',
      price: '$3.50'
    },
    {
      id: 2,
      src: srcDessert2,
      title: 'Red velvet',
      description: 'Layer cake with cream cheese frosting',
      price: '$4.00'
    },
    {
      id: 3,
      src: srcDessert3,
      title: 'Cheesecakes',
      description: 'Soft cottage cheese pancakes with sour cream and fresh berries and sprinkled with powdered sugar',
      price: '$4.50'
    },
    {
      id: 4,
      src: srcDessert4,
      title: 'Creme brulee',
      description: 'Delicate creamy dessert in a caramel basket with wild berries',
      price: '$3.50'
    },
    {
      id: 5,
      src: srcDessert5,
      title: 'Pancakes',
      description: 'Tender pancakes with strawberry jam and fresh strawberries',
      price: '$4.50'
    },
    {
      id: 6,
      src: srcDessert6,
      title: 'Honey cake',
      description: 'Classic honey cake with delicate custard',
      price: '$4.50'
    },
    {
      id: 7,
      src: srcDessert7,
      title: 'Chocolate cake',
      description: 'Cake with hot chocolate filling and nuts with dried apricots',
      price: '$5.50'
    },
    {
      id: 8,
      src: srcDessert8,
      title: 'Black forest',
      description: 'A combination of thin sponge cake with cherry jam and light chocolate mousse',
      price: '$6.50'
    },
  ]

  return (
    <div>
      <Menu/>
      <div className={S.container}>
        {dessertData.map((des) => (
          <div className={S.infBlock} key={des.id}>
            <div className={S.imgDiv}>
              <img className={S.img} src={des.src} alt={des.title}/>
            </div>
            <div className={S.textContainer}>
              <div className={S.titleDiv}>{des.title}</div>
              <div className={S.descriptionDiv}>{des.description}</div>
              <div className={S.priceDiv}>{des.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>

  );
};

export default Dessert;