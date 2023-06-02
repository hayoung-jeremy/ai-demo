"use client";
import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { useDropzone } from "react-dropzone";
import { useRecoilState, useRecoilValue } from "recoil";
import { imgUpscalingState, uploadedImgState } from "@/store/imageState";
import { cls } from "@/utils";
import { Add, Error } from "../icons";
import SpinningLoader from "../SpinningLoader";

const ImageUploader = () => {
  const [uploadedImage, setUploadedImage] = useRecoilState(uploadedImgState);
  const [uploadingErr, setUploadingErr] = useState<any>(null);
  const isImgUpscaling = useRecoilValue(imgUpscalingState);

  const onDrop = useCallback(
    (acceptedFiles: any, fileRejections: any) => {
      if (fileRejections.length) {
        fileRejections.forEach((file: { errors: any[] }) => {
          file.errors.forEach(err => {
            console.log(err);
            if (err.code === "file-too-large") setUploadingErr("File is larger than 2mb. Please try smaller");
            if (err.code === "file-invalid-type") setUploadingErr("File type must be .png, .jpg, or .jpeg");
            if (err.code === "too-many-files") setUploadingErr("You can only upload a single file at once");
            else setUploadingErr(err.message);
          });
        });
        return;
      }
      // Do something with the files
      const reader = new FileReader();
      reader.readAsDataURL(acceptedFiles[0]);
      reader.onloadend = () => {
        const base64data = reader.result as string;
        setUploadedImage(base64data);
      };
      setUploadingErr(null);
    },
    [setUploadedImage]
  );

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    maxSize: 1048576 * 2,
    multiple: false,
    onDrop,
    accept: {
      "image/png": [".png"],
      "image/jpg": [".jpg", ".jpeg"],
    },
  });

  useEffect(() => {
    console.log("loader uploadingErr : ", uploadingErr);
  }, [uploadingErr]);

  return (
    <div className="flex flex-col gap-4">
      <div
        className={cls(
          "relative",
          "min-h-full overflow-hidden",
          "bg-[#ffffff16] backdrop-blur-[100px]",
          "p-5 rounded-[20px]",
          "border border-[#ffffff04] border-t-[#ffffff08] border-r-[#ffffff16]",
          "shadow-[4px_4px_12px_12px_#00000020]"
        )}
      >
        {isImgUpscaling && (
          <div
            className={cls(
              "absolute top-0 left-0 z-10",
              "w-full h-full bg-black/60",
              "flex items-center justify-center"
            )}
          >
            <SpinningLoader width="36" height="36" />
          </div>
        )}
        {uploadedImage ? (
          <div className="w-[400px] aspect-square relative mx-auto">
            <Image src={uploadedImage} alt="Uploaded Image" fill style={{ objectFit: "contain" }} />
          </div>
        ) : (
          <div
            {...getRootProps()}
            className={cls(
              "flex flex-col items-center justify-center gap-3",
              "h-full rounded-[8px]",
              "border hover:border-[#c092e960]",
              "cursor-pointer",
              "transition-all duration-200",
              isDragActive ? "border-[#c092e960]" : "border-[#ffffff20]"
            )}
          >
            <input {...getInputProps()} className="outline-none focus:ring-0 focus:outline-none active:outline-none" />
            {isDragActive ? (
              <div className="text-[#c092e990] flex flex-col items-center justify-center gap-2">
                <Add width={48} height={48} />
                <p>Drop the files here ...</p>
              </div>
            ) : (
              <>
                <p className="text-[#b0a7b8] text-center">
                  Drag & drop some files here, <br /> or click to select files
                </p>
                {uploadingErr ? (
                  <p className="text-[#f0515e] flex items-center justify-center gap-2">
                    <Error />
                    {uploadingErr}
                  </p>
                ) : null}
              </>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUploader;
