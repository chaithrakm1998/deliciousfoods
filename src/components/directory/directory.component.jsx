import React from 'react';

import Items from '../items/items.component';

import './directory.styles.scss';

class Directory extends React.Component {
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
        {
          title: 'HYDERABAD',
          imageUrl: 'https://www.mylescars.com/img/myles_internal_pages/1579589346_Z-hyd-1.png',
          id: 2,
          linkUrl: ''
        },
        {
          title: 'BANGALORE',
          imageUrl: 'https://www.pngjoy.com/pngm/217/4237264_gamora-bangalore-skyline-painting-hd-png-download.png',
          id: 3,
          linkUrl: ''
        }
      ]
    };
  }

  render() {
    return (
      <div className='directory-menu'>
        {this.state.sections.map(({ id, ...otherSectionProps }) => (
          <Items key={id} {...otherSectionProps} />
        ))}
      </div>
    );
  }
}

export default Directory;

