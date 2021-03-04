import React from 'react';

import Items from '../items/items.component';

import './directory.styles.scss';

class Directory extends React.Component {
  constructor() {
    super();

    this.state = {
      sections: [
        {
            title: 'Hyderabad',
            imageUrl: '<img src="https://img2.pngio.com/hyderabad-png-6-png-image-hyderabad-png-1077_485.png" alt="Hyderabad png 6 » PNG Image">',
            id: 1,
            linkUrl: 'Hyderabad'
            },
            {
            title: 'Bangalore',
            imageUrl: '<img src="https://www.pngjoy.com/pngm/217/4237264_gamora-bangalore-skyline-painting-hd-png-download.png" alt="Gamora - Bangalore Skyline Painting, HD Png Download@pngjoy.com">',
            id: 2,
            linkUrl: 'Bangalore'
            },
            {
            title: 'Kochi',
            imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
            id: 3,
            linkUrl: 'Kochi'
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

