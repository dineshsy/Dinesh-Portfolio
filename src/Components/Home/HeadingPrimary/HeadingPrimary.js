import React from "react";

import classes from './HeadingPrimary.module.css'

import HeadingPrimaryMain from './HeadingPrimaryMain/HeadinPrimaryMain'
import ScrollText from "./ScrollText/ScrollText";
import ScrollIcon from './SocialIcons/SocialIcon'

const headingPrimary = () => {
    return (
        <div className={classes.HeadingPrimary}>
            <HeadingPrimaryMain />
            <ScrollText />
            <p className={classes.HeadingPrimarySub}>
                Thinking “out of the box” to provide software-based solutions.
            </p>
            <ScrollIcon/>
        </div>
    );
}

export default headingPrimary;
