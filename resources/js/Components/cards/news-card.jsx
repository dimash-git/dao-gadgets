import React from "react";
import DummyImage from "../../../images/dummy.jpg";

const NewsCard = ({ news }) => {
    console.log(news);
    const imageUrl = news?.cover ? `/storage/${news.cover}` : DummyImage;

    return (
        <div className="flex flex-col gap-y-3">
            <img
                src={imageUrl}
                alt={news?.title}
                className="rounded-[10px] h-[119px] w-full object-cover"
            />

            <div>
                <h3 className="text-[14px] leading-4 font-semibold">
                    {news?.title}
                </h3>
                <p className="text-[12px] leading-3 mt-2">
                    {news?.description}
                </p>
            </div>
            <span>{news?.date}</span>
        </div>
    );
};

export default NewsCard;
