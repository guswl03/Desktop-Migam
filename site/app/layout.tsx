import type { Metadata } from "next";
import "./globals.css";
import "./focus.css";
import "./brand-icon.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://guswl03.github.io/Desktop-Migam/"),
  title: "Desktop Migam — 집중하는 당신 곁의 작은 친구",
  description: "집중 타이머, 할 일, 감챠와 코스튬 수집을 함께하는 데스크톱 펫 Desktop Migam을 만나보세요.",
  icons: {
    icon: "app-icon.png",
    apple: "app-icon.png",
  },
  openGraph: {
    title: "Desktop Migam",
    description: "집중하는 당신 곁의 작은 데스크톱 친구",
    type: "website",
    locale: "ko_KR",
    images: [{ url: "og-v2.png", width: 1200, height: 630, alt: "노트북으로 집중하는 Desktop Migam 감자 캐릭터" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Desktop Migam",
    description: "집중하는 당신 곁의 작은 데스크톱 친구",
    images: ["og-v2.png"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="ko"><body>{children}</body></html>;
}
