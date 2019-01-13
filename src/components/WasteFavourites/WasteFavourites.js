import React, { Component } from 'react';
import './WasteFavourites.scss';
import Wasteitem from '../WasteItem/Wasteitem';

class WasteFavourites extends Component {

    render() {

        let wasteItemsList = null;
        if (this.props.wasteFavourites.length > 0) {

            wasteItemsList = this.props.wasteFavourites.map((wasteItem, index) => {
                let wasteItemFavorite = {
                    title: wasteItem.title,
                    favourite: wasteItem.favourite,
                    body: wasteItem.body
                }

                return <Wasteitem
                    clicked={() => this.props.removeFromFavourites(wasteItemFavorite)}
                    title={wasteItem.title}
                    body={wasteItem.body}
                    favourite={wasteItem.favourite}
                    key={index}
                />
            })
        }

        return (
            <div className="wasteFavourites">
                <h2 className="wasteFavourites-title">Favourites</h2>
                {wasteItemsList}
            </div>
        );
    }
}

export default WasteFavourites;