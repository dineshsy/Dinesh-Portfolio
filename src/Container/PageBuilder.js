import React, { Component } from "react";
import Home from "../Components/Home/Home";
import About from "./About/About";
import Aux from "../hoc/Auxilary/Auxilary";
import Work from "../Container/Work/Work";
import Contact from "../Container/Contact/Contact";
import Footer from "../Components/Footer/Footer";
import NavBar from "../Components/Home/NavBar/NavBar";
class PageBuilder extends Component {
    render() {
        return (
            <Aux>
                <NavBar />
                <Home />
                <About />
                <Work />
                <Contact />
                <Footer />
            </Aux>
        );
    }
}

export default PageBuilder;
