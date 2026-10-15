import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Log In",
  description: "Log in to your SyntraVestCapitals account and start copying expert traders in real time. Access your portfolio, manage positions, and grow with SyntraVestCapitals.",
  alternates: { canonical: "https://syntravestcapitals.com/login" },
  robots: { index: true, follow: false },
  openGraph: {
    title: "Log In to SyntraVestCapitals",
    description: "Access your SyntraVestCapitals copy trading account.",
    url: "https://syntravestcapitals.com/login",
  },
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
