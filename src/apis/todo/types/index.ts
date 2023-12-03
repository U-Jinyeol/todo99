export type CreateToDoInput = {
  title: string;
  tag: string;
  content: string;
  todoId?: number;
};

export type TodoItem = {
  title: string;
  tag: string;
  content: string;
  todoId: number;
  _id: string;
};
