import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Geo Grid Rank Tracking for Google Maps | RankTracker Pro",
  description:
    "Track your Google Maps rankings across multiple locations with geo grid rank tracking. See exactly where you rank in every part of your service area with visual grid maps.",
  keywords: "geo grid rank tracking, google maps grid ranking, local seo grid rank tracker, local rank tracking, google maps ranking tool",
};

export default function GeoGridRankTrackingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Geo Grid Rank Tracking for Google Maps
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            See exactly where your business ranks across your entire service area, 
            not just from one location. Understand your true local visibility with 
            visual grid-based rank tracking.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Single-Location Rank Tracking Is Misleading
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Google Maps rankings are not the same everywhere. When someone searches 
              for a local business, Google considers their physical location and shows 
              different results depending on where they are.
            </p>
            <p>
              This means a business might rank #1 for someone searching from one street, 
              but appear in position #10 or not at all for someone just a few miles away. 
              Traditional rank tracking only checks from a single point, giving you an 
              incomplete and often misleading picture of your actual visibility.
            </p>
            <p>
              If you only track rankings from your office or a single postcode, you could 
              be missing critical blind spots in your local presence. Your clients might 
              think they are ranking well when, in reality, most potential customers in 
              their service area cannot find them.
            </p>
          </div>
        </div>
      </section>

      {/* What Is Geo Grid Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            What Is Geo Grid Rank Tracking?
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Geo grid rank tracking checks your Google Maps rankings from multiple 
              points spread across a geographical area, rather than just one location. 
              Think of it as placing a grid over a map and checking your ranking from 
              each square in that grid.
            </p>
            <p>
              Instead of asking &quot;Where do I rank?&quot; you can answer &quot;Where do I rank 
              from every part of this city?&quot; The result is a visual map showing your 
              ranking position in each zone, making it easy to spot where you are 
              strong and where you need improvement.
            </p>
            <p>
              Each point on the grid represents a real search location, giving you 
              an accurate view of how Google displays your business to searchers 
              throughout your target area.
            </p>
          </div>
        </div>
      </section>

      {/* How It Solves The Problem */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            How Geo Grid Tracking Shows Your True Rankings
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Multiple Location Checks
              </h3>
              <p className="text-gray-600">
                Rankings are checked from numerous points across your target area, 
                capturing how visibility varies from place to place.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Visual Grid Map Output
              </h3>
              <p className="text-gray-600">
                Results are displayed as a colour-coded grid overlay on a map, 
                making it simple to see ranking patterns at a glance.
              </p>
            </div>

            <div className="p-6 bg-gray-50 rounded-xl">
              <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mb-4">
                <svg className="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Clear Ranking Visibility
              </h3>
              <p className="text-gray-600">
                Instantly understand where your rankings are strong and where 
                they drop off, without digging through spreadsheets.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Geo Grid Tracking Matters
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Identify Weak Visibility Areas</h3>
                <p className="text-gray-600 mt-1">
                  Pinpoint exactly where your rankings drop off so you can focus 
                  local SEO efforts on the areas that need the most attention.
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
                <h3 className="text-lg font-semibold text-gray-900">Understand Your Real Local Presence</h3>
                <p className="text-gray-600 mt-1">
                  Get an honest picture of how visible your business is across 
                  your entire service area, not just from one lucky location.
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
                <h3 className="text-lg font-semibold text-gray-900">Prove Local SEO Performance</h3>
                <p className="text-gray-600 mt-1">
                  Show clients clear, visual evidence of ranking improvements 
                  across their target area with easy-to-understand reports.
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
                <h3 className="text-lg font-semibold text-gray-900">Avoid False Ranking Assumptions</h3>
                <p className="text-gray-600 mt-1">
                  Stop relying on single-point checks that can give a misleadingly 
                  positive or negative view of your actual local visibility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Who Is This For Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Who Is Geo Grid Tracking For?
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
                Demonstrate value to clients with visual proof of ranking 
                improvements across their entire service area.
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
                Manage multiple client locations efficiently and identify 
                opportunities for targeted local SEO improvements.
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
                Understand how visible your business is to customers across 
                your physical service area and catchment zones.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Capabilities */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What You Can Do With Geo Grid Tracking
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Manual Rank Checks</h3>
              <p className="text-gray-600">
                Run geo grid checks on demand to see your current ranking positions 
                across your target area. Perfect for getting started during your free trial.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Historical Comparison</h3>
              <p className="text-gray-600">
                Compare previous rankings with current positions to track progress 
                over time and measure the impact of your local SEO work.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Exportable Reports</h3>
              <p className="text-gray-600">
                Generate reports showing geo grid results that you can share with 
                clients or use for internal analysis.
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scheduled Checks</h3>
              <p className="text-gray-600">
                Set up automated tracking to monitor rankings regularly. 
                Available on paid plans for ongoing monitoring.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Placeholder */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Geo Grid Visualization Example
          </h2>
          <div className="bg-gray-100 rounded-xl p-12 text-center border-2 border-dashed border-gray-300">
            <div className="w-16 h-16 bg-gray-200 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">
              Geo grid visualization screenshot coming soon
            </p>
            <p className="text-gray-400 text-sm mt-2">
              A colour-coded grid map showing ranking positions across a target area
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            See Where You Really Rank
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Start tracking your Google Maps rankings across your entire service area today.
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
