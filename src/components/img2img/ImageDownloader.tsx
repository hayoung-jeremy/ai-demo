import axios from "axios";
import React, { useEffect, useState } from "react";

interface Props {
  upscaledImage: string;
}

const ImageDownloader = ({ upscaledImage }: Props) => {
  const [downloadURL, setDownloadURL] = useState<string | null>(null);

  const handleDownload = async () => {
    const res = await axios.get(upscaledImage, { responseType: "blob" });
    const blob = await res.data.arrayBuffer();
    const url = URL.createObjectURL(new Blob([blob], { type: "image/png" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "upscaled_image.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <aside className="flex flex-col gap-4">
      <div className="">
        <p className="text-[20px] text-[#b0a7b8]">Result</p>
      </div>
      <div className="flex items-center justify-between gap-4">
        {upscaledImage ? (
          <button onClick={handleDownload} className="btn">
            Download image
          </button>
        ) : null}
        <div className="w-full" />
      </div>
    </aside>
  );
};

export default ImageDownloader;
