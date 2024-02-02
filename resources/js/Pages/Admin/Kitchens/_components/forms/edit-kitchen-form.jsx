import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

import PrimaryButton from "@/Components/PrimaryButton";
import KitchenForm from "./kitchen-form";

const EditKitchenForm = ({ kitchen, kitchens, closeModal = null }) => {
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
                closeModal();
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
            <PrimaryButton className="mt-0">Сохранить</PrimaryButton>
            <button
                onClick={() => {
                    closeModal();
                    reset();
                }}
                type="button"
            >
                Отменить
            </button>
        </KitchenForm>
    );
};

export default EditKitchenForm;
