import express from "express";
import { returnAsset } from "../controllers/returnAssetController.js";

const router = express.Router();

router.route("/:uniqueId").put(returnAsset);



export default router; 