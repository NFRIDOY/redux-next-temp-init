import { logo } from "@/utils/exports/logos";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Navbar = () => {
    const menu = (
        <>
            <li>
                <Link href={"/"}>Home</Link>
            </li>
            <li>
                <Link href={"/categories"}>Categoris</Link>
            </li>
            <li>
                <Link href={"/products"}>Products</Link>
            </li>
        </>
    );
    return (
        <div>
            <div className="navbar bg-base-300">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div
                            tabIndex={0}
                            role="button"
                            className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16"
                                />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            {menu}
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">
                        <Image
                            src={logo}
                            width={50}
                            height={50}
                            alt="Picture of the author"
                        />
                        <span>

                        MeCommerce
                        </span>
                    </a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">{menu}</ul>
                </div>
                <div className="navbar-end">
                    <a className="btn">Login</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
