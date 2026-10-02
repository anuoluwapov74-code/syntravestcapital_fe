import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reset Password",
  description: "Set a new password for your SyntraVestCapitals account.",
  alternates: { canonical: "https://syntravestcapital.com/reset-password" },
  robots: { index: false, follow: false },
  openGraph: {
    title: "Set a New SyntraVestCapitals Password",
    description: "Create a new password for your SyntraVestCapitals copy trading account.",
    url: "https://syntravestcapital.com/reset-password",
  },
};

export default function ResetPasswordLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
