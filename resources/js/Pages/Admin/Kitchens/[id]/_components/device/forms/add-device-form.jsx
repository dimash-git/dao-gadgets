import { useForm, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";

import DeviceForm from "./device-form";
import PrimaryButton from "@/Components/PrimaryButton";
import { deviceTypes } from "@/constants/device";

const AddDeviceForm = ({ section, onClose }) => {
    const { kitchen } = usePage().props;

    const defaultValues = {
        kitchen_id: kitchen.id,
        id_kitchen_section: section.id,
        device_name: "",
        type: deviceTypes[0]?.value ?? "",
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
        console.log("FormData", data);
        // return;

        post(route("devices.store"), {
            // Reload only 'settings'
            preserveState: true,
            onSuccess: () => {
                toast.success("Девайс успешно добавлен!", {
                    position: "bottom-center",
                    reverseOrder: true,
                });
                setData(defaultValues);
                onClose();
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
        <DeviceForm
            formData={data}
            onChange={handleChange}
            onSubmit={handleSubmit}
            errors={errors}
        >
            <PrimaryButton type="submit" className="mt-4">
                Добавить
            </PrimaryButton>
        </DeviceForm>
    );
};

export default AddDeviceForm;
