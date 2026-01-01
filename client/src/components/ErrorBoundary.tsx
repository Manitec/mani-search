import React from "react";

interface Props {
  children: React.ReactNode;
}

interface State {
  hasError: boolean;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("Error caught by boundary:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
          <div className="text-center">
            <h1 className="font-display text-4xl font-bold text-slate-900 mb-4">
              Something went wrong
            </h1>
            <p className="text-slate-600 font-body mb-8">
              Please try refreshing the page
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-lg font-body font-semibold transition-colors"
            >
              Refresh
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}
