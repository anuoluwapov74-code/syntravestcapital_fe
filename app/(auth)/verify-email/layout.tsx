import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Verify Email",
  description: "Verify your email address to activate your SyntraVestCapitals account and start copy trading.",
  alternates: { canonical: "https://syntravestscapital.com/verify-email" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Verify Your SyntraVestCapitals Email",
    description: "Activate your SyntraVestCapitals account by verifying your email address.",
    url: "https://syntravestscapital.com/verify-email",
  },
};

export default function VerifyEmailLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
