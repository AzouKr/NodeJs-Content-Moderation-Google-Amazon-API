import { Request, Response } from "express";
import config from "config";
const axios = require("axios").default;


export async function checkImage(
  req: Request,
  res: Response
) {
  try {
    const options = {
        method: "POST",
        url: "https://api.edenai.run/v2/image/explicit_content",
        headers: {
          Authorization: config.get<number>("APIKEY"),
        },
        data: {
          show_original_response: false,
          fallback_providers: "",
          providers: "amazon, google",
          file_url: req.body.url,
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
    console.log(e.message);
    return res.status(409).send(e.message);
  }
}
