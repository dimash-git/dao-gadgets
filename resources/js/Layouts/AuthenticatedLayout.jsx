import Logo from "../../images/dao-logo_day.svg?react";

import Sidebar from "@/Components/header/sidebar";
import Navbar from "@/Components/footer/navbar";
import { Link } from "@inertiajs/react";

export default function Authenticated({ user, children }) {
    return (
        <div className="bg-gray-100 min-h-[calc(100vh+80px)]">
            <header className="flex items-center justify-between pt-2 px-2">
                <Link href="/admin">
                    <Logo height="34" />
                </Link>
                <Sidebar />
            </header>
            <main className="px-2 pb-24">{children}</main>
            <nav className="fixed bottom-0 w-full">
                <Navbar />
            </nav>
        </div>
    );
}
