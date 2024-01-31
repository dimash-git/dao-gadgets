import { Disclosure, Transition } from "@headlessui/react";
import ExpandArrow from "../../../images/expand-arrow_day.svg?react";
import { cn } from "@/lib/utils";

const Accordion = ({ buttonContent, children, buttonProps }) => {
    return (
        <Disclosure
            as="div"
            className="bg-app-lightgray rounded-[10px] p-[10px] shadow-app-blue"
        >
            {({ open }) => (
                <>
                    <Disclosure.Button
                        className="flex w-full justify-between text-left focus:outline-none focus-visible:ring"
                        {...buttonProps}
                    >
                        <span>{buttonContent}</span>
                        <ExpandArrow
                            height="24"
                            width="24"
                            className={cn(
                                "transition-transform duration-300",
                                open ? "rotate-180" : "rotate-0"
                            )}
                        />
                    </Disclosure.Button>
                    <Transition
                        enter="transition duration-300 ease-out"
                        enterFrom="transform scale-95 opacity-0"
                        enterTo="transform scale-100 opacity-100"
                        leave="transition duration-300 ease-out"
                        leaveFrom="transform scale-100 opacity-100"
                        leaveTo="transform scale-95 opacity-0"
                    >
                        <Disclosure.Panel className="pt-4 text-sm text-gray-500">
                            {children}
                        </Disclosure.Panel>
                    </Transition>
                </>
            )}
        </Disclosure>
    );
};

export default Accordion;
