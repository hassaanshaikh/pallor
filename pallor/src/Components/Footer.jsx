export default function Footer({ setCurrentPage }) {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-20">
      <div className="container mx-auto grid md:grid-cols-3 gap-8 px-6">
        <div>
          <h4 className="font-bold mb-2">RK GHAZI</h4>
          <p className="text-gray-400">Your beauty partner</p>
        </div>

        <div>
          <h4 className="font-bold mb-2">Quick Links</h4>
          {["home","about","services","contact"].map(p => (
            <button
              key={p}
              onClick={() => setCurrentPage(p)}
              className="block text-gray-400 hover:text-white"
            >
              {p}
            </button>
          ))}
        </div>

        <div>
          <h4 className="font-bold mb-2">Contact</h4>
          <p className="text-gray-400">(555) 123-4567</p>
          <p className="text-gray-400">info@elegancesalon.com</p>
        </div>
      </div>

      <p className="text-center text-gray-500 mt-6">
        ©2026 rkghazi
      </p>
    </footer>
  );
}
