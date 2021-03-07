import React from 'react';
import RESTAURANT_DATA from './restaurant-data'
import Items from '../../components/items/items.component'

class RestaurantPage extends React.Component {
 constructor(props) {
     super(props);
    
     this.state = {

        collections: RESTAURANT_DATA[this.props.match.params.id].items
     }
 }
 render() {
     const {collections} = this.state;
     return (<div className="restaurantpage">
         {
             collections.map(({id,title,imageUrl})=>(
                 <Items key={id} title={title} imageUrl={imageUrl}></Items>
             ))
         }
     </div>)
 }
};
export default RestaurantPage;