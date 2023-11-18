import { isRandomhandler } from "@/_redux/app-slice";
import TrashIcon from "@/icons/trash-icon";
import {  delete_recipes } from "@/services/recipes-services";
import { useDispatch } from "react-redux";
import Swal from "sweetalert2";

export default function RecipesDeleteIngredients({id}) {
    const dispatch  = useDispatch()

    function deleteHandler() {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                delete_recipes(id).then((res) => {
                    dispatch(isRandomhandler());
                    if (res.status == "success") {
                        Swal.fire({
                            icon: "success",
                            title: "Your work has been saved",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    } else {
                        Swal.fire({
                            icon: "error",
                            title: "Invalid",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                    }
                });
            }
        });
    }
    return ( 
        <>
         <button className="text-red-500 " onClick={() => deleteHandler()}>
                <TrashIcon />
            </button>
        </>
     );
}

