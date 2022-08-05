import SliderContent from "./SliderContent";
import Arrows from "./Arrow";
import {useState} from "react";
import imageSlider from "./ImageSlider";
import Dots from "./Dots";
import './slider.css';

const len = imageSlider.length -1 ;

function Slider(){
    const [activeIndex,setActiveIndex] =useState(0);
    return(
        <div className='slider-container'>
            <SliderContent activeIndex={activeIndex} imageSlider={imageSlider} />
            <Arrows prevSlide={() => setActiveIndex(activeIndex < 1 ?  len : activeIndex - 1 )}
            nextSlide={() => setActiveIndex(activeIndex === len ? 0 : activeIndex + 1 )}/>

            <Dots activeIndex={activeIndex} imageSlider={imageSlider} onclick={(activeIndex:any) => setActiveIndex(activeIndex)}/>

        </div>
    )
}

export  default Slider;