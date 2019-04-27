import React, {Component} from 'react';
import "./Header.scss";
import headerMenu from "./Header-menu";
import {Link} from "react-router-dom";

class Header extends Component {
    render() {
        const headerMenuList = headerMenu.map(({link, label}, i) => (
            <li key={i}><Link to={link}>{label}</Link></li>
        ));
        return (
            <div className="header">
                <div className="top-menu">
                    <ul className="menu-list">
                    {headerMenuList}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Header;