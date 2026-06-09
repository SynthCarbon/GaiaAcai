import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'Gaia Açaí | Fresh, Plant-Based, Made Daily',
  description: 'Premium Açaí Bowls & Sorbets Crafted With Real Fruits in Singapore.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-gaia-cream text-gray-800 font-sans min-h-screen flex flex-col">
        <header className="bg-gaia-brown text-white py-4 shadow-md sticky top-0 z-50">
          <div className="container mx-auto px-6 flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold text-gaia-green tracking-wide">
              GAIA AÇAÍ
            </Link>
            <nav className="space-x-6 hidden md:block text-sm font-medium">
              <Link href="/" className="hover:text-gaia-green transition">Home</Link>
              <Link href="/menu" className="hover:text-gaia-green transition">Menu</Link>
              <Link href="#location" className="hover:text-gaia-green transition">Location</Link>
            </nav>
            <a 
              href="[foodpanda.sg](https://foodpanda.sg)" 
              target="_blank" 
              className="bg-gaia-green text-white px-5 py-2 rounded-full font-bold hover:bg-green-600 transition"
            >
              Order Now
            </a>
          </div>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="bg-gaia-brown text-white py-8 mt-12">
          <div className="container mx-auto px-6 text-center md:flex md:justify-between">
            <p>&copy; {new Date().getFullYear()} Gaia Açaí. All rights reserved.</p>
            <p>109 Lorong 1 Toa Payoh #01-302 Singapore 310109</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
