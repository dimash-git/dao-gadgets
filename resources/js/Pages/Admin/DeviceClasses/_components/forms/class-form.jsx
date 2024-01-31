import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

const ClassForm = ({ formData, onChange, onSubmit, errors, children }) => {
    return (
        <form onSubmit={onSubmit} className="w-full space-y-4">
            <div>
                <TextInput
                    value={formData.name}
                    onChange={(e) => onChange("name", e.target.value)}
                    placeholder="Name"
                />
            </div>
            <div>
                <TextInput
                    value={formData.type}
                    onChange={(e) => onChange("type", e.target.value)}
                    placeholder="Type"
                />
            </div>
            <div>
                <TextInput
                    value={formData.description}
                    onChange={(e) => onChange("description", e.target.value)}
                    placeholder="Description"
                />
            </div>
            <div>
                <TextInput
                    type="number"
                    value={formData.division_into_devices}
                    onChange={(e) =>
                        onChange("division_into_devices", e.target.value)
                    }
                    placeholder="Division into Devices"
                />
            </div>
            <div>
                <TextInput
                    type="number"
                    value={formData.crutch_rgb_backlight}
                    onChange={(e) =>
                        onChange("crutch_rgb_backlight", e.target.value)
                    }
                    placeholder="Crutch RGB Backlight"
                />
            </div>
            <div>
                <TextInput
                    type="number"
                    value={formData.device_parameters}
                    onChange={(e) =>
                        onChange("device_parameters", e.target.value)
                    }
                    placeholder="Device Parameters"
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

export default ClassForm;
