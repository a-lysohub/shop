import React, { Component } from 'react';
import "./Footer.scss";
import {Link} from "react-router-dom";
import footerMenu from "./Footer-menu";
//import PropTypes from 'prop-types';

class Footer extends Component {

    render() {
        const footerMenuList = footerMenu.map(({link, label}, i) => (
            <li key={i}><Link to={link}>{label}</Link></li>
        ));
        return (
            <div className={"footer"}>
                <div className={"top-menu"}>
                    <p>Помощь клиентам</p>
                        <ul className={"menu-list"}>
                            {footerMenuList}
                        </ul>
                </div>
            </div>
        );
    }
}

export default Footer;