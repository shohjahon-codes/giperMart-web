import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";


export const useFetchData = (key, category, productId) => {
    return useQuery({
        queryKey: [key, productId],
        queryFn: () => request.get(`/${category}/${productId}`).then(res => res.data),
    });
};
