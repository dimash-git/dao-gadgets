import { useForm, usePage } from "@inertiajs/react";
import toast from "react-hot-toast";

import DeviceForm from "./device-form";
import PrimaryButton from "@/Components/PrimaryButton";
import { deviceTypes } from "@/constants/device";

const AddDeviceForm = ({ section, onClose }) => {
    const { kitchen, device_classes } = usePage().props;

    const defaultValues = {
        kitchen_id: kitchen.id,
        id_kitchen_section: section.id,
        type: deviceTypes[0]?.value ?? "",
        device_name: "",
        icon: "",
        video_code: "",
        line_number: "",
        hall_number: "",
        zigbee_config: "",
        manufacturer: "",
        model: "",
        is_active: 1,
        id_device_class: device_classes[0]?.id ?? "",
        slider_value: 0,
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
            deviceClasses={device_classes}
        >
            <PrimaryButton type="submit" className="mt-4">
                Добавить
            </PrimaryButton>
        </DeviceForm>
    );
};

export default AddDeviceForm;
