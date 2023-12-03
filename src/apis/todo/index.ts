import { instance } from "../axios";
import { CreateToDoInput } from "./types";

export const _getTodoList = async () => {
  try {
    const { data } = await instance.get("/list");
    return data;
  } catch (error) {
    console.log("error", error);
  }
};

export const _getDetailTodo = async (id: number) => {
  try {
    const result = await instance.get(`/list/detail/${id}`);
    return result;
  } catch (error) {
    console.log("error", error);
  }
};

export const _createTodo = async (body: CreateToDoInput) => {
  try {
    const result = await instance.post("/list", body);
    return result;
  } catch (error) {
    console.log("error", error);
  }
};

export const _updateTodo = async (body: CreateToDoInput, id: number) => {
  try {
    const result = await instance.put(`/list/${id}`, body);
    return result;
  } catch (error) {
    console.log("error", error);
  }
};

export const _deleteTodo = async (id: number) => {
  try {
    const result = await instance.delete(`/list/${id}`);
    return result;
  } catch (error) {
    console.log("error", error);
  }
};
