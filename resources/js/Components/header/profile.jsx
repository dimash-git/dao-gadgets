import React from "react";
import { PencilSquareIcon } from "@heroicons/react/24/solid";
import { usePage } from "@inertiajs/react";

const Profile = () => {
    const {
        auth: { user },
    } = usePage().props;

    return (
        <div className="flex justify-between bg-app-lightgray rounded-[10px] p-[10px] shadow-app-blue">
            <div className="flex items-center gap-x-4">
                <div className="purple-radial-gradient w-10 h-10 rounded-full flex items-center justify-center text-white relative bg-purple-gradient">
                    <span className="text-[22px] font-semibold">AO</span>
                    <div className="purple-gradient w-5 h-5 rounded-full border-[1px] border-white flex items-center justify-center absolute -right-[5px] -top-[10px]">
                        <span className="text-[10px] font-bold">99</span>
                    </div>
                </div>
                <div className="flex flex-col gap-y-3">
                    <div className="flex flex-col gap-y-1">
                        <span className="font-semibold text-[14px] leading-4">
                            {user?.name}
                        </span>
                        <a
                            className="text-[12px] text-[#9faec0] leading-3 underline"
                            href={`mailto:${user?.email}`}
                        >
                            {user?.email}
                        </a>
                    </div>
                    <div className="h-8 w-max flex items-center px-2 rounded-md bg-app-gray">
                        <span className="text-white text-[18px] leading-5 font-bold">
                            10000 ₽
                        </span>
                    </div>
                </div>
            </div>
            <div>
                <a
                    href="/profile"
                    className="cursor-pointer hover:text-slate-400 transition mr-2 mt-2"
                >
                    <PencilSquareIcon
                        width={24}
                        height={24}
                        className="cursor-pointer hover:text-slate-400 transition mr-2 mt-2"
                    />
                </a>
            </div>
        </div>
    );
};

export default Profile;
