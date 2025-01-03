import "./globals.css";
import Navbar from "./components/Navbar";
import Counter from "@/client-components/counter";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col items-center gap-5">
        <Navbar />
        <h1 className="mt-4 text-green-700">بسم الله الرحمن الرحيم</h1>

        {children}
        <Counter />
        <footer>Footer</footer>
      </body>
    </html>
  );
}
