export type CreateToDoInput = {
  title: string;
  tag: string;
  content: string;
  todoId?: number;
};

export type TodoData = {
  list: TodoList[];
  total: number;
};

export type TodoList = {
  title: string;
  tag: string;
  content: string;
  todoId: number;
  _id: string;
};
