import express, { Request, Response } from "express";
import dotenv from "dotenv";
import config from "config";
import text_routes from "./routes/text.routes";
import image_routes from "./routes/image.routes";
import video_routes from "./routes/video.routes";




dotenv.config();
const port = config.get<number>("port");
const app = express();


app.use(express.json());


app.listen(port, async () => {
  console.log(`App is running at http://localhost:${port}`);
  text_routes(app);
  image_routes(app);
  video_routes(app);
});