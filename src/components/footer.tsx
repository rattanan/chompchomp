import Link from "next/link";
import { Camera, Mail, MapPin, Phone } from "lucide-react";
import { store } from "@/src/data/store";

export function Footer() {
  return <footer className="footer">
    <div className="shell footer-grid">
      <div><div className="brand brand-footer"><span className="brand-mark">CC</span><span><b>CHOMP CHOMP</b><small>CREAMERY</small></span></div><p>ไอศกรีมสำหรับคนรักไอศกรีม<br/>Crafted by ice cream fanatics.</p></div>
      <div><h3>Come say hi!</h3><p><MapPin size={17}/>{store.addressLines[0]}<br/>{store.addressLines[1]}</p><p>{store.hours}</p></div>
      <div><h3>Keep in touch</h3><a href={store.phoneHref}><Phone size={17}/>{store.phone}</a><a href={`mailto:${store.email}`}><Mail size={17}/>{store.email}</a><a href={store.instagram} target="_blank" rel="noreferrer"><Camera size={17}/>{store.instagramHandle}</a></div>
      <div><h3>Explore</h3><Link href="/menu">Menu</Link><Link href="/about">Our story</Link><Link href="/contact">Contact</Link></div>
    </div>
    <div className="shell footer-bottom"><span>© 2026 Chomp Chomp Creamery</span><span>Made with joy in Chachoengsao ♥</span></div>
  </footer>;
}
