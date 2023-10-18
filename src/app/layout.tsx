import type { Metadata } from "next";
import Image from "next/image";
import "./globals.scss";
import Link from "next/link";

export const metadata: Metadata = {
  title: "One Peace - Tripulação",
  description:
    "Criando um carrossel parallax do One Piece com React, Next.js 13 e Framer Motion",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <header>
          <Link href="/">
            <Image
              src="/images/One-Piece-Logo.png"
              alt="Logo One Piece"
              width={260}
              height={92}
            />
          </Link>
        </header>
        {children}
      </body>
    </html>
  );
}
