import React from "react";
import classes from "./Layouts.module.css";
import Aux from "../Auxilary/Auxilary";

const layout = props => {
    return (
        <Aux>
            <div>ToolBar</div>
            <main>
                {props.children}
                <div>Home</div>
                <div>About</div>
                <div>Work</div>
                <div>Contact</div>
            </main>
        </Aux>
    );
};

export default layout;
