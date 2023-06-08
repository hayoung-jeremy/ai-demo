import React from "react";
import { cls } from "@/utils";
import { useRecoilValue } from "recoil";
import { imgGeneratingState } from "@/store/img2img";
import { Help } from "../icons";

const PromptController = () => {
  const isImgGenerating = useRecoilValue(imgGeneratingState);

  return (
    <article>
      <p className="text-[20px] text-[#b0a7b8] mb-4">Controller</p>
      <div className="flex justify-between items-start gap-4">
        <div className="grow">
          <p className={cls("flex items-center gap-1", "mb-2 text-[#ffffff80]")}>
            Prompt
            <span className="hover:text-[#c092e9] cursor-pointer">
              <Help width={20} height={20} />
            </span>
          </p>
          <textarea
            disabled={isImgGenerating}
            className="text_area"
            placeholder="Enter prompt text to generate image."
          />
        </div>
        <div className="grow">
          <p className={cls("flex items-center gap-1", "mb-2 text-[#ffffff80]")}>
            Negative prompt{" "}
            <span className="hover:text-[#c092e9] cursor-pointer">
              <Help width={20} height={20} />
            </span>
          </p>
          <textarea
            disabled={isImgGenerating}
            className="text_area"
            placeholder="Enter negative prompt text that output image should not contain."
          />
        </div>
      </div>
    </article>
  );
};

export default PromptController;
