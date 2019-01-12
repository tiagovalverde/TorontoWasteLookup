import React, { Component } from 'react';
import './WasteItem.scss';
import sprite from '../../assets/icons/sprite.svg';


class result extends Component {

    decodeHTML() {
        let encodedHTML = "&lt;ul&gt; &lt;li&gt;Empty and rinse (if necessary and possible) this item before placing it in the&amp;nbsp;&lt;strong&gt;Blue Bin&lt;/strong&gt;.&lt;/li&gt; &lt;li&gt;Any type of black or compostable plastic is not accepted and should be placed in the &lt;strong&gt;Garbage Bin&lt;/strong&gt;.&lt;/li&gt; &lt;/ul&gt;";
        let parser = new DOMParser();
        let decodedHTML = parser.parseFromString(encodedHTML, 'text/html');

        return {
            __html: decodedHTML.body.textContent
        };
    }

    getStarColor() {

    }

    render() {

        return (
            <div className="waste">
                <div className="waste-headline">
                    <span className="waste-icon">
                        <svg className="waste-icon__svg waste-icon__svg-favourite">
                            <use xlinkHref={sprite + '#icon-star'}></use>
                        </svg>
                    </span>
                    <p className="waste-title">Garbage (consider donation)</p>
                </div>

                <div className="waste-body" dangerouslySetInnerHTML={this.decodeHTML()}>
                </div>

            </div>
        )
    }
};

export default result;

