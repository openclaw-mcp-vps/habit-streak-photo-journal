import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Habit Streak Photo Journal — Visual Habit Tracking with Photo Proof",
  description: "Track your habits with photo evidence. Build streaks, stay accountable, and create a visual journal of your progress. Only $7/mo.",
  openGraph: {
    title: "Habit Streak Photo Journal",
    description: "Visual habit tracking with photo proof. Build streaks and stay accountable.",
    type: "website"
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="877ef205-5652-4e5b-a253-19e23ccdcf2b"></script>
      </head>
      <body>{children}</body>
    </html>
  );
}
