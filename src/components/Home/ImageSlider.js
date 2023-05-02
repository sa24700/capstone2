import React from "react";
import SlideShow from "./SlideShow";
import "./ImageSlider.css"

const ImageSlider = () => {
    const slides = [
        {url: "https://eus-www.sway-cdn.com/s/MF93xmsYZdDvZxCc/images/z1gfuf4X9tEtkd?quality=1920&allowAnimation=true",
        title: 'Fairmont'
        },
        {url: "https://eus-www.sway-cdn.com/s/MF93xmsYZdDvZxCc/images/JebEjFQRv-2DDK?quality=1920&allowAnimation=true",
        title: 'Fairmont'
        },

        {url: "https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/64760101_2335688646697069_1064069695088361472_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=cdbe9c&_nc_ohc=0lnxSK2tJBIAX9I0Sut&_nc_ht=scontent-ord5-1.xx&oh=00_AfCDlkSUSPTranj3Ury2GNf3Dkf6I30hfx8yzTZrfYKZ1w&oe=6462A047",
        title: 'Fairmont'
        },
        {url: "https://eus-www.sway-cdn.com/s/MF93xmsYZdDvZxCc/images/Ga548RkOBm4z1e?quality=1920&allowAnimation=true",
        title: 'Fairmont'
        },
        {url: "https://scontent-ord5-1.xx.fbcdn.net/v/t1.6435-9/32712369_2051202041812399_8455533378702147584_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=f-A54fN0fD4AX8SkLCf&_nc_ht=scontent-ord5-1.xx&oh=00_AfBMGqeAcz3PiXWk2SztwiFcF4_s1Noglk5twV9BSd2Skg&oe=6462B857",
        title: 'Fairmont'
        },
    ];


    return(
        <div>
            <div className="SliderContainer">
                <SlideShow slides={slides} parentwidth={600}/>
            </div>
        </div>
    );
};



export default ImageSlider;