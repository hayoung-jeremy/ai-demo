"use client";
import React from "react";
import { useRecoilValue } from "recoil";
import { imageState } from "../store/imageState";

const ImageUpscaler = () => {
  const selectedImage = useRecoilValue(imageState);

  console.log("ImageUpscaler selectedImage : ", selectedImage);

  return <div>ImageUpscaler</div>;
};

export default ImageUpscaler;
