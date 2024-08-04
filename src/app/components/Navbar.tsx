import Link from "next/link";
import React, { useState } from "react";

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <Link
            href="/Projects"
            className="text-sm font-medium hover:underline underline-offset-4"
            prefetch={false}
          >
            Projects
          </Link>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
