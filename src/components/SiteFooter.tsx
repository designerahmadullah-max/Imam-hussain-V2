import logoWhite from "@/imports/Logo-White.png";
import { type Category } from "@/data/articles";

const navCols: { title: string; chapter: string; category: Category; links: string[] }[] = [
  {
    title: "Imam Hussain (A.S.)",
    chapter: "CHAPTER 01",
    category: "imam-hussain",
    links: ["Biography", "Family & Lineage", "Companions", "Teachings & Letters", "Life & Legacy"],
  },
  {
    title: "Karbala & Muharram",
    chapter: "CHAPTER 02–03",
    category: "karbala",
    links: ["Battle of Karbala", "Events of Karbala", "Martyrs of Karbala", "Ashura", "Arbaeen"],
  },
  {
    title: "Teachings & Lessons",
    chapter: "CHAPTER 05",
    category: "lessons",
    links: ["Moral Lessons", "Quotes", "Justice & Freedom", "Patience & Faith", "Humanity & Peace"],
  },
];

export default function SiteFooter({ onNavigate }: { onNavigate?: (page: string, opts?: { category?: Category; articleId?: number }) => void }) {
  return (
    <footer className="bg-[#212121] relative overflow-hidden">
      {/* Red arc behind logo */}
      <div className="absolute top-0 left-0 w-[19%] h-[60%] bg-[#c81e1e] rounded-br-[280px] rounded-bl-[280px]" />
      {/* Ghost watermark */}
      <div className="absolute left-[6.5%] top-[14%] opacity-10 pointer-events-none">
        <svg width="91" height="135" viewBox="0 0 91 135" fill="none">
          <path d="M45.5 0C20.4 0 0 20.4 0 45.5v44.7L45.5 135l45.5-44.8V45.5C91 20.4 70.6 0 45.5 0z" fill="white" />
          <path d="M45.5 30a6 6 0 1 0 0-12 6 6 0 0 0 0 12z" fill="white" />
        </svg>
      </div>

      <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-16 pt-12 pb-8">
        <div className="grid lg:grid-cols-[240px_1fr] gap-10 lg:gap-20 items-start">

          {/* ── LEFT: Logo only ── */}
          <div className="flex flex-col items-center lg:items-start pt-2">
            <button onClick={() => onNavigate?.("home")}>
              <img src={logoWhite} alt="Imam Hussain" className="h-28 w-auto" />
            </button>
          </div>

          {/* ── RIGHT: 3 Navigation columns, no bullet icons ── */}
          <div className="grid sm:grid-cols-3 gap-8">
            {navCols.map((col) => (
              <div key={col.title}>
                <p className="text-[#c81e1e] text-[10px] font-semibold tracking-[1.5px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-0.5">
                  {col.chapter}
                </p>
                <h4 className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-[20px] mb-4">
                  {col.title}
                </h4>
                <ul className="space-y-2">
                  {col.links.map((link) => (
                    <li key={link}>
                      <button
                        onClick={() => onNavigate?.("category", { category: col.category })}
                        className="font-['Manrope:Regular',sans-serif] text-white/70 text-[15px] hover:text-white transition-colors leading-relaxed text-left w-full"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-[#c81e1e] flex items-center justify-center shrink-0">
              <svg width="20" height="14" fill="none" viewBox="0 0 20 14">
                <path d="M1 1l9 6 9-6M1 1h18v12H1z" stroke="white" strokeWidth="1.5" strokeLinejoin="round" />
              </svg>
            </div>
            <span className="font-['Manrope:Light',sans-serif] font-light text-white text-lg tracking-[-0.3px]">info@imam-hussain.info</span>
          </div>

          <div className="flex items-center gap-3">
            {[
              <svg key="fb" width="10" height="20" fill="white" viewBox="0 0 10 20"><path d="M6.5 11.5H9l.5-3H6.5V7c0-.8.4-1.5 1.6-1.5H9.5V2.8S8.3 2.5 7.2 2.5C4.7 2.5 3 4 3 6.7v1.8H.5v3H3V20h3.5V11.5z" /></svg>,
              <svg key="ig" width="18" height="18" fill="none" viewBox="0 0 18 18"><rect x="2" y="2" width="14" height="14" rx="4" stroke="white" strokeWidth="1.5" /><circle cx="9" cy="9" r="3" stroke="white" strokeWidth="1.5" /><circle cx="13" cy="5" r="1" fill="white" /></svg>,
              <svg key="x" width="16" height="16" fill="white" viewBox="0 0 16 16"><path d="M9.27 7.06L14.64 1H13.3L8.67 6.24 5.01 1H1l5.64 7.9L1 15h1.34l4.93-5.57L11 15h4.01L9.27 7.06zM7.96 8.66l-.57-.79L2.76 1.96h1.96l3.68 5.14.57.79 4.78 6.67h-1.96L7.96 8.66z" /></svg>,
            ].map((icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-white/25 flex items-center justify-center hover:border-[#c81e1e] transition-colors">
                {icon}
              </a>
            ))}
          </div>

          <p className="font-['Manrope:Regular',sans-serif] text-white/60 text-sm text-center">
            Copyright © 2026 - imam-hussain.info · All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
