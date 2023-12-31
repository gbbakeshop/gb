import React, { useState, useEffect } from "react";
import { usePage } from "@inertiajs/react";
import { useSelector } from "react-redux";
import AdministratorLayout from "@/Layouts/administrator-layout";
import { get_all_recipes } from "@/services/recipes-services";
import RecipesTableComponent from "./components/recipes-table";
import SkeletonLoader from "@/_components/skeleton-loader";
import Search from "@/_components/search";
import SidebarControls from "../_components/sidebar-controls";
import RecipesTabs from "./components/recipes-tabs";

export default function RecipesPage(props) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [newData, setNewData] = useState([]);
    const [search, setSearch] = useState("");
    const { url } = usePage();
    const page = url.split("/")[3];

    const { refresh } = useSelector((state) => state.app);
    useEffect(() => {
        get_all_recipes().then((res) => {
            setData(res);
            setLoading(false);
        });
    }, [refresh]);

    useEffect(() => {
        const value = data?.map((res) =>
            res?.selected_breads?.filter((obj) =>
                obj?.bread_name?.toLowerCase().includes(search.toLowerCase())
            )
        );
        setNewData(
            data.map((res, index) => ({
                ...res,
                selected_breads: value[index],
            }))
        );
    }, [search, data]);

    return (
        <AdministratorLayout>
            <SidebarControls />
            <div className="flex flex-col w-full p-4 overflow-auto h-screen">
                <RecipesTabs page={page} />
                <br />
                <Search search={search} setSearch={setSearch} />
                {loading ? (
                    <SkeletonLoader />
                ) : (
                    <RecipesTableComponent
                        data={search == "" ? data : newData}
                    />
                )}
            </div>
        </AdministratorLayout>
    );
}
