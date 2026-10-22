import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Become a Leader Trader — SyntraVestCapitals",
  description: "Share your trading expertise on SyntraVestCapitals and earn from your followers. Apply to become a Leader Trader, set your strategy, and let others copy your success.",
  alternates: { canonical: "https://syntravestscapital.com/leader" },
  openGraph: {
    title: "Become a Leader Trader on SyntraVestCapitals",
    description: "Share your trades, earn from followers, and grow your reputation on SyntraVestCapitals.",
    url: "https://syntravestscapital.com/leader",
  },
};

export default function LeaderLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
