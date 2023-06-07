"use client";
import { useRecoilValue } from "recoil";
import { uploadedImgState, generatedImgState } from "@/store/img2img";

import { ImageController, ImageDownloader, ImageUploader, ImagePreviewer } from "@/components/img2img";
import { useEffect } from "react";

export default function Home() {
  const uploadedImage = useRecoilValue(uploadedImgState);
  const upscaledImage = useRecoilValue(generatedImgState);

  useEffect(() => {
    console.log("upscaledImage : ", upscaledImage);
  }, [upscaledImage]);

  return (
    <section className="p-10 flex flex-col gap-5">
      <h2 className="text-[28px] text-[#b0a7b8]">Image to image</h2>
      <div className="grid grid-cols-2 gap-x-10 gap-y-6 min-h-[300px]">
        <ImageUploader />
        <ImagePreviewer />
        {uploadedImage ? <ImageController /> : null}
        {upscaledImage ? <ImageDownloader upscaledImage={upscaledImage} /> : null}
      </div>
    </section>
  );
}
