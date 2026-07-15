"use client";
import Image from "next/image";
import { Search } from "lucide-react";
import { useMemo, useState } from "react";
import { menuCategories, menuItems } from "@/src/data/menu";

export function MenuExplorer() {
  const [category, setCategory] = useState<(typeof menuCategories)[number]>("ทั้งหมด");
  const [query, setQuery] = useState("");
  const items = useMemo(() => menuItems.filter(item => (category === "ทั้งหมด" || item.category === category) && `${item.name} ${item.thai}`.toLowerCase().includes(query.toLowerCase())), [category, query]);
  return <>
    <div className="menu-tools">
      <div className="search-box"><Search size={20}/><input value={query} onChange={e => setQuery(e.target.value)} placeholder="ค้นหาเมนู..." aria-label="ค้นหาเมนู" /></div>
      <div className="filter-row">{menuCategories.map(item => <button key={item} onClick={() => setCategory(item)} className={category === item ? "active" : ""}>{item}</button>)}</div>
    </div>
    <div className="menu-grid">{items.map(item => <article className="menu-card" key={item.name}>
      <div className="menu-card-image"><Image src={item.image} alt={item.thai} fill sizes="(max-width: 700px) 100vw, 33vw" />{item.featured && <span className="badge">แนะนำ</span>}</div>
      <div className="menu-card-body"><span className="eyebrow">{item.category}</span><h2>{item.name}</h2><h3>{item.thai}</h3><p>{item.description}</p><div><small>สารก่อภูมิแพ้: {item.allergen}</small><strong>฿{item.price}</strong></div></div>
    </article>)}</div>
    {!items.length && <p className="empty-state">ยังไม่พบเมนูที่ค้นหา ลองคำอื่นดูนะ 🍨</p>}
  </>;
}

