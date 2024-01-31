import { DeviceCard } from "@/Components/cards/device-card";
import SparkIcon from "../../../images/quick-functions-icon_day.svg?react";
import { cn } from "@/lib/utils";

const devices = [
    {
        name: "Верхний свет",
        cat: "Гостиная",
    },
    {
        name: "Климатконтроль",
        cat: "Гостиная",
    },
    {
        name: "Свет на кухне",
        cat: "Кухня",
    },
    {
        name: "Фартук",
        cat: "Кухня",
    },
];

const DeviceList = ({ titleOn = true, listClass }) => {
    return (
        <div className="flex flex-col gap-y-4">
            {titleOn && (
                <div className="flex gap-x-2 text-[20px] leading-5">
                    <SparkIcon />
                    Быстрые функции
                </div>
            )}
            <div className={cn("grid gap-[10px]", listClass ?? null)}>
                {devices &&
                    devices?.length > 0 &&
                    // полученные девайсы с запроса пробегаем через функцию js map, и рендерим карточку для каждого
                    devices?.map((device, idx) => (
                        <DeviceCard key={idx} device={device} />
                        // key обяз параметр когда рендерятся элементы через map
                    ))}
            </div>
        </div>
    );
};

export default DeviceList;
