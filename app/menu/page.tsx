import type { Metadata } from "next";
import { Header } from "@/src/components/header";
import { Footer } from "@/src/components/footer";
import { MenuExplorer } from "@/src/components/menu-explorer";
export const metadata: Metadata = { title: "เมนูไอศกรีม" };
export default function MenuPage() { return <><Header/><main><section className="page-hero menu-page-hero"><div className="shell"><span className="eyebrow">PICK YOUR HAPPY</span><h1>Our Chomp <em>Menu</em></h1><p>เลือกสกู๊ปที่ใช่ แล้วปล่อยให้ความสุขละลายช้า ๆ</p></div></section><section className="section"><div className="shell"><MenuExplorer/></div></section></main><Footer/></>; }

