import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { get_all_raw_materials } from "@/services/raw-materials-services";
import { useSelector } from "react-redux";

import AdministratorLayout from "@/Layouts/administrator-layout";
import RawMaterialsTableComponent from "./components/raw-materials-table";
import SkeletonLoader from "@/_components/skeleton-loader";
import RawMaterialsTabsComponent from "./components/raw-materials-tabs";
import Search from "@/_components/search";
import SidebarControls from "../_components/sidebar-controls";
import RecipesTabs from "../recipes/components/recipes-tabs";

export default function RawMaterialsPage(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { refresh } = useSelector((state) => state.app);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");
    const { url } = usePage();
    const page = url.split("/")[3];
    
    useEffect(() => {
        const value = data.filter((obj) =>
            obj.raw_materials.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search,refresh]);

    useEffect(() => {
        get_all_raw_materials().then((res) => {
            setData(res);
            setSearch('')
            setLoading(false);
        });
    }, [refresh]);

    return (
        <AdministratorLayout>
            <SidebarControls />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                {/* <RawMaterialsTabsComponent page={page}/> */}
                <RecipesTabs page={page}/>
                <br />
                <Search search={search} setSearch={setSearch} />
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <RawMaterialsTableComponent
                        data={search == "" ? data : newData}
                    />
                )}
            </div>
        </AdministratorLayout>
    );
}
