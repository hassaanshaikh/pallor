export default function Home() {
  return (
    <main>

      {/* ================= HERO / BRAND STATEMENT ================= */}
      <section className="py-28 px-6 bg-linear-to-br from-pink-50 via-purple-50 to-white">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-linear-to-r from-pink-500 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
            Your Beauty, Your Confidence
          </h1>

          <p className="text-xl text-gray-600 mb-6">
            A modern space where Rk Ghazi, comfort, and style come together.
          </p>

          <p className="uppercase tracking-widest text-sm text-gray-500">
            Premium Beauty • Modern Style • Confidence
          </p>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4">
            Why Choose Rk Ghazi
          </h2>
          <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
            Because beauty deserves expertise, care, and a luxurious experience.
          </p>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Expert Professionals",
              "Luxury Environment",
              "Modern Trends",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl hover:shadow-xl transition"
              >
                <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-linear-to-r from-pink-500 to-purple-600"></div>
                <h3 className="text-xl font-bold mb-2">{item}</h3>
                <p className="text-gray-600">
                  Designed to give you confidence and comfort.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= BRAND EXPERIENCE ================= */}
      <section className="py-24 px-6 bg-linear-to-br from-pink-50 via-purple-50 to-white">
        <div className="container mx-auto grid md:grid-cols-2 gap-14 items-center">
          
          <div>
            <h2 className="text-4xl font-bold mb-6">
              More Than a Salon — It’s an Experience
            </h2>
            <p className="text-gray-600 mb-4 leading-relaxed">
              Rk Ghazi is a place where beauty meets confidence.
              Every visit is designed to refresh your look and relax your mind.
            </p>
            <p className="text-gray-600 leading-relaxed">
              From ambiance to service, everything reflects care, quality,
              and modern beauty culture.
            </p>
          </div>

          <div className="h-80 rounded-3xl bg-linear-to-br from-pink-300 to-purple-400 shadow-2xl transition hover:scale-[1.02] relative">
            <span className="absolute bottom-5 right-6 text-white/40 text-sm">
              Rk Ghazi
            </span>
          </div>
        </div>
      </section>

      {/* ================= PRODUCTS WE USE ================= */}
      <section className="py-24 px-6 bg-white">
        <div className="container mx-auto text-center">

          <h2 className="text-4xl font-bold mb-4">
            Products We Use
          </h2>

          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            We work with trusted, salon-grade products chosen for quality,
            safety, and long-lasting results.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
            {[
              "Hair Care",
              "Skin Care",
              "Makeup",
              "Nail Care",
            ].map((item, i) => (
              <div
                key={i}
                className="p-6 rounded-2xl bg-gray-50 hover:shadow-xl transition hover:scale-105"
              >
                <div className="w-28 h-28 mx-auto mb-4 rounded-full bg-linear-to-br from-pink-300 to-purple-400 flex items-center justify-center">
                  <span className="text-white font-semibold text-sm">
                    {item}
                  </span>
                </div>

                <p className="text-gray-600 text-sm uppercase tracking-wider">
                  Professional Grade
                </p>
              </div>
            ))}
          </div>

          <p className="mt-12 text-sm text-gray-500 italic">
            *Product visuals shown for brand trust & representation only
          </p>
        </div>
      </section>

      {/* ================= VISUAL ATTRACTION ================= */}
      <section className="py-28 px-6 bg-linear-to-br from-white to-pink-50">
        <div className="container mx-auto text-center">
          <h2 className="text-5xl font-bold mb-6 bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
            Where Beauty Meets Confidence
          </h2>

          <p className="text-gray-600 mb-16 max-w-2xl mx-auto">
            A visual reflection of Rk Ghazi, comfort, and modern beauty.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "from-pink-300 to-rose-400",
              "from-purple-300 to-indigo-400",
              "from-amber-300 to-orange-400",
              "from-blue-300 to-cyan-400",
            ].map((bg, i) => (
              <div
                key={i}
                className={`h-56 rounded-2xl bg-linear-to-br ${bg} hover:scale-105 transition relative`}
              >
                <span className="absolute bottom-4 right-4 text-white/40 text-xs">
                  Rk Ghazi
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </main>
  );
}
