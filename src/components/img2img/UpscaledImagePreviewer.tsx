"use client";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { upscaledImgState } from "@/store/imageState";

import { cls } from "@/utils";

const UpscaledImagePreviewer = () => {
  const upscaledImage = useRecoilValue(upscaledImgState);

  return (
    <div className="flex flex-col gap-4">
      <div
        className={cls(
          "min-h-full",
          "bg-[#ffffff16] backdrop-blur-[100px]",
          "p-5 rounded-[20px]",
          "border border-[#ffffff04] border-t-[#ffffff08] border-r-[#ffffff16]",
          "shadow-[4px_4px_12px_12px_#00000020]"
        )}
      >
        <div className={cls("w-[400px] aspect-square relative mx-auto", "flex items-center justify-center")}>
          {upscaledImage ? (
            <Image src={upscaledImage} alt="upscaled image" fill style={{ objectFit: "contain" }} />
          ) : (
            <p className="text-[#b0a7b8] text-center">Your image will show up here</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default UpscaledImagePreviewer;
