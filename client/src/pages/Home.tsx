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
      window.location.href = `/search?q=${encodeURIComponent(searchQuery)}`;
    }
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
          <p className="text-lg text-slate-600 font-body">
            Discover information with intelligent search
          </p>
        </div>

        {/* Search Bar Section */}
        <div className="w-full max-w-2xl mb-16">
          <form onSubmit={handleSearch} className="relative">
            {isSearchFocused && (
              <div className="absolute -inset-1 bg-gradient-to-r from-orange-200 via-orange-100 to-orange-200 rounded-2xl blur-xl opacity-50" />
            )}

            <div className="relative backdrop-blur-md bg-white/80 border border-slate-200/50 rounded-2xl p-1 shadow-lg">
              <div className="flex items-center px-6 py-4 gap-3">
                <Search className="w-5 h-5 text-orange-500 flex-shrink-0" />
                <Input
                  type="text"
                  placeholder="Search anything..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => setIsSearchFocused(false)}
                  className="flex-1 bg-transparent border-0 text-slate-900 placeholder:text-slate-400 focus:outline-none text-lg font-body"
                />
                <Button
                  type="submit"
                  className="bg-orange-500 hover:bg-orange-600 text-white rounded-full px-8 font-body font-semibold"
                >
                  Search
                </Button>
              </div>
            </div>
          </form>

          {/* Quick Tags */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {quickTags.map((tag) => (
              <button
                key={tag}
                onClick={() => {
                  window.location.href = `/search?q=${encodeURIComponent(tag)}`;
                }}
                className="px-4 py-2 bg-white/60 hover:bg-white/80 border border-slate-200 rounded-full text-slate-700 font-body text-sm transition-colors"
              >
                {tag}
              </button>
            ))}
          </div>
        </div>

        {/* Categories Section */}
        <div className="w-full max-w-5xl mb-16">
          <h2 className="font-display text-2xl font-bold text-slate-900 text-center mb-8">
            Explore Categories
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {categories.map((category) => (
              <button
                key={category.label}
                onClick={() => {
                  window.location.href = `/search?q=${encodeURIComponent(category.label)}`;
                }}
                className="p-6 bg-white/70 hover:bg-white border border-slate-200 rounded-xl transition-all hover:shadow-lg hover:border-orange-200"
              >
                <div className="text-4xl mb-3">{category.icon}</div>
                <h3 className="font-display font-bold text-slate-900 mb-1">{category.label}</h3>
                <p className="text-sm text-slate-600 font-body">{category.description}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Trending Searches */}
        <div className="w-full max-w-2xl">
          <div className="bg-white/70 backdrop-blur-md border border-slate-200 rounded-xl p-8">
            <h3 className="font-display text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              🔥 Trending Now
            </h3>
            <div className="space-y-3">
              {trendingSearches.map((search, index) => (
                <button
                  key={search}
                  onClick={() => {
                    window.location.href = `/search?q=${encodeURIComponent(search)}`;
                  }}
                  className="w-full text-left p-3 hover:bg-orange-50 rounded-lg transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <span className="font-display font-bold text-orange-500 text-lg">{String(index + 1).padStart(2, "0")}</span>
                    <span className="text-slate-700 font-body group-hover:text-orange-600 transition-colors">{search}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
