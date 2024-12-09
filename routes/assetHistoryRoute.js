import express from "express";
import { getAssetHistory } from "../controllers/assetHistoryController";

const router = express.Router();

router.route("/:uniqueId").get();



export default router; 