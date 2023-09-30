import { Express, Request, Response } from "express";
import { checkText } from "../controller/text.controller";

function text_routes(app: Express) {

    app.post("/api/text", checkText);
}
export default text_routes;