import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWrench } from "@fortawesome/free-solid-svg-icons";
import works from "../../assets/workData";
import classes from "./Work.module.css";
import Heading from "../../Components/Heading/Heading";
import Cards from "../../Components/UI/Cards/Cards";
import styled from "styled-components";
import { schemeCategory10 } from "d3-scale-chromatic";
const WorksImgWrapper = styled.div`
    display: grid;
    margin: 0 0rem;
    grid-template-columns: repeat(auto-fit, minmax(28rem, 1fr));
    @media (min-width: 600px) {
        grid-template-columns: repeat(auto-fit, minmax(40rem, 1fr));
        margin: 0 10rem;
    }
`;

const work = () => {
    return (
        <section className={classes.Work} id="work">
            <Heading text={"Work"}>
                <FontAwesomeIcon icon={faWrench} className={classes.Icon} />
            </Heading>
            <WorksImgWrapper>
                {works.map(({ img, url }, i) => (
                    <Cards img={img} url={url} color={schemeCategory10[i]} />
                ))}
            </WorksImgWrapper>
        </section>
    );
};

export default work;
