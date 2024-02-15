import React from "react";

const RangeSlider = ({ min = 0, max = 100, step = 1, value = 0, onChange }) => {
    return (
        <input
            type="range"
            min={min}
            max={max}
            step={step}
            value={value}
            onChange={onChange}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
            style={{
                backgroundSize: `${((value - min) * 100) / (max - min)}% 100%`,
            }}
        />
    );
};

export default RangeSlider;
