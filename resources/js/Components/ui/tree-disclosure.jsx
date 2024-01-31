import { Disclosure } from "@headlessui/react";
import {
    Bars3CenterLeftIcon,
    ChevronRightIcon,
} from "@heroicons/react/20/solid";
import clsx from "clsx";

const TreeDisclosure = ({ data }) => {
    return (
        <>
            {data.map((item, index) => (
                <Disclosure key={index}>
                    {({ open }) => (
                        <>
                            <Disclosure.Button
                                as="div"
                                className={clsx(
                                    "flex w-full rounded-lg items-center px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500/75",
                                    {
                                        "cursor-pointer": item.children,
                                        "cursor-default": !item.children,
                                    }
                                )}
                            >
                                {item.children ? (
                                    <ChevronRightIcon className="h-5 w-5 text-purple-500 mr-1" />
                                ) : (
                                    <Bars3CenterLeftIcon className="h-4 w-4 text-purple-500 mr-2" />
                                )}
                                <span>{item.name}</span>
                            </Disclosure.Button>
                            {item.children && (
                                <Disclosure.Panel className="px-4 text-sm text-gray-500">
                                    {item.content}
                                    <TreeDisclosure data={item.children} />
                                </Disclosure.Panel>
                            )}
                        </>
                    )}
                </Disclosure>
            ))}
        </>
    );
};

export default TreeDisclosure;
