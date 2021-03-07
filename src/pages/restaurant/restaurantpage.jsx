import React from 'react';
import RESTAURANT_DATA from './restaurant-data.component'
import Items from '../../components/items/items.component'

class RestaurantPage extends React.Component {
 constructor(props) {
     super(props);
     console.error('id=',RESTAURANT_DATA[this.props.match.params.id].sections
     )
     this.state = {

        collections: RESTAURANT_DATA[this.props.match.params.id].sections
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