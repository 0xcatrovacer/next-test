import Link from "next/link";
import React from "react";

function Navbar() {
    return (
        <nav>
            <div className="logo">
                <h1>Notes List</h1>
            </div>
            <Link href="/">
                <a>Home</a>
            </Link>
            <Link href="/about">
                <a>About</a>
            </Link>
            <Link href="/notes">
                <a>Notes</a>
            </Link>
        </nav>
    );
}

export default Navbar;
