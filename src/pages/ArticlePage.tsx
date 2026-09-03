import { articles, categoryMeta, type Category } from "@/data/articles";

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

const imageMap: Record<string, string> = {
  img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11,
};

interface Props {
  articleId: number;
  onNavigate: (page: string, opts?: { category?: Category; articleId?: number }) => void;
}

export default function ArticlePage({ articleId, onNavigate }: Props) {
  const article = articles.find((a) => a.id === articleId) ?? articles[0];
  const related = articles
    .filter((a) => a.category === article.category && a.id !== article.id)
    .slice(0, 3);
  const paragraphs = article.content.trim().split("\n\n").filter(Boolean);

  return (
    <main className="bg-white">
      {/* Back breadcrumb */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-20 pt-8">
        <div className="flex items-center gap-2 text-sm font-['Inter:Regular',sans-serif] text-[#707070]">
          <button onClick={() => onNavigate("home")} className="hover:text-[#c81e1e] transition-colors">
            Home
          </button>
          <svg width="6" height="10" fill="none" viewBox="0 0 7 12">
            <path d="M1 11l5-5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <button
            onClick={() => onNavigate("category", { category: article.category })}
            className="hover:text-[#c81e1e] transition-colors"
          >
            {categoryMeta[article.category].label}
          </button>
          <svg width="6" height="10" fill="none" viewBox="0 0 7 12">
            <path d="M1 11l5-5L1 1" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <span className="text-[#212121] line-clamp-1 max-w-[260px]">{article.title}</span>
        </div>
      </div>

      {/* Article header */}
      <section className="max-w-[800px] mx-auto px-6 pt-10 pb-8 text-center">
        <p className="text-[#c81e1e] text-[11px] font-semibold tracking-[2px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-4">
          {article.categoryLabel}
        </p>
        <h1 className="font-['DM_Serif_Display:Regular',sans-serif] text-3xl lg:text-[50px] leading-[1.1] text-[#212121] tracking-[-1.2px] mb-6">
          {article.title}
        </h1>
        <p className="font-['Inter:Regular',sans-serif] text-[#3a3a3a] text-lg leading-[1.6] mb-8">
          {article.excerpt}
        </p>
        <div className="flex items-center justify-center gap-4 text-[#707070] text-sm font-['Inter:Regular',sans-serif]">
          <span className="font-['Manrope:Regular',sans-serif] text-[#212121] font-medium">{article.author}</span>
          <span>·</span>
          <span>{article.date}</span>
          <span>·</span>
          <div className="flex items-center gap-1.5">
            <svg width="13" height="13" fill="none" viewBox="0 0 14 14">
              <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
              <path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </svg>
            <span>{article.readTime}</span>
          </div>
        </div>
      </section>

      {/* Hero image */}
      <div className="max-w-[1200px] mx-auto px-6 lg:px-10 mb-12">
        <div className="rounded-2xl overflow-hidden aspect-[16/8]">
          <img
            src={imageMap[article.image]}
            alt={article.title}
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Article content */}
      <article className="max-w-[740px] mx-auto px-6 pb-16">
        {paragraphs.map((para, i) => {
          if (para.startsWith('"') || para.startsWith("“")) {
            return (
              <blockquote
                key={i}
                className="my-10 pl-6 border-l-4 border-[#c81e1e]"
              >
                <p className="font-['Merriweather:Italic',serif] italic text-[22px] leading-[1.6] text-[#212121]">
                  {para}
                </p>
              </blockquote>
            );
          }
          return (
            <p
              key={i}
              className="font-['Inter:Regular',sans-serif] text-[18px] leading-[1.75] text-[#2a2a2a] mb-6"
            >
              {para}
            </p>
          );
        })}
      </article>

      {/* Tags */}
      <div className="max-w-[740px] mx-auto px-6 pb-12">
        <div className="border-t border-gray-100 pt-8 flex flex-wrap gap-2">
          {["Imam Hussain", "Karbala", "Justice", "Sacrifice", "Islamic History"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-gray-200 text-[#3a3a3a] font-['Manrope:Regular',sans-serif] text-sm hover:border-[#c81e1e] hover:text-[#c81e1e] cursor-pointer transition-colors"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Related articles */}
      {related.length > 0 && (
        <section className="bg-[#faf9f5] py-14">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
            <p className="text-[#c81e1e] text-[11px] font-semibold tracking-[2px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-2">
              RELATED ARTICLES
            </p>
            <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-3xl text-[#212121] mb-10 tracking-[-0.5px]">
              Continue Reading
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {related.map((a) => (
                <button
                  key={a.id}
                  onClick={() => onNavigate("article", { articleId: a.id })}
                  className="text-left group"
                >
                  <div className="rounded-2xl overflow-hidden aspect-[3/2] mb-4">
                    <img
                      src={imageMap[a.image]}
                      alt={a.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <p className="text-[#c81e1e] text-[11px] font-semibold tracking-[1.4px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-2">
                    {a.categoryLabel}
                  </p>
                  <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-[22px] leading-[1.25] text-[#212121] tracking-[-0.3px] group-hover:text-[#c81e1e] transition-colors mb-2">
                    {a.title}
                  </h3>
                  <div className="flex items-center gap-2 text-[#707070] text-xs font-['Inter:Regular',sans-serif]">
                    <svg width="12" height="12" fill="none" viewBox="0 0 14 14">
                      <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
                      <path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                    </svg>
                    <span>{a.readTime}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  );
}
