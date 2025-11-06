export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-amber-50">
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute -top-20 -left-20 size-72 rounded-full bg-rose-200/40 blur-3xl" />
        <div className="absolute -bottom-10 -right-10 size-72 rounded-full bg-amber-200/40 blur-3xl" />
      </div>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-rose-700 leading-tight">
            Fresh & Sweet Everyday
          </h1>
          <p className="mt-4 text-rose-900/80 text-lg">
            Donat handmade dari bahan premium, digoreng sempurna dan diberi topping favorit Anda. Manis, lembut, dan selalu fresh setiap hari.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <a href="#kontak" className="inline-flex items-center justify-center rounded-full bg-rose-500 px-6 py-3 text-white font-semibold shadow-sm shadow-rose-200 hover:bg-rose-600">
              Order Now
            </a>
            <a href="#menu" className="inline-flex items-center justify-center rounded-full border border-rose-200 px-6 py-3 text-rose-700 font-semibold hover:bg-rose-100">
              Lihat Menu
            </a>
          </div>
        </div>
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1509460913899-35efbe0b422b?q=80&w=1600&auto=format&fit=crop"
            alt="Ilustrasi donat beraneka rasa"
            className="w-full h-72 sm:h-96 object-cover rounded-3xl shadow-xl border border-rose-100"
          />
        </div>
      </div>
    </section>
  )
}
