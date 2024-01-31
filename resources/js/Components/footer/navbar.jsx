import DashbaordIcon from "../../../images/navbar-icon_main.svg?react";
import HomeIcon from "../../../images/navbar-icon_home.svg?react";
import MarketIcon from "../../../images/navbar-icon_market.svg?react";
import ServiceIcon from "../../../images/navbar-icon_services.svg?react";
import OnlineServiceIcon from "../../../images/navbar-icon_online-services.svg?react";

import { Link, usePage } from "@inertiajs/react";
import { cn } from "@/lib/utils";

const outerPage = "/dashboard";

const navs = [
    {
        name: "Главная",
        url: `${outerPage}`,
        icon: DashbaordIcon,
    },
    {
        name: "Дом",
        url: `${outerPage}/home`,
        icon: HomeIcon,
    },
    {
        name: "Товары",
        url: `${outerPage}/market`,
        icon: MarketIcon,
    },
    {
        name: "Услуги",
        url: `${outerPage}/services`,
        icon: ServiceIcon,
    },
    {
        name: "Сервисы",
        url: `${outerPage}/online-services`,
        icon: OnlineServiceIcon,
    },
];

const NavbarItem = ({ nav, isFirst, isLast }) => {
    const { url: currentUrl } = usePage();
    const isActive = currentUrl.endsWith(nav.url);

    const borderRadiusClass = isFirst
        ? "rounded-tr-lg"
        : isLast
        ? "rounded-tl-lg"
        : "rounded-t-lg";

    return (
        <Link
            href={nav?.url}
            className={cn(
                "flex flex-col w-full justify-center items-center gap-y-1 group",
                isActive ? `blue-gradient ${borderRadiusClass}` : null
            )}
        >
            {nav?.icon && (
                <nav.icon
                    width="30"
                    height="30"
                    className={cn(
                        "text-app-gray",
                        isActive ? "text-white" : null
                    )}
                />
            )}
            <span
                className={cn(
                    "text-[14px] leading-4 text-app-gray",
                    isActive ? "text-white" : null
                )}
            >
                {nav?.name}
            </span>
        </Link>
    );
};

const Navbar = () => {
    return (
        <div className="flex justify-between w-full bg-[#f2f5f9] h-20 pt-2">
            {navs.length > 0 &&
                navs.map((nav, idx) => (
                    <NavbarItem
                        key={idx}
                        nav={nav}
                        isFirst={idx === 0}
                        isLast={idx === navs.length - 1}
                    />
                ))}
        </div>
    );
};

export default Navbar;
