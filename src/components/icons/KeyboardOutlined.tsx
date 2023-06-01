import React from "react";

interface Props {
  width?: number;
  height?: number;
}

const KeyboardOutlined = ({ width = 24, height = 24 }: Props) => {
  return (
    <svg height={width} width={height} fill="currentColor" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
      <path d="M117.694-140.001q-23.53 0-40.61-17.082Q60-174.165 60-197.694v-524.612q0-23.529 17.082-40.611 17.082-17.082 40.611-17.082h724.612q23.529 0 40.611 17.082 17.082 17.082 17.082 40.611v524.612q0 23.529-17.082 40.611-17.082 17.082-40.611 17.082H117.694Zm0-45.384h724.612q4.616 0 8.463-3.846 3.846-3.847 3.846-8.463v-524.612q0-4.616-3.846-8.463-3.847-3.846-8.463-3.846H117.694q-4.616 0-8.463 3.846-3.846 3.847-3.846 8.463v524.612q0 4.616 3.846 8.463 3.847 3.846 8.463 3.846Zm216.614-83.923h291.384q11.692 0 19.154-7.462 7.461-7.461 7.461-18.961 0-11.5-7.461-18.961-7.462-7.462-19.154-7.462H334.308q-11.692 0-19.154 7.462-7.461 7.461-7.461 18.961 0 11.5 7.461 18.961 7.462 7.462 19.154 7.462Zm-228.923 83.923V-734.615-185.385Zm86.231-224.308h75.845v-75.229h-75.845v75.229Zm167.308 0h75.845v-75.229h-75.845v75.229Zm166.307 0h75.845v-75.229h-75.845v75.229Zm167.308 0h75.845v-75.229h-75.845v75.229ZM191.616-574.769h75.845v-74.615h-75.845v74.615Zm167.308 0h75.845v-74.615h-75.845v74.615Zm166.307 0h75.845v-74.615h-75.845v74.615Zm167.308 0h75.845v-74.615h-75.845v74.615Z" />
    </svg>
  );
};

export default KeyboardOutlined;
