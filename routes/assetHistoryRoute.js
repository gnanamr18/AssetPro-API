import express from "express";
import { getAssetHistory } from "../controllers/assetHistoryController.js";

const router = express.Router();

router.route("/:uniqueId").get(getAssetHistory);



export default router; 