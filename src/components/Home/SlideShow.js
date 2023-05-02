import { useRef, useEffect, useState, useCallback } from "react";
import "./ImageSlider.css"



const slideContainer = {
    display: "flex",
    height: "100%",
    transition: "transform ease-in-out 0.3s",
};


const SlideShow = ({ slides, parentwidth }) => {
    const timerRef = useRef(null);
    const [currentIndex, setCurrentIndex] = useState(0);



    const goToPrevious = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
        
    };


    const goToNext = useCallback(() => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }, [currentIndex, slides]);

    useEffect(() => {
        timerRef.current = setTimeout(() => {
            goToNext();
        }, 3000);
        return () => clearTimeout(timerRef.current);
    }, [goToNext]);


    const getSlides = (slideIndex) => ({
        backgroundImage: `url(${slides[slideIndex].url})`,
        width: `${parentwidth}px`,
        
    });


    const getSlideContainer = () => ({
        ...slideContainer,
        width: parentwidth * slides.length,
        transform: `translateX(${-(currentIndex * parentwidth)}px)`,
    })

 

    const moveDot = index => {
        setCurrentIndex(index)
    }

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex);
    }
    
    const overflowContainer = {
        overflow: "hidden",
        height: "100%"
    }

    return(
        <div className="sliderDiv">
            <div onClick={goToPrevious} className="leftArrow">
            ◀
            </div>
            <div onClick={goToNext} className="rightArrow">
            ▶
            </div>

            <div style={overflowContainer}>
                <div style={getSlideContainer()}>
                    {slides.map((_, slideIndex) => (
                        <div className="slideDiv" key={slideIndex} style={getSlides(slideIndex)} parentwidth={600}></div>
                    ))}
                </div>
                
            </div>
            <div className="DotDiv">
                {Array.from({length: 5}).map((item, index) => (
                    <div
                    onClick={() => moveDot(index)} 
                    className={currentIndex === index  ? "Dot CurrentDot" : "Dot"}
                    ></div>
                ))}
            </div>


        </div>
    );
};

export default SlideShow;