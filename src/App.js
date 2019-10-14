import React from "react";
import { Route } from "react-router-dom";

import Header from "./Interface/Header";
import Footer from "./Interface/Footer";

import Home from "./Home";

const App = () => {
    return (
        <div className="App">
            <Header />
            <Route exact path="/" component={Home} />
            <Route exact path="/guide" component={Home} />
            <Route exact path="/faq" component={Home} />
            <Route exact path="/mystudio" component={Home} />
            <Footer />
        </div>
    );
};

export default App;
