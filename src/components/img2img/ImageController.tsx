"use client";
import axios from "axios";
import { useRecoilState, useSetRecoilState } from "recoil";
import { imgGeneratingState, uploadedImgState, generatedImgState, backgroundProcessingState } from "@/store/img2img";
import { cls } from "@/utils";

import SpinningLoader from "../SpinningLoader";

const ImageController = () => {
  const [uploadedImage, setUploadedImage] = useRecoilState(uploadedImgState);
  const [isImgGenerating, setIsImgGenerating] = useRecoilState(imgGeneratingState);
  const setGeneratedImage = useSetRecoilState(generatedImgState);
  const setIsBackgroundProcessing = useSetRecoilState(backgroundProcessingState);

  const generateImg = async () => {
    setIsImgGenerating(true);
    try {
      const { data } = await axios.post("/api/img2img", {
        init_image: uploadedImage,
      });
      console.log("data : ", data);

      if (data.status === "processing") {
        const estimatedSeconds = Math.ceil(data.eta);
        const request_id = data.id.toString();
        setIsBackgroundProcessing({ isProcessing: true, estimatedTime: estimatedSeconds });
        console.log(`Image is processing. Will be available after ${estimatedSeconds} seconds`);
        console.log("request_id : ", request_id);

        const fetchQueuedImages = async (request_id: string, timeout: number) => {
          return new Promise((resolve, reject) => {
            setTimeout(async () => {
              try {
                const response = await axios.post("/api/fetchQueuedImages", {
                  request_id,
                  estimatedSeconds,
                });
                console.log(response);
                if (response.data.status === "success") {
                  console.log("이미지 생성 완료");
                  setIsBackgroundProcessing({ isProcessing: false, estimatedTime: 0 });
                  resolve(response);
                } else {
                  console.log("이미지 아직 생성중");
                  resolve(await fetchQueuedImages(request_id, timeout));
                }
              } catch (error) {
                setIsBackgroundProcessing({ isProcessing: false, estimatedTime: 0 });
                reject(error);
              }
            }, timeout * 1000);
          });
        };

        const response: any = await fetchQueuedImages(request_id, estimatedSeconds);

        setGeneratedImage(response.data.output[0]);
        setIsImgGenerating(false);
      } else {
        setGeneratedImage(data.output[0]);
        setIsImgGenerating(false);
      }
    } catch (error) {
      setIsImgGenerating(false);
    }
  };

  const fetchImgFromStreamData = async (task_id: number) => {
    return new Promise((resolve, reject) => {
      setTimeout(async () => {
        try {
          const { data: streamData } = await axios.get("/api/easydiffusion", {
            params: {
              task_id,
            },
          });

          if (typeof streamData === "object" && streamData.hasOwnProperty("output")) {
            // console.log("streamData 는 Object 입니다.");
            resolve(streamData.output[0]);
            setGeneratedImage(streamData.output[0].data);
            setIsImgGenerating(false);
          } else {
            // console.log(`streamData의 타입은 [${typeof streamData}] 입니다.`);
            resolve(await fetchImgFromStreamData(task_id));
          }
        } catch (error) {
          reject(error);
        }
      }, 1000);
    });
  };

  const generateImgFromEasyDiffusion = async () => {
    setIsImgGenerating(true);
    const { data } = await axios.post("/api/easydiffusion", {
      init_image: uploadedImage,
    });
    // console.log("generateImgFromEasyDiffusion data", data);
    const task_id = data.task;

    await fetchImgFromStreamData(task_id);
  };

  const removeImage = () => {
    setUploadedImage(null);
    setGeneratedImage(null);
  };

  return (
    <aside className="flex flex-col gap-4">
      <div className="">
        <p className="text-[20px] text-[#b0a7b8]">Prompt</p>
        {/* <div className="">
          <p>Sampling steps</p>
          <input type="text" />
        </div>
        <div>
          <p>CFG scale</p>
          <p>
            Classifier free guidance scale : How strongly the image should conform to prompt (lower values produce more
            creative results)
          </p>
          <input type="text" />
        </div> */}
      </div>
      <div className="flex items-center justify-between gap-4">
        {!isImgGenerating && (
          <button
            disabled={isImgGenerating}
            onClick={removeImage}
            className={cls("btn negative", isImgGenerating ? "w-0" : "")}
          >
            Remove
          </button>
        )}
        <button disabled={isImgGenerating} onClick={generateImg} className="btn">
          {isImgGenerating ? (
            <>
              <SpinningLoader />
              <span className="text-[#ffffff50]">processing... please wait</span>
            </>
          ) : (
            "Generate"
          )}
        </button>
        {!isImgGenerating && (
          <button className="btn" onClick={generateImgFromEasyDiffusion}>
            Generate from Easy Diffusion
          </button>
        )}
      </div>
    </aside>
  );
};

export default ImageController;
