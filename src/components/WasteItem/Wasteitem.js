import React, { Component } from 'react';
import './WasteItem.scss';
import sprite from '../../assets/icons/sprite.svg';


class result extends Component {

    decodeHTML(encodedHTML) {
        let parser = new DOMParser();
        let decodedHTML = parser.parseFromString(encodedHTML, 'text/html');

        return {
            __html: decodedHTML.body.textContent
        };
    }

    render() {

        let svgClass = this.props.favourite ? 'waste-icon__svg-favourite' : '';

        return (
            <div className="waste">
                <div className="waste-headline">
                    <div className="waste-icon">
                        <span
                            className="waste-icon__controller"
                            onClick={this.props.clicked}
                        >
                            <svg className={'waste-icon__svg ' + svgClass}>
                                <use xlinkHref={sprite + '#icon-star'}></use>
                            </svg>
                        </span>
                    </div>
                    <p className="waste-title">{this.props.title}</p>
                </div>

                <div className="waste-body" dangerouslySetInnerHTML={this.decodeHTML(this.props.body)}>
                </div>
            </div>
        )
    }
};

export default result;