import React from 'react';

import Items from '../../components/items/items.component';



class HotelPage extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
          title: 'KOCHI',
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSE0p_3wCocSgei9XyQbT3rmvaAYT6jMa1sqA&usqp=CAU',
          id: 1,
          linkUrl: ''
        },
        
      ]
    };
  }

  render() {
    return (
      <div className='hotel-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <Items key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default HotelPage;
