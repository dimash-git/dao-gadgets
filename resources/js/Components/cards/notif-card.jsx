const NotifCard = ({ info }) => {
    return (
        <div className="bg-white min-h-[80px] w-20 py-2 px-[6px] flex flex-col gap-y-3 items-center rounded-[10px] text-center text-[12px] leading-3">
            <div>
                <span className="text-[#242730]">{info?.title}</span>
            </div>
            <div className="flex flex-col gap-y-1">
                {info?.status && (
                    <span className="text-app-gray">{info?.status}</span>
                )}
                {info?.price && (
                    <span className="text-[#242730] text-[18px] leading-[18px]">
                        {info?.price} Р
                    </span>
                )}
                <span className="text-app-gray">{info?.date}</span>
                {info?.time && (
                    <span className="text-app-gray">в {info?.time}</span>
                )}
            </div>
        </div>
    );
};

export default NotifCard;
