import { ExpressAdapter } from "application/adapter/ExpressAdapter";
import { Router } from "express";
import { TodosController } from "infra/controllers/TodosController";

const router = Router();

router.post("/", ExpressAdapter.create(TodosController.create, 201));
router.get("/", ExpressAdapter.create(TodosController.list));
router.delete("/:id", ExpressAdapter.create(TodosController.delete));

export default router;
