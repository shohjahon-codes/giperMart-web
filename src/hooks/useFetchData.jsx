import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";


export const useFetchData = (key, productId) => {
    return useQuery({
        queryKey: [key, productId],
        queryFn: () => request.get(`/${productId}`).then(res => res.data),
    });
};
