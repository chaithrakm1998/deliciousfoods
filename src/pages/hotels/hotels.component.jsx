import React from 'react';
import HOTEL_DATA from './hotels.data.js'
//embedding collection preview to shop component
import CollectionPreview from '../../components/collection-preview/collection-preview'

//class component as we need to deal with data/state
class HotelPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items:HOTEL_DATA
        }
    }
  
    render(){
        const {items} = this.state;
        return (<div className="hotel-page">
                {
                    items.map(({id, ...otheritemsProps}) => (
                        <CollectionPreview key={id} {...otheritemsProps}/>
                    ))
                }
            </div>
            )
    }
}

export default HotelPage;