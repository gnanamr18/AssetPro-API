import express from "express";
import {  assetValidation } from "../middleware/validationMiddleware.js";
import { checkAssetExists } from "../middleware/checkMiddleware.js";
import { createAsset, scrapAsset } from "../controllers/assetController.js";

const router = express.Router();

router.post("/", assetValidation, checkAssetExists, createAsset);
router.route("/:uniqueId").put(checkAssetExists, scrapAsset);



export default router;