import React from "react";
import { Route } from "react-router-dom";

import Header from "./Interface/Header";
// import Footer from "./Interface/Footer";

import Home from "./Home";
import GuideLine from "./GuideLine";
import Faq from "./Faq";

import "./scss/App.scss";

const App = () => {
    return (
        <div className="App">
            <Header />
            <div className="contents">
                <Route exact path="/" component={Home} />
                <Route exact path="/guide" component={GuideLine} />
                <Route exact path="/faq" component={Faq} />
                <Route exact path="/mystudio" component={Home} />
            </div>
            {/* <Footer /> */}
        </div>
    );
};

export default App;
