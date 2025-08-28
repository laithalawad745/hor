// app/page.tsx
import Hero from "../components/Hero";
import Info from "../components/Info";
import Pricing from "../components/Pricing";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#1a0a33] text-white relative overflow-hidden">
      {/* خلفية متحركة */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute top-0 -left-4 w-96 h-96 bg-purple-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob"></div>
        <div className="absolute top-0 -right-4 w-96 h-96 bg-indigo-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-2000"></div>
        <div className="absolute -bottom-8 left-20 w-96 h-96 bg-pink-700 rounded-full mix-blend-multiply filter blur-3xl animate-blob animation-delay-4000"></div>
      </div>

      {/* المحتوى */}
      <div className="relative z-10">
        <Navbar />
        <div id="hero-section" className="pt-[72px]">
          <Hero />
        </div>
        <div id="info-section">
          <Info />
        </div>
        <div id="pricing-section">
          <Pricing />
        </div>
        <Footer />
      </div>
    </div>
  );
}