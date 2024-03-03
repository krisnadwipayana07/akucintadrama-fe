"use client";

import { SimpleGrid } from "@chakra-ui/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

export default function Navbar() {
  const pathname = usePathname();
  return (
    <SimpleGrid columns={3} spacing={10} className="p-5 bg-black items-center">
      <div className="text-pink-400 font-bold text-2xl">AKUCINTADRAMA</div>
      <div className="text-pink-400 font-bold">search</div>
      <div className="font-bold flex gap-2 justify-end text-white">
        <Link href="/" className={pathname === "/" && "text-pink-400"}>
          HOME
        </Link>
        <Link href="/">DRAMA</Link>
        <Link href="/">FILM</Link>
        <Link href="/">COUNTRY</Link>
        <Link href="/">GENRE</Link>
      </div>
    </SimpleGrid>
  );
}
