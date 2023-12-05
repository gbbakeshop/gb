import React, { useState, useEffect } from "react";
import BranchLayout from "@/Layouts/branch-layout";
import Breadcrumbs from "@/_components/bread-crumbs";
import AccountProfile from "../branch_accounts/components/account-profile";
import BranchAccountTabs from "./components/account-settings-tab";
import { useDispatch, useSelector } from "react-redux";
import { usePage } from "@inertiajs/react";
import {
    setCharge,
    setExpenses,
} from "../branch_expenses/_redux/branch-expenses-slice";
import { get_branch_expenses } from "@/services/expenses-services";
import { get_all_credits_charge } from "@/services/credits-services";
import SkeletonLoader from "@/_components/skeleton-loader";
import SalesChart from "../branch_expenses/components/sales-chart";
import BranchSearchExpenses from "../branch_expenses/components/branch-search-expenses";
import CreditsChargeTable from "../branch_expenses/components/credits-charge-table";
import BranchExpensesTable from "../branch_expenses/components/branch-expenses-table";
import Domination from "../branch_expenses/components/domination";
import ProductionTabsComponent from "./components/production-tabs";

export default function AccountExpenses(props) {
    const { auth } = props;
    const dispatch = useDispatch();
    const [loading, setLoading] = useState(true);
    const branchid = auth.user.branchid;
    const { refresh } = useSelector((state) => state.app);
    const { expenses, charges, date,meridiem } = useSelector(
        (state) => state.branchExpenses
    );
    const [newData, setNewData] = useState([]);
    const [newData2, setNewData2] = useState([]);
    const [search, setSearch] = useState("");
    const [search2, setSearch2] = useState("");

    
    useEffect(() => {
        get_all_credits_charge(branchid, date,meridiem,auth.user.id).then((res) => {
            dispatch(setCharge(res));
            setLoading(false);
        });
        get_branch_expenses(branchid, date,meridiem,auth.user.id).then((res) => {
            dispatch(setExpenses(res));
        });
    }, [refresh, date,meridiem]);

    useEffect(() => {
        const value = charges?.filter((obj) =>
            obj?.bread_name?.toLowerCase().includes(search.toLowerCase())
        );

        const value2 = expenses?.filter((obj) =>
            obj?.name?.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
        setNewData2(value2);
    }, [search, refresh]);

    return (
        <BranchLayout
            position={auth.user.position}
            branchid={auth.user.branchid}
        >
            <div className="flex flex-col w-full overflow-auto h-screen">
                {/* <Breadcrumbs   branchid={auth.user.branchid}/> */}
                <ProductionTabsComponent position={auth.user.position} />
                <br /> <br />
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <>
                        <SalesChart 
                        userid={auth.user.id} 
                        branchid={auth.user.branchid} />
                        <BranchSearchExpenses 
                          userid={auth.user.id} />
                        <div className="grid grid-rows-2 grid-flow-col grid-cols-3 gap-4  mt-5">
                            <div className="col-span-2 h-auto w-auto ">
                                <CreditsChargeTable
                                    branchid={auth.user.branchid}
                                    data={search == "" ? charges : newData}
                                />
                            </div>
                            <div className="row-span-2 col-span-2 h-auto w-auto ">
                                <BranchExpensesTable
                                userid={auth.user.id}
                                    branchid={auth.user.branchid}
                                    data={search2 == "" ? expenses : newData2}
                                />
                            </div>
                            <div className="row-span-3 h-auto w-auto">
                                <Domination 
                                position={auth.user.position}
                                branchid={auth.user.branchid} />
                            </div>
                        </div>
                    </>
                )}
            </div>
        </BranchLayout>
    );
}
