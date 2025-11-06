import { useState } from 'react'
import { ShoppingCart, Instagram } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)

  const navItems = [
    { href: '#home', label: 'Beranda' },
    { href: '#about', label: 'Tentang Kami' },
    { href: '#menu', label: 'Menu Donat' },
    { href: '#promo', label: 'Promo & Paket' },
    { href: '#testimoni', label: 'Testimoni' },
    { href: '#kontak', label: 'Kontak' },
  ]

  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-pink-50/70 border-b border-rose-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex items-center gap-2">
            <span className="text-2xl">🍩</span>
            <span className="font-extrabold tracking-tight text-rose-600 text-lg">
              Sweet Donuts
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="text-rose-700/80 hover:text-rose-700 transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#kontak"
              className="inline-flex items-center gap-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full px-4 py-2 text-sm font-semibold shadow-sm shadow-rose-200"
            >
              <ShoppingCart size={16} /> Order Now
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="ml-2 text-rose-600 hover:text-rose-700"
              aria-label="Instagram"
            >
              <Instagram size={20} />
            </a>
          </nav>

          <button
            aria-label="Toggle Menu"
            onClick={() => setOpen((o) => !o)}
            className="md:hidden inline-flex flex-col justify-center gap-1.5 p-2"
          >
            <span className={`h-0.5 w-6 bg-rose-600 transition ${open ? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-rose-600 transition ${open ? 'opacity-0' : ''}`}></span>
            <span className={`h-0.5 w-6 bg-rose-600 transition ${open ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {open && (
          <div className="md:hidden pb-4 animate-in fade-in slide-in-from-top-2">
            <div className="grid gap-2">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-rose-800 hover:bg-rose-100"
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#kontak"
                onClick={() => setOpen(false)}
                className="inline-flex items-center justify-center gap-2 bg-rose-500 hover:bg-rose-600 text-white rounded-full px-4 py-2 text-sm font-semibold shadow-sm shadow-rose-200"
              >
                <ShoppingCart size={16} /> Order Now
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
