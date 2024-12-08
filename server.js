
import express from "express";
// import connectDB from "./config/db.js";
// import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
import deptRoute from "./routes/deptRoute.js";

const prisma = require("./db/prisma")


// connectDB(); // Connect MongoDB

const port = process.env.PORT || 8000;

const app = express();
// app.use(
//   cors
//   ({
//     origin: "http://localhost:3000", // Replace with your frontend URL
//     credentials: true, // Allow credentials to be sent
//   })
// );
app.get('/',(req,res)=>{
    res.send("hello world")
})
// app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/dept", deptRoute);
// app.use("/api/buses", busRoutes);
// app.use("/api/trips", tripRoutes);
// app.use("/api/tickets", ticketRoutes);

app.listen(port, () => {
  console.log("Server running in " + port);
});
