import InputError from "@/Components/InputError";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/select";
import { deviceTypes } from "@/constants/device";

const DeviceForm = ({ formData, onChange, onSubmit, errors, children }) => {
    return (
        <form onSubmit={onSubmit} className="w-full space-y-4">
            <div>
                <Select
                    options={deviceTypes}
                    setSelected={(selected) => onChange("type", selected.value)}
                    selected={deviceTypes.find(
                        (type) => type.value === formData.type
                    )}
                    placeholder="Выберите тип"
                />
            </div>
            <div>
                <TextInput
                    value={formData.device_name}
                    placeholder="Введите имя девайса"
                    onChange={(e) => onChange("device_name", e.target.value)}
                />
            </div>

            <div>{children}</div>

            {errors && (
                <div className="text-red-500 mt-2">
                    {Object.keys(errors).map((key) => (
                        <InputError key={key}>{errors[key]}</InputError>
                    ))}
                </div>
            )}
        </form>
    );
};

export default DeviceForm;
