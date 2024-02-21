import ParameterSlider from "./parameter-slider";
import ParameterToggle from "./parameter-toggle";

const Parameter = ({ device, parameter }) => {
    const { deviceclassvalue: parentClass } = parameter;

    if (!parentClass?.front_type) return null;

    if (parentClass?.front_type === "slider") {
        return (
            <div className="mb-2 w-full pr-4">
                <ParameterSlider parameter={parameter} device={device} />
            </div>
        );
    } else {
        return (
            <div className="flex">
                <ParameterToggle parameter={parameter} device={device} />
            </div>
        );
    }
};

export default Parameter;
