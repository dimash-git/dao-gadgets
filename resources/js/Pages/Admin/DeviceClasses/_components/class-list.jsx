import { usePage } from "@inertiajs/react";

import Class from "./class";

const ClassList = () => {
    const { deviceClasses } = usePage().props;

    return (
        <div className="workarea__table-container">
            <table className="workarea__table">
                <thead className="workarea__table-head">
                    <tr className="workarea__table-row">
                        {/* В дальнейшем реализовать создание заголовков таблицы циклом по выбранным параметрам */}
                        <th className="workarea__table-header">ID</th>
                        <th className="workarea__table-header">Название</th>
                        <th className="workarea__table-header">Тип</th>
                        <th className="workarea__table-header">Описание</th>
                        <th className="workarea__table-header">Дивизия</th>
                        <th className="workarea__table-header">RGB</th>
                        <th className="workarea__table-header">Параметры</th>
                        <th className="workarea__table-header"></th>
                    </tr>
                </thead>
                <tbody className="workarea__table-body">
                    {deviceClasses.data.map((deviceClass, idx) => (
                        <Class key={idx} deviceClass={deviceClass} />
                    ))}
                </tbody>
            </table>
        </div>  
    );
};

export default ClassList;
