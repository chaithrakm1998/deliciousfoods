import React from 'react';

import Items from '../../components/items/items.component';
import HOTEL_DATA from './hotels.data';


class HotelPage extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        <div id= 'KOCHI'>
  <span>Success!</span>
</div>
        
      ]
    };
  }

  render() {
    return (
      <div className='hotel-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <HOTEL_DATA key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default HotelPage;
