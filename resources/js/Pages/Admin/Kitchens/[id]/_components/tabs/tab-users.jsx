import { usePage } from "@inertiajs/react";

import AddUserForm from "@/Pages/Admin/Users/_components/forms/add-user-form";
import User from "@/Pages/Admin/Users/_components/user";

const TabUsers = () => {
    const { kitchen, kitchens, roles } = usePage().props;

    const { users } = kitchen;

    console.log(kitchen);

    return (
        <div className="p-4 mt-8 bg-slate-200 rounded-xl">
            <div className="max-w-[320px]">
                <AddUserForm kitchen={kitchen} />
            </div>
            <div className="flex flex-col gap-y-8">
                <div className="max-w-[1260px] mt-8">
                    <div className="mt-6 bg-white shadow-sm rounded-lg divide-y">
                        {users.map((user, idx) => (
                            <User
                                key={idx}
                                user={user}
                                kitchens={kitchens}
                                roles={roles}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TabUsers;
