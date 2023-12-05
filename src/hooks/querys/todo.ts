import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  _createTodo,
  _deleteTodo,
  _getDetailTodo,
  _getTodoList,
  _updateTodo,
} from "../../apis/todo";
import { CreateToDoInput } from "../../apis/todo/types";

export const useFetchTodos = () => {
  return useQuery({
    queryKey: ["getTodoList"],
    queryFn: _getTodoList,
  });
};

export const useFetchDetailTodo = (id: number) => {
  return useQuery({
    queryKey: ["getDetailTodo"],
    queryFn: () => _getDetailTodo(id),
  });
};

export const useCreateTodo = (newTodo: CreateToDoInput) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => _createTodo(newTodo),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTodoList"] });
    },
  });
};

export const useUpdateTodo = (newTodo: CreateToDoInput, id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => _updateTodo(newTodo, id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTodoList"] });
    },
  });
};

export const useDeleteTodo = (id: number) => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: () => _deleteTodo(id),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["getTodoList"] });
    },
  });
};
