import heroDesktop from "@/imports/Hero-img.jpg";
import heroMobile from "@/imports/hero-image-mobile.png";
import arrowRight from "@/imports/arrow-right.png";

import img1 from "@/imports/ImamHussainHome3/bf887cdd2cfba14f1c42cf0f1ce90a2d2623928c.png";
import img2 from "@/imports/ImamHussainHome3/af39a77ebdfab3d4e24d599cbae13bbe4c673bc8.png";
import img3 from "@/imports/ImamHussainHome3/99ae80e74157b4610acab2e3eb330ed7f7c98125.png";
import img4 from "@/imports/ImamHussainHome3/a61d19a5c7c8e6d349f2a14089e10a7ce01825dc.png";
import img5 from "@/imports/ImamHussainHome3/928e3a14f89a4f8d9a2444ff8bad94f6120f32f8.png";
import img6 from "@/imports/ImamHussainHome3/64afabda57a5535796660cbb3f492fafee0f77bd.png";
import img7 from "@/imports/ImamHussainHome3/5de8105ca7da4772ad5fda3db2262f90b12525e1.png";
import img8 from "@/imports/ImamHussainHome3/50bed3b2cf89b2df82806de477f4f744097881e6.png";
import img9 from "@/imports/ImamHussainHome3/4100d46915bb356063fffb5ea5bee7f8e947e3cd.png";
import img10 from "@/imports/ImamHussainHome3/40c9d2dbbaf141714e8b367c34196c6ef0d2a875.png";
import img11 from "@/imports/ImamHussainHome3/0d88dd0ad2ea613131f06bfca72f00811f379b85.png";
import karbalaImg1 from "@/imports/ImamHussainHome3/a90494661adcd34c73e554ce3b8fad3170b10e49.png";

import { type Category } from "@/data/articles";

type Page = "home" | "category" | "article";

const topics: { label: string; desc: string; key: Category }[] = [
  { label: "Imam Hussain", desc: "Life & Legacy", key: "imam-hussain" },
  { label: "Muharram", desc: "Events & Remembrance", key: "muharram" },
  { label: "Karbala", desc: "History & Sacrifice", key: "karbala" },
  { label: "Arbaeen", desc: "Journey of Love", key: "arbaeen" },
  { label: "Ziyarat", desc: "Shrine & Devotion", key: "ziarat" },
  { label: "Companions", desc: "Loyalty & Sacrifice", key: "companions" },
  { label: "Lessons", desc: "Wisdom & Guidance", key: "lessons" },
  { label: "Resources", desc: "Books & Lectures", key: "resources" },
];

const featuredMain = {
  category: "KARBALA",
  title: "The Battle of Karbala: What Happened and Why It Matters",
  excerpt: "Imam Hussain (A.S) is the eternal symbol of truth, justice, sacrifice and human dignity. His message of courage and principle continues to inspire the world.",
  image: img1,
  time: "5 min read",
};

const featuredThumbs = [
  { category: "KARBALA", title: "Lessons from Karbala: Justice, Sacrifice & Courage", image: img2, time: "5 min read" },
  { category: "KARBALA", title: "Lady Zainab: The Voice of Karbala", image: img3, time: "5 min read" },
  { category: "MUHARRAM", title: "Ashura: The Day That Changed History", image: img4, time: "5 min read" },
  { category: "IMAM HUSSAIN", title: "Imam Hussain's Family and Companions", image: img5, time: "5 min read" },
  { category: "KARBALA", title: "Imam Hussain Shrine: A Spiritual Journey", image: img6, time: "5 min read" },
  { category: "KARBALA", title: "The Companions of Imam Hussain", image: img7, time: "5 min read" },
];

const philosophyStatements = [
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path d="M18 3C9.716 3 3 9.716 3 18s6.716 15 15 15 15-6.716 15-15S26.284 3 18 3z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" />
        <path d="M18 9v9l5 5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: "His love, lives in\nMillions of Hearts.",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path d="M18 4L4 32h28L18 4z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 18v8" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: "He stood alone, so justice\nwould never stand alone.",
  },
  {
    icon: (
      <svg width="36" height="36" fill="none" viewBox="0 0 36 36">
        <path d="M18 6s-9 4.5-9 12.5c0 5.5 4 10 9 10s9-4.5 9-10C27 10.5 18 6 18 6z" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M18 16v5" stroke="rgba(255,255,255,0.6)" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
    text: "He lost everything,\nbut never his honor.",
  },
];

const newArticles = [
  { category: "MUHARRAM", title: "Why Did Imam Hussain Stand Against Yazid?", image: img7 },
  { category: "FAMILY", title: "The Family Tree of Imam Hussain (Ahlul Bayt Lineage)", image: img8 },
  { category: "KARBALA", title: "The Life of Imam Hussain Before Karbala", image: img9 },
  { category: "MUHARRAM", title: "The Night of Ashura: What Happened Before the Battle", image: img10 },
  { category: "LESSONS", title: "Imam Hussain's Letters: Calls for Justice and Reform", image: img11 },
  { category: "ARBAEEN", title: "The March of Arbaeen: The World's Largest Peaceful Gathering", image: img1 },
];

const messageCards = [
  { icon: <svg width="30" height="30" fill="none" viewBox="0 0 30 30"><path d="M15 3C8.373 3 3 8.373 3 15s5.373 12 12 12 12-5.373 12-12S21.627 3 15 3z" stroke="currentColor" strokeWidth="1.5" /><path d="M15 9v6l4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>, heading: "Stand for Justice", desc: "Imam Hussain's stand at Karbala was a timeless lesson in standing up for truth and justice against oppression." },
  { icon: <svg width="30" height="30" fill="none" viewBox="0 0 30 30"><circle cx="15" cy="15" r="10" stroke="currentColor" strokeWidth="1.5" /><path d="M15 5V3M9.5 6.5l-1.5-1.5M6.5 9.5l-1.5-1.5M5 15H3M9.5 23.5l-1.5 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>, heading: "Source of Inspiration", desc: "Billions across history have drawn strength, courage and wisdom from the story of Karbala." },
  { icon: <svg width="30" height="30" fill="none" viewBox="0 0 30 30"><path d="M15 5s-7 3.5-7 10c0 4.4 3.1 8 7 8s7-3.6 7-8c0-6.5-7-10-7-10z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>, heading: "Love & Compassion", desc: "His message of love for humanity transcends borders, faiths and generations." },
  { icon: <svg width="30" height="30" fill="none" viewBox="0 0 30 30"><circle cx="15" cy="15" r="3" stroke="currentColor" strokeWidth="1.5" /><path d="M6 15a9 9 0 0 1 18 0" stroke="currentColor" strokeWidth="1.5" /><path d="M6 15a9 9 0 0 0 18 0" stroke="currentColor" strokeWidth="1.5" /></svg>, heading: "Unity & Brotherhood", desc: "Arbaeen unites millions regardless of nationality or sect in a march of love." },
  { icon: <svg width="30" height="30" fill="none" viewBox="0 0 30 30"><path d="M5 21L15 7l10 14" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /><path d="M9 17h12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>, heading: "Timeless Message", desc: "The principles of Karbala apply as powerfully today as they did in 680 CE." },
  { icon: <svg width="30" height="30" fill="none" viewBox="0 0 30 30"><path d="M4 15h22M15 4v22" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>, heading: "Sacrifice & Dignity", desc: "No wealth, power, or comfort was worth compromising on human dignity and truth." },
];

export default function HomePage({ onNavigate }: { onNavigate?: (page: string, opts?: { category?: Category; articleId?: number }) => void }) {
  return (
    <main>
      {/* ── HERO ── */}
      <section className="relative overflow-hidden min-h-[580px] lg:min-h-[680px] bg-[#0a0a0a]">
        {/* Desktop hero — sharp full image, text overlay on left */}
        <div className="hidden md:block absolute inset-0">
          <img
            src={heroDesktop}
            alt="Imam Hussain Shrine"
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          {/* Only a very subtle dark gradient on the left for text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/30 to-transparent" />
        </div>
        {/* Mobile hero image */}
        <div className="md:hidden absolute inset-0">
          <img src={heroMobile} alt="" className="w-full h-full object-cover object-top" />
          <div className="absolute inset-0 bg-black/50" />
        </div>

        <div className="relative z-10 max-w-[1400px] mx-auto px-6 lg:px-20 pt-14 pb-20 lg:pt-20 lg:pb-28">
          <p className="text-[#e87070] text-[11px] font-semibold tracking-[2px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-4">IMAM HUSSAIN</p>
          <h1 className="font-['DM_Serif_Display:Regular',sans-serif] text-4xl md:text-5xl lg:text-[66px] leading-[1.1] text-white max-w-[560px] tracking-[-1.5px] mb-6">
            The Legacy<br />of Karbala
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-white/80 text-lg max-w-[480px] leading-[1.6] mb-10">
            Imam Hussain (A.S.) is the eternal symbol of truth, justice, sacrifice and human dignity. His stand at Karbala changed the course of history.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={() => onNavigate?.("category", { category: "karbala" })}
              className="bg-[#c81e1e] text-white px-8 py-3.5 rounded-lg font-['Manrope:Regular',sans-serif] text-[15px] hover:bg-[#a31717] transition-colors"
            >
              Explore Articles
            </button>
            <button
              onClick={() => onNavigate?.("category", { category: "imam-hussain" })}
              className="border border-white text-white px-8 py-3.5 rounded-lg font-['Manrope:Regular',sans-serif] text-[15px] hover:bg-white hover:text-[#212121] transition-colors"
            >
              About Imam Hussain
            </button>
          </div>
        </div>
      </section>

      {/* ── EXPLORE BY TOPICS ── */}
      <section className="bg-white border-b border-gray-100 py-8">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <p className="text-[#c81e1e] text-[11px] font-semibold tracking-[2px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-6">EXPLORE BY TOPICS</p>
          <div className="flex items-start gap-0 border-b border-gray-200 overflow-x-auto lg:overflow-visible">
            {topics.map((topic, i) => (
              <button
                key={topic.label}
                onClick={() => onNavigate?.("category", { category: topic.key })}
                className={`flex flex-col items-start px-4 lg:px-5 py-2 border-b-2 group relative transition-all -mb-[2px] shrink-0 lg:flex-1 ${
                  i === 0 ? "border-[#c81e1e]" : "border-transparent hover:border-[#c81e1e]"
                }`}
              >
                <span className={`font-['DM_Serif_Display:Regular',sans-serif] text-[17px] lg:text-[18px] leading-[1.2] tracking-[-0.2px] transition-colors whitespace-nowrap ${
                  i === 0 ? "text-[#c81e1e]" : "text-[#212121] group-hover:text-[#c81e1e]"
                }`}>
                  {topic.label}
                </span>
                <span className="font-['Inter:Regular',sans-serif] text-[12px] text-[#707070] mt-0.5 whitespace-nowrap">
                  {topic.desc}
                </span>
                <span className="mt-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  <img src={arrowRight} alt="" className="w-3.5 h-3.5 object-contain" />
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ── ARTICLE SECTION 1 — large editorial feature ── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-[#c81e1e] text-[11px] font-semibold tracking-[2px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-3">KARBALA</p>
              <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-3xl lg:text-[50px] leading-[1.15] text-[#212121] tracking-[-1px] mb-5">
                The Battle of Karbala:<br className="hidden lg:block" /> What Happened and<br className="hidden lg:block" /> Why It Matters
              </h2>
              <p className="font-['Inter:Regular',sans-serif] text-[#3a3a3a] text-[16px] leading-[1.6] mb-8 max-w-[500px]">
                On the 10th of Muharram, 61 AH, Imam Hussain (A.S.) and 72 companions stood against thousands. Their sacrifice became the eternal symbol of resistance against oppression.
              </p>
              <button
                onClick={() => onNavigate?.("article", { articleId: 1 })}
                className="border border-[#c81e1e] text-[#c81e1e] px-7 py-3 rounded-lg font-['Manrope:Regular',sans-serif] text-[15px] hover:bg-[#c81e1e] hover:text-white transition-colors"
              >
                Read Full Story
              </button>
            </div>
            <div className="rounded-2xl overflow-hidden aspect-[16/10]">
              <img src={img2} alt="The Battle of Karbala" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* ── ARTICLE SECTION 2 — two images + text, 3 equal columns ── */}
      <section className="bg-[#faf9f5] py-14 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="grid lg:grid-cols-3 gap-6 items-start">
            {/* Image 1 */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={img3} alt="" className="w-full h-full object-cover" />
            </div>
            {/* Image 2 */}
            <div className="rounded-2xl overflow-hidden aspect-[4/3]">
              <img src={img4} alt="" className="w-full h-full object-cover" />
            </div>
            {/* Text */}
            <div className="lg:pt-4">
              <p className="text-[#c81e1e] text-[11px] font-semibold tracking-[2px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-3">ARBAEEN</p>
              <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-[28px] lg:text-[36px] leading-[1.2] text-[#212121] tracking-[-0.6px] mb-4">
                20+ Million Walked for <span className="text-[#c81e1e]">Imam Hussain</span>
              </h2>
              <p className="font-['Inter:Regular',sans-serif] text-[#3a3a3a] text-[15px] leading-[1.6] mb-6">
                Experience the Arbaeen Walk, the world's largest annual peaceful pilgrimage, where millions journey to Karbala to honor the sacrifice, love, and legacy of Imam Hussain (AS).
              </p>
              <button className="border border-[#c81e1e] text-[#c81e1e] px-6 py-3 rounded-lg font-['Manrope:Regular',sans-serif] text-[14px] hover:bg-[#c81e1e] hover:text-white transition-colors">
                Read Full Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED ARTICLES ── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <p className="text-[#c81e1e] text-[11px] font-semibold tracking-[2px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-8">FEATURED ARTICLES</p>

          <div className="grid lg:grid-cols-[440px_1fr] gap-8 items-stretch">
            {/* Main featured — 500px height */}
            <div
              className="rounded-2xl overflow-hidden relative cursor-pointer group"
              style={{ height: 500 }}
              onClick={() => onNavigate?.("article", { articleId: 1 })}
            >
              <img
                src={featuredMain.image}
                alt={featuredMain.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#07180e] via-[#07180e]/30 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-7">
                <p className="text-[#c81e1e] text-[11px] font-semibold tracking-[1.4px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-2">{featuredMain.category}</p>
                <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-2xl text-white leading-[1.25] tracking-[-0.4px] mb-3">
                  {featuredMain.title}
                </h3>
                <p className="text-gray-300 font-['Inter:Regular',sans-serif] text-sm leading-relaxed mb-3 line-clamp-2">{featuredMain.excerpt}</p>
                <div className="flex items-center gap-2 text-gray-400 text-xs font-['Inter:Regular',sans-serif]">
                  <svg width="13" height="13" fill="none" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                  <span>{featuredMain.time}</span>
                </div>
              </div>
            </div>

            {/* Thumbnail grid — 2 columns × 3 rows, no gap waste */}
            <div className="grid grid-cols-2 gap-x-6" style={{ gridTemplateRows: "repeat(3, 1fr)", height: 500 }}>
              {featuredThumbs.map((a, i) => (
                <button key={i} onClick={() => onNavigate?.("article", { articleId: i + 2 })} className="flex gap-4 items-center group text-left border-b border-gray-100 last:border-0 py-2">
                  <div className="rounded-xl overflow-hidden shrink-0 w-[110px] h-[84px]">
                    <img src={a.image} alt="" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-[#c81e1e] text-[10px] font-semibold tracking-wider uppercase font-['Inter:Semi_Bold',sans-serif] mb-1">{a.category}</p>
                    <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-[17px] leading-[1.3] text-[#212121] group-hover:text-[#c81e1e] transition-colors line-clamp-2">{a.title}</h3>
                    <div className="flex items-center gap-1.5 mt-1.5 text-[#707070] text-[11px] font-['Inter:Regular',sans-serif]">
                      <svg width="12" height="12" fill="none" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      <span>{a.time}</span>
                    </div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── RED PHILOSOPHY PANEL ── */}
      <section className="bg-[#c81e1e] py-16 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="grid md:grid-cols-3 gap-12 lg:gap-20">
            {philosophyStatements.map((item, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="mb-5">{item.icon}</div>
                <p className="font-['DM_Serif_Display:Regular',sans-serif] text-white text-[26px] lg:text-3xl leading-[1.35] whitespace-pre-line">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── NEW ARTICLES ── */}
      <section className="bg-white py-14 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <p className="text-[11px] font-['Inter:Semi_Bold',sans-serif] font-semibold tracking-[2px] text-[#707070] uppercase mb-2">NEW ARTICLES</p>
          <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-3xl lg:text-4xl text-[#212121] mb-10 tracking-[-0.5px]">Latest from the Archive</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {newArticles.map((a, i) => (
              <article key={i}>
                <button onClick={() => onNavigate?.("article", { articleId: 1 })} className="w-full text-left group">
                  <div className="rounded-2xl overflow-hidden aspect-[3/2] mb-4">
                    <img src={a.image} alt={a.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  </div>
                  <p className="text-[#c81e1e] text-[11px] font-semibold tracking-[1.4px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-2">{a.category}</p>
                  <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-[22px] leading-[1.25] text-[#212121] tracking-[-0.3px] group-hover:text-[#c81e1e] transition-colors mb-2">
                    {a.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#707070] text-xs font-['Inter:Regular',sans-serif]">
                    <svg width="13" height="13" fill="none" viewBox="0 0 14 14"><circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" /><path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                    <span>5 min read</span>
                  </div>
                </button>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY IMAM HUSSAIN'S MESSAGE — centered heading ── */}
      <section className="bg-[#faf9f5] py-14 lg:py-20">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <div className="text-center mb-12">
            <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-3xl lg:text-[46px] leading-[1.15] text-[#212121] tracking-[-0.8px] mb-4">
              Why Imam Hussain's Message<br className="hidden lg:block" /> Still Matters Today
            </h2>
            <p className="font-['Inter:Regular',sans-serif] text-[#3a3a3a] text-[16px] leading-[1.6] max-w-[600px] mx-auto">
              The principles he championed at Karbala resonate across centuries, cultures, and beliefs.
            </p>
          </div>

          <div className="scroll-container overflow-hidden">
            <div className="scroll-track flex gap-5">
              {[...messageCards, ...messageCards].map((card, i) => (
                <div key={i} className="shrink-0 w-72 border border-gray-200 rounded-2xl p-7 bg-white hover:border-[#c81e1e] hover:shadow-md transition-all">
                  <div className="text-[#c81e1e] mb-4">{card.icon}</div>
                  <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-xl text-[#212121] mb-3">{card.heading}</h3>
                  <p className="font-['Inter:Regular',sans-serif] text-[#3a3a3a] text-[14px] leading-[1.6]">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── KARBALA & ZIARAT — full image, text overlaps slightly at bottom ── */}
      <section className="bg-white overflow-hidden">
        {/* Image block — full height, no top crop */}
        <div className="relative h-[420px] lg:h-[520px]">
          <img src={karbalaImg1} alt="Karbala Shrine" className="w-full h-full object-cover object-top" />
          {/* Fade bottom into white for text overlap */}
          <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>

        {/* Text — pulled up to overlap the fade */}
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 -mt-20 pb-6 text-center relative z-10">
          <p className="text-[#c81e1e] text-[11px] font-semibold tracking-[2px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-2">KARBALA & ZIARAT</p>
          <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-3xl lg:text-[50px] leading-[1.1] tracking-[-1px] mb-1">
            <span className="text-[#c81e1e]">Karbala &amp; Ziyarat:</span>
          </h2>
          <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-3xl lg:text-[50px] leading-[1.1] text-[#212121] tracking-[-1px] mb-5">
            A Glimpse of Paradise on Earth
          </h2>
          <p className="font-['Inter:Regular',sans-serif] text-[#3a3a3a] text-lg max-w-[720px] mx-auto leading-[1.6] mb-12">
            For those who visit the shrine of Imam Hussain, the experience feels unlike anything they have ever known — a profound spiritual presence that touches the soul and feels like a glimpse of Paradise.
          </p>
          <div className="grid grid-cols-3 gap-5 max-w-[1100px] mx-auto">
            {[img9, img10, img11].map((img, i) => (
              <div key={i} className="rounded-2xl overflow-hidden aspect-[3/2]">
                <img src={img} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
