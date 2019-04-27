import React, {Component} from "react";
import Header from "./Header"
import Footer from "./Footer"
import Body from "./Body";
import Menu from "./Menu";

class HomePage extends Component {
    render() {
        return (
            <div className="home">
                <Header/>
                <div className={"center"}>
                    <Body/>
                </div>
                <Footer/>
            </div>
        );
    }
}

export default HomePage;