import imamAliLogo from "@/imports/ArticleIndividualPage/de1d2429f1203fedb256c993b850adc2e0c5de83.png";
import imam12Icon from "@/imports/ArticleIndividualPage/f791ab36623936774fff2b815963116256c8b030.png";
import { type Category } from "@/data/articles";

const mostPopular = [
  {
    title: "Imam Hussain (A.S.)",
    category: "imam-hussain" as Category,
    links: ["Biography", "Family & Lineage", "Companions", "Teachings & Letters", "Life & Legacy"],
  },
  {
    title: "Karbala & Muharram",
    category: "karbala" as Category,
    links: ["Battle of Karbala", "Events of Karbala", "Martyrs of Karbala", "Ashura", "Arbaeen"],
  },
  {
    title: "Teachings & Lessons",
    category: "lessons" as Category,
    links: ["Moral Lessons", "Quotes", "Justice & Freedom", "Patience & Faith", "Humanity & Peace"],
  },
];

interface Props {
  onNavigate?: (page: string, opts?: { category?: Category; articleId?: number }) => void;
}

export default function MostPopularSection({ onNavigate }: Props) {
  return (
    <section className="bg-white py-12 lg:py-14">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
        <p className="text-[#c81e1e] text-[11px] font-['Inter:Semi_Bold',sans-serif] font-semibold tracking-widest uppercase mb-8">MOST POPULAR</p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {mostPopular.map((col) => (
            <div key={col.title}>
              <h3 className="font-['Inter:Bold',sans-serif] font-bold text-[#212121] text-[18px] mb-4 tracking-[-0.2px]">{col.title}</h3>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link}>
                    <button
                      onClick={() => onNavigate?.("category", { category: col.category })}
                      className="flex items-center gap-2.5 group w-full text-left"
                    >
                      <svg width="6" height="10" fill="none" viewBox="0 0 7 12" className="shrink-0">
                        <path d="M1 11l5-5L1 1" stroke="#C81E1E" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span className="font-['Manrope:Medium',sans-serif] font-medium text-[#212121] text-[13px] group-hover:text-[#c81e1e] transition-colors leading-relaxed">{link}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Related site banners in the 4th equal column */}
          <div className="flex flex-col gap-3">
            <a href="#" className="flex items-center gap-3.5 border border-[#068f60]/40 bg-[rgba(6,144,96,0.04)] rounded-xl p-4 hover:shadow-md transition-shadow">
              <img src={imamAliLogo} alt="Imam Ali" className="w-11 h-auto shrink-0" />
              <div>
                <p className="font-['DM_Serif_Display:Regular',sans-serif] text-[#212121] text-[18px] leading-[1.2] tracking-[-0.3px]">Imam Ali (A.S)</p>
                <p className="font-['Inter:Regular',sans-serif] text-[#3a3a3a] text-[12px] leading-[1.4] mt-0.5">Discover the life, wisdom and legacy of Imam Ali (A.S.).</p>
              </div>
            </a>
            <a href="#" className="flex items-center gap-3.5 border border-[#c2b56c]/40 bg-[rgba(230,218,148,0.15)] rounded-xl p-4 hover:shadow-md transition-shadow">
              <img src={imam12Icon} alt="Imam Mahdi" className="w-11 h-auto shrink-0" />
              <div>
                <p className="font-['DM_Serif_Display:Regular',sans-serif] text-[#212121] text-[18px] leading-[1.2] tracking-[-0.3px]">Imam Mahdi (A.S)</p>
                <p className="font-['Inter:Regular',sans-serif] text-[#3a3a3a] text-[12px] leading-[1.4] mt-0.5">Discover the life and teachings of Imam Mahdi (A.S.).</p>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
