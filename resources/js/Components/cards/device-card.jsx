import DeviceIcon from "../../../images/device-icon_scales.svg";
import FavoriteIcon from "../../../images/favorite-button_remove.svg?react";

import Parameter from "../parameter";

export const DeviceCard = ({ device }) => {
    if (!device) return null;
    const { section, order, created_at, updated_at, ...restDevice } = device;

    // console.log(device.device_name, device.devicevalues);

    return (
        <div
            className="min-h-[172px] flex flex-col justify-between rounded-[22px] shadow-[0px_5px_16px_0px_rgba(50,132,229,0.16)] bg-white pt-8 pl-[18px] pr-2 pb-2 bg-no-repeat bg-[100%_0px]"
            style={{ backgroundImage: `url(${device?.icon ?? DeviceIcon})` }}
        >
            <div className="flex flex-col gap-1 max-w-[64px]">
                <span className="text-[14px] leading-4 font-semibold">
                    {device?.device_name}
                </span>
                <span className="text-[12px] leading-3">
                    {device?.section?.name}
                </span>
            </div>
            <div className="flex items-end justify-between">
                {device?.devicevalues.length > 0 &&
                    device.devicevalues.map((parameter, idx) => (
                        <Parameter
                            key={idx}
                            device={restDevice}
                            parameter={parameter}
                        />
                    ))}
                <FavoriteIcon className="mb-2 transition text-app-gray hover:text-purple-500 cursor-pointer" />
            </div>
        </div>
    );
};
