import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search } from "lucide-react";
import { useState } from "react";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/search/#gsc.tab=0&gsc.q=${encodeURIComponent(searchQuery)}&gsc.sort=`;
    }
  };

  const handleQuickTag = (tag: string) => {
    window.location.href = `/search/#gsc.tab=0&gsc.q=${encodeURIComponent(tag)}&gsc.sort=`;
  };

  const handleTrendingSearch = (search: string) => {
    window.location.href = `/search/#gsc.tab=0&gsc.q=${encodeURIComponent(search)}&gsc.sort=`;
  };

  const quickTags = ["AI", "Web Dev", "Data Science", "Cloud"];
  const categories = [
    { icon: "🔬", label: "Research", description: "Academic papers and studies" },
    { icon: "💡", label: "Ideas", description: "Creative inspiration and concepts" },
    { icon: "📊", label: "Data", description: "Statistics and analytics" },
    { icon: "🎓", label: "Learning", description: "Educational resources" },
  ];
  const trendingSearches = [
    "Artificial Intelligence trends 2025",
    "Web development frameworks",
    "Machine learning tutorials",
    "Cloud computing solutions",
    "Cybersecurity best practices",
  ];

  return (
    <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-100 via-slate-50 to-slate-100">
      {/* Subtle animated background */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-96 h-96 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl animate-pulse" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-4 py-12">
        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center mb-6">
            <img src="/images/mani-logo.png" alt="Mani Search" className="h-16 w-auto" />
          </div>
          <h1 className="font-display text-5xl md:text-6xl font-bold text-slate-900 mb-3">
            Mani Search
          </h1>
          <p className="text-slate-600 font-body text-lg">
            Intelligent search engine for the modern web
          </p>
        </div>

        {/* Search Bar */}
        <div className="w-full max-w-2xl mb-8">
          <form onSubmit={handleSearch} className="relative">
            <div
              className={`flex items-center gap-3 backdrop-blur-md bg-white/80 border-2 rounded-2xl px-6 py-4 transition-all duration-300 ${
                isSearchFocused
                  ? "border-orange-400 shadow-lg shadow-orange-200/50"
                  : "border-slate-200 hover:border-slate-300"
              }`}
            >
              <Search className="w-5 h-5 text-orange-500 flex-shrink-0" />
              <Input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                placeholder="Search the web..."
                className="flex-1 bg-transparent border-0 text-slate-900 placeholder:text-slate-400 focus:outline-none font-body text-lg"
              />
              <Button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors"
              >
                Search
              </Button>
            </div>
          </form>

          {/* Quick Tags */}
          <div className="flex flex-wrap gap-2 justify-center mt-6">
            {quickTags.map((tag) => (
              <button
                key={tag}
                onClick={() => handleQuickTag(tag)}
                className="px-4 py-2 bg-white/60 hover:bg-white/80 text-slate-700 rounded-full font-body text-sm transition-all duration-200 border border-slate-200 hover:border-orange-300"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Grid */}
        <div className="w-full max-w-4xl mb-12">
          <h2 className="font-display text-2xl font-semibold text-slate-900 mb-6 text-center">
            Explore by Category
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <div
                key={category.label}
                className="group backdrop-blur-md bg-white/60 hover:bg-white/80 border border-slate-200 hover:border-orange-300 rounded-xl p-6 transition-all duration-300 cursor-pointer hover:shadow-lg hover:shadow-orange-100/50"
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="font-display font-semibold text-slate-900 mb-2">
                  {category.label}
                </h3>
                <p className="text-slate-600 font-body text-sm">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Trending Searches */}
        <div className="w-full max-w-2xl">
          <h2 className="font-display text-2xl font-semibold text-slate-900 mb-6 text-center">
            Trending Now
          </h2>
          <div className="space-y-3">
            {trendingSearches.map((search, index) => (
              <button
                key={search}
                onClick={() => handleTrendingSearch(search)}
                className="w-full text-left px-6 py-3 backdrop-blur-md bg-white/60 hover:bg-white/80 border border-slate-200 hover:border-orange-300 rounded-lg transition-all duration-200 hover:shadow-md hover:shadow-orange-100/50 group"
              >
                <span className="text-orange-500 font-semibold mr-4">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span className="text-slate-900 font-body group-hover:text-orange-600 transition-colors">
                  {search}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
