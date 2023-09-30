import { Express, Request, Response } from "express";
import { checkImage } from "../controller/image.controller";

function image_routes(app: Express) {

    app.post("/api/image", checkImage);
}
export default image_routes;