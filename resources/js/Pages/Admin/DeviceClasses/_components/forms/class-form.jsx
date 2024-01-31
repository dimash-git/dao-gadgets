import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";

const ClassForm = ({ formData, onChange, onSubmit, errors, children }) => {
    return (
        <form onSubmit={onSubmit} className="workarea__form">
            
            {errors && (
                Object.keys(errors).map((key) => (
                    <InputError key={key}>{errors[key]}</InputError>
                ))
            )}
            
            <div className="workarea__input-container">
                <div className="workarea__input-row">
                    <InputLabel
                        value="Название"
                        htmlFor="class.name"
                    />
                    <TextInput
                        value={formData.name}
                        id="class.name"
                        onChange={(e) => onChange("name", e.target.value)}
                        placeholder="Name"
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="Тип"
                        htmlFor="class.type"
                    />
                    <TextInput
                        value={formData.type}
                        id="class.type"
                        onChange={(e) => onChange("type", e.target.value)}
                        placeholder="Type"
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="Описание"
                        htmlFor="class.description"
                    />
                    <TextInput
                        value={formData.description}
                        id="class.description"
                        onChange={(e) => onChange("description", e.target.value)}
                        placeholder="Description"
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="Дивизия"
                        htmlFor="class.division_into_devices"
                    />
                    <TextInput
                        type="number"
                        id="class.division_into_devices"
                        value={formData.division_into_devices}
                        onChange={(e) =>
                            onChange("division_into_devices", e.target.value)
                        }
                        placeholder="Division into Devices"
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="RGB"
                        htmlFor="class.crutch_rgb_backlight"
                    />
                    <TextInput
                        type="number"
                        id="class.crutch_rgb_backlight"
                        value={formData.crutch_rgb_backlight}
                        onChange={(e) =>
                            onChange("crutch_rgb_backlight", e.target.value)
                        }
                        placeholder="Crutch RGB Backlight"
                    />
                </div>
                <div className="workarea__input-row">
                    <InputLabel
                        value="Параметры"
                        htmlFor="class.device_parameters"
                    />
                    <TextInput
                        type="number"
                        id="class.device_parameters"
                        value={formData.device_parameters}
                        onChange={(e) =>
                            onChange("device_parameters", e.target.value)
                        }
                        placeholder="Device Parameters"
                    />
                </div>
            </div>

            <div>{children}</div>

        </form>
    );
};

export default ClassForm;
