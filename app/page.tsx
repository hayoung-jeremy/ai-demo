"use client";
import { useRecoilValue } from "recoil";
import { uploadedImgState, upscaledImgState } from "@/store/imageState";

import { ImageController, ImageDownloader, ImageUploader, UpscaledImagePreviewer } from "@/components/img2img";

export default function Home() {
  const uploadedImage = useRecoilValue(uploadedImgState);
  const upscaledImage = useRecoilValue(upscaledImgState);

  return (
    <section className="p-10 flex flex-col gap-5">
      <h2 className="text-[28px] text-[#b0a7b8]">Image to image</h2>
      <div className="grid grid-cols-2 gap-x-10 gap-y-6 min-h-[300px]">
        <ImageUploader />
        <UpscaledImagePreviewer />
        {uploadedImage ? <ImageController /> : null}
        {upscaledImage ? <ImageDownloader upscaledImage={upscaledImage} /> : null}
      </div>
    </section>
  );
}
