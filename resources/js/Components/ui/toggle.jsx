import { Switch } from "@headlessui/react";
import CrossIcon from "../../../images/switch-icon_false.svg";
import CheckIcon from "../../../images/switch-icon_true.svg";
import { cn } from "@/lib/utils";

const Toggle = ({ title, checked, checkedHandler }) => {
    return (
        <div className="flex flex-col gap-y-2">
            {title && (
                <span className="text-[12px] leading-3 text-app-gray">
                    {title}
                </span>
            )}
            <div>
                <Switch
                    checked={checked}
                    onChange={() => checkedHandler()}
                    className="  
                    h-[33px]
                    w-[64px]
                    cursor-pointer 
                    rounded-[100px]
                    border-none
                    transition-colors duration-200 ease-in-out
                    focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75
                    gray-gradient"
                >
                    <div
                        className={cn(
                            "bg-no-repeat w-full h-full relative inline-flex",
                            checked
                                ? "bg-[center_left_10px]"
                                : "bg-[center_right_10px]"
                        )}
                        style={{
                            backgroundImage: `url(${
                                checked ? CheckIcon : CrossIcon
                            })`,
                        }}
                    >
                        <span
                            aria-hidden="true"
                            className={cn(
                                "inline-block translate-y-[2.5px] pointer-events-none h-7 w-7 rounded-full bg-white shadow-[0px_3px_6px_rgba(0,78,157,0.16)] transform transition duration-200 ease-in-out",
                                checked
                                    ? "translate-x-8"
                                    : "translate-x-[2.5px]"
                            )}
                        />
                    </div>
                </Switch>
            </div>
        </div>
    );
};

export default Toggle;
