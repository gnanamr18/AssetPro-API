import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import deptRoute from "./routes/deptRoute.js";
import employeeRoute from "./routes/employeeRoute.js";
import assetRoute from "./routes/assetRoute.js";
import issueAssetRoute from "./routes/issueAssetRoute.js";
import returnAssetRoute from "./routes/returnAssetRoute.js";
import assetHistoryRoute from "./routes/assetHistoryRoute.js";

const port = process.env.PORT || 8000;

const app = express();
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/dept", deptRoute);
app.use("/api/employee", employeeRoute);
app.use("/api/asset", assetRoute);
app.use("/api/issueAsset", issueAssetRoute);
app.use("/api/returnAsset", returnAssetRoute);
app.use("/api/assetHistory", assetHistoryRoute);

app.listen(port, () => {
  console.log("Server running in " + port);
});
