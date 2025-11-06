import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Footer from './components/Footer'
import { AboutSection, MenuSection, PromoSection, TestimonialSection, ContactSection } from './components/Sections'

export default function App() {
  return (
    <div className="font-sans text-rose-900 bg-white">
      <Navbar />
      <main>
        <Hero />
        <AboutSection />
        <MenuSection />
        <PromoSection />
        <TestimonialSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}
