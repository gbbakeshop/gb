import { usePage } from "@inertiajs/react";
import { useEffect, useState } from "react";
import { get_specific_accounts } from "@/services/account-services";
import { useDispatch } from "react-redux";
import { setAccount } from "../_redux/branch-account-slice";
import { useSelector } from "react-redux";

export default function AccountProfile({id}) {
    const { account } = useSelector((state) => state.branchAccount);
    const { refresh } = useSelector((state) => state.app);
    const dispatch = useDispatch();
    const { url } = usePage();
    const userid = url.split("/")[4]??id;

    useEffect(() => {
        get_specific_accounts(userid).then((res) => {
            dispatch(setAccount(res));
        });
    }, [refresh]);

    return (
        <div className="flex flex-col  top-0 z-10">
            <div className="  rounded-2xl p-4">
                <div className="flex-none sm:flex">
                    <div className=" relative h-32 w-32   sm:mb-0 mb-3">
                        <img
                            src="https://tailwindcomponents.com/storage/avatars/njkIbPhyZCftc4g9XbMWwVsa7aGVPajYLRXhEeoo.jpg"
                            alt="aji"
                            className=" w-32 h-32 object-cover rounded-2xl"
                        />
                        <a
                            href="#"
                            className="absolute -right-2 bottom-2   -ml-3   p-1 text-xs bg-green-400 hover:bg-green-500 font-medium tracking-wider rounded-full transition ease-in duration-300"
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                                className="h-4 w-4"
                            >
                                <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"></path>
                            </svg>
                        </a>
                    </div>
                    <div className="flex-auto sm:ml-5 justify-evenly">
                        <div className="flex items-center justify-between sm:mt-2">
                            <div className="flex items-center">
                                <div className="flex flex-col">
                                    <div className="w-full flex-none text-lg capitalize font-bold leading-none">
                                        {account.name}
                                    </div>
                                    <div className="flex-auto  my-1">
                                        <span className="mr-3 ">GB BAKESHOP</span>
                                        <span className="mr-3 border-r border-gray-600  max-h-0"></span>
                                        <span>{account.position}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="flex pt-2 flex-col  text-sm text-gray-400">
                            <div className="flex-1 inline-flex items-center">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <p className="">{account?.get_branch?.branch_name}</p>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                            <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-5 w-5 mr-2"
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z"
                                        clipRule="evenodd"
                                    ></path>
                                </svg>
                                <p className="">{account.email}</p>
                            </div>
                            <div className="flex-1 inline-flex items-center">
                              
                                <p className="">{account.address}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
