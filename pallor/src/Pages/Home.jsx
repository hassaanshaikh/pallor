import p3 from "../assets/p3.jpeg";
import p7 from "../assets/p7.jpeg";
import p4 from "../assets/p4.jpeg";
import p10 from "../assets/p10.jpeg";
import p12 from "../assets/p12.jpeg";
import p1 from "../assets/p1.jpeg";
import p8 from "../assets/p8.jpeg";
import p9 from "../assets/p9.jpeg";

import e1 from "../assets/e1.jpeg";

import c1 from "../assets/c1.jpeg";
import c3 from "../assets/c3.jpeg";

import b2 from "../assets/b2.jpg";
import b3 from "../assets/b3.jpeg";
import b4 from "../assets/b4.jpeg";

export default function Home() {
  return (
    <main>

      {/* ================= HERO / BRAND STATEMENT ================= */}
      <section className="py-36 px-4 bg-linear-to-br from-pink-50 via-purple-50 to-white">
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
            Why Choose RK Ghazi
          </h2>

          <p className="text-gray-600 mb-14 max-w-2xl mx-auto">
            Because your beauty deserves skill, care, and a refined experience.
          </p>

          <div className="grid md:grid-cols-3 gap-10">

          {[
          {
            title: "Certified Beauty Experts",
            img: c1,
            desc: "Handled by trained professionals who understand your style."
          },
          {
            title: "Premium Salon Ambience",
            img: e1,
            desc: "A calm, luxurious space designed for comfort and confidence."
          },
          {
            title: "Trend-Forward Techniques",
            img: c3,
            desc: "Modern beauty methods inspired by global fashion trends."
          },
          
          ].map((item, i) => (
            <div key={i} className="p-6 rounded-2xl hover:shadow-xl transition">

          {/* CIRCLE IMAGE */}
              
              <div className="w-34 h-34 mx-auto mb-5 rounded-full overflow-hidden shadow-md">
                <img src={item.img} alt={item.title} className="h-full w-full object-cover" />
              </div>

              <h3 className="text-xl font-bold mb-2">
                {item.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
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

          <div className="h-80 rounded-3xl shadow-2xl transition hover:scale-[1.02] relative bg-center bg-cover"
            style={{ backgroundImage: `url(${e1})` }} >

            <div className="absolute inset-0 rounded-3xl bg-black/20"></div>
   
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
            { title: "Yaswa Loose Powder", img: p3 },
            { title: "Yaswa Hair Oil", img: p7 },
            { title: "Yaswa Wet Cake", img: p4 },
            { title: "Yaswa Whitening Cream", img: p12 },
            { title: "Yaswa Facial Machine", img: p10 },
            { title: "Yaswa Mousse Base", img: p1 },
            { title: "Yaswa Cosmetics", img: p8 },
            { title: "Yaswa Hydro Beauty", img: p9 },

          ].map((item, i) => (
        <div
          key={i}
          className="rounded-2xl bg-gray-50 hover:shadow-xl transition hover:scale-105 overflow-hidden" >

        {/* IMAGE (FIXED) */}
          <div className="aspect-square bg-white flex items-center justify-center p-4">
            <img src={item.img} alt={item.title} className="max-h-full max-w-full object-contain" />
          </div>

        {/* TEXT */}
          <div className="p-4 text-center">
            <h3 className="text-lg font-semibold">
              {item.title}
            </h3>
            <p className="text-sm text-gray-500 mt-1">
              Professional Products
             </p>
          </div>

        </div>
        ))}
          </div>
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

          {/* boxes */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {/* box1 */}
            <div className="h-56 rounded-2xl overflow-hidden relative group">
              
              <img src={c1} alt="The Rk Ghazi Experience" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <div className="text-left">
                  <h3 className="text-white text-lg font-semibold">
                    The Rk Ghazi Experience
                  </h3>
                  <p className="text-white/80 text-sm">
                    Beauty • Comfort • Confidence
                  </p>
                </div>
              </div>

            </div>

            {/* box2 */}
            <div className="h-56 rounded-2xl overflow-hidden relative group">
              
              <img src={b2} alt="Beauty in Action" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <div className="text-left">
                  <h3 className="text-white text-lg font-semibold">
                    Beauty in Action
                  </h3>
                  <p className="text-white/80 text-sm">
                    Beauty • Comfort • Confidence
                  </p>
                </div>
              </div>

            </div>

            {/* box3 */}
            <div className="h-56 rounded-2xl overflow-hidden relative group">
              
              <img src={b3} alt="Tools and Products" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <div className="text-left">
                  <h3 className="text-white text-lg font-semibold">
                    Tools and Products
                  </h3>
                  <p className="text-white/80 text-sm">
                    Beauty • Comfort • Confidence
                  </p>
                </div>
              </div>

            </div>

            {/* box4 */}
            <div className="h-56 rounded-2xl overflow-hidden relative group">
              
              <img src={b4} alt="Confident Beauty Result" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" />
              <div className="absolute inset-0 bg-black/40 flex items-end p-4">
                <div className="text-left">
                  <h3 className="text-white text-lg font-semibold">
                    Confident Beauty Result
                  </h3>
                  <p className="text-white/80 text-sm">
                    Beauty • Comfort • Confidence
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

    </main>
  );
}

