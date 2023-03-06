import { useQuery } from "@tanstack/react-query";
import { axiosInstance } from "../../config/Axios/axiosInstance";

const getNews = async () => {
  const { data } = await axiosInstance.get(
    `https://jsonplaceholder.typicode.com/users`
  );
  return data;
};

export const useQueryNews = () => {
  const { data: news, isLoading } = useQuery(["news"], () => getNews());

  return {
    news,
    isLoading,
  };
};
