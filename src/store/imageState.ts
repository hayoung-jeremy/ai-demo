import { atom } from "recoil";

export const uploadedImgState = atom<string | null>({
  key: "uploadedImgState",
  default: null,
});

export const upscaledImgState = atom<string | null>({
  key: "upscaledImgState",
  default: null,
});

export const imgUpscalingState = atom({
  key: "imgUpscalingState",
  default: false,
});
