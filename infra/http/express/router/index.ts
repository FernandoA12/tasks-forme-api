import { Router } from "express";
import TodosRouter from "./todosRouter";

const router = Router();

router.use("/todos", TodosRouter);

export default router;
