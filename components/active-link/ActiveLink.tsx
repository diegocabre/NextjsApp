"use client";
import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
  path: string;
  text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
  const pathName = usePathname();

  return (
    <Link
      key={path}
      href={path}
      className={`${style.link} ${
        pathName === path && style["active-link"]
      } font-bold `}
    >
      {text}
    </Link>
  );
};
