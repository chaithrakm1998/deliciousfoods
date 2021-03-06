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
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipPMDTuWFQa57-qCZrMfyJU0lZ9P9xEPmSKIUDk1=w408-h306-k-no',
            price: 220
          },
          {
            id: 2,
            name: 'Kochi Kitchen',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipPbIs3JGFOijHBbmdcrvTfvwhbd0AxzPTNYVqfE=w408-h544-k-no',
            price: 280
          },
          {
            id: 3,
            name: 'Mary,s kitchen',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipN5h8uMP3g3eZQiJs1D18TBXyaM5b4_aEy9FMmb=w408-h271-k-no',
            price: 110
          },
          {
            id: 4,
            name: 'fort cochin',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipPuPTNd_8I1v381IX_-OBScSuhkAKJVeP8IawaL=w408-h271-k-no',
            price: 160
          },
          {
            id: 5,
            name: 'Rice Boat',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipN_acxTyo2L8H7muCSxC2DiRf-AOfK7OF1QYhoE=w408-h306-k-no',
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

