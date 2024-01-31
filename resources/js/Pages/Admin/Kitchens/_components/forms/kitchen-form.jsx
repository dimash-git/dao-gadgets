import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";

const KitchenForm = ({ formData, onChange, onSubmit, errors, children }) => {
    return (
        <form onSubmit={onSubmit} className="w-full space-y-4">
            <div>
                <InputLabel value="Название кухни" />
                <TextInput
                    value={formData.name}
                    placeholder="Введите имя кухни"
                    onChange={(e) => onChange("name", e.target.value)}
                />
            </div>
            <div>
                <InputLabel value="Номер договора" />
                <TextInput
                    value={formData.contract_number}
                    placeholder="Введите номер договора"
                    onChange={(e) =>
                        onChange("contract_number", e.target.value)
                    }
                />
            </div>
            <div>
                <InputLabel value="Адрес" />
                <TextInput
                    value={formData.address}
                    placeholder="Введите адрес"
                    onChange={(e) => onChange("address", e.target.value)}
                />
            </div>
            <div>
                <InputLabel value="Версия прошивки" />

                <TextInput
                    value={formData.firmware_version}
                    placeholder="Введите версию прошивки"
                    onChange={(e) =>
                        onChange("firmware_version", e.target.value)
                    }
                />
            </div>
            <div>
                <InputLabel value="MQTT Префикс" />
                <TextInput
                    value={formData.mqtt_prefix}
                    placeholder="MQTT Префикс"
                    onChange={(e) => onChange("mqtt_prefix", e.target.value)}
                />
            </div>
            <div>
                <InputLabel value="Адресная лента" />
                <TextInput
                    value={formData.settings_addrledstrip}
                    placeholder="Настройки адресных лент JSON"
                    onChange={(e) =>
                        onChange("settings_addrledstrip", e.target.value)
                    }
                />
            </div>
            <div>
                <InputLabel value="Кнопки" />
                <TextInput
                    value={formData.settings_button}
                    placeholder="Настройки кнопок JSON"
                    onChange={(e) =>
                        onChange("settings_button", e.target.value)
                    }
                />
            </div>
            <div>
                <InputLabel value="MAIN" />
                <TextInput
                    value={formData.settings_general}
                    placeholder="Настройки MAIN JSON"
                    onChange={(e) =>
                        onChange("settings_general", e.target.value)
                    }
                />
            </div>
            <div>
                <InputLabel value="Мосфеты" />
                <TextInput
                    value={formData.settings_mosfet}
                    placeholder="Настройки мосфетов JSON"
                    onChange={(e) =>
                        onChange("settings_mosfet", e.target.value)
                    }
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

export default KitchenForm;
