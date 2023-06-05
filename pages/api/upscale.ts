import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import { stableDiffusionV3Img2ImgURL, stableDiffusionV3base64cropURL } from "@/constants";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb",
    },
  },
};

const data = {
  key: process.env.SD_API_KEY,
  prompt: "red shoes",
  negative_prompt: null,
  init_image: "",
  width: "512",
  height: "512",
  samples: "1",
  num_inference_steps: "30",
  safety_checker: "no",
  enhance_prompt: "yes",
  guidance_scale: 7.5,
  strength: 0.7,
  seed: null,
  webhook: null,
  track_id: null,
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // base64_crop api
  // let imageLink = "";
  // try {
  //   const { data: resultImage } = await axios.post(stableDiffusionV3base64cropURL, {
  //     key: process.env.SD_API_KEY,
  //     image: req.body.init_image,
  //     crop: "true",
  //   });
  //   console.log("resultImage", resultImage.link);
  //   imageLink = resultImage.link;
  //   const response = await axios.post(stableDiffusionV3Img2ImgURL, {
  //     ...data,
  //     init_image: imageLink,
  //   });
  //   return res.status(200).json(response.data);
  // } catch (error) {
  //   return res.status(500).json({ error: "Internal Server Error" });
  // }

  setTimeout(async () => {
    try {
      const data = {
        output: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"],
      };
      return res.status(200).json(data);
    } catch (error) {
      return res.status(500).json({ error: "Internal Server Error" });
    }
  }, 3000);
}
