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

      if (data.status === "processing") {
        const estimatedSeconds = Math.ceil(data.eta);
        const request_id = data.id.toString();
        console.log(`Image is processing. Will be available after ${estimatedSeconds} seconds`);
        console.log("request_id : ", request_id);

        const fetchQueuedImages = async (request_id: string, timeout: number) => {
          return new Promise((resolve, reject) => {
            setTimeout(async () => {
              try {
                const response = await axios.post("/api/fetchQueuedImages", {
                  request_id,
                  estimatedSeconds,
                });
                console.log(response);
                if (response.data.status === "success") {
                  console.log("이미지 생성 완료");
                  resolve(response);
                } else {
                  console.log("이미지 아직 생성중");
                  resolve(await fetchQueuedImages(request_id, timeout));
                }
              } catch (error) {
                reject(error);
              }
            }, timeout * 1000);
          });
        };

        const response: any = await fetchQueuedImages(request_id, estimatedSeconds);

        setUpscaledImage(response.data.output[0]);
        setIsImgUpscaling(false);
      } else {
        setUpscaledImage(data.output[0]);
        setIsImgUpscaling(false);
      }
    } catch (error) {
      setIsImgUpscaling(false);
    }
  };

  const removeImage = () => {
    setUploadedImage(null);
    setUpscaledImage(null);
  };

  return (
    <aside className="flex flex-col gap-4">
      <div className="">
        <p className="text-[20px] text-[#b0a7b8]">Prompt</p>
        <div className="">
          <p>Sampling steps</p>
          <input type="text" />
        </div>
        <div>
          <p>CFG scale</p>
          <p>
            Classifier free guidance scale : How strongly the image should conform to prompt (lower values produce more
            creative results)
          </p>
          <input type="text" />
        </div>
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
        <button disabled={isImgUpscaling} onClick={upscaleImage} className="btn">
          {isImgUpscaling ? (
            <>
              <SpinningLoader />
              <span className="text-[#ffffff50]">processing... please wait</span>
            </>
          ) : (
            "Generate image"
          )}
        </button>
      </div>
    </aside>
  );
};

export default ImageController;
