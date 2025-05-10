"use client";

import SectionLayout from "@/layouts/section-layout";
import { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

type TabContent = {
  title: string;
  sections: TabContent[] | null;
};

type ServicesContent = {
  tabs: {
    founders: TabContent;
    investors: TabContent;
  };
};

// Services content data
const servicesData: ServicesContent = {
  tabs: {
    founders: {
      title: "Services for Founders",
      sections: [
        {
          title: "Entry Requirements",
          sections: [
            {
              title: "Sign up for the Distill Labs Program",
              sections: null
            },
            {
              title: "Participate based on the following equity model:",
              sections: [
                {
                  title: "General AI projects: 2% equity",
                  sections: null
                },
                {
                  title: "Web3 projects: 4% token allocation",
                  sections: null
                }
              ]
            }
          ]
        },
        {
          title: "Core Benefits",
          sections: [
            {
              title: "Bi-monthly Fundraising Meetups",
              sections: [
                {
                  title: "Exclusive closed-door pitch sessions organized by Distill Labs",
                  sections: null
                },
                {
                  title: "Founders can present directly to selected investors and pitch their product, team, and fundraising plan",
                  sections: null
                }
              ]
            },
            {
              title: "Annual GenAI Summit Booth Access",
              sections: [
                {
                  title: "Complimentary booth at GenAI Summit, the largest AI tech conference in Silicon Valley",
                  sections: null
                },
                {
                  title: "Valued at $9,999+, reaching 1,000+ investors, 10,000+ attendees, and major tech media",
                  sections: null
                },
                {
                  title: "Enables fundraising, partnership development, and broad market exposure",
                  sections: null
                }
              ]
            },
            {
              title: "Main Stage Speaking Opportunity at GenAI Summit",
              sections: [
                {
                  title: "A 30-minute presentation on the main stage (audience: 1,000+)",
                  sections: null
                },
                {
                  title: "Valued at $9,999+, offering high-profile exposure and investor attention",
                  sections: null
                }
              ]
            },
            {
              title: "Investor Network Access & Fundraising Support",
              sections: [
                {
                  title: "Gain access to Distill Labs's private investor database",
                  sections: null
                },
                {
                  title: "Receive personalized warm introductions and strategic fundraising coaching (e.g., pitch deck polishing, valuation strategy, deal structuring)",
                  sections: null
                }
              ]
            }
          ]
        },
        {
          title: "Optional Add-on Services ($1,000/month)",
          sections: [
            {
              title: "1–2 private investor meetings arranged per month",
              sections: null
            },
            {
              title: "Access to dedicated physical office space at our Palo Alto headquarters",
              sections: null
            },
            {
              title: "Priority recommendation for media coverage, awards, global startup rankings, and other high-exposure channels",
              sections: null
            }
          ]
        }
      ]
    },
    investors: {
      title: "Services for Investors",
      sections: [
        {
          title: "Terms",
          sections: [
            {
              title: "No upfront or annual fees required",
              sections: null
            },
            {
              title: "Share your investment preferences, and we'll handle the project sourcing and screening",
              sections: null
            }
          ]
        },
        {
          title: "Core Benefits",
          sections: [
            {
              title: "Bi-monthly Startup Showcases",
              sections: [
                {
                  title: "Free invitation to project meet-ups hosted by Distill Labs",
                  sections: null
                },
                {
                  title: "Early access to high-potential AI and Web3 investment opportunities",
                  sections: null
                }
              ]
            },
            {
              title: "1-on-1 Deal Introductions",
              sections: [
                {
                  title: "Schedule private meetings with selected startup teams based on your specific investment preferences",
                  sections: null
                },
                {
                  title: "Receive internal project materials, valuation insights, and progress updates",
                  sections: null
                }
              ]
            },
            {
              title: "Success-Based Fee Model",
              sections: [
                {
                  title: "No payment required unless a referred deal leads to a profitable exit",
                  sections: null
                },
                {
                  title: "Distill Labs takes a 10% share of net profit upon exit (No Win, No Fee)",
                  sections: null
                }
              ]
            }
          ]
        }
      ]
    }
  }
};

const SectionContent = ({ section }: { section: TabContent }) => {
  const [isOpen, setIsOpen] = useState(true);
  if (section.sections && section.sections.length > 0) {
    return (
      <div className="w-full animate-fadeIn text-left flex flex-col gap-4">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="cursor-pointer flex items-start w-full text-left font-medium hover:text-primary transition-colors"
        >
          {isOpen ? <ChevronDown className="mt-1 w-4 h-4 mr-2 flex-shrink-0" /> : <ChevronRight className="mt-1 w-4 h-4 mr-2 flex-shrink-0" />}
          {section.title}
        </button>
        {isOpen && (
          <div className="w-full pl-4 flex flex-col gap-4">
            {section.sections.map((section, idx) => (
              <SectionContent key={idx + section.title} section={section} />
            ))}
          </div>
        )}
      </div>
    );
  }
  return (
    <div className="w-full animate-fadeIn text-left">
      <div className="flex items-start w-full text-left font-medium hover:text-primary transition-colors">
        <div className="mt-2 w-2 h-2 bg-black rounded-full mr-2 flex-shrink-0"></div>
        {section.title}
      </div>
    </div>
  );
};

const Services = () => {
  const [activeTab, setActiveTab] = useState<"founders" | "investors">("founders");
  const { tabs } = servicesData;

  return (
    <SectionLayout title="Services">
      <div className="w-full flex flex-col gap-8 items-center justify-center max-w-5xl mx-auto">
        <div className="text-center mb-6">
          <h2 className="text-3xl font-bold mb-4">Distill Labs Program</h2>
          <p className="text-lg max-w-3xl">
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

        <SectionContent section={tabs[activeTab]} />
      </div>
    </SectionLayout>
  );
};

export default Services;
