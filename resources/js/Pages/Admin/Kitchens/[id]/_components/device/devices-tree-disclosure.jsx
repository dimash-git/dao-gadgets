import { Disclosure } from "@headlessui/react";
import {
    Bars3CenterLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/20/solid";
import { PencilSquareIcon, PlusCircleIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";

/* 
    Sections have children
    Devices do not
 */

const DevicesTreeDisclosure = ({
    tree,
    openModal,
    setSelectParent,
    setDeviceAction,
}) => {
    return (
        <>
            {tree.map((item, index) => (
                <Disclosure key={index}>
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
                                            "flex items-center space-x-1",
                                            {
                                                "cursor-pointer": item.children,
                                                "cursor-default":
                                                    !item.children,
                                            }
                                        )}
                                    >
                                        {item.children ? (
                                            <ChevronRightIcon className="h-6 w-6 text-purple-400 mr-1" />
                                        ) : (
                                            <Bars3CenterLeftIcon className="h-5 w-5 text-purple-400 mr-2" />
                                        )}
                                        <span>{item.name}</span>
                                    </Disclosure.Button>

                                    <button
                                        className="p-1 group hover:bg-slate-100 transition-all rounded-full"
                                        onClick={() => {
                                            setDeviceAction(
                                                item.children ? "add" : "edit"
                                            );
                                            setSelectParent(item);
                                            openModal();
                                        }}
                                    >
                                        {item.children ? (
                                            <PlusCircleIcon className="h-6 w-6 group-hover:text-purple-500 transition-all" />
                                        ) : (
                                            <PencilSquareIcon className="h-4 w-4 group-hover:text-purple-500 transition-all" />
                                        )}
                                    </button>
                                </div>
                            </div>
                            {item.children && (
                                <Disclosure.Panel className="px-4 text-sm text-gray-500">
                                    <DevicesTreeDisclosure
                                        tree={item.children}
                                        openModal={openModal}
                                        setSelectParent={setSelectParent}
                                        setDeviceAction={setDeviceAction}
                                    />
                                </Disclosure.Panel>
                            )}
                        </>
                    )}
                </Disclosure>
            ))}
        </>
    );
};

export default DevicesTreeDisclosure;
