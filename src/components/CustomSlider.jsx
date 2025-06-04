import React from 'react';
import { SLIDER_LEFT_IMAGES_LIST, SLIDER_RIGHT_IMAGES_LIST } from "../utils/helper";
const CustomSlider = () => {
    return (
        <div id="overview" className="overflow-hidden mx-auto max-w-[1920px]">
            <div className="scroll-right flex items-center whitespace-nowrap">
                {[...SLIDER_LEFT_IMAGES_LIST, ...SLIDER_LEFT_IMAGES_LIST].map((obj, index) => (
                    <img
                        key={index}
                        src={obj}
                        alt={`slider-left-${index + 1}`}
                        className="pointer-events-none w-[320px] lg:h-[320px] h-[200px] object-cover"
                    />
                ))}
            </div>

            <div className="scroll-left flex items-center whitespace-nowrap">
                {[...SLIDER_RIGHT_IMAGES_LIST, ...SLIDER_RIGHT_IMAGES_LIST].map((obj, index) => (
                    <img
                        key={index}
                        src={obj}
                        alt={`slider-right-${index + 1}`}
                        className="pointer-events-none w-[320px] lg:h-[320px] h-[200px] object-cover"
                    />
                ))}
            </div>
        </div>
    );
};

export default CustomSlider;
