import { useQuery } from "@tanstack/react-query";
import { request } from "../config/request";

export const useFetchDetail = (categoryKey, id) => {
    return useQuery({
      queryKey: [categoryKey],
      queryFn: () => request.get(`/${categoryKey}/${id}`).then(res => res.data),
    });
  };