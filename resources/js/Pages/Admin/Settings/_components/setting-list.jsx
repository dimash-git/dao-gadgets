import { usePage } from "@inertiajs/react";

import Setting from "./setting";

const SettingList = () => {
    const { settings, kitchens } = usePage().props;
    return (
        <div className="workarea__table-container">
            <table className="workarea__table">
                <thead className="workarea__table-head">
                    <tr className="workarea__table-row">
                        {/* В дальнейшем реализовать создание заголовков таблицы циклом по выбранным параметрам */}
                        <th className="workarea__table-header">ID</th>
                        <th className="workarea__table-header">Название параметра</th>
                        <th className="workarea__table-header">Системное имя</th>
                        <th className="workarea__table-header">Значение</th>
                        <th className="workarea__table-header">Кухня</th>
                        <th className="workarea__table-header">Описание</th>
                        <th className="workarea__table-header"></th>
                    </tr>
                </thead>
                <tbody className="workarea__table-body">
                    {settings.data.map((setting, idx) => (
                        <Setting
                            key={idx}
                            setting={setting}
                            kitchens={kitchens}
                        />
                    ))}
                </tbody>
            </table>
        </div>    
    );
};

export default SettingList;
