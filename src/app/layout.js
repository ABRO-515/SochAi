


import Header from "@/components/UI/Header";
import "./globals.css";
import Footer from "@/components/UI/Footer";



export const metadata = {
  title: "Soch AI | Chat With AI",
  description: "AI and people like you.",
  icons: {
    icon: '/capture.png',  // Path from /public folder
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
    <body>
      <div className="flex flex-col min-h-screen" >
        <Header />
        <main className="flex-grow" >
          {children}
        </main>
        <Footer />
      </div>
    </body>
    </html>
  );
}