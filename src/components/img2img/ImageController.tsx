"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { imgUpscalingState, uploadedImgState, upscaledImgState } from "@/store/imageState";
import { cls } from "@/utils";
import SpinningLoader from "../SpinningLoader";

const ImageController = () => {
  const [uploadedImage, setUploadedImage] = useRecoilState(uploadedImgState);
  const setUpscaledImage = useSetRecoilState(upscaledImgState);

  const [isImgUpscaling, setIsImgUpscaling] = useRecoilState(imgUpscalingState);

  const upscaleImage = async () => {
    setIsImgUpscaling(true);
    try {
      const { data } = await axios.post("/api/upscale", {
        init_image: uploadedImage,
      });
      console.log("data : ", data);
      setUpscaledImage(data.output[0]);
      setIsImgUpscaling(false);
    } catch (error) {
      setIsImgUpscaling(false);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    setUpscaledImage(null);
  };

  return (
    <aside className="">
      <div className="">
        <p>Prompt</p>
      </div>
      <div className="flex items-center justify-between gap-4">
        {!isImgUpscaling && (
          <button
            disabled={isImgUpscaling}
            onClick={removeImage}
            className={cls("btn negative", isImgUpscaling ? "w-0" : "")}
          >
            Remove image
          </button>
        )}
        <button
          disabled={isImgUpscaling}
          onClick={upscaleImage}
          className={cls("btn", "flex items-center justify-center gap-3", "")}
        >
          {isImgUpscaling ? (
            <>
              <SpinningLoader />
              <span className="text-[#ffffff50]">processing... please wait</span>
            </>
          ) : (
            "Upscale image"
          )}
        </button>
      </div>
    </aside>
  );
};

export default ImageController;
