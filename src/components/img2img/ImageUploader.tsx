"use client";
import Image from "next/image";
import { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useRecoilState, useSetRecoilState } from "recoil";
import { uploadedImgState, upscaledImgState } from "@/store/imageState";
import { cls } from "@/utils";
import { Add } from "../icons";

const ImageUploader = () => {
  const [uploadedImage, setUploadedImage] = useRecoilState(uploadedImgState);

  const onDrop = useCallback(
    (acceptedFiles: any) => {
      // Do something with the files
      const reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onloadend = () => {
        const base64data = reader.result as string;
        setUploadedImage(base64data);
      };
    },
    [setUploadedImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

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
        {uploadedImage ? (
          <div className="w-[400px] aspect-square relative mx-auto">
            <Image src={uploadedImage} alt="Uploaded Image" fill style={{ objectFit: "contain" }} />
          </div>
        ) : (
          <div
            {...getRootProps()}
            className={cls(
              "flex items-center justify-center",
              "border hover:border-[#c092e960] h-full rounded-[8px]",
              "cursor-pointer",
              "transition-all duration-200",
              isDragActive ? "border-[#c092e960]" : "border-[#ffffff20]"
            )}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <div className="text-[#c092e990] flex flex-col items-center justify-center gap-2">
                <Add width={48} height={48} />
                <p>Drop the files here ...</p>
              </div>
            ) : (
              <p className="text-[#b0a7b8] text-center">
                Drag & drop some files here, <br /> or click to select files
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
