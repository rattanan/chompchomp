import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Clock3, Heart, IceCreamBowl, Leaf, MapPin, Phone, Sparkles } from "lucide-react";
import { Header } from "@/src/components/header";
import { Footer } from "@/src/components/footer";
import { flavors, instagramPosts } from "@/src/data/flavors";
import { store } from "@/src/data/store";

const perks = [
  [IceCreamBowl, "Homemade Daily", "ปั่นสดทีละแบตช์เล็ก ๆ ทุกวัน"],
  [Leaf, "Real Ingredients", "ผลไม้จริง คั้นจริง รสชาติจริง"],
  [Sparkles, "Fun New Flavors", "รสใหม่หมุนเวียนให้ลองเสมอ"],
  [Heart, "Made for Joy", "ทำทุกสกู๊ปให้เป็นช่วงเวลาดี ๆ"],
] as const;

export default function Home() {
  return <>
    <Header />
    <main>
      <section className="hero">
        <div className="hero-dots" aria-hidden="true" />
        <div className="shell hero-grid">
          <div className="hero-copy reveal">
            <span className="pill"><span>●</span> Open daily · 10:00–21:00</span>
            <p className="eyebrow">HOMEMADE IN CHACHOENGSAO</p>
            <h1>Happiness in<br/><em>Every Scoop!</em></h1>
            <p className="hero-thai">โฮมเมดไอศกรีมแสนอร่อย<br/>ใจกลางตลาดบ้านใหม่ ฉะเชิงเทรา</p>
            <p className="hero-note">Fresh scoops, real ingredients, and happy moments.<br/>Made with a whole lot of chomp!</p>
            <div className="button-row"><Link className="button button-red" href="/menu">ดูเมนูไอศกรีม <ArrowRight size={18}/></Link><a className="button button-cream" href={store.maps} target="_blank" rel="noreferrer"><MapPin size={18}/> เปิดแผนที่ร้าน</a></div>
            <div className="social-proof"><span className="proof-faces">🍓🍦🍫</span><span><b>20K+ ice cream lovers</b><small>ติดตามความอร่อยบน Instagram</small></span></div>
          </div>
          <div className="hero-visual reveal-delay">
            <div className="sunburst" aria-hidden="true" />
            <span className="scribble scribble-one">YUM!</span><span className="scribble scribble-two">100%<small>HAPPY</small></span>
            <div className="hero-photo"><Image src="/images/instagram/post-12.jpg" alt="โคนไอศกรีมสองสกู๊ปของ Chomp Chomp Creamery" fill loading="eager" fetchPriority="high" sizes="(max-width: 800px) 92vw, 48vw" /></div>
            <div className="photo-sticker">2<br/><span>SCOOPS</span></div>
          </div>
        </div>
        <div className="ticker"><div>CHOMP · SCOOP · SMILE · REPEAT · CHOMP · SCOOP · SMILE · REPEAT · CHOMP · SCOOP · SMILE · REPEAT ·</div></div>
      </section>

      <section id="flavors" className="section flavors-section">
        <div className="shell">
          <div className="section-heading"><div><span className="eyebrow">THE GOOD STUFF</span><h2>Meet Our Favorite <em>Flavors</em></h2></div><Link href="/menu" className="text-link">ดูเมนูทั้งหมด <ArrowRight size={18}/></Link></div>
          <div className="flavor-grid">{flavors.map((flavor, index) => <article className="flavor-card" key={flavor.name} style={{"--accent": flavor.color} as React.CSSProperties}>
            <div className="flavor-image"><Image src={flavor.image} alt={flavor.thai} fill sizes="(max-width: 700px) 85vw, 30vw"/><span className="badge">{flavor.badge}</span><span className="number">0{index + 1}</span></div>
            <div className="flavor-body"><h3>{flavor.name}</h3><p className="thai-name">{flavor.thai}</p><p>{flavor.note}</p><strong>เริ่มต้น ฿{flavor.price}</strong></div>
          </article>)}</div>
        </div>
      </section>

      <section className="section why-section"><div className="shell why-grid"><div className="why-copy"><span className="eyebrow light">WHY CHOMP CHOMP?</span><h2>Good Mood.<br/><em>Great Ice Cream.</em></h2><p>เราเชื่อว่าไอศกรีมที่ดี เริ่มจากของดี ๆ และคนทำที่สนุกกับสิ่งที่ทำ</p><div className="mini-photo"><Image src="/images/instagram/post-3.jpg" alt="มะนาวสด วัตถุดิบของไอศกรีมผลไม้" fill sizes="260px" /></div></div><div className="perks-grid">{perks.map(([Icon, title, text], i) => <article key={title}><span className="perk-number">0{i+1}</span><Icon/><h3>{title}</h3><p>{text}</p></article>)}</div></div></section>

      <section className="promo-wrap"><div className="shell"><div className="promo"><div className="promo-photo"><Image src="/images/instagram/post-11.jpg" alt="โปรโมชั่น Chomp Chomp Creamery" fill sizes="420px"/></div><div className="promo-copy"><span className="eyebrow">SCOOP · SMILE · REPEAT!</span><h2>ความสุขคูณสอง<br/>เมื่อชวนกันมา <em>Chomp!</em></h2><p>ซื้อ 2 สกู๊ป แล้วทำให้วันนี้แฮปปี้เป็นสองเท่า</p><Link href="/menu" className="button button-dark">View promotions <ArrowRight size={18}/></Link></div><span className="promo-burst">2X<br/><small>HAPPY</small></span></div></div></section>

      <section className="section instagram-section"><div className="shell"><div className="section-heading"><div><span className="eyebrow">FRESH FROM THE FEED</span><h2>Follow Our <em>Sweet Moments</em></h2></div><a className="button button-outline" href={store.instagram} target="_blank" rel="noreferrer"><Camera size={18}/> {store.instagramHandle}</a></div><div className="instagram-grid">{instagramPosts.map((post, i) => <a href={post.href} target="_blank" rel="noreferrer" key={post.image} className={`ig-${i+1}`}><Image src={post.image} alt={post.alt} fill sizes="(max-width: 700px) 50vw, 25vw"/><span><Camera/>View post</span></a>)}</div></div></section>

      <section className="section about-home"><div className="shell about-grid"><div className="about-collage"><div className="about-photo-main"><Image src="/images/instagram/post-8.jpg" alt="ขนมโฮมเมดจาก Chomp Chomp Creamery" fill sizes="50vw"/></div><div className="about-photo-small"><Image src="/images/instagram/post-7.jpg" alt="ขนมปังโฮมเมดอบใหม่" fill sizes="280px"/></div><span className="round-stamp">MADE WITH LOVE · แปดริ้ว ·</span></div><div className="about-copy"><span className="eyebrow">OUR LITTLE STORY</span><h2>Made with Love<br/>in <em>Chachoengsao</em></h2><p>Chomp Chomp Creamery คือร้านไอศกรีมเล็ก ๆ ที่ตั้งใจสร้างรสชาติและช่วงเวลาดี ๆ ให้กับทุกคน</p><p>ไม่ว่าจะมากับครอบครัว เพื่อน หรือคนพิเศษ เราอยากให้ทุก scoop เป็นความทรงจำที่มีความสุข</p><Link href="/about" className="text-link">อ่านเรื่องของเรา <ArrowRight size={18}/></Link></div></div></section>

      <section id="location" className="location-section"><div className="shell location-card"><div className="map-visual"><div className="map-grid"/><div className="map-pin"><span>CC</span><small>YOU FOUND US!</small></div></div><div className="location-copy"><span className="eyebrow light">COME CHOMP WITH US</span><h2>Your happy place<br/>is right <em>here.</em></h2><div className="info-line"><MapPin/><p><b>{store.name}</b><br/>{store.addressLines.join(" · ")}</p></div><div className="info-line"><Clock3/><p><b>เวลาเปิด</b><br/>{store.hours}</p></div><div className="info-line"><Phone/><p><b>โทรหาเรา</b><br/>{store.phone}</p></div><div className="button-row"><a href={store.maps} target="_blank" rel="noreferrer" className="button button-cream">Get directions <ArrowRight size={18}/></a><a href={store.phoneHref} className="button button-outline-light">Call now</a></div></div></div></section>
    
    <script src="https://line.rattanan.dev/embed/chat-widget.js" data-tenant-id="10" data-bot-name="Chomp Chomp Girl" data-theme-color="#2563EB" data-greeting-message="Hello! How can I help you today?" data-logo-url=""></script>
    </main>
    <Footer />
  </>;
}
