# Chomp Chomp Creamery

เว็บไซต์ร้านไอศกรีม Chomp Chomp Creamery สร้างด้วย Next.js 16 App Router,
TypeScript, Tailwind CSS, Lucide Icons และ Framer Motion-ready dependencies.

## Run locally

```bash
npm install
npm run dev
```

เปิด [http://localhost:3000](http://localhost:3000) หรือทดสอบ production ด้วย
`npm run build` และ `npm start`.

## Update store details

- ข้อมูลร้าน ที่อยู่ เวลาเปิด เบอร์โทร และลิงก์ต่าง ๆ: `src/data/store.ts`
- รสชาติหน้าแรก: `src/data/flavors.ts`
- เมนูและราคา: `src/data/menu.ts`

## Images

รูปใน `public/images/instagram/` มาจากโพสต์สาธารณะของบัญชี Instagram
`@chompchomp.creamery` และถูกเก็บในโปรเจกต์เพื่อไม่พึ่ง URL ชั่วคราวของ CDN.
แก้ path รูปได้ใน data files ข้างต้น หรือแทนที่ไฟล์เดิมโดยคงชื่อไฟล์ไว้.

## Google Maps

ปุ่มแผนที่ใช้ Google Maps Search URL ที่กำหนดใน `src/data/store.ts`.
เปลี่ยนค่า `maps` เป็นลิงก์ Place URL ของร้านได้ทันทีเมื่อมีลิงก์ถาวร.
ส่วนแผนที่หน้าแรกเป็นภาพกราฟิกแบบเบาเพื่อให้โหลดเร็ว; หากต้องการ embed ให้ใช้
Google Maps Embed API และเก็บ API key ใน environment variable ฝั่ง server.

## Deploy

รองรับ Vercel โดยตรงผ่านการ import repository และรองรับ Cloud Run ด้วยคำสั่ง
`npm run build` จากนั้นรัน `npm start` โดยตั้งค่า `PORT` ตาม environment.

