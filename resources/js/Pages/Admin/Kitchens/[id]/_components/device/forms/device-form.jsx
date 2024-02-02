import Checkbox from "@/Components/Checkbox";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Select from "@/Components/select";
import { deviceTypes } from "@/constants/device";

const DeviceForm = ({
    formData,
    onChange,
    onSubmit,
    errors,
    children,
    deviceClasses,
}) => {
    return (
        <form onSubmit={onSubmit} className="w-full">
            <div className=" grid grid-cols-2 gap-4">
                <div>
                    <Select
                        options={deviceTypes}
                        setSelected={(selected) =>
                            onChange("type", selected.value)
                        }
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
                        onChange={(e) =>
                            onChange("device_name", e.target.value)
                        }
                    />
                </div>

                <div>
                    <TextInput
                        value={formData.icon}
                        placeholder="Введите иконку"
                        onChange={(e) => onChange("icon", e.target.value)}
                    />
                </div>
                <div>
                    <TextInput
                        value={formData.video_code}
                        placeholder="Введите видеокод"
                        onChange={(e) => onChange("video_code", e.target.value)}
                    />
                </div>
                <div>
                    <TextInput
                        value={formData.line_number}
                        placeholder="Введите номер линию"
                        onChange={(e) =>
                            onChange("line_number", e.target.value)
                        }
                    />
                </div>
                <div>
                    <TextInput
                        value={formData.hall_number}
                        placeholder="Введите номер хола"
                        onChange={(e) =>
                            onChange("hall_number", e.target.value)
                        }
                    />
                </div>
                <div>
                    <TextInput
                        value={formData.zigbee_config}
                        placeholder="Введите конфиг zigbee"
                        onChange={(e) =>
                            onChange("zigbee_config", e.target.value)
                        }
                    />
                </div>
                <div>
                    <TextInput
                        value={formData.manufacturer}
                        placeholder="Введите производителя"
                        onChange={(e) =>
                            onChange("manufacturer", e.target.value)
                        }
                    />
                </div>
                <div>
                    <TextInput
                        value={formData.model}
                        placeholder="Введите модель"
                        onChange={(e) => onChange("model", e.target.value)}
                    />
                </div>
                <div>
                    <InputLabel className="flex gap-2 mt-3 items-center">
                        <Checkbox
                            checked={formData.is_active}
                            onChange={(e) =>
                                onChange("is_active", e.target.checked ? 1 : 0)
                            }
                        />
                        Активность
                    </InputLabel>
                </div>
                <div>
                    <Select
                        options={deviceClasses}
                        setSelected={(selected) =>
                            onChange("id_device_class", selected.id)
                        }
                        selected={deviceClasses.find((deviceClass) => {
                            return deviceClass.id === formData.id_device_class;
                        })}
                        placeholder="Выберите класс устройства"
                    />
                </div>
            </div>

            <div className="flex justify-center">{children}</div>

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
