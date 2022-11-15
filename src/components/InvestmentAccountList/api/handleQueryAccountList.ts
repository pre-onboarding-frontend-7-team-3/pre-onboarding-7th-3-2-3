import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const token = localStorage.getItem("access_token");

const header = {
  headers: {
    Authorization: "Bearer " + token,
  },
};

export const useData = () => {
  return useQuery({
    queryKey: ["totalData"],
    queryFn: async () => {
      const { data } = await axios.get(
        "http://localhost:4000/accounts",
        header
      );
      return data;
    },
  });
};
