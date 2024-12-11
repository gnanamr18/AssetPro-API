import express from "express";
import { checkEmplyeeWorking,checkEmployeeExists, checkAssetAssigned } from "../middleware/checkMiddleware.js";
import { issueAsset } from "../controllers/issueAssetController.js";

const router = express.Router();

router.route("/:uniqueId").put(checkEmplyeeWorking,checkAssetAssigned, issueAsset);



export default router; 