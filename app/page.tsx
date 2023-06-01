import { ImageUploader, ImageUpscaler } from "@/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-2">
      <h1>Hi</h1>
      <div className="border p-5 grid grid-cols-2 gap-4 min-h-[300px]">
        <ImageUploader />
        <ImageUpscaler />
      </div>
    </main>
  );
}
