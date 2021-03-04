import React from 'react';
import { withRouter } from 'react-router-dom';

import './items.styles.scss';

const Items = ({ title, imageUrl, size, history, linkUrl, match }) => (
  <div
    className={`${size} items`}
    onClick={() => history.push(`${match.url}${linkUrl}`)}
  >
    <div
      className='background-image'
      style={{
        backgroundImage: `url(${imageUrl})`
      }}
    />
    <div className='content'>
      <h1 className='title'>{title.toUpperCase()}</h1>
      <span className='subtitle'>food</span>
    </div>
  </div>
);

export default withRouter(Items);
