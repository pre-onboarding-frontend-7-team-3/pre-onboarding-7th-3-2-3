import { object } from "prop-types";

export const options:any = {
    eternal: {
        cacheTime: Infinity,
        staleTime: 5000,
        select: (data:any) => data.data,
        notifyOnChangeProps: "tracked",
    }
}