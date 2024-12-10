import { queryOptions } from "@tanstack/react-query";
import axios from "axios";
import { formatDateToDashFormat } from "../utils/Date";

export const prayerTimingQueryOptions = () =>
  queryOptions({
    queryKey: ["prayer-now"],
    queryFn: async () => {
      const response = await axios.get(
        `http://api.aladhan.com/v1/timingsByCity/${formatDateToDashFormat(new Date())}?city=cairo&country=Eg`
      );
      return response?.data?.data;
    },
  });
