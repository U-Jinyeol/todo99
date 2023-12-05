import { AxiosResponse } from "axios";
import { instance } from "../axios";
import { CreateToDoInput, TodoData } from "./types";

export const _getTodoList = async (): Promise<TodoData | null> => {
  try {
    const { data }: AxiosResponse<TodoData> = await instance.get("/list");
    return data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

export const _getDetailTodo = async (id: number): Promise<TodoData | null> => {
  try {
    const { data }: AxiosResponse<TodoData> = await instance.get(
      `/list/detail/${id}`
    );
    return data;
  } catch (error) {
    console.log("error", error);
    return null;
  }
};

export const _createTodo = async (body: CreateToDoInput) => {
  try {
    const { data } = await instance.post("/list", body);
    return data;
  } catch (error) {
    console.log("error", error);
    return;
  }
};

export const _updateTodo = async (body: CreateToDoInput, id: number) => {
  try {
    const { data } = await instance.put(`/list/${id}`, body);
    return data;
  } catch (error) {
    console.log("error", error);
    return;
  }
};

export const _deleteTodo = async (id: number) => {
  try {
    const { data } = await instance.delete(`/list/${id}`);
    return data;
  } catch (error) {
    console.log("error", error);
    return;
  }
};
