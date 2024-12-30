import express from "express";
import cors from "cors";
import helmet from "helmet";
import swaggerUi from "swagger-ui-express";
import swaggerJsdoc from "swagger-jsdoc";
import authRoutes from "./domain/auth/routes/authRoutes";
import { swaggerOptions } from "./shared/middlewares/swaggerUi.serve";
import linkRoutes from "./domain/links/routes/linkRoutes";

const app = express();

const swaggerDocs = swaggerJsdoc(swaggerOptions);

app.use(
  cors({
    origin: "*",
  })
);
app.use(helmet());
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/links", linkRoutes);

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

export default app;
