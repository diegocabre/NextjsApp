import { HomeIcon } from "@primer/octicons-react";
import Link from "next/link";
import { ActiveLink } from "../active-link/ActiveLink";

const navItems = [
  {
    path: "/about",
    text: "About",
  },
  {
    path: "/pricing",
    text: "Pricing",
  },
  {
    path: "/contact",
    text: "Contact",
  },
];

export const Navbar = async () => {
  return (
    <nav className="flex bg-blue-800 bg-opacity-30 p-2 m-2 rounded">
      <Link href="/" className="mr-2 text-white font-bold text-lg">
        <HomeIcon className="mr-2 flex float-start " size={24} />
        Home
      </Link>
      <div className="flex flex-1"></div>
      {navItems.map((navItems) => (
        <ActiveLink key={navItems.path} {...navItems} />
      ))}
    </nav>
  );
};
