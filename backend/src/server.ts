import dotenv from "dotenv";
import app from "./app";
import mongoose from "mongoose";

dotenv.config();

const PORT = process.env.PORT || 5000;
const DB_URI = process.env.DB_URI! || "mongodb://localhost:27017/callMeMaybe";

mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Database connection successful");
    startCronJobs();
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error de conexión a la base de datos:", err);
  });
import startCronJobs from "./domain/cron/cronLoader";
