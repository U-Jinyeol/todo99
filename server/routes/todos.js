import express from "express";
import Todos from "../schemas/todos.js";

const router = express.Router();

// 전체 불러오기
router.get("/list", async (req, res) => {
  const todoList = await Todos.find({});
  res.json({ total: todoList.length, list: todoList });
});

// 상세보기
router.get("/list/detail/:id", async (req, res) => {
  try {
    const todo = await Todos.find({ todoId: Number(req.params.id) });
    if (!todo) {
      return res.status(404).json({ error: "Todo not found" });
    }
    res.json({ detail: todo });
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
  console.log("delete >>>", req.params.id);

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