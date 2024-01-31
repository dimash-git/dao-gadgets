import { useForm, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";

import PrimaryButton from "@/Components/PrimaryButton";
import KitchenForm from "./kitchen-form";

const AddKitchenForm = () => {
    const defaultValues = {
        name: "",
        contract_number: "",
        address: "",
        firmware_version: "",
        mqtt_prefix: "",
        settings_addrledstrip: "",
        settings_button: "",
        settings_general: "",
        settings_mosfet: "",
        id: 1,
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

        post(route("kitchens.store"), {
            // Reload only 'settings'
            preserveState: true,
            onSuccess: () => {
                toast.success("Кухня успешно добавлена!", {
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
        <KitchenForm
            formData={data}
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
        >
            <PrimaryButton type="submit">Сохранить</PrimaryButton>
        </KitchenForm>
    );
};

export default AddKitchenForm;
