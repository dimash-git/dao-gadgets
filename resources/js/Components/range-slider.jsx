import React from "react";

const RangeSlider = ({ min = 0, max = 100, step = 1, value = 0, onChange }) => {
    const percentage = ((value - min) * 100) / (max - min);

    return (
        <div className="relative pt-5">
            <div className="absolute left-0 top-0">{min}</div>
            <div
                className="absolute"
                style={{ left: `calc(${percentage}% - 12px)`, top: "0px" }} // Adjust as necessary
            >
                {value}
            </div>
            <div className="absolute right-0 top-0">{max}</div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                style={{
                    backgroundSize: `${percentage}% 100%`,
                }}
            />
        </div>
    );
};

export default RangeSlider;
