import React, { useState, useEffect } from "react";

const DateTime = () => {
    const [currentDateTime, setCurrentDateTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentDateTime(new Date());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    const formatNumber = (number) => number.toString().padStart(2, "0");

    const hours = formatNumber(currentDateTime.getHours());
    const minutes = formatNumber(currentDateTime.getMinutes());
    const dayOfWeek = currentDateTime.toLocaleDateString("ru-RU", {
        weekday: "long",
    });
    const date = currentDateTime.toLocaleDateString("ru-RU");

    return (
        <div className="flex items-center gap-x-2">
            <div className="text-[42px] leading-10">
                {hours}:{minutes}
            </div>
            <div className="flex flex-col gap-y-1 pl-2 leading-4 border-l border-black">
                <span>
                    {dayOfWeek.charAt(0).toLocaleUpperCase() +
                        dayOfWeek.slice(1)}
                </span>
                <span>{date}</span>
            </div>
        </div>
    );
};

export default DateTime;
