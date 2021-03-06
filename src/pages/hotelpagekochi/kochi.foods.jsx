import React from 'react';

import FoodItems from '../../components/food-items/food-items.component';

//import './directory.styles.scss';

class Kochi extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
            id: 1,
            name: 'Fusion Bay',
            imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/Crab_dish_283230518878329_20200624211556.jpg',
            price: 220
          },
          {
            id: 2,
            name: 'Dal Roti',
            imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/flickr_restaurant_335.jpg',
            price: 280
          },
          {
            id: 3,
            name: 'Malabar Grills',
            imageUrl: 'https://www.holidify.com/images/cmsuploads/compressed/Indian_-_Food_20200624124822.jpg',
            price: 110
          },
          {
            id: 4,
            name: 'Biriyani',
            imageUrl: 'https://edge.ixigo.com/ixi-api/img/5333f07ee4b0d1113881683b_560x560.jpg',
            price: 160
          },
          {
            id: 5,
            name: 'Malabar prawn curry',
            imageUrl: 'https://edge.ixigo.com/ixi-api/img/5333f07fe4b0d1113881683c_560x560.jpg',
            price: 160
          }
      ]
    };
  }

  render() {
    return (
      <div className='kochifood'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <FoodItems key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Kochi;

