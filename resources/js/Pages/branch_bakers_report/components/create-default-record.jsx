import { Fragment, useEffect, useRef, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import XMarkIcon from "@/icons/x-mark-icon";
import { get_all_breads } from "@/services/breads-services";
import TrashIcon from "@/icons/trash-icon";
import { create_default_record } from "@/services/records-services";
import { isRandomhandler, isSetResponse } from "@/_redux/app-slice";
import { useDispatch } from "react-redux";
import LoadingIcon from "@/icons/loading-icon";
import moment from "moment";
export default function CreateDefaultRecord({ branchid }) {
    const [open, setOpen] = useState(false);
    const [data, setData] = useState([]);
    const [breads, setBreads] = useState([]);
    const dispatch = useDispatch();
    const ref = useRef();
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        get_all_breads().then((res) => {
            setBreads(res);
        });
    }, []);

    const handleChange = (index, key, value) => {
        setData((prevData) => {
            const newData = [...prevData];
            newData[index][key] = value;
            return newData;
        });
    };

    const addField = () => {
        setData((prevData) => [...prevData, { id: null, quantity: "" }]);
    };

    const removeField = (index) => {
        setData((prevData) => {
            const newData = [...prevData];
            newData.splice(index, 1);
            return newData;
        });
    };

    function loadingHandler() {
        return {
            status: "loading",
            message: "Loading...",
        };
    }
    function submitHandler(e) {
        e.preventDefault();
        setLoading(true);
        dispatch(isSetResponse(loadingHandler()));
        const newData = {
            data,
            branchid: branchid,
            date:moment().format('L')
        };
      
        create_default_record(newData).then((res) => {
            dispatch(isSetResponse(res));
            setLoading(false);
            setOpen(false);
            setData([]);
            dispatch(isRandomhandler());
        });
    }

    return (
        <>
            <button
                onClick={() => setOpen(true)}
                type="button"
                className="inline-flex ml-5 mb-3 items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
            >
                CREATE DEFAULT RECORD
            </button>
            <Transition.Root show={open} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={setOpen}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-gray-500 bg-opacity-10 transition-opacity" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-hidden">
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
                                <Transition.Child
                                    as={Fragment}
                                    enter="transform transition ease-in-out duration-500 sm:duration-700"
                                    enterFrom="translate-x-full"
                                    enterTo="translate-x-0"
                                    leave="transform transition ease-in-out duration-500 sm:duration-700"
                                    leaveFrom="translate-x-0"
                                    leaveTo="translate-x-full"
                                >
                                    <Dialog.Panel className="pointer-events-auto relative w-screen max-w-md">
                                        <Transition.Child
                                            as={Fragment}
                                            enter="ease-in-out duration-500"
                                            enterFrom="opacity-0"
                                            enterTo="opacity-100"
                                            leave="ease-in-out duration-500"
                                            leaveFrom="opacity-100"
                                            leaveTo="opacity-0"
                                        >
                                            <div className="absolute left-0 top-0 -ml-8 flex pr-2 pt-4 sm:-ml-10 sm:pr-4">
                                                <button
                                                    type="button"
                                                    className="relative rounded-md text-red-500 hover:text-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
                                                    onClick={() =>
                                                        setOpen(false)
                                                    }
                                                >
                                                    <span className="absolute -inset-2.5" />
                                                    <span className="sr-only">
                                                        Close panel
                                                    </span>
                                                    <XMarkIcon
                                                        className="h-6 w-6"
                                                        aria-hidden="true"
                                                    />
                                                </button>
                                            </div>
                                        </Transition.Child>
                                        <div className="flex h-full flex-col overflow-y-scroll bg-white py-6 shadow-xl">
                                            <div className="px-4 sm:px-6">
                                                <Dialog.Title className="text-base font-semibold leading-6 text-gray-900">
                                                    CREATE DEFAULT RECORD
                                                </Dialog.Title>
                                            </div>
                                            <div className="relative mt-6 flex-1 px-4 sm:px-6">
                                                <button
                                                    onClick={() => addField()}
                                                    type="button"
                                                    className="inline-flex mb-3 items-center rounded-md bg-blue-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
                                                >
                                                    ADD BREAD
                                                </button>
                                                <form
                                                    name="form"
                                                    ref={ref}
                                                    onSubmit={submitHandler}
                                                    className="flex flex-col h-full "
                                                >
                                                    <div className="flex-1">
                                                        {data.map(
                                                            (res, index) => (
                                                                <div
                                                                    key={index}
                                                                    className="flex gap-3"
                                                                >
                                                                    <div className="flex-1">
                                                                        <select
                                                                            onInput={(
                                                                                e
                                                                            ) =>
                                                                                handleChange(
                                                                                    index,
                                                                                    "id",
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                            name="token"
                                                                            required
                                                                            className={` appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-1.5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                                                        >
                                                                            <option
                                                                                defaultValue={
                                                                                    null
                                                                                }
                                                                            ></option>
                                                                            {breads?.map(
                                                                                (
                                                                                    res,
                                                                                    index
                                                                                ) => (
                                                                                    <option
                                                                                        key={
                                                                                            index
                                                                                        }
                                                                                        value={
                                                                                            res.id
                                                                                        }
                                                                                    >
                                                                                        {
                                                                                            res.bread_name
                                                                                        }
                                                                                    </option>
                                                                                )
                                                                            )}
                                                                        </select>
                                                                    </div>
                                                                    <div className="flex-1">
                                                                        <input
                                                                            onChange={(
                                                                                e
                                                                            ) =>
                                                                                handleChange(
                                                                                    index,
                                                                                    "quantity",
                                                                                    e
                                                                                        .target
                                                                                        .value
                                                                                )
                                                                            }
                                                                            required
                                                                            className={`appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-1.5 px-4 mb-3 leading-tight focus:outline-none focus:bg-white`}
                                                                            type="number"
                                                                            placeholder="Quantity"
                                                                        />
                                                                    </div>
                                                                    <div className="flex-none">
                                                                        <button
                                                                            type="button"
                                                                            onClick={() =>
                                                                                removeField(
                                                                                    index
                                                                                )
                                                                            }
                                                                            className=" bg-red-500 text-white px-2 py-1 rounded"
                                                                        >
                                                                            <TrashIcon />
                                                                        </button>
                                                                    </div>
                                                                </div>
                                                            )
                                                        )}
                                                    </div>

                                                    <div className="flex-none">
                                                        <button
                                                            disabled={
                                                                data.length == 0
                                                            }
                                                            type="submit"
                                                            className="flex-none w-full mb-2 bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded bottom-0"
                                                        >
                                                            {loading ? (
                                                                <LoadingIcon />
                                                            ) : (
                                                                "SUBMIT"
                                                            )}
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        </div>
                                    </Dialog.Panel>
                                </Transition.Child>
                            </div>
                        </div>
                    </div>
                </Dialog>
            </Transition.Root>
        </>
    );
}
