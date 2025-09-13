"use client";
import Link from "next/link";
import { useParams } from "next/navigation";
import React from "react";

const page = () => {
  const { category } = useParams();

  return (
    <div>
      <h1 className="capitalize">{category}'s Category</h1>
      <div className="flex items-center gap-8">
        <Link href={"/product/category/product1"}>Product 1</Link>
        <Link href={"/product/category/product2"}>Product 2</Link>
        <Link href={"/product/category/product3"}>Product 3</Link>
      </div>
    </div>
  );
};

export default page;
