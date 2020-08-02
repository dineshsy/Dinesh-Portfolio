import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./hoc/Layouts/Layouts";
import PageBuilder from "./Container/PageBuilder";
import Loading from "./Loading";
import { connect } from "react-redux";
import ActionTypes from "./redux/actionTypes";
function App({ isLoaded, setLoaded }) {
    useEffect(() => {
        const loadFunc = () => setLoaded();
        window.addEventListener("load", (e) => {
            loadFunc();
            window.removeEventListener("load", loadFunc);
        });
        return () => {};
    }, []);
    return (
        <Layout>
            {isLoaded ? null : <Loading />}
            <PageBuilder />
        </Layout>
    );
}

const mapStateToProps = (state) => ({
    isLoaded: state.isLoaded,
});

const mapDispatchToProps = (dispatch) => {
    return {
        setLoaded: () => dispatch({ type: ActionTypes.DOM_LOADED_SUCCESS }),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
