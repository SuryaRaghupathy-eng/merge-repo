import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pricing - Plans for Freelancers, Agencies & Enterprise",
  description:
    "Choose the right RankTracker Pro plan for your needs. Flexible pricing for freelancers, SEO agencies, and enterprise teams.",
};

const plans = [
  {
    name: "Starter",
    description: "Perfect for freelancers and solo consultants",
    price: "$49",
    period: "/month",
    features: [
      "Track up to 100 keywords",
      "5 Google Business Profiles",
      "Basic geo grid reports",
      "Weekly rank updates",
      "Email support",
    ],
    cta: "Start Free Trial",
    highlighted: false,
  },
  {
    name: "Agency",
    description: "Built for growing SEO agencies",
    price: "$149",
    period: "/month",
    features: [
      "Track up to 1,000 keywords",
      "50 Google Business Profiles",
      "Advanced geo grid reports",
      "Daily rank updates",
      "White-label reports",
      "Priority support",
      "API access",
    ],
    cta: "Start Free Trial",
    highlighted: true,
  },
  {
    name: "Enterprise",
    description: "Custom solutions for large teams",
    price: "Custom",
    period: "",
    features: [
      "Unlimited keywords",
      "Unlimited profiles",
      "Custom geo grid configurations",
      "Real-time rank updates",
      "Dedicated account manager",
      "Custom integrations",
      "SLA guarantee",
    ],
    cta: "Contact Sales",
    highlighted: false,
  },
];

export default function PricingPage() {
  return (
    <>
      <section className="py-20 bg-gradient-to-b from-primary-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900">
            Simple, Transparent Pricing
          </h1>
          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            Choose the plan that fits your needs. All plans include a 14-day
            free trial with no credit card required.
          </p>
        </div>
      </section>

      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`rounded-2xl p-8 ${
                  plan.highlighted
                    ? "bg-primary-600 text-white ring-4 ring-primary-600 ring-offset-2"
                    : "bg-white border-2 border-gray-200"
                }`}
              >
                <h2
                  className={`text-2xl font-bold ${
                    plan.highlighted ? "text-white" : "text-gray-900"
                  }`}
                >
                  {plan.name}
                </h2>
                <p
                  className={`mt-2 ${
                    plan.highlighted ? "text-primary-100" : "text-gray-600"
                  }`}
                >
                  {plan.description}
                </p>
                <div className="mt-6">
                  <span
                    className={`text-4xl font-bold ${
                      plan.highlighted ? "text-white" : "text-gray-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span
                    className={
                      plan.highlighted ? "text-primary-100" : "text-gray-600"
                    }
                  >
                    {plan.period}
                  </span>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start">
                      <svg
                        className={`w-5 h-5 mr-3 flex-shrink-0 ${
                          plan.highlighted ? "text-white" : "text-green-500"
                        }`}
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
                      <span
                        className={
                          plan.highlighted ? "text-white" : "text-gray-600"
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.name === "Enterprise" ? "/contact" : "/pricing"}
                  className={`mt-8 block w-full py-3 px-6 text-center font-medium rounded-lg transition-colors ${
                    plan.highlighted
                      ? "bg-white text-primary-600 hover:bg-gray-100"
                      : "bg-primary-600 text-white hover:bg-primary-700"
                  }`}
                >
                  {plan.cta}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Frequently Asked Questions
          </h2>
          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                What&apos;s included in the free trial?
              </h3>
              <p className="mt-2 text-gray-600">
                The 14-day free trial includes full access to all features in
                your chosen plan. No credit card is required to start.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Can I switch plans later?
              </h3>
              <p className="mt-2 text-gray-600">
                Yes, you can upgrade or downgrade your plan at any time. Changes
                take effect on your next billing cycle.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                Do you offer refunds?
              </h3>
              <p className="mt-2 text-gray-600">
                We offer a 30-day money-back guarantee on all plans. If you&apos;re
                not satisfied, contact us for a full refund.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900">
                What payment methods do you accept?
              </h3>
              <p className="mt-2 text-gray-600">
                We accept all major credit cards and PayPal. Enterprise plans
                can also pay by invoice.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
