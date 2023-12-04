import { get_branch_history } from "@/services/history-services"
import { useDispatch, useSelector } from "react-redux"
import { setExpenses } from "../_redux/branch-expenses-slice"
import { setDate,setMeridiem } from "../_redux/branch-expenses-slice"
import moment from "moment"
import { useState } from "react"
export default function BranchSearchExpenses() {
const dispatch = useDispatch()

const { meridiem,date } = useSelector((state) => state.branchExpenses);
    function searchDate(e) {
        const year = e.target.value.split('-')[0]
        const month = e.target.value.split('-')[1]
        const day = e.target.value.split('-')[2]
        const newDate = month+'/'+day+'/'+year
        dispatch(setDate(newDate))
    }

    function searchMeridiem(e) {
        const checked = e.target.checked == true ? "AM" : "PM";
        dispatch(setMeridiem(checked));
    }
    return (
        <>
          <label className="relative inline-flex items-center mb-5 cursor-pointer ml-4">
                <input
                    onChange={searchMeridiem}
                    checked={meridiem == "AM" ? true : false}
                    type="checkbox"
                    className="sr-only peer"
                />
                <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300  dark:peer-focus:ring-blue-800  rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:w-5 after:h-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                <span className="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                {date} ({meridiem})
                </span>
            </label>
        <div className="relative max-w-sm">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                <svg
                    className="w-4 h-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                </svg>
            </div>
            <input
                onChange={searchDate}
                dataDateFormat="MMMM DD YYYY" 
                name="date"
                datepicker
                type="date"
                className="bg-gray-50 border py-4 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-red-500 focus:border-red-500 block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-red-500 dark:focus:border-red-500"
                placeholder="Select date"
            />
        </div>
        </>
    );
}
