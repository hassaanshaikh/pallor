import { Scissors, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    {
      title: "Hair Styling",
      // price: "From $50",
      desc: "Professional hair cuts, coloring & treatments",
      icon: Scissors,
    },
    {
      title: "Facial & Skin Care",
      // price: "From $60",
      desc: "Relaxing and rejuvenating skin services",
      icon: Sparkles,
    },
    {
      title: "Manicure & Pedicure",
      // price: "From $35",
      desc: "Complete nail care & spa experience",
      icon: Sparkles,
    },
    {
      title: "Makeup & Styling",
      // price: "From $80",
      desc: "Event & bridal makeup services",
      icon: Sparkles,
    },
  ];

  return (
    <div className="pt-32 pb-20 px-6">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center mb-4 bg-linear-to-r from-pink-500 to-purple-600 bg-clip-text text-transparent">
          Our Services
        </h1>

        <p className="text-center text-gray-600 mb-12">
          Premium beauty services designed for you
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-linear-to-br from-pink-50 to-purple-50 p-6 rounded-2xl hover:shadow-xl transition hover:scale-105"
              >
                <div className="w-14 h-14 mb-4 rounded-full bg-linear-to-r from-pink-500 to-purple-600 flex items-center justify-center">
                  <Icon className="text-white w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-2">{service.title}</h3>
                <p className="text-gray-600 mb-2">{service.desc}</p>
                <p className="text-pink-600 font-bold">{service.price}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
