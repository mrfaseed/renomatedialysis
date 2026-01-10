import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import "./globals.css";
import { Geist, Geist_Mono, Playfair_Display } from "next/font/google";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sri RamaKrishna's Renomate",
  description: "Advanced Dialysis Solutions For Modern Healthcare",
  icons: {
    icon: '/favicon/cropped-ramakrishna-logo-32x32.png',
    apple: '/favicon/cropped-ramakrishna-logo-180x180.png',
    shortcut: '/favicon/cropped-ramakrishna-logo-32x32.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} ${playfair.variable}`} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
        <Navbar />
        <main style={{ flex: 1 }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
