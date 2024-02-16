import { useForm, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";

import DeviceForm from "./device-form";
import PrimaryButton from "@/Components/PrimaryButton";
import DangerButton from "@/Components/DangerButton";

const EditDeviceForm = ({ device, onClose }) => {
    const { device_classes } = usePage().props;

    const {
        kitchen_id,
        device_name,
        id_kitchen_section,
        type,
        icon,
        video_code,
        line_number,
        hall_number,
        zigbee_config,
        manufacturer,
        model,
        is_active,
        id_device_class,
        slider_value,
    } = device;

    console.log(device);

    const defaultValues = {
        kitchen_id,
        id_kitchen_section,
        device_name,
        type,
        icon,
        video_code,
        line_number,
        hall_number,
        zigbee_config,
        manufacturer,
        model,
        is_active,
        id_device_class,
        slider_value,
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
            deviceClasses={device_classes}
        >
            <div className="mt-4 flex space-x-2 items-center">
                <PrimaryButton type="submit" className="mt-0">
                    Редактировать
                </PrimaryButton>
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
