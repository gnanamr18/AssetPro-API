import express from "express";
import {  assetValidation } from "../middleware/validationMiddleware.js";
import { checkAssetExits } from "../middleware/checkMiddleware.js";
import { createAsset, scrapAsset } from "../controllers/assetController.js";

const router = express.Router();

router.post("/", assetValidation, checkAssetExits, createAsset);
router.route("/:uniqueId").put(checkAssetExits, scrapAsset);



export default router;