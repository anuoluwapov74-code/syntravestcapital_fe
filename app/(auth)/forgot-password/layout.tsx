import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Forgot Password",
  description: "Reset your SyntraVestCapitals account password. Enter your email address and we will send you a link to regain access to your copy trading account.",
  alternates: { canonical: "https://syntravestcapital.com/forgot-password" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Reset Your SyntraVestCapitals Password",
    description: "Regain access to your SyntraVestCapitals copy trading account.",
    url: "https://syntravestcapital.com/forgot-password",
  },
};

export default function ForgotPasswordLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
