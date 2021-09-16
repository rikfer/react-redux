import { handleResponse, handleError } from "./apiUtils";
import { axiosGet } from "./axiosManager";
import { Comment } from "../models/comment/interface";

export const getComments = async (): Promise<Comment[]> => {
  try {
    const response = (await axiosGet<Comment[]>(`/comments`)).data;
    return Promise.resolve(response);
  } catch (ex) {
    return Promise.reject(handleError);
  }
};
