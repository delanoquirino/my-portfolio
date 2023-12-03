"use client";
import { Roboto } from "next/font/google";
import "./globals.css";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/lib/apollo";

const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <ApolloProvider client={client}>
          {children}
        </ApolloProvider>
      </body>
    </html>
  );
}
