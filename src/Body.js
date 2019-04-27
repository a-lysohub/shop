import React, { Component } from "react";
import Menu from "./Menu"
//import PropTypes from 'prop-types';

import MainImage from "./imgs/main02.jpeg";

class Body extends Component {

    render() {
        return (
            <div className="body">
                <Menu/>
                <img src={MainImage} alt="kayaks"/>
            </div>
        );
    }
}

export default Body;