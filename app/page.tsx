"use client";
import Image from "next/image";
import { ChangeEvent, useRef, useState } from "react";

export default function Home() {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const handleImageChange = (event: ChangeEvent<HTMLInputElement>) => {
    console.log("event.target : ", event.target.files);
    if (!event.target.files || event.target.files.length === 0) {
      setSelectedImage(null);
      return;
    }

    const file = event.target.files[0];
    setSelectedImage(URL.createObjectURL(file));
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Hi</h1>
      <div className="border p-5 flex flex-col gap-4">
        <input type="file" onChange={handleImageChange} ref={fileInputRef} accept=".jpg, .jpeg, .png" />
        {selectedImage && (
          <>
            <Image src={selectedImage} alt="Uploaded Image" width={400} height={400} />
            <button
              onClick={handleRemoveImage}
              className="border border-red-300 text-red-300 px-4 py-1 rounded hover:bg-red-300/20"
            >
              remove image
            </button>
          </>
        )}
      </div>
    </main>
  );
}
