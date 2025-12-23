import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog - Local SEO Tips & Rank Tracking Insights",
  description:
    "Learn local SEO strategies, Google Maps optimization tips, and rank tracking best practices from the RankTracker Pro team.",
};

const placeholderPosts = [
  {
    title: "How to Improve Your Google Maps Rankings in 2024",
    excerpt:
      "Learn the key factors that influence local pack rankings and actionable steps to improve visibility.",
    date: "Coming Soon",
    category: "Local SEO",
  },
  {
    title: "Understanding Geo Grid Reports for Local SEO",
    excerpt:
      "A complete guide to reading and using geo grid data to optimize local search performance.",
    date: "Coming Soon",
    category: "Tutorials",
  },
  {
    title: "Organic vs Local Rankings: What Matters More?",
    excerpt:
      "Exploring the relationship between traditional SEO and local search optimization.",
    date: "Coming Soon",
    category: "Strategy",
  },
];

export default function BlogPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Blog
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Tips, tutorials, and insights on local SEO and rank tracking.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {placeholderPosts.map((post) => (
              <article
                key={post.title}
                className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="bg-gray-100 h-48 flex items-center justify-center">
                  <span className="text-gray-400">Image Coming Soon</span>
                </div>
                <div className="p-6">
                  <span className="text-sm text-primary-600 font-medium">
                    {post.category}
                  </span>
                  <h2 className="mt-2 text-xl font-semibold text-gray-900">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-gray-600">{post.excerpt}</p>
                  <p className="mt-4 text-sm text-gray-400">{post.date}</p>
                </div>
              </article>
            ))}
          </div>

          <div className="mt-16 text-center bg-gray-50 rounded-xl p-12">
            <h2 className="text-2xl font-bold text-gray-900">
              Our Blog is Launching Soon
            </h2>
            <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
              We&apos;re preparing helpful content about local SEO, rank tracking
              strategies, and tips for SEO agencies. Check back soon!
            </p>
            <Link
              href="/"
              className="inline-block mt-6 text-primary-600 font-medium hover:text-primary-700"
            >
              &larr; Back to Home
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
