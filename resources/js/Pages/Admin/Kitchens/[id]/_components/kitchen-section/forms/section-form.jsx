import InputLabel from "@/Components/InputLabel.jsx";
import Checkbox from "@/Components/Checkbox.jsx";
import TextInput from "@/Components/TextInput";
import InputError from "@/Components/InputError";
import Select from "@/Components/select";
import { kitchenSectionTypes } from "@/constants/kitchen-section";

const SectionForm = ({ formData, onChange, onSubmit, errors, children }) => {
    return (
        <form onSubmit={onSubmit} className="w-full space-y-4">
            <div>
                <TextInput
                    value={formData.name}
                    onChange={(e) => onChange("name", e.target.value)}
                    placeholder="Название"
                />
            </div>
            <div>
                <Select
                    options={kitchenSectionTypes}
                    setSelected={(selected) => onChange("type", selected.value)}
                    selected={kitchenSectionTypes.find(
                        (type) => type.value === formData.type
                    )}
                    placeholder="Выберите тип"
                />
            </div>
            <div>
                <InputLabel className="flex gap-2 items-center">
                    <Checkbox
                        checked={formData.is_active}
                        onChange={(e) =>
                            onChange("is_active", e.target.checked ? 1 : 0)
                        }
                    />
                    Активность
                </InputLabel>
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

export default SectionForm;
