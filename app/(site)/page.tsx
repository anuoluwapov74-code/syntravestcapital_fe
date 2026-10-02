import type { Metadata } from "next";
import CTASection from "@/components/site/CTASection";
import FAQSection from "@/components/site/Faqsection";
import FeaturesSection from "@/components/site/FeaturesSection";
import Footer from "@/components/site/Footer";
import HeroSection from "@/components/site/HeroSection";
import HowItWorks from "@/components/site/HowItWorks";
import LiquidityProvidersSection from "@/components/site/LiquidityProvidersSection";
import Navbar from "@/components/site/Navbar";
import StatsSection from "@/components/site/StatsSection";
// import TeamSection from "@/components/site/TeamSection";
import TradersSection from "@/components/site/TradersSecion";
import TrustSection from "@/components/site/TrustSection";
import WhatYouCanCopy from "@/components/site/WhatYouCanCopy";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import PagePreloader from "@/components/PagePreloader";

export const metadata: Metadata = {
  title: "Copy Futures, Options & Contracts with Precision",
  description:
    "SyntraVestCapitals lets you mirror real-time stock, futures, and options trades from top-performing experts. AutoGuard™ protection, AI signals, zero commission — start copy trading today.",
  alternates: { canonical: "https://syntravestcapital.com" },
  openGraph: {
    title: "SyntraVestCapitals — Copy Futures, Options & Contracts with Precision",
    description:
      "Mirror real-time trades from top experts. AutoGuard™ risk management, AI signals, zero commission.",
    url: "https://syntravestcapital.com",
    images: [{ url: "https://syntravestcapital.com/opengraph-image.png", width: 1200, height: 630, alt: "SyntraVestCapitals Copy Trading Platform" }],
  },
};

export default function Home() {
  return (
    <PagePreloader>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": "https://syntravestcapital.com/#organization",
                name: "SyntraVestCapitals",
                url: "https://syntravestcapital.com",
                logo: {
                  "@type": "ImageObject",
                  url: "https://syntravestcapital.com/android-chrome-512x512.png",
                },
                sameAs: [],
                description:
                  "SyntraVestCapitals is a copy trading platform for futures, options, and contracts. Mirror trades from top-performing experts with real-time precision.",
              },
              {
                "@type": "WebSite",
                "@id": "https://syntravestcapital.com/#website",
                url: "https://syntravestcapital.com",
                name: "SyntraVestCapitals",
                publisher: { "@id": "https://syntravestcapital.com/#organization" },
                potentialAction: {
                  "@type": "SearchAction",
                  target: {
                    "@type": "EntryPoint",
                    urlTemplate: "https://syntravestcapital.com/explore-traders?q={search_term_string}",
                  },
                  "query-input": "required name=search_term_string",
                },
              },
              {
                "@type": "WebPage",
                "@id": "https://syntravestcapital.com/#webpage",
                url: "https://syntravestcapital.com",
                name: "SyntraVestCapitals — Copy Futures, Options & Contracts with Precision",
                isPartOf: { "@id": "https://syntravestcapital.com/#website" },
                about: { "@id": "https://syntravestcapital.com/#organization" },
                description:
                  "Mirror real-time stock and options trades from top-performing traders. Precision, flexibility, and transparency — straight to your fingertips.",
              },
              {
                "@type": "FAQPage",
                mainEntity: [
                  {
                    "@type": "Question",
                    name: "What is SyntraVestCapitals?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "SyntraVestCapitals is a copy trading platform that lets you mirror real-time trades from top-performing expert traders across futures, options, and contracts.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "How does copy trading work on SyntraVestCapitals?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "Sign up, choose an expert trader, set your investment amount, and SyntraVestCapitals automatically mirrors every trade they make in your portfolio in real time.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "What is AutoGuard™?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "AutoGuard™ is SyntraVestCapitals's proprietary risk management system that applies automatic stop-loss, trailing stops, and position-size limits to every copied trade.",
                    },
                  },
                  {
                    "@type": "Question",
                    name: "Does SyntraVestCapitals charge commission?",
                    acceptedAnswer: {
                      "@type": "Answer",
                      text: "No. SyntraVestCapitals charges zero commission on US equity trades. There are no per-trade fees and no hidden charges.",
                    },
                  },
                ],
              },
            ],
          }),
        }}
      />
      <Navbar />
      <main className="pt-16 lg:pt-20">
        <HeroSection />
        <StatsSection />
        <HowItWorks />
        <WhyChooseUs />
        <TradersSection />
        <FeaturesSection />
        <WhatYouCanCopy />
        <FAQSection />
        {/* <TeamSection /> */}
        <TrustSection />
        <CTASection />
        <LiquidityProvidersSection />
        <Footer />
      </main>
    </PagePreloader>
  );
}
