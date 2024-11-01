

import "./globals.css";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "bootstrap-icons/font/bootstrap-icons.css";
import {Heebo,Inter} from "next/font/google";



const heebo =  Heebo ({subsets: ["latin"],weight:["400","700","900"]});
const inter =  Inter ({subsets: ["latin"],weight:["400","700"]});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={heebo.className}
      >
        <Navigation  font = {inter}/>

        {children}
        <Footer />
      </body>
    </html>
  );
}
