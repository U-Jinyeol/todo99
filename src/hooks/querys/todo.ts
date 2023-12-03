import {
  UseQueryResult,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import { _createTodo, _getTodoList, _updateTodo } from "../../apis/todo";
import { CreateToDoInput, TodoItem } from "../../apis/todo/types";

export const useFetchTodos = () => {
  return useQuery({
    queryKey: ["getTodoList"],
    queryFn: _getTodoList,
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

// export const useDeleteTodo = () => {
//   const queryClient = useQueryClient();

//   return useMutation(
//     async (id) => {
//       await axios.delete(`${API_BASE_URL}/todos/${id}`);
//     },
//     {
//       onSuccess: () => {
//         queryClient.invalidateQueries("todos");
//       },
//     }
//   );
// };
