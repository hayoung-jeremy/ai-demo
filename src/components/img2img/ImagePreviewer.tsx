"use client";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { generatedImgState, imgGeneratingState } from "@/store/img2img";

import { cls } from "@/utils";
import SpinningLoader from "../SpinningLoader";

const ImagePreviewer = () => {
  const generatedImage = useRecoilValue(generatedImgState);
  const isImgGenerating = useRecoilValue(imgGeneratingState);

  return (
    <div className="flex flex-col gap-4">
      <div
        className={cls(
          "min-h-full",
          "overflow-hidden",
          "bg-[#ffffff16] backdrop-blur-[100px]",
          "p-5 rounded-[20px]",
          "border border-[#ffffff04] border-t-[#ffffff08] border-r-[#ffffff16]",
          "shadow-[4px_4px_12px_12px_#00000020]",
          "transition-all duration-300",
          isImgGenerating
            ? "border-[#c092e9] border-t-[#c092e9] border-r-[#c092e9] shadow-[0px_0px_12px_12px_#c092e920]"
            : ""
        )}
      >
        <div className={cls("w-[400px] aspect-square relative mx-auto", "flex items-center justify-center")}>
          {isImgGenerating ? (
            <div className="flex items-center justify-center gap-4">
              <SpinningLoader />
              <p className="text-[#b0a7b8]">Generating ...</p>
            </div>
          ) : generatedImage ? (
            <Image src={generatedImage} alt="upscaled image" fill style={{ objectFit: "contain" }} />
          ) : (
            <p className="text-[#b0a7b8] text-center">Your image will show up here</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ImagePreviewer;
