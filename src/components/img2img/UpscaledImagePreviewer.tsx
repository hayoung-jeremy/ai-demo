"use client";
import Image from "next/image";
import { useRecoilValue } from "recoil";
import { upscaledImgState } from "@/store/imageState";

import { cls } from "@/utils";

const UpscaledImagePreviewer = () => {
  const upscaledImage = useRecoilValue(upscaledImgState);

  return (
    <div className="flex flex-col gap-4">
      <div className="bg-[#ffffff16] backdrop-blur-[100px] min-h-[320px] p-5 rounded-[12px]">
        <div className={cls("w-[400px] aspect-square relative mx-auto", "border")}>
          {upscaledImage ? (
            <Image src={upscaledImage} alt="upscaled image" fill style={{ objectFit: "contain" }} />
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default UpscaledImagePreviewer;
