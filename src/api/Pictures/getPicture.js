import { useQuery } from "react-query";
import axios from "../../config/AxiosConfig";

export const getPicture = (pictureId) => {
  try {
    const res = axios.get(`/picture/findByLabel`, {
      params: { label: pictureId },
    });
    return res;
  } catch (error) {
    return error;
  }
};

export const usePicture = ({ pictureId, config }) => {
  return useQuery({
    ...config,
    queryKey: ["picture", pictureId],
    queryFn: () => getPicture({ pictureId }),
  });
};
