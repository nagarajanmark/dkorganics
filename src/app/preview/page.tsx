import type { Metadata } from "next";
import { HomeExperience } from "@/components/HomeExperience";

export const metadata: Metadata = {
  title: "Preview | DK ORGANICS",
  robots: {
    index: false,
    follow: false,
  },
};

export default function PreviewPage() {
  return <HomeExperience />;
}

