import React, { Component } from "react";

import Aux from "../Auxilary/Auxilary";

class Layout extends Component {
    render() {
        return (
            <Aux>
                <main onScroll={this.scrollHandler}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
