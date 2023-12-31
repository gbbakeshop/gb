import { isSetResponse } from "@/_redux/app-slice";
import {
    create_domination,
    get_domination,
} from "@/services/domination-services";
import { usePage } from "@inertiajs/react";
import moment from "moment";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export default function Domination({ branchid, position,userid }) {
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(false);
    const [exist, setExist] = useState(true);
    const { date } = useSelector((state) => state.branchExpenses);
    const { url } = usePage();
    const branchid2 = url.split("/")[2];

    const [domination, setDomination] = useState([
        {
            sign: "₱",
            bills: 1000,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 500,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 200,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 100,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 50,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 20,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 10,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 5,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 1,
            pcs: 0,
            total: 0,
        },
        {
            sign: "¢",
            bills: 0,
            pcs: 0,
            total: 0,
        },
    ]);

    const domination2 = [
        {
            sign: "₱",
            bills: 1000,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 500,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 200,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 100,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 50,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 20,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 10,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 5,
            pcs: 0,
            total: 0,
        },
        {
            sign: "₱",
            bills: 1,
            pcs: 0,
            total: 0,
        },
        {
            sign: "¢",
            bills: 0,
            pcs: 0,
            total: 0,
        },
    ];

    const updatePcsAndTotal = (index, value, id) => {
        console.log('value',value)
        setDomination((prevDomination) => {
            const updatedDomination = [...prevDomination];
            updatedDomination[index] = {
                ...updatedDomination[index],
                id: id,
                pcs: value,
                total: value * updatedDomination[index].bills,
            };
            return updatedDomination;
        });
    };

    const cashOnHand = domination.reduce((accumulator, currentValue) => {
        return accumulator + currentValue.total;
    }, 0);

    function loadingState() {
        return {
            status: "loading",
            message: "Loading...",
        };
    }

    useEffect(() => {
        get_domination({
            branchid: branchid ?? branchid2,
            date: date,
            userid:userid,
            meridiem:moment().format('A')
        })
            .then((res) => {
                if (moment(date).format("L") < moment().format("L")) {
                    console.log('res.status',res.status)
                    setDomination(res.status);
                    // setDomination(domination2);
                    setExist(true);
                    setLoading(false);
                } else if (res.status.length !== 0) {
                    setExist(true);
                    setDomination(res.status);
                    setLoading(false);
                } else {
                    setDomination(domination2);
                    setExist(false);
                    setLoading(false);
                }
            })
            .catch((res) => {
                setLoading(false);
            });
    }, [date]);

    function submitDomination() {
        setLoading(true);
        dispatch(isSetResponse(loadingState()));
        create_domination({
            branchid: branchid ?? branchid2,
            domination: domination,
            date: moment().format("L"),
            meridiem: moment().format("A"),
            userid:userid
        })
            .then((res) => {
                setExist(true);
                setLoading(false);
                dispatch(isSetResponse(res));
            })
            .catch((err) => {
                setExist(false);
                setLoading(false);
                dispatch(isSetResponse(res));
            });
    }
    const sortedDomination = [...domination].sort((a, b) => b.bills - a.bills);

    return (
        <div className="relative overflow-x-auto">
            TOTAL ACTUAL CASH ON HAND: ₱ {cashOnHand}
            <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                {/* ... (table header) */}
                <tbody>
                    {sortedDomination.map((res, index) => (
                        <tr
                            key={index}
                            className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                        >
                            <th
                                scope="row"
                                className="px-6 py-2 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                            >
                                {res.sign} {res.bills}
                            </th>
                            <td className="px-6 py-2">
                              
                                {position != "supervisor" && exist && position != "admin" ? (
                                    res.pcs
                                ) : (
                                    <input
                                        type="number"
                                        onInput={(e) =>
                                            updatePcsAndTotal(
                                                index,
                                                e.target.value,
                                                res.id
                                            )
                                        }
                                        value={res.pcs}
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full p-1.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                                    />
                                )}
                            </td>
                            <td className="px-6 py-2">{res.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {position == "supervisor" || position == "admin" || !exist ? (
                <button
                    disabled={loading}
                    onClick={submitDomination}
                    class="mt-5 w-full bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 border border-red-700 rounded"
                >
                    Save
                </button>
            ) : null}
        </div>
    );
}
