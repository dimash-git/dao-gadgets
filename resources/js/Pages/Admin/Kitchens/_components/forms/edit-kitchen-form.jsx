import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

import PrimaryButton from "@/Components/PrimaryButton";
import KitchenForm from "./kitchen-form";

const EditKitchenForm = ({ setEditing, kitchen, kitchens }) => {
    const {
        name,
        contract_number,
        address,
        firmware_version,
        mqtt_prefix,
        settings_addrledstrip,
        settings_button,
        settings_general,
        settings_mosfet,
    } = kitchen;
    console.log(kitchen);
    const defaultValues = {
        name,
        contract_number,
        address,
        firmware_version,
        mqtt_prefix,
        settings_addrledstrip,
        settings_button,
        settings_general,
        settings_mosfet,
    };
    const { data, setData, patch, errors, reset } = useForm(defaultValues);

    /*
     * Handlers
     */
    const handleChange = (field, value) => {
        setData({ ...data, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        patch(route("kitchens.update", kitchen.id), {
            preserveScroll: true,
            preserveState: true,
            onSuccess: () => {
                toast.success("Кухня успешно изменена!", {
                    position: "bottom-right",
                    reverseOrder: true,
                });
                setEditing(false);
            },
            onError: (errors) => {
                console.error(errors);
                toast.error("Ошибка!", {
                    position: "bottom-right",
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
            kitchens={kitchens}
        >
            <div className="space-x-2">
                <PrimaryButton>Сохранить</PrimaryButton>
                <button onClick={() => setEditing(false) && reset()}>
                    Отменить
                </button>
            </div>
        </KitchenForm>
    );
};

export default EditKitchenForm;
