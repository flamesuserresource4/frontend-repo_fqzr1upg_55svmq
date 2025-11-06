export default function Footer() {
  return (
    <footer className="bg-rose-50 border-t border-rose-100 py-8">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-rose-900/70 text-sm">© {new Date().getFullYear()} Sweet Donuts. All rights reserved.</p>
        <nav className="flex items-center gap-4 text-sm">
          <a href="#about" className="text-rose-700/80 hover:text-rose-700">Tentang</a>
          <a href="#menu" className="text-rose-700/80 hover:text-rose-700">Menu</a>
          <a href="#promo" className="text-rose-700/80 hover:text-rose-700">Promo</a>
          <a href="#kontak" className="text-rose-700/80 hover:text-rose-700">Kontak</a>
        </nav>
      </div>
    </footer>
  )
}
