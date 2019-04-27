import React, { Component } from "react";
import Menu from "./Menu"
//import PropTypes from 'prop-types';

class Body extends Component {

    render() {
        return (
            <div className="body">
                <Menu/>
                <img src="/imgs/main01.png" alt="picture"/>
            </div>
        );
    }
}

export default Body;