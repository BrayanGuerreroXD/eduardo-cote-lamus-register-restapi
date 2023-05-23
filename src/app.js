import express from "express";
import cors from "cors";
import apiRoutes from "./routes/api.routes.js";

const corsOptions = {
  origin: 'https://brayanguerreroxd.github.io/eduardo-cote-lamus-react/'
};

const app = express();

// Configura CORS con opciones específicas
app.use(cors(corsOptions));

app.use(express.json());

app.use("/api/", apiRoutes);

app.use((req, res) => {
  res.status(404).json({
    message: "Not found",
  });
});

export default app