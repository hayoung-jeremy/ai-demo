"use client";
import { useRecoilValue } from "recoil";
import { uploadedImgState, generatedImgState, imgGeneratingState } from "@/store/img2img";

import { ImageController, ImageDownloader, ImageUploader, ImagePreviewer } from "@/components/img2img";
import { useEffect } from "react";

export default function Home() {
  const uploadedImage = useRecoilValue(uploadedImgState);
  const generatedImage = useRecoilValue(generatedImgState);
  const isImgGenerating = useRecoilValue(imgGeneratingState);

  useEffect(() => {
    console.log("generatedImage : ", generatedImage);
  }, [generatedImage]);

  return (
    <section className="p-10 flex flex-col gap-5">
      <h2 className="text-[28px] text-[#b0a7b8]">Image to image</h2>
      <div className="grid grid-cols-2 gap-x-10 gap-y-6 min-h-[300px]">
        <ImageUploader />
        <ImagePreviewer />
        {uploadedImage ? <ImageController /> : null}
        {generatedImage && !isImgGenerating ? <ImageDownloader generatedImage={generatedImage} /> : null}
      </div>
    </section>
  );
}
