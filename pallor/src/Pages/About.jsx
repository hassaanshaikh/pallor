export default function About() {
  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold text-center mb-10 bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          About Elegance Salon
        </h1>

        <div className="bglinear-to-br from-pink-50 to-purple-50 p-8 rounded-2xl mb-10">
          <h2 className="text-3xl font-bold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Established in 2010, Elegance Salon has been providing premium beauty
            services with passion and professionalism. We focus on comfort,
            confidence, and personalized care.
          </p>
          <p className="text-gray-700 leading-relaxed">
            Our mission is to help every client look and feel their best using
            modern techniques and high-quality products.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-pink-600 mb-3">
              Our Mission
            </h3>
            <p className="text-gray-700">
              Enhance natural beauty and build confidence through expert service
              and care.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-2xl font-bold text-purple-600 mb-3">
              Our Values
            </h3>
            <p className="text-gray-700">
              Quality, creativity, honesty, and customer satisfaction in every
              service.
            </p>
          </div>
        </div>

        <div className="bg-linear-to-r from-pink-500 to-purple-600 text-white p-8 rounded-2xl text-center">
          <h3 className="text-3xl font-bold mb-4">Meet Our Team</h3>
          <p className="mb-6">
            Our professional stylists stay updated with the latest trends and
            techniques to deliver perfect results.
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:shadow-lg">
            Book With Us
          </button>
        </div>
      </div>
    </div>
  );
}
