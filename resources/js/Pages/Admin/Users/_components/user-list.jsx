import { usePage } from "@inertiajs/react";

import User from "./user";
import InertiaPagination from "@/Components/InertiaPagination";

const UserList = () => {
    const { users, kitchens, roles } = usePage().props;

    return (
        <div className="workarea__table-container">
            <table className="workarea__table">
                <thead className="workarea__table-head">
                    <tr className="workarea__table-row">
                        {/* В дальнейшем реализовать создание заголовков таблицы циклом по выбранным параметрам */}
                        <th className="workarea__table-header">ID</th>
                        <th className="workarea__table-header">Имя</th>
                        <th className="workarea__table-header">Email</th>
                        <th className="workarea__table-header">Дом</th>
                        <th className="workarea__table-header">Роль</th>
                        <th className="workarea__table-header"></th>
                    </tr>
                </thead>
                <tbody className="workarea__table-body">
                    {users.data.map((user, idx) => (
                        <User
                            key={idx}
                            user={user}
                            kitchens={kitchens}
                            roles={roles}
                        />
                    ))}
                </tbody>
            </table>
        </div>       
    );
};

export default UserList;
