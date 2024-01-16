import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main className={`${inter.className}`}>
      <div className="h-screen w-full bg-slate-100"></div>
    </main>
  );
}
