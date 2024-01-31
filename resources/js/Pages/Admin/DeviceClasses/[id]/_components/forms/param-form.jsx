import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";

const ParamForm = ({ formData, onChange, onSubmit, errors, children }) => {
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
                    value={formData.intependent_title}
                    onChange={(e) =>
                        onChange("intependent_title", e.target.value)
                    }
                    placeholder="Independent Title"
                />
            </div>

            <div>
                <TextInput
                    value={formData.default_value}
                    onChange={(e) => onChange("default_value", e.target.value)}
                    placeholder="Default Value"
                />
            </div>

            <div>
                <TextInput
                    value={formData.topic}
                    onChange={(e) => onChange("topic", e.target.value)}
                    placeholder="Topic"
                />
            </div>

            <div>
                <TextInput
                    value={formData.relay_duration}
                    onChange={(e) => onChange("relay_duration", e.target.value)}
                    placeholder="Relay Duration"
                />
            </div>

            <div>
                <TextInput
                    value={formData.topic_read}
                    onChange={(e) => onChange("topic_read", e.target.value)}
                    placeholder="Topic Read"
                />
            </div>

            <div>
                <TextInput
                    value={formData.val}
                    onChange={(e) => onChange("val", e.target.value)}
                    placeholder="Val"
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
                    value={formData.yandex_properties}
                    onChange={(e) =>
                        onChange("yandex_properties", e.target.value)
                    }
                    placeholder="Yandex Properties"
                />
            </div>

            <div>
                <TextInput
                    type="number"
                    value={formData.min}
                    onChange={(e) => onChange("min", e.target.value)}
                    placeholder="Min"
                />
            </div>

            <div>
                <TextInput
                    type="number"
                    value={formData.max}
                    onChange={(e) => onChange("max", e.target.value)}
                    placeholder="Max"
                />
            </div>

            <div>
                <TextInput
                    value={formData.status_on}
                    onChange={(e) => onChange("status_on", e.target.value)}
                    placeholder="Status On"
                />
            </div>

            <div>
                <TextInput
                    value={formData.status_off}
                    onChange={(e) => onChange("status_off", e.target.value)}
                    placeholder="Status Off"
                />
            </div>

            <div>
                <TextInput
                    type="number"
                    value={formData.independent_device}
                    onChange={(e) =>
                        onChange("independent_device", e.target.value)
                    }
                    placeholder="Independent Device"
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
                    type="number"
                    value={formData.in_scenario_active}
                    onChange={(e) =>
                        onChange("in_scenario_active", e.target.value)
                    }
                    placeholder="In Scenario Active"
                />
            </div>

            <div>{children}</div>

            {/* Error Messages */}
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

export default ParamForm;
