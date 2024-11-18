import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const useGetProductsByCategory = (categoryKey) => {
  return useQuery({
    queryKey: [categoryKey],
    queryFn: () => axios.get(`https://backend-62qa.onrender.com/${categoryKey}`).then(res => res.data),
  });
};
