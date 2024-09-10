import type { Metadata } from "next";
import { roboto_font } from "@/config/fonts";


export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface Props {
  children: Readonly<React.ReactNode>
}
export default function RootLayout({ children }: Props) {
  return (
    <html lang="en" className={roboto_font.className}>
      <body>
        {children}
      </body>
    </html>
  );
}
