import { Request, Response } from "express";
import config from "config";
const axios = require("axios").default;


export async function checkText(
  req: Request,
  res: Response
) {
  try {
    const options = {
      method: "POST",
      url: "https://api.edenai.run/v2/text/moderation",
      headers: {
        authorization: config.get<number>("APIKEY"),
      },
      data: {
        show_original_response: false,
        fallback_providers: "",
        providers: "microsoft, openai",
        language: "en",
        text: req.body.text,
      },
    };
    axios
    .request(options)
    .then((response: any) => {
      res.send(response.data);
    })
    .catch((error: any) => {
      console.error(error.message);
    });
  } catch (e: any) {
    console.log(e);
    return res.status(409).send(e.message);
  }
}
