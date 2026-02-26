import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "LUCI - See, Remember & Act",
  description: "LUCI 记住一切，然后自动把事情做了。不只是记录工具 — 是积累记忆、自动执行的个人 AI 助手。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&family=DM+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap" rel="stylesheet" />
      </head>
      <body className="h-full antialiased">
        {children}
      </body>
    </html>
  );
}
