import React, { Component } from "react";
import { connect } from "react-redux";
import ActionTypes from "../../redux/actionTypes";

import Aux from "../Auxilary/Auxilary";
import Loading from "../../Loading";

class Layout extends Component {
    componentDidMount() {
        const loadFunc = () => this.props.setLoaded();
        window.addEventListener("load", (e) => {
            loadFunc();
            window.removeEventListener("load", loadFunc);
        });
    }
    render() {
        console.log(this.props.isLoaded);
        return (
            <Aux>
                {this.props.isLoaded ? null : <Loading />}
                <main
                    style={
                        this.props.isLoaded
                            ? {}
                            : {
                                  opacity: 0,
                                  overflow: "hidden",
                                  height: "100vh",
                              }
                    }
                >
                    {this.props.children}
                </main>
            </Aux>
        );
    }
}

const mapStateToProps = (state) => ({
    isLoaded: state.isLoaded,
});

const mapDispatchToProps = (dispatch) => {
    return {
        setLoaded: () => dispatch({ type: ActionTypes.DOM_LOADED_SUCCESS }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout);
