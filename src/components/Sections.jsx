export function AboutSection() {
  return (
    <section id="about" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 grid md:grid-cols-2 gap-10 items-start">
        <div>
          <h2 className="text-3xl font-bold text-rose-700">Tentang Kami</h2>
          <p className="mt-4 text-rose-900/80">
            Sweet Donuts berdiri pada 2015 dari dapur rumahan kecil di sudut kota. Berawal dari kesukaan kami pada donat klasik, kami bereksperimen dengan berbagai resep hingga menemukan adonan yang lembut, empuk, dan wangi.
          </p>
          <p className="mt-3 text-rose-900/80">
            Visi kami adalah menjadi pilihan utama pencinta donat di Indonesia. Misi kami: menyajikan donat premium dengan kualitas terbaik, layanan ramah, dan inovasi rasa yang menyesuaikan selera lokal.
          </p>
          <p className="mt-3 text-rose-900/80">
            Kami berkomitmen menjaga konsistensi rasa, menggunakan bahan segar, tanpa pengawet berlebih, dan diproduksi harian agar selalu fresh ketika dinikmati.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <img className="rounded-xl object-cover h-40 sm:h-48 w-full border border-rose-100" src="https://images.unsplash.com/photo-1602540739691-b330a63a51e3?ixid=M3w3OTkxMTl8MHwxfHNlYXJjaHwxfHxEb25hdCUyMGNva2VsYXR8ZW58MHwwfHx8MTc2MjQwNDgwMXww&ixlib=rb-4.1.0&w=1600&auto=format&fit=crop&q=80" alt="Donat cokelat" />
          <img className="rounded-xl object-cover h-40 sm:h-48 w-full border border-rose-100" src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1200&auto=format&fit=crop" alt="Donat stroberi" />
          <img className="rounded-xl object-cover h-40 sm:h-48 w-full border border-rose-100" src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=1200&auto=format&fit=crop" alt="Donat matcha" />
          <img className="rounded-xl object-cover h-40 sm:h-48 w-full border border-rose-100" src="https://images.unsplash.com/photo-1568051243858-8e4d2c6b3d21?q=80&w=1200&auto=format&fit=crop" alt="Proses membuat donat" />
        </div>
      </div>
    </section>
  )
}

export function MenuSection() {
  const items = [
    {
      name: 'Donat Cokelat',
      desc: 'Glaze cokelat Belgia dengan taburan cokelat serut.',
      price: 15000,
      img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Donat Matcha',
      desc: 'Matcha Jepang dengan white chocolate drizzle.',
      price: 17000,
      img: 'https://images.unsplash.com/photo-1606312618568-c4e5ef0c7519?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Donat Stroberi',
      desc: 'Glaze stroberi asli dengan crumble manis.',
      price: 16000,
      img: 'https://images.unsplash.com/photo-1475855581690-80accde3ae2b?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Donat Keju',
      desc: 'Keju cheddar parut melimpah dengan krim lembut.',
      price: 16000,
      img: 'https://images.unsplash.com/photo-1606312618145-1f2d4d1f15e0?q=80&w=1200&auto=format&fit=crop',
    },
    {
      name: 'Donat Oreo',
      desc: 'Crumble biskuit oreo dan krim vanilla.',
      price: 17000,
      img: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1200&auto=format&fit=crop',
    },
  ]

  return (
    <section id="menu" className="py-16 bg-rose-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-rose-700">Menu Donat</h2>
        <p className="mt-2 text-rose-900/80">Pilih favoritmu — semuanya dibuat fresh setiap hari.</p>

        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((it) => (
            <div key={it.name} className="bg-white rounded-2xl shadow-sm border border-rose-100 overflow-hidden">
              <img src={it.img} alt={it.name} className="h-44 w-full object-cover" />
              <div className="p-4">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h3 className="font-semibold text-rose-800">{it.name}</h3>
                    <p className="text-sm text-rose-900/70 mt-1">{it.desc}</p>
                  </div>
                  <span className="text-rose-600 font-bold whitespace-nowrap">Rp{it.price.toLocaleString('id-ID')}</span>
                </div>
                <a href="#kontak" className="mt-4 inline-block rounded-full bg-rose-500 hover:bg-rose-600 text-white text-sm font-semibold px-4 py-2">Pesan</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function PromoSection() {
  const promos = [
    { title: 'Promo Mingguan', desc: 'Beli 5 gratis 1 setiap hari Jumat.', icon: '🌟' },
    { title: 'Paket Ulang Tahun', desc: 'Box 24 pcs + topper ulang tahun, hanya Rp280.000.', icon: '🎂' },
    { title: 'Diskon Grosir', desc: 'Potongan 15% untuk pembelian di atas 50 pcs.', icon: '📦' },
  ]

  return (
    <section id="promo" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-rose-700">Promo & Paket</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {promos.map((p) => (
            <div key={p.title} className="rounded-2xl border border-rose-100 bg-rose-50/50 p-6">
              <div className="text-3xl">{p.icon}</div>
              <h3 className="mt-2 font-semibold text-rose-800">{p.title}</h3>
              <p className="text-rose-900/80 mt-1">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function TestimonialSection() {
  const testimonials = [
    { name: 'Rani', rating: 5, text: 'Donatnya empuk dan ga enek. Favoritku yang matcha!' },
    { name: 'Andre', rating: 4, text: 'Rasanya konsisten, pelayanan cepat. Recommended.' },
    { name: 'Siska', rating: 5, text: 'Paket ulang tahunnya lucu dan anak-anak suka semua.' },
  ]

  return (
    <section id="testimoni" className="py-16 bg-rose-50/40">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-rose-700">Testimoni Pelanggan</h2>
        <div className="mt-8 grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-white rounded-2xl border border-rose-100 p-6 shadow-sm">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-rose-800">{t.name}</h3>
                <div className="text-amber-400" aria-label={`${t.rating} bintang`}>
                  {'★'.repeat(t.rating)}
                </div>
              </div>
              <p className="text-rose-900/80 mt-2">{t.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export function ContactSection() {
  return (
    <section id="kontak" className="py-16 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <h2 className="text-3xl font-bold text-rose-700">Kontak & Pemesanan</h2>
        <div className="mt-8 grid md:grid-cols-2 gap-8">
          <form onSubmit={(e) => e.preventDefault()} className="bg-rose-50/50 border border-rose-100 rounded-2xl p-6">
            <div className="grid gap-4">
              <div>
                <label className="block text-sm font-medium text-rose-800">Nama</label>
                <input required className="mt-1 w-full rounded-lg border border-rose-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" placeholder="Nama Anda" />
              </div>
              <div>
                <label className="block text-sm font-medium text-rose-800">Nomor WhatsApp</label>
                <input required type="tel" className="mt-1 w-full rounded-lg border border-rose-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" placeholder="08xxxxxxxxxx" />
              </div>
              <div>
                <label className="block text-sm font-medium text-rose-800">Pesanan</label>
                <textarea rows={4} className="mt-1 w-full rounded-lg border border-rose-200 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-rose-300" placeholder="Contoh: 1 lusin Donat Cokelat, 1/2 lusin Donat Oreo"></textarea>
              </div>
              <button className="rounded-full bg-rose-500 hover:bg-rose-600 text-white font-semibold px-5 py-2.5">
                Kirim Pesanan
              </button>
            </div>
          </form>

          <div className="space-y-4">
            <div className="rounded-2xl border border-rose-100 p-6">
              <h3 className="font-semibold text-rose-800">Hubungi Kami</h3>
              <p className="text-rose-900/80 mt-2">WhatsApp: <a href="https://wa.me/6281234567890" className="text-rose-600 hover:underline">+62 812-3456-7890</a></p>
              <p className="text-rose-900/80">Instagram: <a href="https://instagram.com/sweetdonuts" className="text-rose-600 hover:underline" target="_blank" rel="noreferrer">@sweetdonuts</a></p>
            </div>
            <div className="rounded-2xl border border-rose-100 p-6">
              <h3 className="font-semibold text-rose-800">Alamat & Jam Operasional</h3>
              <p className="text-rose-900/80 mt-2">Jl. Manis No. 12, Sweet Town, Indonesia</p>
              <p className="text-rose-900/80">Buka setiap hari: 09.00 - 21.00 WIB</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
