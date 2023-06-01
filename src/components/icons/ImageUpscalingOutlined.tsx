import React from "react";

interface Props {
  width?: number;
  height?: number;
}

const ImageUpscalingOutlined = ({ width = 24, height = 24 }: Props) => {
  return (
    <svg height={width} width={height} fill="currentColor" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
      <path d="M197.694-140.001q-23.529 0-40.611-17.082-17.082-17.082-17.082-40.611v-564.612q0-23.529 17.082-40.611 17.082-17.082 40.611-17.082h564.612q23.529 0 40.611 17.082 17.082 17.082 17.082 40.611v564.612q0 23.529-17.082 40.611-17.082 17.082-40.611 17.082H197.694Zm0-45.384h564.612q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-564.612q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H197.694q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v564.612q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846Zm-12.309 0V-774.615-185.385ZM296.002-287.77h372.073q8.308 0 12.269-7.808 3.962-7.807-1.038-15.423L578.845-445.076q-4.615-6-11.423-6-6.807 0-11.423 6L446.385-306.231l-70.615-92.537q-4.615-5.616-11.423-5.616t-11.423 6l-67.537 87.383q-5.616 7.616-1.654 15.423 3.962 7.808 12.269 7.808Zm44.138-289.538q17.783 0 30.167-12.525 12.385-12.525 12.385-30.307 0-17.783-12.525-30.167-12.525-12.385-30.307-12.385-17.783 0-30.167 12.525-12.385 12.525-12.385 30.307 0 17.783 12.525 30.167 12.525 12.385 30.307 12.385Z" />
    </svg>
  );
};

export default ImageUpscalingOutlined;
