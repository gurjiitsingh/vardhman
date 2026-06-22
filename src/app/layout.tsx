import "@/app/globals.css";
import { Lato } from "next/font/google";

const lato = Lato({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
      <html lang="en" translate="no">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Days+One&family=Dosis&family=Quicksand&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Dosis:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>

      <body    className={`${lato.className} bg-white text-[#2b2b2b]  overflow-x-hidden mt-26`}   suppressHydrationWarning>
        <div className="w-full overflow-x-hidden">
      {children}
      </div>
      </body>
    </html>
  );
}