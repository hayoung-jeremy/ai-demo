import React from "react";

interface Props {
  upscaledImage: string;
}

const ImageDownloader = ({ upscaledImage }: Props) => {
  return (
    <aside className="flex flex-col gap-4">
      <div className="">
        <p className="text-[20px] text-[#b0a7b8]">Result</p>
      </div>
      <div className="flex items-center justify-between gap-4">
        <a className="btn" href={upscaledImage} download="upscaled_image.png">
          Download Image
        </a>
        <div className="w-full" />
      </div>
    </aside>
  );
};

export default ImageDownloader;
