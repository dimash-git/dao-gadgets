import { Link } from "@inertiajs/react";

const InertiaPagination = ({ data }) => {
    return (
        <div className="flex w-full gap-1 justify-center py-4">
            {data.links.map((link, idx) => (
                <Link
                    key={idx}
                    href={link.url}
                    dangerouslySetInnerHTML={{ __html: link.label }}
                    className={`px-4 py-2 border rounded-md ${
                        link.active
                            ? "bg-slate-500 text-white border-slate-500"
                            : "bg-white text-gray-700 border-gray-300"
                    } ${!link.url && "opacity-50 cursor-not-allowed"}`}
                    disabled={!link.url}
                ></Link>
            ))}
        </div>
    );
};

export default InertiaPagination;
