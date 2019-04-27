import React, {Component} from "react";
import "./App.scss";
import HomePage from "./HomePage"
import {Route} from "react-router";
import {BrowserRouter, Link} from "react-router-dom";
import Contacts from "./Contacts";
import Sales from "./Sales";
import Specials from "./Specials";
import Basket from "./Basket";

const homePage = () => <HomePage/>;
const contactsPage = () => <Contacts/>;
const salesPage = () => <Sales/>;
const specialsPage = () => <Specials/>;
const basketPage = () => <Basket/>;

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="app">
                    <Route exact path="/" component={homePage} />
                    <Route path="/contacts" component={contactsPage} />
                    <Route path="/sale" component={salesPage} />
                    <Route path="/specials" component={specialsPage} />
                    <Route path="/basket" component={basketPage} />
                </div>
            </BrowserRouter>
        );
    }
}
export default App;
