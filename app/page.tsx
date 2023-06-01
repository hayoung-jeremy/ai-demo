import { ImageUploader, ImageUpscaler } from "@/components";

export default function Home() {
  return (
    <div className="p-5 grid grid-cols-2 gap-4 min-h-[300px]">
      <ImageUploader />
      <ImageUpscaler />
    </div>
  );
}
