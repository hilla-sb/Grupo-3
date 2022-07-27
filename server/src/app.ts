import express, { Request, Response } from "express";
import route from "./route/experienciaRoute";
import usuarioRoute from "./route/usuarioRoute";
import loginRoute from "./route/loginRoute";
import reservaRoute from "./route/reservaRoute";

const app = express();
app.use(express.json());
app.use(route);
app.use(usuarioRoute);
app.use(loginRoute);
app.use(reservaRoute);

app.get("/", (req: Request, res: Response) => {
  res.json("hello World");
});

export default app;