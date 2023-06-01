"use client";
import React from "react";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { uploadedImgState, upscaledImgState } from "@/store/imageState";

const ImageController = () => {
  const [uploadedImage, setUploadedImage] = useRecoilState(uploadedImgState);
  const setUpscaledImage = useSetRecoilState(upscaledImgState);

  const upscalImage = async () => {
    try {
      const { data } = await axios.post("/api/upscale", {
        init_image: uploadedImage,
      });
      console.log("data : ", data);
      setUpscaledImage(data.output[0]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <aside className="">
      <div className="flex items-center justify-between gap-4">
        <button onClick={() => setUploadedImage(null)} className="btn negative">
          Remove image
        </button>
        <button disabled={uploadedImage ? false : true} onClick={upscalImage} className="btn">
          Upscale image
        </button>
      </div>
      <div className="">1</div>
    </aside>
  );
};

export default ImageController;
