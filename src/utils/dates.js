import { format } from "date-fns";

export const formatDate = (timeStamp) => {
  return format(new Date(timeStamp), "MMM,yyyy");
};
