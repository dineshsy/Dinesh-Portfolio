import React from "react";

import "./Cards.css";

const cards = ({ img, url, color }) => {
    return (
        <div class="row module" data-aos="fade-up">
            <ul class="list-projects">
                <li class="project-item" style={{ backgroundColor: "#000000" }}>
                    <a href={url} rel="noopener noreferrer" target="_blank">
                        <div
                            class="project-color"
                            style={{ backgroundColor: color }}
                        ></div>
                        <div
                            class="project-visual"
                            style={{
                                background: `url('${img}')`,
                                backgroundSize: "cover",
                            }}
                        ></div>
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default cards;
