import React from "react";
import { SLIDER_LEFT_IMAGES_LIST, SLIDER_RIGHT_IMAGES_LIST } from "../utils/helper";

const Slider = () => {
    return (
        <div id="overview" className="overflow-hidden mx-auto max-w-[1920px]">
            <div className="flex slider-left">
                {SLIDER_LEFT_IMAGES_LIST.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`slider-left-${index + 1}`}
                        className="slider-image pointer-events-none w-[320px] h-[320px] object-cover"
                    />
                ))}
            </div>

            <div className="flex slider-right">
                {SLIDER_RIGHT_IMAGES_LIST.map((src, index) => (
                    <img
                        key={index}
                        src={src}
                        alt={`slider-right-${index + 1}`}
                        className="slider-image pointer-events-none w-[320px] h-[320px] object-cover"
                    />
                ))}
            </div>
        </div>
    );
};

export default Slider;
