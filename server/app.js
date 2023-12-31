import express from "express";
import todosRouter from "./routes/todos.js";
import connect from "./schemas/index.js";
import cors from "cors";

const app = express();
const port = 8080;

app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

app.use(express.json());
app.use("/api", [todosRouter]);

connect();

app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
