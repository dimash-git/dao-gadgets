import { Disclosure } from "@headlessui/react";
import { Bars3CenterLeftIcon } from "@heroicons/react/20/solid";
import { PencilSquareIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

/* 
    Sections have children
    Devices do not
 */

const DeviceDisclosure = ({
    device,
    openModal,
    setDeviceAction,
    setSelectedDevice,
}) => {
    return (
        <Disclosure>
            {({ open }) => (
                <>
                    <div
                        className={
                            "flex w-full rounded-lg items-center p-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75"
                        }
                    >
                        <div className="flex items-center justify-between w-full">
                            <Disclosure.Button
                                className={clsx(
                                    "flex items-center space-x-1 cursor-default"
                                )}
                            >
                                <Bars3CenterLeftIcon className="h-5 w-5 text-purple-400 mr-2" />

                                <span>{device?.device_name}</span>
                            </Disclosure.Button>

                            <button
                                className="p-1 group hover:bg-slate-100 transition-all rounded-full"
                                onClick={() => {
                                    setDeviceAction("edit");
                                    setSelectedDevice(device);
                                    openModal();
                                }}
                            >
                                <PencilSquareIcon className="h-4 w-4 group-hover:text-purple-500 transition-all" />
                            </button>
                        </div>
                    </div>
                </>
            )}
        </Disclosure>
    );
};

export default DeviceDisclosure;
