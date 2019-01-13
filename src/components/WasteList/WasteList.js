import React, { Component } from 'react';
import './WasteList.scss';
import Wasteitem from '../WasteItem/Wasteitem';

class WasteList extends Component {

    render() {

        let wasteItemsList = null;

        if (this.props.wasteResults.length > 0) {
            wasteItemsList = this.props.wasteResults.map((wasteItem, index) => {
                return <Wasteitem
                    clicked={() => this.props.addToFavourites(wasteItem)}
                    title={wasteItem.title}
                    body={wasteItem.body}
                    favourite={wasteItem.favourite}
                    key={index}
                />
            })
        }

        return (
            <div className="waste-list">
                {wasteItemsList}
            </div>
        );
    }
}

export default WasteList;