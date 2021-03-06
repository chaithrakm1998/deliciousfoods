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
            name: 'The Indi Grill',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipNh0GgcxqrZg7TYC2v7yK8RQ1FAt2MGcmegJP0c=w408-h271-k-no',
            price: 25
          },
          {
            id: 12,
            name: 'Fanooz Restaurant',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipMYlZDFguT8z-28487s0b78SAObG4S1wusKAxL_=w408-h306-k-no',
            price: 18
          },
          {
            id: 13,
            name: 'Jewel of Nizam',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipM4gPjiQvc34AJnUAWl70Tz3yg21x4reIfnVMYC=w408-h339-k-no',
            price: 35
          },
          {
            id: 14,
            name: 'Okra',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipMZItTljiBAtDPjkARptI_rDxd-zFXYR0Sk6A-t=w408-h272-k-no',
            price: 25
          },
          {
            id: 15,
            name: 'Firdaus',
            imageUrl: 'https://lh5.googleusercontent.com/p/AF1QipMISlE68Q6qb69qm_94GWramBWiYDHCcAG6DT-_=w408-h306-k-no',
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

