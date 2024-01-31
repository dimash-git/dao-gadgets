import { Bars3Icon } from "@heroicons/react/24/outline";
import LocIcon from "../../../images/location-icon.svg?react";

import SlideOver from "@/Components/ui/slide-over";
import Profile from "@/Components/header/profile";
import Socials from "@/Components/header/socials";
import Accordion from "@/Components/ui/accordion";
import NotifCard from "@/Components/cards/notif-card";
import { cart, notifCards, parcels, services } from "@/constants/header-items";
import Toggle from "../ui/toggle";
import { Link } from "@inertiajs/react";

const Sidebar = () => {
    return (
        <SlideOver
            renderTrigger={({ setOpen }) => (
                <button onClick={() => setOpen(true)} className="group">
                    <Bars3Icon
                        width={32}
                        height={32}
                        className="group-hover:text-purple-500 transition"
                    />
                </button>
            )}
            panelClasses="max-w-3xl"
            innerPanelClasses="bg-app-lightgray"
        >
            <div className="flex flex-col h-full justify-between">
                <div>
                    {/* Header */}
                    <Profile />

                    {/* List */}
                    <div className="flex flex-col gap-y-3 mt-3">
                        <Accordion buttonContent="Проблемы с домом">
                            <div className="flex gap-x-2 overflow-x-auto pb-1">
                                {notifCards.map((info, idx) => (
                                    <NotifCard key={idx} info={info} />
                                ))}
                            </div>
                        </Accordion>
                        <Accordion buttonContent="Активные услуги">
                            <div className="flex gap-x-2 overflow-x-auto pb-1">
                                {services.map((info, idx) => (
                                    <NotifCard key={idx} info={info} />
                                ))}
                            </div>
                        </Accordion>
                        <Accordion buttonContent="Товары в пути">
                            <div className="flex gap-x-2 overflow-x-auto pb-1">
                                {parcels.map((info, idx) => (
                                    <NotifCard key={idx} info={info} />
                                ))}
                            </div>
                        </Accordion>
                        <Accordion buttonContent="Товары в корзине">
                            <div className="flex gap-x-2 overflow-x-auto pb-1">
                                {cart.map((info, idx) => (
                                    <NotifCard key={idx} info={info} />
                                ))}
                            </div>
                        </Accordion>
                        <div className="flex items-center justify-between p-1">
                            <span className=" text-[#242730]">
                                Темный режим
                            </span>
                            <Toggle />
                        </div>
                    </div>

                    <div className="flex justify-end mt-10 px-1">
                        <Link
                            href={route("logout")}
                            method="post"
                            className="text-[14px] leading-4 underline hover:text-purple-500"
                        >
                            Выход
                        </Link>
                    </div>
                </div>
                {/* Footer */}
                <div className="flex flex-col items-center gap-y-3">
                    <Socials />
                    <div className="transition group text-app-gray hover:text-purple-400 flex items-center">
                        <LocIcon height="24" width="24" />
                        <p className="text-[14px] font-semibold">
                            Санкт-Петербург
                        </p>
                    </div>
                </div>
            </div>
        </SlideOver>
    );
};

export default Sidebar;
