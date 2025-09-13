import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <div className="py-5 flex items-center justify-between border-b">
      <h2 className="text-2xl font-semibold">Snitch</h2>
      <div className="flex items-center justify-center gap-5">
        <Link href={"/"}>Home</Link>
        <Link href={"/about"}>About</Link>
        <Link href={"/product"}>Products</Link>
        <Link href={"/contact"}>Contact Us</Link>
      </div>
    </div>
  );
};

export default Navbar;
