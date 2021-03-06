import React from 'react';

import FoodItems from '../../components/food-items/food-items.component';

//import './directory.styles.scss';

class Bangalore extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
            id: 21,
            name: ' Beer and Nachos',
            imageUrl: 'https://i.ndtvimg.com/i/2017-03/nachos_620x350_61488366718.jpg',
            price: 125
          },
          {
            id: 22,
            name: 'Benne Masala Dosa',
            imageUrl: 'https://i.ndtvimg.com/i/2017-03/dosa_620x350_61488363369.jpg',
            price: 90
          },
          {
            id: 23,
            name: 'Char Siu Bao',
            imageUrl: 'https://i.ndtvimg.com/i/2017-03/bao_620x350_81488363981.jpg',
            price: 90
          },
          {
            id: 24,
            name: 'Pasta ',
            imageUrl: 'https://i.ndtvimg.com/i/2016-06/pasta-625_625x350_71466417864.jpg',
            price: 165
          },
          {
            id: 25,
            name: 'Mysore Pak',
            imageUrl: 'https://i.ndtvimg.com/i/2016-10/mysore-pak_620x350_81477299288.jpg',
            price: 185
          }
      ]
    };
  }

  render() {
    return (
      <div className='bangalorefood'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <FoodItems key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Bangalore;

