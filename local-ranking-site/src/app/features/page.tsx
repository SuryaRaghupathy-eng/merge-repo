import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features - Google Maps & Organic Rank Tracking Tools",
  description:
    "Explore RankTracker Pro features: Google Maps rank tracking, geo grid visualization, and organic SERP monitoring. Built for local SEO agencies.",
};

export default function FeaturesPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Powerful Features for Local SEO Success
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Everything you need to track, analyze, and improve local search
            rankings for your clients.
          </p>
        </div>
      </section>

      <section id="maps-tracking" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                <Link href="/features/google-maps-rank-tracking" className="hover:text-primary-600 transition-colors">
                  Google Maps Rank Tracking
                </Link>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Monitor how your clients appear in Google Maps and the local
                pack. Our tracking shows you exactly where each business ranks
                for their target keywords in map results.{" "}
                <Link href="/features/google-maps-rank-tracking" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn more &rarr;
                </Link>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Track rankings in the local 3-pack and extended map results
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Monitor ranking changes over time with historical data
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    See which competitors appear alongside your clients
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center text-gray-400">
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <p>Maps Tracking Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="geo-grid" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1 bg-gray-200 rounded-xl p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center text-gray-400">
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                  />
                </svg>
                <p>Geo Grid Preview</p>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl font-bold text-gray-900">
                <Link href="/features/geo-grid-rank-tracking" className="hover:text-primary-600 transition-colors">
                  Geo Grid Rank Tracking
                </Link>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Local rankings change based on where the searcher is located.
                Our geo grid shows you how rankings vary across different points
                in a city or region, giving you the full picture.{" "}
                <Link href="/features/geo-grid-rank-tracking" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn more &rarr;
                </Link>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Visual grid showing rankings at multiple locations
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Customize grid size and spacing for any area
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Color-coded results for instant understanding
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section id="organic-tracking" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900">
                <Link href="/features/organic-rank-tracking" className="hover:text-primary-600 transition-colors">
                  Organic Rank Tracking
                </Link>
              </h2>
              <p className="mt-4 text-lg text-gray-600">
                Don&apos;t just track local results. Monitor your clients&apos;
                traditional organic search rankings too. Get a complete view of
                their search visibility in one dashboard.{" "}
                <Link href="/features/organic-rank-tracking" className="text-primary-600 hover:text-primary-700 font-medium">
                  Learn more &rarr;
                </Link>
              </p>
              <ul className="mt-6 space-y-4">
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Track rankings for any keyword in organic search results
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Monitor desktop and mobile rankings separately
                  </span>
                </li>
                <li className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-600">
                    Combine with local data for comprehensive reports
                  </span>
                </li>
              </ul>
            </div>
            <div className="bg-gray-100 rounded-xl p-8 flex items-center justify-center min-h-[300px]">
              <div className="text-center text-gray-400">
                <svg
                  className="w-16 h-16 mx-auto mb-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                  />
                </svg>
                <p>Organic Tracking Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to See These Features in Action?
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Start your free trial and explore all features with no limitations.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.example.com/signup"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-600 bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/pricing"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white border-2 border-white rounded-lg hover:bg-primary-700 transition-colors"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
