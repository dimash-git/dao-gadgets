import { useForm, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";

import PrimaryButton from "@/Components/PrimaryButton";
import SettingForm from "./setting-form";

const AddSettingForm = ({ kitchen }) => {
    const { kitchens } = usePage().props;

    // По дефолту чтобы выбран был kitchen самого пользователя
    const defaultValues = {
        name: "",
        value: "",
        kitchen_id: kitchen?.id ?? kitchens[0]?.id,
        title: "",
        description: "",
        active: 1,
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

        post(route("settings.store"), {
            // Reload only 'settings'
            preserveState: true,
            onSuccess: () => {
                toast.success("Параметр успешно добавлен!", {
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
        <SettingForm
            formData={data}
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
            kitchens={kitchens}
        >
            <PrimaryButton type="submit">Добавить настройку</PrimaryButton>
        </SettingForm>
    );
};

export default AddSettingForm;
