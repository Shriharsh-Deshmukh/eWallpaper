=== component.jsx ===

/**
 * v0 by Vercel.
 * @see https://v0.dev/t/R3ekqETF9DQ
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function Component() {
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <header className="bg-gray-900 text-white py-4 px-6 flex items-center justify-between">
        <Link className="flex items-center gap-2" href="#">
          <WallpaperIcon className="h-6 w-6" />
          <span className="text-xl font-bold">Wallpapers</span>
        </Link>
        <nav className="flex items-center gap-4">
          <Link className="hover:underline" href="#">
            Explore
          </Link>
          <Link className="hover:underline" href="#">
            Categories
          </Link>
          <Link className="hover:underline" href="#">
            Trending
          </Link>
          <Link className="hover:underline" href="#">
            Upload
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button className="text-white hover:bg-gray-800" variant="outline">
            Sign In
          </Button>
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">Sign Up</Button>
        </div>
      </header>
      <main className="flex-1">
        <section className="bg-gray-900 text-white py-20 px-6 md:px-12 lg:px-20 flex flex-col items-center justify-center">
          <h1 className="text-4xl font-bold mb-4 text-center">Discover the Perfect Wallpaper</h1>
          <p className="text-lg mb-8 text-center">
            Explore our vast collection of high-quality wallpapers for your devices.
          </p>
          <div className="w-full max-w-3xl">
            <form className="flex items-center bg-white rounded-full overflow-hidden">
              <Input
                className="flex-1 px-6 py-4 text-gray-900 focus:outline-none"
                placeholder="Search for wallpapers..."
                type="text"
              />
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-4 rounded-full">
                <SearchIcon className="h-6 w-6" />
              </Button>
            </form>
          </div>
        </section>
        <section className="py-12 px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Trending Wallpapers</h2>
            <Link className="text-blue-500 hover:underline" href="#">
              See more
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" />
        </section>
        <section className="bg-gray-100 py-12 px-6 md:px-12 lg:px-20">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-2xl font-bold">Explore by Category</h2>
            <Link className="text-blue-500 hover:underline" href="#">
              See more
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6" />
        </section>
      </main>
      <footer className="bg-gray-900 text-white py-6 px-6 md:px-12 lg:px-20 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <WallpaperIcon className="h-6 w-6" />
          <span className="text-lg font-bold">Wallpapers</span>
        </div>
        <nav className="flex items-center gap-4">
          <Link className="hover:underline" href="#">
            Home
          </Link>
          <Link className="hover:underline" href="#">
            Explore
          </Link>
          <Link className="hover:underline" href="#">
            Categories
          </Link>
          <Link className="hover:underline" href="#">
            Trending
          </Link>
          <Link className="hover:underline" href="#">
            Upload
          </Link>
        </nav>
        <div className="text-sm text-gray-400">© 2024 Wallpapers. All rights reserved.</div>
      </footer>
    </div>
  )
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  )
}


function WallpaperIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="8" cy="9" r="2" />
      <path d="m9 17 6.1-6.1a2 2 0 0 1 2.81.01L22 15V5a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2" />
      <path d="M8 21h8" />
      <path d="M12 17v4" />
    </svg>
  )
}

=== styles.css ===

body {
  font-family: var(--font-inter), sans-serif;
}

h1, h2, h3, h4, h5, h6 {
  font-family: var(--font-inter), sans-serif;
}

=== layout.jsx ===

// This is the root layout component for your Next.js app.
// Learn more: https://nextjs.org/docs/app/building-your-application/routing/pages-and-layouts#root-layout-required

import { Inter } from 'next/font/google'
import './styles.css'

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
})

export default function Layout({ children }) {
  return (
    <html lang="en">
      <body className={inter.variable}>
        {children}
      </body>
    </html>
  )
}
