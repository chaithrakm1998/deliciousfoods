import React from 'react';

import FoodItems from '../../components/food-items/food-items.component';

//import './directory.styles.scss';

class Hyderabad extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
            id: 11,
            name: 'Mirchi ka Salan',
            imageUrl: 'https://image.scoopwhoop.com/w620/s3.scoopwhoop.com/ach/Hy/1.jpg.webp',
            price: 25
          },
          {
            id: 12,
            name: 'Hyderabadi Biryani',
            imageUrl: 'https://image.scoopwhoop.com/w620/s3.scoopwhoop.com/ach/Hy/2.jpg.webp',
            price: 18
          },
          {
            id: 13,
            name: 'Keema Samosa',
            imageUrl: 'https://image.scoopwhoop.com/w620/s3.scoopwhoop.com/ach/Hy/5.jpg.webp',
            price: 35
          },
          {
            id: 14,
            name: 'Malai Korma',
            imageUrl: 'https://image.scoopwhoop.com/w620/s4.scoopwhoop.com/ach/Hy/12.jpg.webp',
            price: 25
          },
          {
            id: 15,
            name: 'Burani Raita',
            imageUrl: 'https://s3.scoopwhoop.com/ach/Hy/new14.png',
            price: 18
          }
      ]
    };
  }

  render() {
    return (
      <div className='hyderabadfood'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <FoodItems key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Hyderabad;

