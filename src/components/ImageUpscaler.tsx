"use client";
import Image from "next/image";
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { imageState } from "../store/imageState";
import axios from "axios";
import { cls } from "@/utils";

const data = {
  key: "sO70siU72kFk9GjyCMCGQwwzKA5MwVJAq4yU1bsEr0KMbS8jT0Ij65PKkNO5",
  prompt: "a red shoes with butterfly",
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

const ImageUpscaler = () => {
  const selectedImage = useRecoilValue(imageState);
  const [upscaledImage, setUpscaledImage] = useState();

  const sendImage = async () => {
    try {
      const { data } = await axios.post("/api/upscale", {
        init_image: selectedImage,
      });
      console.log("data : ", data);
      setUpscaledImage(data.output[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <button disabled={selectedImage ? false : true} onClick={sendImage} className={cls("")}>
        Upscale image
      </button>
      <div className="w-full aspect-square relative">
        {upscaledImage ? (
          <Image src={upscaledImage} alt="upscaled image" fill style={{ objectFit: "contain" }} />
        ) : null}
      </div>
    </div>
  );
};

export default ImageUpscaler;
