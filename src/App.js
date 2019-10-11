import React from "react";
import { Route } from "react-router-dom";

import Header from "./Interface/Header";
import Footer from "./Interface/Footer";

import Home from "./Home";

const App = () => {
    return (
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Footer />
        </div>
    );
};

export default App;
