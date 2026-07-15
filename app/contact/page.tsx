import type { Metadata } from "next";
import { Camera, Clock3, Mail, MapPin, Phone } from "lucide-react";
import { Header } from "@/src/components/header";
import { Footer } from "@/src/components/footer";
import { ContactForm } from "@/src/components/contact-form";
import { store } from "@/src/data/store";
export const metadata: Metadata = { title: "ติดต่อเรา" };
export default function ContactPage() { return <><Header/><main><section className="page-hero contact-page-hero"><div className="shell"><span className="eyebrow">SAY HELLO</span><h1>Let’s talk <em>ice cream!</em></h1><p>คำถาม งานจัดเลี้ยง หรือแค่อยากทักทาย—ส่งข้อความมาได้เลย</p></div></section><section className="section"><div className="shell contact-grid"><div className="contact-info"><h2>Come find us</h2><div className="contact-item"><MapPin/><p><b>ที่อยู่</b><br/>{store.addressLines.join(" ")}</p></div><div className="contact-item"><Clock3/><p><b>เวลาเปิด</b><br/>{store.hours}</p></div><a className="contact-item" href={store.phoneHref}><Phone/><p><b>โทร</b><br/>{store.phone}</p></a><a className="contact-item" href={`mailto:${store.email}`}><Mail/><p><b>อีเมล</b><br/>{store.email}</p></a><a className="contact-item" href={store.instagram} target="_blank" rel="noreferrer"><Camera/><p><b>Instagram</b><br/>{store.instagramHandle}</p></a><a className="button button-dark" href={store.maps} target="_blank" rel="noreferrer">เปิด Google Maps ↗</a></div><div><h2>Drop us a note</h2><ContactForm/></div></div></section></main><Footer/></>; }
