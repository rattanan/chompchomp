"use client";
import { FormEvent, useState } from "react";
import { CheckCircle2 } from "lucide-react";

export function ContactForm() {
  const [sent, setSent] = useState(false);
  function submit(e: FormEvent<HTMLFormElement>) { e.preventDefault(); setSent(true); }
  if (sent) return <div className="form-success"><CheckCircle2 size={42}/><h2>ส่งข้อความแล้ว!</h2><p>ขอบคุณที่ทักมานะ เราจะติดต่อกลับเร็วที่สุด</p></div>;
  return <form className="contact-form" onSubmit={submit}>
    <label>ชื่อ<input required name="name" placeholder="ชื่อของคุณ" /></label>
    <label>เบอร์โทร<input required name="phone" type="tel" placeholder="08x-xxx-xxxx" /></label>
    <label>อีเมล<input required name="email" type="email" placeholder="hello@example.com" /></label>
    <label className="full">ข้อความ<textarea required name="message" rows={5} placeholder="อยากสอบถามอะไร บอกเราได้เลย..." /></label>
    <button className="button button-red full" type="submit">ส่งข้อความ</button>
  </form>;
}

