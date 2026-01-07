export default function Home({ setCurrentPage }) {
  return (
    <section className="pt-32 pb-20 bg-linear-to-br from-pink-50 to-purple-50 text-center">
      <h1 className="text-6xl font-bold bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
        Your Beauty Journey Starts Here
      </h1>
      <p className="text-gray-600 mt-6 max-w-xl mx-auto">
        Luxury salon experience with expert stylists
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button className="bg-pink-500 text-white px-8 py-3 rounded-full">
          Book Appointment
        </button>
        <button
          onClick={() => setCurrentPage("services")}
          className="border border-pink-500 px-8 py-3 rounded-full"
        >
          View Services
        </button>
      </div>
    </section>
  );
}
