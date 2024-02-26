import { Link } from "@inertiajs/react";

const News = ({ news, id }) => {
    return (
        <tr className="workarea__table-row">
            <td className="workarea__table-data">{id}</td>
            <td className="workarea__table-data">
                <Link href={route("news.show", news)} className="underline">
                    {" "}
                    {news?.title}
                </Link>
            </td>
            <td className="workarea__table-data">
                {String(news?.kitchens.map((kitchen) => kitchen.name))}
            </td>
            <td className="workarea__table-data">{news?.description}</td>
        </tr>
    );
};

export default News;
