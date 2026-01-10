import { useEffect, useState } from "react";
import { Search } from "lucide-react";

declare global {
  interface Window {
    google?: any;
    __gcse?: any;
  }
}

export default function SearchResults() {
  const [query, setQuery] = useState("");
  const [searchInput, setSearchInput] = useState("");

  useEffect(() => {
    // Parse query from hash
    const hash = window.location.hash;
    const match = hash.match(/gsc\.q=([^&]*)/);
    const q = match ? decodeURIComponent(match[1]) : "";
    setQuery(q);
    setSearchInput(q);

    // Render Google CSE
    const renderCSE = () => {
      const googleWindow = window as any;
      
      if (googleWindow.google?.search?.cse?.element) {
        try {
          googleWindow.google.search.cse.element.render({
            div: "cse-results",
            tag: "searchresults-only",
          });
        } catch (error) {
          console.error("Error rendering CSE:", error);
          setTimeout(renderCSE, 500);
        }
      } else {
        setTimeout(renderCSE, 500);
      }
    };

    renderCSE();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchInput.trim()) {
      window.location.href = `/search/#gsc.tab=0&gsc.q=${encodeURIComponent(searchInput)}&gsc.sort=`;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50">
      {/* Header */}
      <div className="border-b border-slate-200 bg-white/50 backdrop-blur-sm sticky top-0 z-50">
        <div className="container py-4">
          <div className="flex items-center gap-4">
            <a href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="/images/mani-logo.png" alt="Mani Search" className="h-8 w-auto" />
              <span className="text-2xl font-display font-bold text-slate-900">Mani Search</span>
            </a>
            <div className="flex-1">
              <form onSubmit={handleSearch} className="relative">
                <div className="flex items-center gap-2 backdrop-blur-md bg-white/80 border border-slate-200 rounded-lg px-4 py-2">
                  <Search className="w-4 h-4 text-orange-500" />
                  <input
                    type="text"
                    value={searchInput}
                    onChange={(e) => setSearchInput(e.target.value)}
                    placeholder="Search..."
                    className="flex-1 bg-transparent border-0 text-slate-900 placeholder:text-slate-400 focus:outline-none font-body"
                  />
                  <button
                    type="submit"
                    className="text-orange-500 hover:text-orange-600 transition-colors font-bold"
                  >
                    ⌕
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="container py-8">
        {query && (
          <div className="mb-6">
            <h1 className="font-display text-2xl font-semibold text-slate-900">
              Search results for "<span className="text-orange-500">{query}</span>"
            </h1>
          </div>
        )}

        {/* Google Custom Search Results Container */}
        <div id="cse-results" className="space-y-6" />

        {!query && (
          <div className="text-center py-12">
            <p className="text-slate-600 font-body">
              Enter a search query above to get started
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
