import React, { useState } from "react";

const RangeSlider = ({ min = 0, max = 100, step = 1, value = 0, onChange }) => {
    const [isDragging, setIsDragging] = useState(false);
    const percentage = ((value - min) * 100) / (max - min);

    const handleMouseDown = () => setIsDragging(true);
    const handleMouseUp = () => setIsDragging(false);

    return (
        <div className="relative pt-5">
            <div className="absolute left-0 top-0">{min}</div>
            {isDragging && (
                <div
                    className="absolute"
                    style={{
                        left: `calc(${percentage}%`,
                        top: "0px",
                        transform: `translateX(-${percentage}%)`,
                    }}
                >
                    {value}
                </div>
            )}
            <div className="absolute right-0 top-0">{max}</div>
            <input
                type="range"
                min={min}
                max={max}
                step={step}
                value={value}
                onChange={onChange}
                onMouseDown={handleMouseDown}
                onMouseUp={handleMouseUp}
                onTouchStart={handleMouseDown}
                onTouchEnd={handleMouseUp}
                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-700"
                style={{
                    backgroundSize: `${percentage}% 100%`,
                }}
            />
        </div>
    );
};

export default RangeSlider;
