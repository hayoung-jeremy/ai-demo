import React from "react";

interface Props {
  width?: number;
  height?: number;
}

const VideoFilled = ({ width = 24, height = 24 }: Props) => {
  return (
    <svg height={width} width={height} fill="currentColor" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
      <path d="M167.31-180.001q-23.616 0-40.654-17.039-17.038-17.038-17.038-40.654v-484.612q0-23.616 17.038-40.654 17.038-17.039 40.654-17.039h484.612q23.616 0 40.654 17.039 17.039 17.038 17.039 40.654v208.461l115.152-115.153q7.615-7.615 16.615-3.615 9 4 9 14v277.226q0 10-9 14t-16.615-3.615L709.615-446.539v208.845q0 23.616-17.039 40.654-17.038 17.039-40.654 17.039H167.31Z" />
    </svg>
  );
};

export default VideoFilled;
