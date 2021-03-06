import React from 'react';

import Items from '../items/items.component'

const CollectionPreview = ({ title, items }) => (
  <div className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
      {items
        .filter((item, idx) => idx < 4)
        .map(item => (
          <Items key={item.id} item={item} />
        ))}
    </div>
  </div>
);

export default CollectionPreview;
