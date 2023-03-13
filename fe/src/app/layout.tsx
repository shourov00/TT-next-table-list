import React from "react";

import { Inter } from "@next/font/google";

import Header from "@/components/Header";

import "../../styles/globals.scss";

import { ActivitiesProvider } from "@/providers/ActivitiesProvider";

// If loading a variable font, you don't need to specify the font weight
const inter = Inter();

export default function RootLayout({
 children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={inter.className}>
    <body className="">
    <ActivitiesProvider>
      <div className="">
        <Header />

        <div>{children}</div>
      </div>
    </ActivitiesProvider>
    </body>
    </html>
  );
}
