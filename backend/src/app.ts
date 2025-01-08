import express, { Application, Request, Response } from "express";
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
app.get("/", (req: Request, res: Response) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Fuddy</title>
      <style>
        body {
          font-family: Arial, sans-serif;
          background-color: #f4f4f4;
          display: flex;
          justify-content: center;
          align-items: center;
          height: 100vh;
          margin: 0;
        }
        .container {
          text-align: center;
          background: white;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        }
        h1 {
          color: #333;
          margin-bottom: 16px;
        }
        p {
          color: #666;
          margin-bottom: 24px;
        }
        .button {
          display: inline-block;
          text-decoration: none;
          color: white;
          background-color: #005f04;
          padding: 10px 20px;
          border-radius: 5px;
          font-weight: bold;
          transition: background-color 0.3s ease;
        }
        .button:hover {
          background-color:rgb(7, 156, 15);
        }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Welcome to CallMeMaybe!</h1>
    
    
        <p>It is a free and open-use project.</p>
          <a href="https://portfolio.agustin.top" class="button">Go to Author Portfolio</a>
         <a href="https://github.com/nitdraig/callMeMaybe" class="button">Go to GitHub Repo</a>
      </div>
    </body>
    </html>
  `);
});
export default app;
