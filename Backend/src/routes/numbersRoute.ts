import { Router } from "express";
import { searchNumber, searchHistory } from "../controllers/numbersController";
import { protect } from "../middlewares/authMiddleware";

const router = Router();

router.get("/search", protect, searchNumber);

router.get("/history", protect, searchHistory);

export default router;
