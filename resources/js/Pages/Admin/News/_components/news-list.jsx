import { usePage } from "@inertiajs/react";
import News from "./news";

const NewsList = () => {
    const { news_list } = usePage().props;
    return (
        <div className="workarea__table-container mt-10">
            <table className="workarea__table">
                <thead className="workarea__table-head">
                    <tr className="workarea__table-row">
                        {/* В дальнейшем реализовать создание заголовков таблицы циклом по выбранным параметрам */}
                        <th className="workarea__table-header">#</th>
                        <th className="workarea__table-header">Заголовок</th>
                        <th className="workarea__table-header">IDs</th>
                        <th className="workarea__table-header">Описание</th>
                    </tr>
                </thead>
                <tbody className="workarea__table-body">
                    {news_list.length > 0 &&
                        news_list.map((news, idx) => (
                            <News key={idx} news={news} id={idx + 1} />
                        ))}
                </tbody>
            </table>
        </div>
    );
};

export default NewsList;
