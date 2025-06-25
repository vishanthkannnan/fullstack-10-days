import { AuthProvider } from "../context/AuthContext"
import Header from "../components/Header"
import Footer from "../components/Footer"
import "./globals.css"
import "../styles/App.css"

export const metadata = {
  title: "Book Review Platform",
  description: "Discover and share book reviews.",
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <div className="video-background">
          <video autoPlay muted loop playsInline>
            <source src="/book.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <div className="overlay"></div>
        </div>
        <AuthProvider>
          <Header />
          <main className="main-content">{children}</main>
          <Footer />
        </AuthProvider>
      </body>
    </html>
  )
}
