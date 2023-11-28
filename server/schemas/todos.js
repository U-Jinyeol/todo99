import mongoose from "mongoose";

const todosSchema = new mongoose.Schema({
  todoId: {
    type: Number,
    required: true,
    unique: true,
  },
  title: {
    type: String,
    required: true,
    unique: true,
  },
  content: {
    type: String,
    required: true,
  },
  tag: {
    type: String,
    required: true,
  },
  updatedAt: {
    type: String,
  },
  createdAt: {
    type: String,
  },
  isChecked: {
    type: Boolean,
  },
});

export default mongoose.model("Todos", todosSchema);
