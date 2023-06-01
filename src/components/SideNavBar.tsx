"use client";
import React, { useState } from "react";
import { cls } from "@/utils";
import Link from "next/link";
import {
  ImageUpscalingFilled,
  ImageUpscalingOutlined,
  KeyboardFilled,
  KeyboardOutlined,
  Logo,
  SettingsFilled,
  SettingsOutlined,
  VideoFilled,
  VideoOutlined,
} from "./icons";

const menu = [
  { title: "Text to Image", url: "/", iconOutlined: <KeyboardOutlined />, iconFilled: <KeyboardFilled /> },
  { title: "Image to Image", url: "/", iconOutlined: <ImageUpscalingOutlined />, iconFilled: <ImageUpscalingFilled /> },
  { title: "Video to 3D", url: "/", iconOutlined: <VideoOutlined />, iconFilled: <VideoFilled /> },
  { title: "Settings", url: "/", iconOutlined: <SettingsOutlined />, iconFilled: <SettingsFilled /> },
];

const SideNavBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <nav className={cls("w-[240px] h-full bg-[#ffffff10] backdrop-blur", "absolute top-0 left-0", "p-5")}>
      <Logo width={120} />
      <ul className="flex flex-col gap-1 mt-10">
        {menu.map((menulist, index) => {
          return (
            <li
              key={index}
              className={cls(
                "",
                "hover:bg-[#ffffff10] hover:mx-[-20px] hover:px-5 transition-all duration-200",
                selectedIndex === index ? "text-[#c092e9]" : "text-[#b0a7b8]"
              )}
            >
              <Link className="flex gap-2 py-2" href={menulist.url} onClick={() => setSelectedIndex(index)}>
                {selectedIndex === index ? menulist.iconFilled : menulist.iconOutlined}
                {menulist.title}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideNavBar;
