import { useState } from "react";

export default function BreadDropDownComponent() {
    const [hide, setHide] = useState(false)
    return (
        <div className="relative inline-block text-left">
            <button onClick={() => setHide(!hide)} type="button" className="inline-flex w-full justify-center gap-x-1.5 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50" >
                Options
                <svg className="-mr-1 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clipRule="evenodd" />
                </svg>
            </button>

            <div className={`${hide ? '' : 'hidden'} absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none`} role="menu" >
                <div className="py-1">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" >Account settings</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" >Support</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" >License</a>
                    <form method="POST" action="#">
                        <button type="submit" className="text-gray-700 block w-full px-4 py-2 text-left text-sm" >Sign out</button>
                    </form>
                </div>
            </div>
        </div>
    );
}