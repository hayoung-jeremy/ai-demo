import { atom } from "recoil";

export const uploadedImgState = atom<string | null>({
  key: "uploadedImgState",
  default: null,
});

export const generatedImgState = atom<string | null>({
  key: "generatedImgState",
  default: null,
});

export const imgGeneratingState = atom({
  key: "imgGeneratingState",
  default: false,
});

export const backgroundProcessingState = atom({
  key: "backgroundProcessingState",
  default: { isProcessing: false, estimatedTime: 0 },
});
