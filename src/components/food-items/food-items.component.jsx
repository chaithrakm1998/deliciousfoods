import React from 'react';
import { Route, withRouter } from 'react-router-dom';

import './food-items.styles.scss';

const FoodItems = ({ title, imageUrl, size, history, linkUrl, match }) => (
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
    
  </div>
  
);

export default withRouter(FoodItems);
