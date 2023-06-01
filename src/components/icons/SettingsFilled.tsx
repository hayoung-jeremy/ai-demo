import React from "react";

interface Props {
  width?: number;
  height?: number;
}

const SettingsFilled = ({ width = 24, height = 24 }: Props) => {
  return (
    <svg height={width} width={height} fill="currentColor" viewBox="0 -960 960 960" xmlns="http://www.w3.org/2000/svg">
      <path d="M533.691-100.001H425.924q-10.615 0-18.731-6.808-8.115-6.808-10.115-17.423l-14.462-96q-20.538-7-44.231-20.346-23.692-13.346-40.846-28.27l-88 40.693q-10.23 4.615-20.846 1.115-10.615-3.5-16.23-14.115L118.002-337q-5.616-9.615-2.808-20.231 2.808-10.615 11.423-17.23l80.231-59.154q-2-10.539-2.885-23-.885-12.462-.885-23 0-10.154.885-22.616t2.885-24.154l-80.231-59.154q-8.615-6.615-11.423-17.23-2.808-10.616 2.808-20.231l54.461-95.46q6-9.846 16.23-13.538 10.231-3.693 20.462.923l87.999 39.923q18.308-14.924 41.231-28.078 22.924-13.154 43.847-19.538l14.846-97q2-10.615 10.115-17.423 8.116-6.808 18.731-6.808h107.767q10.616 0 18.923 6.808 8.308 6.808 10.308 17.423l14.462 96.384q22.077 8.154 44.154 20.231 22.077 12.077 39.769 28.001l89.538-39.923q10.231-4.616 20.654-1.308t16.038 13.538l54.461 95.23q5.616 9.615 3.308 20.538t-11.923 17.538l-81.769 58.693q2.769 11.923 3.462 24 .692 12.077.692 22.846 0 10.385-.885 22.154-.884 11.769-3.269 24.462l81.384 58.923q8.616 6.23 11.423 17.038 2.808 10.808-3.192 20.423l-54.076 96.229q-6 10.231-16.423 13.539-10.423 3.307-21.039-1.308l-88.384-40.692q-18.692 15.692-40.346 28.962-21.654 13.269-43.577 19.654l-14.462 96.384q-2 10.615-10.308 17.423-8.307 6.808-18.923 6.808Zm-54.845-267.308q47.076 0 79.884-32.807 32.807-32.808 32.807-79.884t-32.807-79.884q-32.808-32.807-79.884-32.807-46.692 0-79.691 32.807-33 32.808-33 79.884t33 79.884q32.999 32.807 79.691 32.807Z" />
    </svg>
  );
};

export default SettingsFilled;
