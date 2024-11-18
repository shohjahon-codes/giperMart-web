import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";

export const useGetCategories = ()=> {
    return useQuery ({
        queryKey:['categories'],
        queryFn: ()=> request.get("/category").then((res)=>res.data),
    });
};