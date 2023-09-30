import { Express, Request, Response } from "express";
import { checkVideo } from "../controller/video.controller";

function video_routes(app: Express) {

    app.post("/api/video", checkVideo);
}
export default video_routes;