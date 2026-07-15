import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"),
  title: { default: "Chomp Chomp Creamery | Homemade Ice Cream in Chachoengsao", template: "%s | Chomp Chomp Creamery" },
  description: "ร้านไอศกรีมโฮมเมดที่ตลาดบ้านใหม่ จังหวัดฉะเชิงเทรา เปิดทุกวัน 10:00–21:00 น.",
  keywords: ["Chomp Chomp Creamery", "ร้านไอศกรีมฉะเชิงเทรา", "ไอศกรีมตลาดบ้านใหม่", "Chachoengsao ice cream", "homemade ice cream"],
  openGraph: { title: "Chomp Chomp Creamery", description: "Happiness in every scoop — homemade in Chachoengsao.", type: "website", locale: "th_TH", images: ["/images/instagram/post-12.jpg"] },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const jsonLd = { "@context": "https://schema.org", "@type": "IceCreamShop", name: "Chomp Chomp Creamery", telephone: "+66-62-786-2926", email: "chompchomp.creamery@gmail.com", address: { "@type": "PostalAddress", streetAddress: "495/7 และ 495/8 ตลาดบ้านใหม่ ถนนศุภกิจ", addressLocality: "เมืองฉะเชิงเทรา", addressRegion: "ฉะเชิงเทรา", postalCode: "24000", addressCountry: "TH" }, openingHours: "Mo-Su 10:00-21:00", sameAs: ["https://instagram.com/chompchomp.creamery"] };
  return <html lang="th"><body><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />{children}</body></html>;
}
