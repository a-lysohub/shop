import React, {Component} from "react";
import Footer from "./Footer";
import Header from "./Header";
import Body from "./Body";

class Contacts extends Component {

    render() {
        return (
            <div>
                <Header/>
                    <div className={"contacts"}>
                        <h1>Напишите нам</h1>
                        <input size={"20"}/>
                        <button value={"Send"}>Save</button>
                    </div>
                <Footer/>
            </div>
        );
    }
}

export default Contacts;