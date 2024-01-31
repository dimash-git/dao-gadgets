import { Inertia } from "@inertiajs/inertia";
import { useForm } from "@inertiajs/react";
import toast from "react-hot-toast";

import DeviceForm from "./device-form";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";

const EditDeviceForm = ({ device, onClose }) => {
    const { kitchen_id, device_name, id_kitchen_section } = device;

    const defaultValues = {
        kitchen_id,
        id_kitchen_section,
        device_name,
    };

    const {
        data,
        setData,
        patch,
        delete: deviceDelete,
        errors,
    } = useForm(defaultValues);

    /*
     * Handlers
     */
    const handleChange = (field, value) => {
        setData({ ...data, [field]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("FormData", data);
        // return;

        patch(route("devices.update", device.id), {
            // Reload only 'settings'
            preserveState: true,
            onSuccess: () => {
                toast.success("Девайс успешно изменен!", {
                    position: "bottom-center",
                    reverseOrder: true,
                });
                setData({ ...defaultValues, device_name: data.device_name });
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

    const handleDelete = () => {
        deviceDelete(route("devices.destroy", device.id), {
            preserveState: true,
            onSuccess: () => {
                toast.success("Девайс успешно удален!");
                onClose();
            },
            onError: (errors) => {
                console.error(errors);
                toast.error("Ошибка!");
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
            <div className="mt-4 flex space-x-2 items-center">
                <PrimaryButton type="submit">Редактировать</PrimaryButton>
                <DangerButton
                    type="button"
                    className="ms-3"
                    onClick={handleDelete}
                >
                    Удалить
                </DangerButton>
            </div>
        </DeviceForm>
    );
};

export default EditDeviceForm;
