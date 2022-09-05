import React from "react";
import { Button, Dropdown, Menu, Space } from "antd";
import Link from "next/link";

function Nav() {
  return (
    <nav className="p-4 bg-[#4C3575] w-full flex justify-between">
      <h1 className="text-3xl font-bold text-[#fff]  inline">MovieOne</h1>
      <div className="flex w-[25%]"></div>
      <ul className="flex text-[#fff] font-semibold">
        <li className="mx-4">
          <Link href="/about">
            <a className="hover:text-2xl">About</a>
          </Link>
        </li>
        <li className="mx-4 text-[#fff] font-semibold">
          <Link href="/">
            <a className="hover:text-2xl">All films</a>
          </Link>
        </li>
        <li className="mx-4 text-[#fff] font-semibold">
          <Link href="/tv">
            <a className="hover:text-2xl">Tv series</a>
          </Link>
        </li>
        <li></li>
      </ul>
    </nav>
  );
}

export default Nav;
