import NewsCard from "@/Components/cards/news-card";
import InfoIcon from "../../../../images/news-icon_day.svg?react";
import { useState, useEffect } from "react";

// const news = [
//     {
//         title: "DAO выходит на новый уровень:",
//         desc: "обновление приложения открывает безграничные возможности умного дом",
//         date: "07.07.2023",
//     },
//     {
//         title: "Интеллектуальное управление домом с DAO",
//         desc: "представляем новые функции и устройства для вашего комфорта",
//         date: "07.07.2023",
//     },
//     {
//         title: "DAO выходит на новый уровень:",
//         desc: "обновление приложения открывает безграничные возможности умного дом",
//         date: "07.07.2023",
//     },
// ];

const NewsList = () => {
    const [news, setNews] = useState([]);
    useEffect(() => {
        const fetchNews = async () => {
            try {
                const res = await axios.get("/api/news", {
                    withCredentials: true,
                }); // Adjust the URL as needed
                const { data } = res;
                setNews(data);
            } catch (error) {
                console.error("Error fetching news: ", error);
            }
        };
        fetchNews();
    }, []);
    return (
        <div className="flex flex-col gap-y-4">
            <div className="flex gap-x-2 text-[20px] leading-5">
                <InfoIcon />
                Новости и объявления
            </div>
            <div className="grid gap-4 max-md:grid-cols-2 md:grid-flow-col md:auto-cols-[190px]">
                {news.length > 0 &&
                    news.map((news, idx) => <NewsCard key={idx} news={news} />)}
            </div>
        </div>
    );
};

export default NewsList;
