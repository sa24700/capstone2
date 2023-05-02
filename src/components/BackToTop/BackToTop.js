import React from "react";
import { useEffect, useState } from "react";
import "./BackToTop.css";

function BackToTop() {
    const [backToTopButton, setBackToTopButton] = useState(false);

    useEffect(() => {
        window.addEventListener("scroll", () => {
            if(window.scrollY > 150) {
                setBackToTopButton(true)
            } else {
                setBackToTopButton(false)
            }
        })
    })


    const scrollUp = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        })
    }



    return(
        <div>

            {backToTopButton && (
                <button className="BackToTopButton" onClick={scrollUp}>⭱</button>
            )}

          

        </div>
    )

}

export default BackToTop;