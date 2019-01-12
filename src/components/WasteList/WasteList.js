import React, { Component } from 'react';
import './WasteList.scss';
import Wasteitem from '../WasteItem/Wasteitem';

class WasteList extends Component {

    // check if any query was made

    render() {
        return (
            <div className="waste-list">
                <Wasteitem />
            </div>
        );
    }
}

export default WasteList;