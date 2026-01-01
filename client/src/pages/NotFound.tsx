import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-50 flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="font-display text-6xl font-bold text-slate-900 mb-4">404</h1>
        <p className="text-xl text-slate-600 font-body mb-8">Page not found</p>
        <Button
          onClick={() => (window.location.href = "/")}
          className="bg-orange-500 hover:bg-orange-600 text-white"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
