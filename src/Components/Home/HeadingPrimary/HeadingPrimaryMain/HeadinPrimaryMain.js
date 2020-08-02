import React from "react";

import classes from "./HeadingPrimaryMain.module.css";
const headingPrimayMain = () => {
    return (
        <div className={classes.title}>
            <span className={classes.block}></span>
            <h1 className={classes.HeadingPrimaryMain}>
                Hola, I'm{" "}
                <span
                    style={{
                        fontSize: "7rem",
                        fontWeight: 600,
                        letterSpacing: "4px",
                    }}
                >
                    Dinesh!
                </span>
            </h1>
        </div>
    );
};

export default headingPrimayMain;
