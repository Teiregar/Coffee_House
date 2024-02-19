import React from 'react';
import Tea1 from './img/tea-1.png'
import Tea2 from './img/tea-2.png'
import Tea3 from './img/tea-3.png'
import Tea4 from './img/tea-4.png'
import S from './Tea.module.css'
import Menu from "../Menu";

const Tea = () => {

  const srcTea1: string = Tea1 as string
  const srcTea2: string = Tea2 as string
  const srcTea3: string = Tea3 as string
  const srcTea4: string = Tea4 as string

  const teaData = [
    {
      id: 1,
      src: srcTea1,
      title: 'Moroccan',
      description: 'Fragrant black tea with the addition of tangerine, cinnamon, honey, lemon and mint',
      price: '$4.50'
    },
    {
      id: 2,
      src: srcTea2,
      title: 'Ginger',
      description: 'Original black tea with fresh ginger, lemon and honey',
      price: '$5.00'
    },
    {
      id: 3,
      src: srcTea3,
      title: 'Cranberry',
      description: 'Invigorating black tea with cranberry and honey',
      price: '$5.00'
    },
    {
      id: 4,
      src: srcTea4,
      title: 'Sea buckthorn',
      description: 'Toning sweet black tea with sea buckthorn, fresh thyme and cinnamon',
      price: '$5.50'
    },
  ]

  return (
    <div>
      <Menu/>
      <div className={S.container}>
        {teaData.map((tea) => (
          <div className={S.infBlock} key={tea.id}>
            <div className={S.imgDiv}>
              <img className={S.img} src={tea.src} alt={tea.title}/>
            </div>
            <div className={S.textContainer}>
              <div className={S.titleDiv}>{tea.title}</div>
              <div className={S.descriptionDiv}>{tea.description}</div>
              <div className={S.priceDiv}>{tea.price}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tea;