import express from "express";
import { issueAsset } from "../controllers/issueAssetController.js";

const router = express.Router();

router.route("/:uniqueId").put(issueAsset);



export default router; 