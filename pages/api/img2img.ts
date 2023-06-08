import type { NextApiRequest, NextApiResponse } from "next";
import axios from "axios";
import {
  stableDiffusionV3Img2ImgURL,
  stableDiffusionV3base64cropURL,
  stableDiffusionV4Img2ImgURL,
  v3DummyData,
  v4DummyData,
} from "@/constants";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "4mb",
    },
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  // base64_crop api
  let imageLink = "";
  try {
    const { data: resultImage } = await axios.post(stableDiffusionV3base64cropURL, {
      key: process.env.SD_API_KEY,
      image: req.body.init_image,
      crop: "true",
    });
    console.log("resultImage", resultImage.link);
    imageLink = resultImage.link;
    const response = await axios.post(stableDiffusionV4Img2ImgURL, {
      ...v4DummyData,
      init_image: imageLink,
    });
    return res.status(200).json(response.data);
  } catch (error) {
    return res.status(500).json({ error: "[img2img] Internal Server Error" });
  }

  // setTimeout(async () => {
  //   try {
  //     const data = {
  //       output: ["https://upload.wikimedia.org/wikipedia/commons/thumb/3/3a/Cat03.jpg/1200px-Cat03.jpg"],
  //     };
  //     return res.status(200).json(data);
  //   } catch (error) {
  //     return res.status(500).json({ error: "Internal Server Error" });
  //   }
  // }, 3000);
}
