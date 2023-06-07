"use client";
import React, { useEffect, useState } from "react";
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
  { title: "Text to Image", url: "/txt2img", iconOutlined: <KeyboardOutlined />, iconFilled: <KeyboardFilled /> },
  { title: "Image to Image", url: "/", iconOutlined: <ImageUpscalingOutlined />, iconFilled: <ImageUpscalingFilled /> },
  { title: "Video to 3D", url: "/video23D", iconOutlined: <VideoOutlined />, iconFilled: <VideoFilled /> },
  { title: "Settings", url: "/settings", iconOutlined: <SettingsOutlined />, iconFilled: <SettingsFilled /> },
];

const SideNavBar = () => {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  useEffect(() => {
    const storedIndex = sessionStorage.getItem("selectedIndex");
    setSelectedIndex(storedIndex !== null ? parseInt(storedIndex) : 1);
  }, []);

  useEffect(() => {
    sessionStorage.setItem("selectedIndex", selectedIndex.toString());
  }, [selectedIndex]);

  return (
    <nav className={cls("w-[240px] h-full bg-[#ffffff10] backdrop-blur", "absolute top-0 left-0", "p-5")}>
      <Logo width={120} />
      <ul className="flex flex-col gap-1 mt-10">
        {menu.map((menulist, index) => {
          return (
            <li
              key={index}
              className={cls(
                "bg-gradient-to-r mx-[-20px] px-5",
                "transition-all duration-[280ms]",
                selectedIndex === index
                  ? "text-[#c092e9] from-[#9c4ce23b]"
                  : "text-[#b0a7b8] from-[#ffffff00] hover:from-[#ffffff10]"
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
