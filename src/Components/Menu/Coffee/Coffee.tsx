import React from 'react';
import Coffee1 from './img/coffee-1.png'
import Coffee2 from './img/coffee-2.png'
import Coffee3 from './img/coffee-3.png'
import Coffee4 from './img/coffee-4.png'
import Coffee5 from './img/coffee-5.png'
import Coffee6 from './img/coffee-6.png'
import Coffee7 from './img/coffee-7.png'
import Coffee8 from './img/coffee-8.png'
import S from './Coffee.module.css'
import Menu from "../Menu";


const Coffee = () => {

  const srcCoffee1: string = Coffee1 as string
  const srcCoffee2: string = Coffee2 as string
  const srcCoffee3: string = Coffee3 as string
  const srcCoffee4: string = Coffee4 as string
  const srcCoffee5: string = Coffee5 as string
  const srcCoffee6: string = Coffee6 as string
  const srcCoffee7: string = Coffee7 as string
  const srcCoffee8: string = Coffee8 as string

  const coffeeData = [
    {
      id: 1,
      src: srcCoffee1,
      title: 'Irish coffee',
      description: 'Fragrant black coffee with Jameson Irish whiskey and whipped milk',
      price: '$7.00'
    },
    {
      id: 2,
      src: srcCoffee2,
      title: 'Kahlua coffee',
      description: 'Classic coffee with milk and Kahlua liqueur under a cap of frothed milk',
      price: '$7.00'
    },
    {
      id: 3,
      src: srcCoffee3,
      title: 'Honey raf',
      description: 'Espresso with frothed milk, cream and aromatic honey',
      price: '$5.50'
    },
    {
      id: 4,
      src: srcCoffee4,
      title: 'Ice cappuccino',
      description: 'Cappuccino with soft thick foam in summer version with ice',
      price: '$5.00'
    },
    {id: 5, src: srcCoffee5, title: 'Espresso', description: 'Classic black coffee', price: '$4.50'},
    {
      id: 6,
      src: srcCoffee6,
      title: 'Latte',
      description: 'Espresso coffee with the addition of steamed milk and dense milk foam',
      price: '$5.50'
    },
    {
      id: 7,
      src: srcCoffee7,
      title: 'Latte macchiato',
      description: 'Espresso with frothed milk and chocolate',
      price: '$5.50'
    },
    {
      id: 8,
      src: srcCoffee8,
      title: 'Coffee with cognac',
      description: 'Fragrant black coffee with cognac and whipped cream',
      price: '$6.50'
    },
  ]

  return (
    <div>
      <Menu/>
      <div className={S.container}>
        {coffeeData.map((coffee) => (
          <div className={S.infBlock} key={coffee.id}>
            <div className={S.imgDiv}>
              <img className={S.img} src={coffee.src} alt={coffee.title}/>
            </div>
            <div className={S.textContainer}>
              <div className={S.titleDiv}>{coffee.title}</div>
              <div className={S.descriptionDiv}>{coffee.description}</div>
              <div className={S.priceDiv}>{coffee.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Coffee;