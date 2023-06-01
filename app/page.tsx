"use client";
import { useRecoilValue } from "recoil";
import { uploadedImgState } from "@/store/imageState";

import { ImageController, ImageUploader, UpscaledImagePreviewer } from "@/components/img2img";

export default function Home() {
  const uploadedImage = useRecoilValue(uploadedImgState);

  return (
    <section className="p-5 flex flex-col gap-5">
      <h2 className="text-[28px] text-[#b0a7b8]">Image to image</h2>
      <div className="grid grid-cols-2 gap-4 min-h-[300px]">
        <ImageUploader />
        <UpscaledImagePreviewer />
      </div>
      <div className="grid grid-cols-2 gap-4 min-h-[300px]">{uploadedImage ? <ImageController /> : null}</div>
    </section>
  );
}
