import { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { easyDiffusionDummyPayload } from "@/constants";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      const response = await axios.post("http://localhost:9000/render", {
        ...easyDiffusionDummyPayload,
        init_image: req.body.init_image,
      });
      res.status(200).json(response.data);
    } catch (error) {
      return res.status(500).json({ error: "[easydiffusion] [POST api] Internal Server Error" });
    }
  }

  if (req.method === "GET") {
    console.log(req.query);
    try {
      const response = await axios.get(`http://localhost:9000/image/stream/${req.query.task_id}`);
      res.status(200).json(response.data);
    } catch (error) {
      return res.status(500).json({ error: "[easydiffusion] [GET api] Internal Server Error" });
    }
  }
}
