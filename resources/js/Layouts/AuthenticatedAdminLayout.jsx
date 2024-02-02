import { Link, usePage } from "@inertiajs/react";

import Logo from "../../images/dao-logo_day.svg?react";

const adminMenu = [
    {
        name: "Дома",
        url: "/kitchens",
    },
    {
        name: "Классы устройств",
        url: "/device-classes",
    },
    {
        name: "Пользователи",
        url: "/users",
    },
    {
        name: "Настройки",
        url: "/settings",
    },
    {
        name: "Новости",
        url: "/news",
    },
];

export default function Authenticated({ user, children }) {
    const { url: currentUrl } = usePage();

    return (
        <div className="admin">
            <header className="admin__header">
                <Link className="admin__logo-link" href="/admin">
                    <Logo className="admin__logo" />
                </Link>
                <nav className="admin__nav-tree">
                    {adminMenu.map((link, idx) => (
                        <Link
                            key={idx}
                            href={`/admin${link?.url}`}
                            className={`admin__nav-item ${
                                currentUrl.startsWith(`/admin${link?.url}`) &&
                                "admin__nav-item_active"
                            }`}
                        >
                            {link?.name}
                        </Link>
                    ))}
                </nav>
                <p className="admin__motto ">Система управления умным домом</p>
            </header>
            <main className="admin__main">
                <div className="admin__background"></div>
                <div className="admin__topbar">
                    <span className="admin__search">Здесь будет поиск</span>
                    <div className="admin__userbar">
                        <div className="admin__user-icon"></div>
                        <div className="admin__username">
                            {user.roles?.[0].name}
                        </div>
                    </div>
                    <Link
                        href={route("logout")}
                        method="post"
                        as="div"
                        className="admin__logout-button"
                    >
                        Выход
                    </Link>
                </div>
                <div className="admin__workarea">{children}</div>
            </main>
        </div>
    );
}
