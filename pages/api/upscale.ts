import axios from "axios";
import type { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb",
    },
  },
};

const data = {
  key: "3u2fGJmV99VCzGH83FvmZDDaA6gMoDyHIIvPEbUZ5to1drYDZapcHqEZKHDn",
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
  let imageLink = "";
  try {
    const { data: resultImage } = await axios.post("https://stablediffusionapi.com/api/v3/base64_crop", {
      key: "3u2fGJmV99VCzGH83FvmZDDaA6gMoDyHIIvPEbUZ5to1drYDZapcHqEZKHDn",
      image: req.body.init_image,
      crop: "true",
    });
    console.log("resultImage", resultImage.link);
    imageLink = resultImage.link;

    const response = await axios.post("https://stablediffusionapi.com/api/v3/img2img", {
      ...data,
      init_image: imageLink,
    });

    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
