import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Organic Rank Tracking for SEO Professionals | RankTracker Pro",
  description:
    "Track your organic keyword rankings in search results. Monitor desktop and mobile positions, measure SEO progress, and combine with local ranking data for complete visibility.",
  keywords: "organic rank tracking, organic keyword rank tracking, seo rank tracking tool, keyword position tracking, serp tracking",
};

export default function OrganicRankTrackingPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="py-20 lg:py-28 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
            Organic Rank Tracking for SEO Professionals
          </h1>
          <p className="mt-6 text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
            Monitor your keyword positions in organic search results. Track 
            progress over time, detect ranking changes, and combine with local 
            data for a complete view of your SEO performance.
          </p>
        </div>
      </section>

      {/* Context / Importance Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Organic Rankings Still Matter
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Organic search results remain one of the most valuable sources of 
              website traffic. When people search for information, products, or 
              services, the websites that appear below the ads and map results 
              are the organic listings. Ranking well here builds long-term 
              visibility and trust.
            </p>
            <p>
              Unlike Google Maps results, which focus on local businesses and 
              proximity, organic rankings are determined primarily by content 
              relevance, website quality, and authority. For many businesses, 
              especially those that serve customers beyond their immediate 
              location, organic rankings are essential.
            </p>
            <p>
              Tracking where your website appears for your target keywords helps 
              you understand whether your SEO strategy is working. Without this 
              data, you are optimising blind.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            How Organic Rank Tracking Works
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              Organic rank tracking monitors where your website appears in search 
              engine results for the keywords you care about. When someone searches 
              for a term like &quot;best project management software&quot; or &quot;how to 
              improve website speed&quot;, you want to know if your site shows up, 
              and in what position.
            </p>
            <p>
              Rankings are checked for both desktop and mobile search results, 
              since positions can differ between devices. The tool records your 
              position over time, creating a history that shows whether your 
              visibility is improving, holding steady, or declining.
            </p>
            <p>
              This data helps you measure the impact of your SEO work, whether 
              that involves publishing new content, building links, or improving 
              technical aspects of your website.
            </p>
          </div>
        </div>
      </section>

      {/* Limitation Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Why Organic Tracking Alone Is Not Enough
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              For businesses that serve local customers, organic rankings only 
              tell part of the story. When someone searches for a local service, 
              Google often shows a map with business listings above the organic 
              results. If your business does not appear in this local pack, you 
              could be missing valuable customers, even if your organic rankings 
              are strong.
            </p>
            <p>
              Organic rank tracking does not capture your visibility in Google 
              Maps or how your rankings vary based on the searcher&apos;s location. 
              For a complete picture of your search presence, you need to track 
              both organic and local rankings together.
            </p>
            <p>
              This is especially important for SEO agencies and consultants who 
              manage clients with physical locations. Reporting only on organic 
              positions can leave significant gaps in your visibility data.
            </p>
          </div>
        </div>
      </section>

      {/* Unified Tracking Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Track Organic and Maps Rankings in One Place
          </h2>
          <div className="prose prose-lg max-w-none text-gray-600">
            <p>
              The most effective SEO workflow combines organic tracking with 
              local ranking data. Instead of switching between different tools 
              or reports, you can see how a client or business performs in both 
              traditional search results and Google Maps from a single view.
            </p>
            <p>
              This unified approach saves time and makes it easier to spot 
              patterns. For example, you might notice that organic rankings are 
              improving while local visibility stays flat, suggesting different 
              areas need attention.
            </p>
            <p>
              For businesses with physical service areas, combining organic 
              tracking with{" "}
              <Link 
                href="/features/google-maps-rank-tracking" 
                className="text-primary-600 hover:text-primary-700 font-medium no-underline"
              >
                Google Maps rank tracking
              </Link>{" "}
              gives you the full picture. And for deeper local insights,{" "}
              <Link 
                href="/features/geo-grid-rank-tracking" 
                className="text-primary-600 hover:text-primary-700 font-medium no-underline"
              >
                geo grid tracking
              </Link>{" "}
              shows how visibility varies across an entire area.
            </p>
          </div>
        </div>
      </section>

      {/* Why It Matters Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            Why Organic Rank Tracking Matters
          </h2>
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="flex-shrink-0 w-8 h-8 bg-primary-100 rounded-full flex items-center justify-center">
                <svg className="w-5 h-5 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900">Measure SEO Progress Over Time</h3>
                <p className="text-gray-600 mt-1">
                  See whether your optimisation efforts are moving rankings in 
                  the right direction with clear historical data.
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
                <h3 className="text-lg font-semibold text-gray-900">Detect Ranking Drops and Gains</h3>
                <p className="text-gray-600 mt-1">
                  Catch changes quickly so you can investigate causes and respond 
                  before small issues become bigger problems.
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
                <h3 className="text-lg font-semibold text-gray-900">Support Reporting and Decisions</h3>
                <p className="text-gray-600 mt-1">
                  Provide clients with clear ranking data that demonstrates the 
                  value of your SEO work and informs next steps.
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
                <h3 className="text-lg font-semibold text-gray-900">Build Long-Term SEO Visibility</h3>
                <p className="text-gray-600 mt-1">
                  Track your progress toward sustainable organic rankings that 
                  drive consistent traffic over months and years.
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
            Who Is Organic Rank Tracking For?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">SEO Agencies</h3>
              <p className="text-gray-600">
                Track and report on client keyword rankings with data that 
                shows the impact of your SEO campaigns.
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
                Manage keyword tracking across multiple clients and provide 
                actionable insights based on ranking trends.
              </p>
            </div>

            <div className="text-center p-6">
              <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Growing Businesses</h3>
              <p className="text-gray-600">
                Monitor your website&apos;s search visibility and track progress 
                toward long-term organic growth goals.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supporting Capabilities */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">
            What You Can Do With Organic Tracking
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Manual Rank Checks</h3>
              <p className="text-gray-600">
                Check your current keyword positions on demand for any search 
                term. Ideal for getting started during your free trial.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Historical Position Tracking</h3>
              <p className="text-gray-600">
                Compare past positions with current rankings to understand 
                trends and measure progress over time.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Exportable Reports</h3>
              <p className="text-gray-600">
                Generate reports showing your organic rankings that you can 
                share with clients or use for analysis.
              </p>
            </div>

            <div className="bg-gray-50 p-6 rounded-xl border border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Scheduled Checks</h3>
              <p className="text-gray-600">
                Set up automated tracking to monitor your rankings on a 
                regular schedule. Available on paid plans.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Visual Placeholder */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6 text-center">
            Organic Ranking Overview Example
          </h2>
          <div className="bg-white rounded-xl p-12 text-center border-2 border-dashed border-gray-300">
            <div className="w-16 h-16 bg-gray-100 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </div>
            <p className="text-gray-500 text-lg">
              Dashboard screenshot coming soon
            </p>
            <p className="text-gray-400 text-sm mt-2">
              A clear view of your keyword positions and ranking trends
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white">
            Start Tracking Your Organic Rankings
          </h2>
          <p className="mt-4 text-lg text-primary-100">
            Monitor your keyword positions and measure your SEO progress today.
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
