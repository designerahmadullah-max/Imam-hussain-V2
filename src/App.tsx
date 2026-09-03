import { useState } from "react";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import MostPopularSection from "@/components/MostPopularSection";
import HomePage from "@/pages/HomePage";
import CategoryPage from "@/pages/CategoryPage";
import ArticlePage from "@/pages/ArticlePage";
import { type Category } from "@/data/articles";

type Page = "home" | "category" | "article";

interface NavState {
  page: Page;
  category: Category;
  articleId: number;
}

export default function App() {
  const [state, setState] = useState<NavState>({
    page: "home",
    category: "imam-hussain",
    articleId: 1,
  });

  const navigate = (page: string, opts?: { category?: Category; articleId?: number }) => {
    setState((prev) => ({
      page: page as Page,
      category: opts?.category ?? prev.category,
      articleId: opts?.articleId ?? prev.articleId,
    }));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="min-h-full flex flex-col bg-white">
      <SiteHeader activePage={state.page} activeCategory={state.category} onNavigate={navigate} />

      {state.page === "home" && (
        <>
          <HomePage onNavigate={navigate} />
          <MostPopularSection onNavigate={navigate} />
        </>
      )}

      {state.page === "category" && (
        <>
          <CategoryPage category={state.category} onNavigate={navigate} />
          <MostPopularSection onNavigate={navigate} />
        </>
      )}

      {state.page === "article" && (
        <>
          <ArticlePage articleId={state.articleId} onNavigate={navigate} />
          <MostPopularSection onNavigate={navigate} />
        </>
      )}

      <SiteFooter onNavigate={navigate} />
    </div>
  );
}
