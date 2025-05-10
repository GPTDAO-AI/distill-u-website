"use client";

import SectionLayout from "@/layouts/section-layout";
import { useState } from "react";

const Services = () => {
  const [activeTab, setActiveTab] = useState<"founders" | "investors">("founders");

  return (
    <SectionLayout title="Services">
      <div className="w-full flex flex-col gap-8 items-center justify-center max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4">Distill Labs Program</h2>
          <p className="text-lg max-w-3xl mx-auto">
            Distill Labs is committed to connecting early-stage AI startups with forward-thinking investors through a results-oriented, equity-based incubation model. We offer tailored service packages for <strong>founders</strong> and <strong>investors</strong>, designed to maximize resource value and enable efficient growth for both parties.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex w-full max-w-md bg-bg-2 gap-4 rounded-lg p-2">
          <button
            onClick={() => setActiveTab("founders")}
            className={`cursor-pointer flex-1 py-1 rounded-md text-center font-medium transition-all duration-200 ${
              activeTab === "founders"
                ? "bg-text-2 text-bg-1 shadow-sm"
                : "hover:bg-bg-1/50"
            }`}
          >
            For Founders
          </button>
          <button
            onClick={() => setActiveTab("investors")}
            className={`cursor-pointer flex-1 py-1 rounded-md text-center font-medium transition-all duration-200 ${
              activeTab === "investors"
                ? "bg-text-2 text-bg-1 shadow-sm"
                : "hover:bg-bg-1/50"
            }`}
          >
            For Investors
          </button>
        </div>

        {/* Founders Tab Content */}
        {activeTab === "founders" && (
          <div className="w-full animate-fadeIn">
            <div className="w-full">
              <div className="bg-bg-2 p-6 rounded-lg shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-3">Entry Requirements:</h4>
                <ul className="list-disc pl-6 mb-4 space-y-1">
                  <li>Sign a formal incubation agreement with Distill Labs</li>
                  <li>Participate based on the following equity model:
                    <ul className="list-circle pl-6 mt-1 space-y-1">
                      <li>General AI projects: 2% equity</li>
                      <li>Web3 projects: 4% token allocation</li>
                    </ul>
                  </li>
                </ul>

                <h4 className="text-xl font-semibold mb-3">Core Benefits:</h4>
                <div className="space-y-6">
                  <div className="bg-bg-2 p-6">
                    <h5 className="font-semibold mb-2">1. Bi-monthly Fundraising Meetups</h5>
                    <ul className="list-disc pl-6 space-y-1">
                      <li>Exclusive closed-door pitch sessions organized by Distill Labs</li>
                      <li>Founders can present directly to selected investors and pitch their product, team, and fundraising plan</li>
                    </ul>
                  </div>

                  <h5 className="font-semibold mb-2">2. Annual GenAI Summit Booth Access</h5>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Complimentary booth at GenAI Summit, the largest AI tech conference in Silicon Valley</li>
                    <li>Valued at $9,999+, reaching 1,000+ investors, 10,000+ attendees, and major tech media</li>
                    <li>Enables fundraising, partnership development, and broad market exposure</li>
                  </ul>

                  <h5 className="font-semibold mb-2">3. Main Stage Speaking Opportunity at GenAI Summit</h5>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>A 30-minute presentation on the main stage (audience: 1,000+)</li>
                    <li>Valued at $9,999+, offering high-profile exposure and investor attention</li>
                  </ul>

                  <h5 className="font-semibold mb-2">4. Investor Network Access & Fundraising Support</h5>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Gain access to Distill Labs&apos;s private investor database</li>
                    <li>Receive personalized warm introductions and strategic fundraising coaching (e.g., pitch deck polishing, valuation strategy, deal structuring)</li>
                  </ul>
                </div>

                <h4 className="text-xl font-semibold mb-3">Optional Add-on Services ($1,000/month):</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>1–2 private investor meetings arranged per month</li>
                  <li>Access to dedicated physical office space at our Palo Alto headquarters</li>
                  <li>Priority recommendation for media coverage, awards, global startup rankings, and other high-exposure channels</li>
                </ul>
              </div>
            </div>
          </div>
        )}

        {/* Investors Tab Content */}
        {activeTab === "investors" && (
          <div className="w-full animate-fadeIn">
            <div className="w-full">
              <div className="bg-bg-2 p-6 rounded-lg shadow-sm mb-6">
                <h4 className="text-xl font-semibold mb-3">Terms:</h4>
                <ul className="list-disc pl-6 space-y-1">
                  <li>No upfront or annual fees required</li>
                  <li>Share your investment preferences, and we&apos;ll handle the project sourcing and screening</li>
                </ul>
              </div>

              <h4 className="text-xl font-semibold mb-3">Core Benefits:</h4>
              <div className="space-y-6">
                <div className="bg-bg-2 p-6 rounded-lg shadow-sm">
                  <h5 className="font-semibold mb-2">1. Bi-monthly Startup Showcases</h5>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Free invitation to project meet-ups hosted by Distill Labs</li>
                    <li>Early access to high-potential AI and Web3 investment opportunities</li>
                  </ul>

                  <h5 className="font-semibold mb-2">2. 1-on-1 Deal Introductions</h5>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>Schedule private meetings with selected startup teams based on your specific investment preferences</li>
                    <li>Receive internal project materials, valuation insights, and progress updates</li>
                  </ul>

                  <h5 className="font-semibold mb-2">3. Success-Based Fee Model</h5>
                  <ul className="list-disc pl-6 space-y-1">
                    <li>No payment required unless a referred deal leads to a profitable exit</li>
                    <li>Distill Labs takes a 10% share of net profit upon exit (No Win, No Fee)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </SectionLayout>
  );
};

export default Services;
