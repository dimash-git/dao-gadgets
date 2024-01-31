import { useForm, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";

import PrimaryButton from "@/Components/PrimaryButton";
import UserForm from "./user-form";

const AddUserForm = ({ kitchen }) => {
    const { roles, kitchens } = usePage().props;

    const defaultValues = {
        name: "",
        email: "",
        password: "",
        kitchen_id: kitchen?.id ?? kitchens[0]?.id,
        role: roles[0]?.name ?? "user",
    };
    const { data, setData, post, errors } = useForm(defaultValues);

    /*
     * Handlers
     */
    const handleChange = (field, value) => {
        setData({ ...data, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("FormData", data);

        post(route("users.store"), {
            // Reload only 'users'
            preserveState: true,
            onSuccess: () => {
                toast.success("Пользователь успешно добавлен!", {
                    position: "bottom-center",
                    reverseOrder: true,
                });
                setData(defaultValues);
            },
            onError: (errors) => {
                console.error(errors);
                toast.error("Ошибка!", {
                    position: "bottom-center",
                    reverseOrder: true,
                });
            },
        });
    };

    return (
        <UserForm
            formData={data}
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
            roles={roles}
            kitchens={kitchens}
        >
            <PrimaryButton type="submit">Добавить пользователя</PrimaryButton>
        </UserForm>
    );
};

export default AddUserForm;
