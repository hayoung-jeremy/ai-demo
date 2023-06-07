import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { stableDiffusionV4FetchQueuedImagesURL } from "@/constants";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const request_id = req.body.request_id;
  const estimatedSeconds = req.body.estimatedSeconds;

  console.log(request_id);

  try {
    console.log(`Data will be fetched after ${estimatedSeconds} seconds`);
    setTimeout(async () => {
      try {
        const response = await axios.post(stableDiffusionV4FetchQueuedImagesURL, {
          key: process.env.SD_API_KEY,
          request_id,
        });
        console.log("data : ", response);
        res.status(200).json(response.data);
      } catch (error) {
        console.log(error);
        res.status(500).json({ message: "[fetchQueuedImages] Internal server error" });
      }
    }, estimatedSeconds * 1000);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ message: "[fetchQueuedImages] Internal server error" });
  }
}
