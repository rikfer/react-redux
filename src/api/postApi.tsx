import { handleError } from "./apiUtils";
import { axiosGet } from "./axiosManager";
import { Post } from "../models/post/interfaces";

export const getPosts = async (): Promise<Post[]> => {
  try {
    const response = (await axiosGet<Post[]>("/posts")).data;
    return Promise.resolve(response);
  } catch (ex) {
    return Promise.reject(handleError);
  }
};