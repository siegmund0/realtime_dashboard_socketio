import { Router } from "express";

import VendaController from "../controller/VendaController";

const router = new Router();

router.get("/api/vendas", VendaController.buscarTodas);
router.post("/api/vendas", VendaController.salvarVenda);
router.post("/api/vendas/varias", VendaController.salvarVarias);

export default router;
