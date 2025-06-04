import React from 'react';
import { SLIDER_LEFT_IMAGES_LIST, SLIDER_RIGHT_IMAGES_LIST } from "../utils/helper";

const CustomSlider = () => {
    return (
        <div id="overview" className="overflow-hidden mx-auto max-w-[1920px]">
            <div className="overflow-hidden w-full">
                <div className="flex slider-left w-max">
                    {[...SLIDER_LEFT_IMAGES_LIST, ...SLIDER_LEFT_IMAGES_LIST].map((obj, index) => (
                        <img
                            key={index}
                            src={obj}
                            alt={`slider-left-${index}`}
                            className="pointer-events-none w-[320px] lg:h-[320px] h-[200px] object-cover"
                        />
                    ))}
                </div>
            </div>

            <div className="overflow-hidden w-full">
                <div className="flex slider-right w-max">
                    {[...SLIDER_RIGHT_IMAGES_LIST, ...SLIDER_RIGHT_IMAGES_LIST].map((obj, index) => (
                        <img
                            key={index}
                            src={obj}
                            alt={`slider-right-${index}`}
                            className="pointer-events-none w-[320px] lg:h-[320px] h-[200px] object-cover"
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CustomSlider;
