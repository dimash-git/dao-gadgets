import React, { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';

const MultiLevelMenu = ({ data, onItemSelected }) => {
    const [selectedNode, setSelectedNode] = useState(null);
    const [openSubmenu, setOpenSubmenu] = useState(data.length > 0 ? data[0].id : null);

    const handleSelect = (node) => {
        setSelectedNode(node);
        onItemSelected(node.id);
    };

    const handleToggleSubmenu = (node) => {
        setOpenSubmenu(openSubmenu === node.id ? null : node.id);
    };

    return (
        <Listbox as="div" className="space-y-1">
            {data.map((node) => (
                <Listbox.Option key={node.id} value={node} as={Fragment}>
                    {({ active, selected }) => (
                        <div className="relative">
                            <div
                                className={`cursor-pointer ${active ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
                                onClick={() => handleSelect(node)}
                            >
                                {node.name}
                                {node.nodes && (
                                    <button
                                        className="absolute right-0 top-0 px-2 py-1"
                                        onClick={() => handleToggleSubmenu(node)}
                                    >
                                        {openSubmenu === node.id ? '-' : '+'}
                                    </button>
                                )}
                            </div>
                            {node.nodes && (
                                <Transition
                                    show={openSubmenu === node.id}
                                    enter="transition duration-100 ease-out"
                                    enterFrom="transform scale-95 opacity-0"
                                    enterTo="transform scale-100 opacity-100"
                                    leave="transition duration-75 ease-out"
                                    leaveFrom="transform scale-100 opacity-100"
                                    leaveTo="transform scale-95 opacity-0"
                                >
                                    <Listbox.Options static>
                                        {node.nodes.map((childNode) => (
                                            <Listbox.Option key={childNode.id} value={childNode}>
                                                {({ active }) => (
                                                    <div
                                                        className={`pl-6 cursor-pointer ${
                                                            active ? 'bg-blue-500 text-white' : 'bg-gray-200'
                                                        }`}
                                                        onClick={() => handleSelect(childNode)}
                                                    >
                                                        {childNode.name}
                                                    </div>
                                                )}
                                            </Listbox.Option>
                                        ))}
                                    </Listbox.Options>
                                </Transition>
                            )}
                        </div>
                    )}
                </Listbox.Option>
            ))}
        </Listbox>
    );
};

export default MultiLevelMenu;
