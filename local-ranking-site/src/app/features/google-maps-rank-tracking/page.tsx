import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Google Maps Rank Tracking for Local SEO | RankTracker Pro",
  description:
    "Track your Google Maps rankings and monitor local pack visibility. Understand where your business appears in Google Maps search results for any keyword and location.",
  keywords: "google maps rank tracking, google maps rank tracker, local seo rank tracking, google maps ranking tool, local pack tracking",
};

export default function GoogleMapsRankTrackingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Google Maps Rank Tracking for Local SEO
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor where your business appears in Google Maps and the local pack. 
            Track your visibility for any keyword and measure the impact of your 
            local SEO efforts over time.
          </p>
        </div>
      </section>

      {/* Problem / Importance Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Google Maps Rankings Matter for Local Businesses
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              When people search for local services, Google often shows a map with 
              business listings at the top of the results. This is called the local 
              pack, and appearing here can be the difference between getting found 
              or being invisible to potential customers.
            </p>
            <p>
              Unlike traditional organic search results, Google Maps rankings are 
              heavily influenced by proximity. The same search performed from different 
              locations can show completely different businesses. This makes tracking 
              your Maps visibility essential for understanding your true local reach.
            </p>
            <p>
              For businesses that rely on local customers, knowing where you rank in 
              Google Maps is just as important as knowing your website&apos;s organic 
              position. Without this visibility, you cannot measure local SEO progress 
              or identify problems before they affect your business.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Google Maps Rank Tracking Works
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Google Maps rank tracking monitors where your business appears in the 
              local pack and map results for your target keywords. When someone 
              searches for something like &quot;plumber near me&quot; or &quot;coffee shop 
              Manchester&quot;, you want to know if your business shows up, and in 
              what position.
            </p>
            <p>
              Tracking works by checking your ranking position from a specific 
              location for each keyword you care about. The tool records your 
              position over time, so you can see whether your visibility is 
              improving, staying steady, or declining.
            </p>
            <p>
              This gives you clear data to measure the effectiveness of your 
              local SEO work, whether that includes optimising your business 
              profile, gathering reviews, or improving your website&apos;s local 
              relevance.
            </p>
          </div>
        </div>
      </section>

      {/* Limitations Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            The Limitation of Single-Location Tracking
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Traditional rank tracking checks your position from just one location, 
              often a city centre or postcode. While this gives you a baseline, it 
              can be misleading because Google Maps rankings vary significantly 
              depending on where the searcher is.
            </p>
            <p>
              Your business might rank #1 for someone searching from one part of 
              town, but not appear at all for someone a few streets away. If you 
              only track from a single point, you could believe your rankings are 
              strong when many potential customers still cannot find you.
            </p>
            <p>
              This is why understanding the limitations of single-location tracking 
              is important. It provides useful data, but it does not tell the whole 
              story of your local visibility.
            </p>
          </div>
        </div>
      </section>

      {/* Geo Grid Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Going Further with Geo Grid Tracking
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              For a more complete picture of your local visibility, geo grid rank 
              tracking checks your rankings from multiple points across an entire 
              area. Instead of one data point, you get a visual map showing how 
              your position changes from location to location.
            </p>
            <p>
              This advanced method reveals the areas where you are visible and the 
              zones where you need improvement. It builds on standard Maps tracking 
              by adding geographic depth to your ranking data.
            </p>
            <p>
              <Link 
                href="/features/geo-grid-rank-tracking" 
                className="text-primary-600 hover:text-primary-700 font-medium no-underline"
              >
                Learn more about Geo Grid Rank Tracking &rarr;
              </Link>
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Google Maps Rank Tracking Matters
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Measure Real Local Visibility</h3>
                <p className="text-gray-600 mt-1">
                  Understand how visible your business is in Google Maps for the 
                  keywords that matter most to your customers.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Track Progress of Local SEO Work</h3>
                <p className="text-gray-600 mt-1">
                  See whether your optimisation efforts are improving your rankings 
                  over time with clear before-and-after comparisons.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Identify Sudden Drops or Gains</h3>
                <p className="text-gray-600 mt-1">
                  Catch ranking changes quickly so you can respond to problems or 
                  understand what is driving improvements.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Support Agency Reporting</h3>
                <p className="text-gray-600 mt-1">
                  Provide clients with clear evidence of ranking performance and 
                  the value of your local SEO services.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Who Is Google Maps Rank Tracking For?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local SEO Agencies</h3>
              <p className="text-gray-600">
                Track and report on client rankings in Google Maps with data 
                that demonstrates the impact of your work.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SEO Consultants</h3>
              <p className="text-gray-600">
                Monitor multiple client locations and provide accurate visibility 
                data for local SEO strategies.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Local Businesses</h3>
              <p className="text-gray-600">
                Keep track of your Google Maps presence and understand how 
                visible you are to nearby customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What You Can Do With Maps Rank Tracking
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Manual Rank Checks</h3>
              <p className="text-gray-600">
                Check your current Google Maps position on demand for any keyword 
                and location. Ideal for getting started during your free trial.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Rank History</h3>
              <p className="text-gray-600">
                Compare your previous positions with current rankings to track 
                progress and measure the impact of changes over time.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Exportable Reports</h3>
              <p className="text-gray-600">
                Generate reports showing your Maps rankings that you can share 
                with clients or use for internal analysis.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scheduled Checks</h3>
              <p className="text-gray-600">
                Set up automated tracking to monitor your rankings regularly. 
                Available on paid plans for ongoing monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Google Maps Ranking Overview Example
          </h2>
          <div className="bg-white rounded-xl p-12 text-center border-2 border-dashed border-gray-300">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">
              Google Maps ranking screenshot coming soon
            </p>
            <p className="text-gray-400 text-sm mt-2">
              A clear view of your ranking positions in the local pack
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Start Tracking Your Google Maps Rankings
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            See where your business appears in local search results today.
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
