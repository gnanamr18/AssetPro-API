import express from "express";
import {  assetValidation } from "../middleware/validationMiddleware.js";
import { checkAsssetExits } from "../middleware/checkMiddleware.js";
import { createAsset, scrapAsset } from "../controllers/assetController.js";

const router = express.Router();

router.post("/", assetValidation, checkAsssetExits, createAsset);
router.route("/:uniqueId").put(checkAsssetExits, scrapAsset);



export default router;