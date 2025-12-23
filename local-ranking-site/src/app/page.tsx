import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Maps Rank Tracking with Geo Grid & Organic SEO Insights | RankTracker Pro",
  description:
    "Track your Google Maps rankings with precision using geo grid visualization. Monitor organic search performance and generate clear SEO reports for local SEO agencies and professionals.",
};

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Google Maps Rank Tracking with Geo Grid & Organic SEO Insights
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            See exactly where your business ranks on Google Maps from any location. 
            Track local and organic search rankings together to understand your complete 
            SEO performance and deliver clear reports to your clients.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="https://app.example.com/signup"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-primary-600 rounded-lg hover:bg-primary-700 transition-colors"
            >
              Start Free Trial
            </Link>
            <Link
              href="/features"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-600 bg-white border-2 border-primary-600 rounded-lg hover:bg-primary-50 transition-colors"
            >
              View Features
            </Link>
          </div>
          <p className="mt-4 text-sm text-gray-500">
            No credit card required
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              How It Works
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Get started in minutes with a simple three-step process.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">1</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Add Keywords & Locations
              </h3>
              <p className="text-gray-600">
                Enter the keywords you want to track and specify the locations 
                that matter to your business or your clients.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">2</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Track Google Maps & Organic Rankings
              </h3>
              <p className="text-gray-600">
                We automatically monitor your rankings in Google Maps and 
                traditional search results, updating regularly to show changes.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-2xl font-bold text-primary-600">3</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Visualise with Geo Grids & Reports
              </h3>
              <p className="text-gray-600">
                See your ranking performance across locations with visual geo 
                grids and generate professional reports for clients.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Features Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Core Features
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Everything you need to track and understand local search performance.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Google Maps Rank Tracking
              </h3>
              <p className="text-gray-600">
                Monitor where your business appears in Google Maps and the local 
                pack for any keyword and location combination.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                <Link href="/features/geo-grid-rank-tracking" className="hover:text-primary-600 transition-colors">
                  Geo Grid Rank Tracking
                </Link>
              </h3>
              <p className="text-gray-600">
                Visualise how your rankings vary across different areas with an 
                easy-to-understand grid map showing your position in each zone.
              </p>
            </div>

            <div className="p-6 bg-white rounded-xl shadow-sm">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg
                  className="w-6 h-6 text-primary-600"
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
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                Organic Rank Tracking
              </h3>
              <p className="text-gray-600">
                Track your traditional search engine rankings alongside local 
                results for a complete picture of your SEO performance.
              </p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/features"
              className="text-primary-600 font-medium hover:text-primary-700"
            >
              Learn more about all features &rarr;
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Common questions about local SEO and rank tracking.
            </p>
          </div>

          <div className="space-y-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Why do Google Maps rankings change depending on location?
              </h3>
              <p className="text-gray-600">
                Google personalises local search results based on the searcher&apos;s 
                physical location. A business might rank #1 for someone searching 
                nearby, but appear lower or not at all for someone further away. 
                This is why tracking rankings from multiple locations is essential 
                for understanding your true local visibility.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What is geo grid rank tracking?
              </h3>
              <p className="text-gray-600">
                Geo grid rank tracking checks your Google Maps rankings from a grid 
                of points across a geographical area. Instead of tracking from just 
                one location, it shows how your rankings vary across an entire city 
                or region, displayed as a visual map with colour-coded positions 
                for each grid point.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                What is the difference between Google Maps rankings and organic rankings?
              </h3>
              <p className="text-gray-600">
                Google Maps rankings appear in the local pack (the map section with 
                business listings) and are influenced by your Google Business Profile, 
                proximity, and local relevance. Organic rankings are the traditional 
                website listings below the map, influenced by your website&apos;s SEO, 
                content, and backlinks. Both are important for local businesses.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How accurate is local rank tracking?
              </h3>
              <p className="text-gray-600">
                Local rank tracking accuracy depends on how well the tool simulates 
                searches from specific locations. We check rankings from precise 
                geographic coordinates to give you the most accurate representation 
                of what searchers see in each area. Keep in mind that actual user 
                results can still vary based on personal search history and device.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Who is this tool designed for?
              </h3>
              <p className="text-gray-600">
                RankTracker Pro is built for local SEO agencies, SEO professionals, 
                and marketing consultants who manage rankings for businesses that 
                rely on local search visibility. It&apos;s particularly useful for 
                agencies managing multiple client locations who need to track and 
                report on local SEO performance.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                How often are rankings updated?
              </h3>
              <p className="text-gray-600">
                Ranking data is updated regularly to help you monitor changes and 
                trends over time. The frequency of updates depends on your plan, 
                but all users receive consistent, scheduled updates to track their 
                keyword positions accurately.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                Can I track rankings in multiple cities or countries?
              </h3>
              <p className="text-gray-600">
                Yes, you can track rankings in any location worldwide. Whether you 
                need to monitor a single neighbourhood or track performance across 
                multiple cities and countries, you can set up tracking for any 
                geographic area where your business or clients operate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Ready to Track Your Local Rankings?
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Start your free trial today and see where you really rank.
          </p>
          <div className="mt-8">
            <Link
              href="https://app.example.com/signup"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-primary-600 bg-white rounded-lg hover:bg-gray-100 transition-colors"
            >
              Start Free Trial
            </Link>
          </div>
          <p className="mt-4 text-sm text-primary-200">
            No credit card required
          </p>
        </div>
      </section>
    </>
  );
}
