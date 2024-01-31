import { Link, usePage } from "@inertiajs/react";

import Logo from "../../images/dao-logo_day.svg?react";

const adminMenu = [
    {
        name: "Все дома",
        url: "/kitchens",
    },
    {
        name: "Классы девайсов",
        url: "/device-classes",
    },
    {
        name: "Все пользователи",
        url: "/users",
    },
    {
        name: "Все настройки",
        url: "/settings",
    },
];

export default function Authenticated({ user, children }) {
    const { url: currentUrl } = usePage();

    return (
        <div className="bg-gray-100 min-h-[100vh] flex w-full">
            <header className="bg-white p-4 shadow-md md:min-w-[320px]">
                <Link href="/admin">
                    <Logo height="34" />
                </Link>
                <nav className="flex flex-col gap-y-4 mt-20">
                    {adminMenu.map((link, idx) => (
                        <Link
                            key={idx}
                            href={`/admin${link?.url}`}
                            className={
                                currentUrl.startsWith(`/admin${link?.url}`)
                                    ? "active"
                                    : ""
                            }
                        >
                            {link?.name}
                        </Link>
                    ))}
                </nav>
            </header>
            <main className="flex-1 p-4">
                <div className="flex justify-between items-center">
                    <span>Поиск</span>
                    <div className="flex gap-2">
                        <div className="bg-white rounded-full px-6 py-2 text-[16px] leading-4 font-semibold shadow-md hover:bg-slate-400 transition cursor-pointer">
                            {user.roles?.[0].name}
                        </div>
                        <Link
                            href={route("logout")}
                            method="post"
                            as="div"
                            className="bg-black rounded-full px-6 py-2 text-white text-[16px] leading-4 font-semibold shadow-md hover:bg-slate-400 transition cursor-pointer"
                        >
                            Выход
                        </Link>
                    </div>
                </div>
                <div>{children}</div>
            </main>
        </div>
    );
}
