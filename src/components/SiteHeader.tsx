import { useState, useRef, useEffect } from "react";
import logoImg from "@/imports/Imam-Hussain-Logo-Final.png";
import { articles, categoryMeta, type Category } from "@/data/articles";

type Page = "home" | "category" | "article";

const navItems: { label: string; chapter: string; key: Category }[] = [
  { label: "Imam Hussain", chapter: "01", key: "imam-hussain" },
  { label: "Muharram",     chapter: "02", key: "muharram" },
  { label: "Karbala",      chapter: "03", key: "karbala" },
  { label: "Companions",   chapter: "04", key: "companions" },
  { label: "Arbaeen",      chapter: "05", key: "arbaeen" },
  { label: "Ziarat",       chapter: "06", key: "ziarat" },
  { label: "Lessons",      chapter: "07", key: "lessons" },
  { label: "Resources",    chapter: "08", key: "resources" },
];

const leftNav = navItems.slice(0, 4);
const rightNav = navItems.slice(4);

interface Props {
  activePage?: Page;
  activeCategory?: Category;
  onNavigate: (page: string, opts?: { category?: Category; articleId?: number }) => void;
}

export default function SiteHeader({ activePage, activeCategory, onNavigate }: Props) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (searchOpen) setTimeout(() => searchInputRef.current?.focus(), 50);
    else { setSearchQuery(""); }
  }, [searchOpen]);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => { if (e.key === "Escape") setSearchOpen(false); };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  const mockResults = searchQuery.trim().length > 1
    ? articles
        .filter(
          (a) =>
            a.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            a.categoryLabel.toLowerCase().includes(searchQuery.toLowerCase())
        )
        .slice(0, 5)
    : [];

  return (
    <>
      {/* Full-screen search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 bg-white z-[200] flex flex-col">
          <div className="flex items-center justify-between px-8 lg:px-16 py-5 border-b border-gray-100">
            <img src={logoImg} alt="Imam Hussain" className="h-12 w-auto" />
            <button
              onClick={() => setSearchOpen(false)}
              className="flex items-center gap-2 text-[#212121] font-['Inter:Regular',sans-serif] text-sm hover:text-[#c81e1e] transition-colors"
            >
              <span>Cancel</span>
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
              </svg>
            </button>
          </div>

          <div className="px-8 lg:px-16 pt-12 pb-6">
            <div className="max-w-[800px] mx-auto">
              <div className="flex items-center gap-4 border-b-2 border-[#212121] pb-4">
                <svg width="28" height="28" fill="none" viewBox="0 0 28 28" className="text-[#707070] shrink-0">
                  <path d="M24.5 24.5l-5.833-5.833M21.583 12.833a8.75 8.75 0 1 1-17.5 0 8.75 8.75 0 0 1 17.5 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                <input
                  ref={searchInputRef}
                  type="text"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && mockResults[0]) {
                      setSearchOpen(false);
                      onNavigate("article", { articleId: mockResults[0].id });
                    }
                  }}
                  placeholder="Search articles, topics…"
                  className="flex-1 text-3xl lg:text-4xl font-['DM_Serif_Display:Regular',sans-serif] text-[#212121] placeholder-gray-300 outline-none bg-transparent"
                />
                {searchQuery && (
                  <button onClick={() => setSearchQuery("")} className="text-[#707070] hover:text-[#212121]">
                    <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                      <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                    </svg>
                  </button>
                )}
              </div>
              {!searchQuery && (
                <div className="mt-8">
                  <p className="text-[#707070] font-['Inter:Regular',sans-serif] text-sm uppercase tracking-widest mb-4">Popular searches</p>
                  <div className="flex flex-wrap gap-3">
                    {["Battle of Karbala", "Imam Hussain", "Ashura", "Arbaeen", "Zainab", "Companions"].map((t) => (
                      <button
                        key={t}
                        onClick={() => setSearchQuery(t)}
                        className="px-4 py-2 border border-gray-200 rounded-full text-[#212121] font-['Manrope:Regular',sans-serif] text-sm hover:border-[#c81e1e] hover:text-[#c81e1e] transition-colors"
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>

          {searchQuery.trim().length > 1 && (
            <div className="flex-1 overflow-y-auto px-8 lg:px-16 pb-12">
              <div className="max-w-[800px] mx-auto">
                {mockResults.length > 0 ? (
                  <>
                    <p className="text-[#707070] font-['Inter:Regular',sans-serif] text-sm mb-6">
                      {mockResults.length} result{mockResults.length !== 1 ? "s" : ""} for "<span className="text-[#212121]">{searchQuery}</span>"
                    </p>
                    <div className="divide-y divide-gray-100">
                      {mockResults.map((r) => (
                        <button
                          key={r.id}
                          onClick={() => { setSearchOpen(false); onNavigate("article", { articleId: r.id }); }}
                          className="w-full text-left py-5 group"
                        >
                          <p className="text-[#c81e1e] text-[11px] font-semibold tracking-widest uppercase font-['Inter:Semi_Bold',sans-serif] mb-1">{r.categoryLabel}</p>
                          <p className="font-['DM_Serif_Display:Regular',sans-serif] text-2xl text-[#212121] group-hover:text-[#c81e1e] transition-colors mb-1">{r.title}</p>
                          <p className="text-[#707070] font-['Inter:Regular',sans-serif] text-sm">{r.readTime}</p>
                        </button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="py-16 text-center">
                    <p className="font-['DM_Serif_Display:Regular',sans-serif] text-2xl text-[#212121] mb-2">No results found</p>
                    <p className="text-[#707070] font-['Inter:Regular',sans-serif]">Try a different search term</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      )}

      <header className="relative bg-white z-50 shadow-[0_1px_0_0_rgba(0,0,0,0.06)]">
        {/* Desktop header — equal flex halves around centred logo */}
        <div className="hidden lg:flex items-stretch min-h-[110px]">
          {/* Left nav — flex-1, justify-end so items hug the logo */}
          <div className="flex flex-col flex-1">
            <div className="h-2 bg-[#c81e1e] rounded-br-[100px]" />
            <nav className="flex items-center justify-end pr-6 py-3 flex-1 gap-3">
              {leftNav.map((item) => (
                <NavButton
                  key={item.key}
                  item={item}
                  isActive={activePage === "category" && activeCategory === item.key}
                  onNavigate={onNavigate}
                />
              ))}
            </nav>
          </div>

          {/* Center logo */}
          <div className="flex items-start justify-center pt-2 px-8 shrink-0">
            <button onClick={() => onNavigate("home")} className="focus:outline-none">
              <img src={logoImg} alt="Imam Hussain" className="h-[90px] w-auto" />
            </button>
          </div>

          {/* Right nav — flex-1, justify-start so items hug the logo */}
          <div className="flex flex-col flex-1">
            <div className="h-2 bg-[#c81e1e] rounded-bl-[100px]" />
            <nav className="flex items-center justify-start pl-6 py-3 flex-1 gap-3">
              {rightNav.map((item) => (
                <NavButton
                  key={item.key}
                  item={item}
                  isActive={activePage === "category" && activeCategory === item.key}
                  onNavigate={onNavigate}
                />
              ))}
              <button
                onClick={() => setSearchOpen(true)}
                className="ml-2 p-2 text-[#212121] hover:text-[#c81e1e] transition-colors"
                aria-label="Search"
              >
                <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                  <path d="M17.5 17.5l-4.167-4.167M15.833 9.167A6.667 6.667 0 1 1 2.5 9.167a6.667 6.667 0 0 1 13.333 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            </nav>
          </div>
        </div>

        {/* Mobile header */}
        <div className="lg:hidden flex items-center justify-between px-5 py-3">
          <button onClick={() => onNavigate("home")}>
            <img src={logoImg} alt="Imam Hussain" className="h-14 w-auto" />
          </button>
          <div className="flex items-center gap-3">
            <button onClick={() => setSearchOpen(true)} className="text-[#212121]" aria-label="Search">
              <svg width="20" height="20" fill="none" viewBox="0 0 20 20">
                <path d="M17.5 17.5l-4.167-4.167M15.833 9.167A6.667 6.667 0 1 1 2.5 9.167a6.667 6.667 0 0 1 13.333 0Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button onClick={() => setMobileOpen(!mobileOpen)} className="text-[#212121]" aria-label="Menu">
              {mobileOpen ? (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              ) : (
                <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><path d="M3 12h18M3 6h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" /></svg>
              )}
            </button>
          </div>
        </div>

        {mobileOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 px-5 py-4">
            {navItems.map((item) => (
              <button
                key={item.key}
                onClick={() => { onNavigate("category", { category: item.key }); setMobileOpen(false); }}
                className="w-full flex items-center justify-between py-3 border-b border-gray-100 text-left"
              >
                <span>
                  <span className="block text-[10px] font-semibold tracking-widest text-[#c81e1e] uppercase font-['Inter:Semi_Bold',sans-serif]">CH. {item.chapter}</span>
                  <span className="block text-lg font-['DM_Serif_Display:Regular',sans-serif] text-[#212121]">{item.label}</span>
                </span>
                <svg width="6" height="10" fill="none" viewBox="0 0 7 12">
                  <path d="M1 11l5-5L1 1" stroke="#c81e1e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </button>
            ))}
          </div>
        )}
      </header>
    </>
  );
}

function NavButton({
  item,
  isActive,
  onNavigate,
}: {
  item: { label: string; chapter: string; key: Category };
  isActive: boolean;
  onNavigate: (page: string, opts?: { category?: Category; articleId?: number }) => void;
}) {
  return (
    <button
      onClick={() => onNavigate("category", { category: item.key })}
      className="flex flex-col items-start px-3 py-2 focus:outline-none relative group"
    >
      <span className="text-[10px] font-semibold tracking-widest uppercase font-['Inter:Semi_Bold',sans-serif] text-[#c81e1e]">
        {item.chapter}
      </span>
      <span
        className={`text-[17px] font-['DM_Serif_Display:Regular',sans-serif] transition-colors whitespace-nowrap ${
          isActive ? "text-[#c81e1e]" : "text-[#212121] group-hover:text-[#c81e1e]"
        }`}
      >
        {item.label}
      </span>
      <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-[#c81e1e] origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-200" />
    </button>
  );
}
