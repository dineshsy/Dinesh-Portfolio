import React, { useState, useEffect } from "react";
import "./App.css";
import Layout from "./hoc/Layouts/Layouts";
import PageBuilder from "./Container/PageBuilder";
import Loading from "./Loading";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    useEffect(() => {
        window.addEventListener("load", (e) => setIsLoaded(true));
        return () => {};
    }, []);
    return <Layout>{isLoaded ? <PageBuilder /> : <Loading />}</Layout>;
}

export default App;
