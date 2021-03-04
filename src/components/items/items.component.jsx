import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import {Link} from 'react-router-dom';

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
      <span>
          <a href='/hotels'>foods</a>
      </span>
      
    </div>
  </div>
);

export default withRouter(Items);
