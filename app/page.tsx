import { ImageUploader, ImageUpscaler } from "@/src/components";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center p-24 gap-2">
      <h1>Hi</h1>
      <div className="border p-5 flex flex-col gap-4">
        <ImageUploader />
        <ImageUpscaler />
      </div>
    </main>
  );
}
