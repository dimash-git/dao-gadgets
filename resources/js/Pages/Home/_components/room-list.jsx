import { cn } from "@/lib/utils";
import { useState } from "react";

const cats = [
    { name: "Все устройства", slug: "all" },
    { name: "Кухня", slug: "kitchen" },
    { name: "Гостиная", slug: "living" },
    { name: "Прихожая", slug: "corridor" },
    { name: "Избранное", slug: "favorite" },
    { name: "Редактировать", slug: "edit" },
];

const Room = ({ cat, selected, setSelected }) => {
    return (
        <button
            onClick={() => setSelected(cat?.slug)}
            className={cn(
                "outline-none rounded-full border border-[#9faec0] px-4 h-11 text-[14px] leading-4 text-app-gray",
                selected === cat?.slug
                    ? "orange-gradient text-white border-transparent"
                    : null
            )}
        >
            {cat?.name}
        </button>
    );
};

const RoomList = () => {
    const [selected, setSelected] = useState("all");

    return (
        <div className="w-full flex gap-x-2">
            {cats.length > 0 &&
                cats.map((cat, idx) => (
                    <Room
                        key={idx}
                        cat={cat}
                        setSelected={setSelected}
                        selected={selected}
                    />
                ))}
        </div>
    );
};

export default RoomList;
