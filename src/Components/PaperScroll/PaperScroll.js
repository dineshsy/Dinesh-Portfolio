import React from "react";
import { useEffect } from "react";
import styled from "styled-components";
import { TimelineMax } from "gsap";
import Img1 from "./paper-a.jpg";
import Img2 from "./paper-b.jpg";
import Img3 from "./paper-c.jpg";
import Img4 from "./paper-d.jpg";
import Img5 from "./paper-e.jpg";
import Img6 from "./paper-f.jpg";
import Img7 from "./paper-g.jpg";
import Img8 from "./paper-h.jpg";
import Img9 from "./paper-i.jpg";
import Img10 from "./paper-j.jpg";
import Img11 from "./paper-k.jpg";
import { useState } from "react";

const ImageSequence = styled.img`
    position: fixed;
    z-index: -1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    max-width: 65rem;
    max-height: 65rem;
    width: 100%;
    height: 100%;
    background-position: 50% 50%;
    background-attachment: fixed;
    background-size: 50%;
    background-repeat: no-repeat;
`;

export default function PaperScroll() {
    const imgURLs = [
        Img1,
        Img2,
        Img3,
        Img4,
        Img5,
        Img6,
        Img7,
        Img8,
        Img9,
        Img10,
        Img11,
    ];
    const [url, setUrl] = useState(Img1);

    useEffect(() => {
        var tl = new TimelineMax({ paused: true });
        var dur = 20;

        const scrollFunc = (e) => {
            var scrollTop = window.scrollY;
            var docHeight = document.body.clientHeight;
            var winHeight = window.innerHeight;
            if (scrollTop >= 0) {
                setUrl(
                    imgURLs[
                        +((scrollTop / (docHeight - winHeight)) * 10).toFixed(0)
                    ]
                );
                console.log(
                    imgURLs[
                        +((scrollTop / (docHeight - winHeight)) * 10).toFixed(0)
                    ]
                );
                tl.progress(scrollTop / (docHeight - winHeight));
            }
        };
        window.addEventListener("scroll", scrollFunc);
        imgURLs.forEach((url) => {
            console.log(url);
            tl.to("#image-sequence", dur, { css: { position: "fixed" } });
        });
        tl.to("#image-sequence", dur, { rotation: 360 });

        return () => {
            window.removeEventListener("scroll", scrollFunc);
        };
    }, [imgURLs]);
    console.log(url);
    return <ImageSequence src={url} id="image-sequence"></ImageSequence>;
}
