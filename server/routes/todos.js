import express from "express";
import Todos from "../schemas/todos.js";

const router = express.Router();

// 전체 불러오기
router.get("/list", async (req, res) => {
  try {
    const todoList = await Todos.find({});
    return res.json({ total: todoList.length, list: todoList });
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

// 상세보기
router.get("/list/detail/:id", async (req, res) => {
  try {
    const todo = await Todos.find({ todoId: Number(req.params.id) });
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json({ list: todo });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 등록하기
router.post("/list", async (req, res) => {
  const { title, tag, content, todoId } = req.body;

  const createdTodos = await Todos.create({
    title,
    tag,
    content,
    todoId,
    createdAt: new Date(),
    isChecked: false,
  });

  res.json({ list: createdTodos });
});

// 수정하기
router.put("/list/:id", async (req, res) => {
  const { title, tag, content } = req.body;

  try {
    const updatedTodo = await Todos.findOneAndUpdate(
      { todoId: Number(req.params.id) },
      { title, tag, content },
      { new: true }
    );

    if (!updatedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }

    res.json({ list: updatedTodo });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

// 삭제하기
router.delete("/list/:id", async (req, res) => {
  try {
    const deletedTodo = await Todos.findOneAndDelete({
      todoId: req.params.id,
    });
    if (!deletedTodo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json({ message: "Todo deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Internal Server Error" });
  }
});

export default router;
