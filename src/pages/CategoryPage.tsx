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
  category: Category;
  onNavigate: (page: string, opts?: { category?: Category; articleId?: number }) => void;
}

export default function CategoryPage({ category, onNavigate }: Props) {
  const meta = categoryMeta[category];
  const categoryArticles = articles.filter((a) => a.category === category);
  const allCategories = Object.keys(categoryMeta) as Category[];
  const otherCategories = allCategories.filter((c) => c !== category);
  const featured = categoryArticles[0];
  const rest = categoryArticles.slice(1);

  return (
    <main className="bg-white min-h-screen">
      {/* Category hero */}
      <section className="bg-[#faf9f5] border-b border-gray-100">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20 pt-14 pb-12">
          <p className="text-[#c81e1e] text-[11px] font-semibold tracking-[2px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-2">
            {meta.chapter}
          </p>
          <h1 className="font-['DM_Serif_Display:Regular',sans-serif] text-4xl lg:text-[58px] leading-[1.1] text-[#212121] tracking-[-1.5px] mb-4">
            {meta.label}
          </h1>
          <p className="font-['Inter:Regular',sans-serif] text-[#3a3a3a] text-lg max-w-[640px] leading-[1.6]">
            {meta.description}
          </p>

          <div className="flex flex-wrap gap-2 mt-8">
            {allCategories.map((c) => (
              <button
                key={c}
                onClick={() => onNavigate("category", { category: c })}
                className={`px-4 py-1.5 rounded-full text-sm font-['Manrope:Regular',sans-serif] transition-colors border ${
                  c === category
                    ? "bg-[#c81e1e] text-white border-[#c81e1e]"
                    : "border-gray-300 text-[#3a3a3a] hover:border-[#c81e1e] hover:text-[#c81e1e]"
                }`}
              >
                {categoryMeta[c].label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Featured article */}
      {featured && (
        <section className="max-w-[1400px] mx-auto px-6 lg:px-20 py-14">
          <p className="text-[#c81e1e] text-[11px] font-semibold tracking-[2px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-8">
            FEATURED
          </p>
          <button
            onClick={() => onNavigate("article", { articleId: featured.id })}
            className="w-full grid lg:grid-cols-2 gap-10 items-center group text-left"
          >
            <div className="rounded-2xl overflow-hidden aspect-[16/10]">
              <img
                src={imageMap[featured.image]}
                alt={featured.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div>
              <p className="text-[#c81e1e] text-[11px] font-semibold tracking-[1.4px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-3">
                {featured.categoryLabel}
              </p>
              <h2 className="font-['DM_Serif_Display:Regular',sans-serif] text-3xl lg:text-[42px] leading-[1.15] text-[#212121] tracking-[-0.8px] mb-5 group-hover:text-[#c81e1e] transition-colors">
                {featured.title}
              </h2>
              <p className="font-['Inter:Regular',sans-serif] text-[#3a3a3a] text-[16px] leading-[1.6] mb-6">
                {featured.excerpt}
              </p>
              <div className="flex items-center gap-4 flex-wrap">
                <span className="font-['Manrope:Regular',sans-serif] text-[#212121] text-sm">{featured.author}</span>
                <span className="text-[#707070] text-sm">·</span>
                <span className="font-['Inter:Regular',sans-serif] text-[#707070] text-sm">{featured.date}</span>
                <span className="text-[#707070] text-sm">·</span>
                <div className="flex items-center gap-1.5 text-[#707070] text-sm font-['Inter:Regular',sans-serif]">
                  <svg width="13" height="13" fill="none" viewBox="0 0 14 14">
                    <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
                    <path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  <span>{featured.readTime}</span>
                </div>
              </div>
            </div>
          </button>
        </section>
      )}

      {/* Article grid */}
      {rest.length > 0 && (
        <section className="bg-[#faf9f5] py-14">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {rest.map((article) => (
                <article key={article.id}>
                  <button
                    onClick={() => onNavigate("article", { articleId: article.id })}
                    className="w-full text-left group"
                  >
                    <div className="rounded-2xl overflow-hidden aspect-[3/2] mb-4">
                      <img
                        src={imageMap[article.image]}
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                    <p className="text-[#c81e1e] text-[11px] font-semibold tracking-[1.4px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-2">
                      {article.categoryLabel}
                    </p>
                    <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-[22px] leading-[1.25] text-[#212121] tracking-[-0.3px] group-hover:text-[#c81e1e] transition-colors mb-2">
                      {article.title}
                    </h3>
                    <p className="font-['Inter:Regular',sans-serif] text-[#707070] text-sm leading-[1.5] mb-3 line-clamp-2">
                      {article.excerpt}
                    </p>
                    <div className="flex items-center gap-2 text-[#707070] text-xs font-['Inter:Regular',sans-serif]">
                      <svg width="12" height="12" fill="none" viewBox="0 0 14 14">
                        <circle cx="7" cy="7" r="6" stroke="currentColor" strokeWidth="1.5" />
                        <path d="M7 4v3l2 2" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span>{article.readTime}</span>
                      <span className="text-gray-300">·</span>
                      <span>{article.date}</span>
                    </div>
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Explore other categories */}
      <section className="bg-white py-14">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-20">
          <p className="text-[#c81e1e] text-[11px] font-semibold tracking-[2px] uppercase font-['Inter:Semi_Bold',sans-serif] mb-8">
            EXPLORE MORE TOPICS
          </p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {otherCategories.slice(0, 4).map((c) => {
              const count = articles.filter((a) => a.category === c).length;
              return (
                <button
                  key={c}
                  onClick={() => onNavigate("category", { category: c })}
                  className="text-left border border-gray-200 rounded-2xl p-6 hover:border-[#c81e1e] hover:shadow-md transition-all group"
                >
                  <p className="text-[#c81e1e] text-[10px] font-semibold tracking-widest uppercase font-['Inter:Semi_Bold',sans-serif] mb-1">
                    {categoryMeta[c].chapter}
                  </p>
                  <h3 className="font-['DM_Serif_Display:Regular',sans-serif] text-[22px] text-[#212121] group-hover:text-[#c81e1e] transition-colors mb-2">
                    {categoryMeta[c].label}
                  </h3>
                  <p className="font-['Inter:Regular',sans-serif] text-[#707070] text-sm mb-3">
                    {count} article{count !== 1 ? "s" : ""}
                  </p>
                  <span className="text-[#c81e1e] text-xs font-semibold tracking-widest uppercase font-['Inter:Semi_Bold',sans-serif] flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Explore
                    <svg width="14" height="14" fill="none" viewBox="0 0 14 14">
                      <path d="M3 7h8M8 4l3 3-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>
    </main>
  );
}
