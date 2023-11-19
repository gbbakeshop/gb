import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { get_all_ingredients } from "@/services/ingredients-services";
import AdministratorLayout from "@/Layouts/administrator-layout";
import { useSelector } from "react-redux";

import IngredientsTableComponent from "./components/ingredients-table";
import SkeletonLoader from "@/_components/skeleton-loader";
import Search from "@/_components/search";
import SidebarControls from "../_components/sidebar-controls";
import RecipesTabs from "../recipes/components/recipes-tabs";

export default function IngredientsPage(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const { refresh } = useSelector((state) => state.app);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");
    const { url } = usePage();
    const page = url.split("/")[3];

    useEffect(() => {
        get_all_ingredients().then((res) => {
            setData(res.status);
            setLoading(false);
        });
    }, [refresh]);

    useEffect(() => {
        const value = data.filter((obj) =>
            obj.code.toLowerCase().includes(search.toLowerCase())
        );
        setNewData(value);
    }, [search,data]);

    return (
        <AdministratorLayout>
            <SidebarControls />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <RecipesTabs page={page}/>
                <br />
                <Search search={search} setSearch={setSearch} />
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <IngredientsTableComponent
                        data={search == "" ? data : newData}
                    />
                )}
            </div>
        </AdministratorLayout>
    );
}
