import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SEO Title",
  description: "SEO Description",
};

export default function AboutPage() {
  return <span className="text-5xl font-bold">About Page</span>;
}
