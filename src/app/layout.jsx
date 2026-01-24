import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Footer from "../components/shared/Footer";
import NextAuthProvider from "@/provider/NextAuthProvider";
import Navbar from "@/components/shared/Navbar";
import { Slide, ToastContainer } from "react-toastify";

const poppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Next Shop",
  description: "Here you can get some awesome items for your need.",
};

export default function RootLayout({ children }) {
  return (
    <NextAuthProvider>
      <html lang="en">
        <body
          className={`${poppins.className} antialiased min-h-screen  flex flex-col`}
        >
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            newestOnTop={false}
            closeOnClick={false}
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
            transition={Slide}
          />
          <header>
            <Navbar />
          </header>
          <main className="flex-1">{children}</main>
          <footer>
            <Footer />
          </footer>
        </body>
      </html>
    </NextAuthProvider>
  );
}
