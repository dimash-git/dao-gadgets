import React from "react";
import BgPurple from "../../../../images/service-tile_purple.svg";
import BgBlue from "../../../../images/service-tile_blue.svg";
import BgOrange from "../../../../images/service-tile_orange.svg";
import BgPink from "../../../../images/service-tile_pink.svg";
import StarIcon from "../../../../images/fav-service-icon-day_active.svg?react";
import ArrowIcon from "../../../../images/arrow.svg?react";

const sections = [
    {
        url: "#",
        title: "Ассистент",
        desc: "Помощь в любых ваших делах",
        bg: BgPurple,
    },
    {
        url: "#",
        title: "Поддержка",
        desc: "Тех. поддержка 24/7",
        bg: BgOrange,
    },
    {
        url: "#",
        title: "Сервис 3",
        desc: "Краткое описание",
        bg: BgBlue,
    },
    {
        url: "#",
        title: "Сервис 4",
        desc: "Краткое описание",
        bg: BgPink,
    },
];

export const SectionNav = ({ section }) => {
    return (
        <div
            className="h-[172px] rounded-[20px] pl-7 pt-6 pr-3 pb-4 bg-no-repeat bg-cover flex flex-col justify-between"
            style={{ backgroundImage: `url(${section.bg})` }}
        >
            <div className="text-white md:pl-8">
                <div className="text-[20px] leading-5">{section?.title}</div>
                <div className="text-[14px] leading-4">{section?.desc}</div>
            </div>
            <div className="flex items-center justify-between">
                <StarIcon width="28" height="28" />
                <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#c6c6c695] cursor-pointer">
                    <ArrowIcon height="24" />
                </div>
            </div>
        </div>
    );
};

const SectionNavList = () => {
    return (
        <div className="grid grid-cols-2 gap-2">
            {sections.length > 0 &&
                sections.map((section, idx) => (
                    <SectionNav key={idx} section={section} />
                ))}
        </div>
    );
};

export default SectionNavList;
