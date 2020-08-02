import React, { Component } from "react";

import NavBar from "../../Components/Home/NavBar/NavBar";
import Aux from "../Auxilary/Auxilary";

class Layout extends Component {
    render() {
        return (
            <Aux>
                <NavBar />
                <main onScroll={this.scrollHandler}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
