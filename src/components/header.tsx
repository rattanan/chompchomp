"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const nav = [
  ["Home", "/"], ["Flavors", "/#flavors"], ["Menu", "/menu"],
  ["About", "/about"], ["Location", "/#location"], ["Contact", "/contact"],
];

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="shell header-inner">
        <Link href="/" className="brand" aria-label="Chomp Chomp Creamery home">
          <span className="brand-mark">CC</span>
          <span><b>CHOMP CHOMP</b><small>CREAMERY</small></span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {nav.map(([label, href]) => <Link key={label} href={href}>{label}</Link>)}
        </nav>
        <Link className="button button-red desktop-visit" href="/#location">Visit us <span>↗</span></Link>
        <button className="menu-button" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="เปิดเมนู">
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && <nav className="mobile-nav" aria-label="Mobile navigation">
        {nav.map(([label, href]) => <Link key={label} href={href} onClick={() => setOpen(false)}>{label}</Link>)}
      </nav>}
    </header>
  );
}

