import { Fragment, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { usePage } from "@inertiajs/react";
import XMarkIcon from "@/icons/x-mark-icon";

export default function ShowReceipt({ data }) {
    const [open, setOpen] = useState(false);
    const { props } = usePage();
    const [select, setSelect] = useState(0);
    const cancelButtonRef = useRef(null);
    return (
        <>
            <button onClick={() => setOpen(true)}>{data?.discription}</button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-10"
                    initialFocus={cancelButtonRef}
                    onClose={setOpen}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                                enterTo="opacity-100 translate-y-0 sm:scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 translate-y-0 sm:scale-100"
                                leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                            >
                                <Dialog.Panel className="">
                                    <div className="bg-white">
                                        <div className="sm:flex sm:items-start">
                                            <div className="mt-3 text-center  sm:mt-0 sm:text-left">
                                                <button
                                                    onClick={() =>
                                                        setOpen(false)
                                                    }
                                                    className="absolute p-3 bg-red-500 text-white"
                                                >
                                                    <XMarkIcon />
                                                </button>
                                                {
                                                    data.upload_image[
                                                        select
                                                    ]?.file_name? <img
                                                    src={
                                                        "/storage/images/" +
                                                        data.upload_image[
                                                            select
                                                        ]?.file_name
                                                    }
                                                    className="h-[80vh]"
                                                />:<div className="w-96 text-center h-96 flex items-center justify-center">No Images</div>
                                                }
                                               
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bg-gray-50 px-4 py-3 sm:flex sm:flex-row-reverse sm:px-6">
                                        <button
                                            type="button"
                                            className="inline-flex w-full justify-center rounded-md bg-red-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-500 sm:ml-3 sm:w-auto"
                                            onClick={() =>
                                                setSelect(select >=  (data.upload_image.length - 1) ? 0 : select + 1)
                                            }
                                        >
                                            Next
                                        </button>
                                        <button
                                            type="button"
                                            className="mt-3 inline-flex w-full justify-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 sm:mt-0 sm:w-auto"
                                            onClick={() =>
                                                setSelect(
                                                    select <= 0 ? 0 : select - 1
                                                )
                                            }
                                            ref={cancelButtonRef}
                                        >
                                            Back
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}
