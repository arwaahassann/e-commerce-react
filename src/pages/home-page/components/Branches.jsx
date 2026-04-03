function Branches() {
  const branches = [
    { city: "Cairo", address: "123 Tahrir St, Downtown Cairo", phone: "+20 2 1234 5678", hours: "9 AM – 10 PM" },
    { city: "Alexandria", address: "45 Corniche Rd, Sidi Gaber", phone: "+20 3 9876 5432", hours: "9 AM – 10 PM" },
    { city: "Port Said", address: "7 El Gomhoreya St, Port Said", phone: "+20 66 333 4444", hours: "10 AM – 9 PM" },
  ];

  return (
    <section className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12">
          <span className="text-red-600 font-bold text-sm uppercase tracking-widest">Find Us</span>
          <h2 className="text-4xl font-black text-gray-900 mt-3">Our Branches</h2>
          <p className="text-gray-400 mt-2">Visit us at one of our locations</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {branches.map(({ city, address, phone, hours }) => (
            <div
              key={city}
              className="border border-gray-100 rounded-2xl p-8 hover:shadow-lg transition-all hover:border-red-100 group"
            >
              <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-4 group-hover:bg-red-600 transition-all">
                <span className="text-lg">📍</span>
              </div>
              <h3 className="text-xl font-black text-gray-900 mb-4">{city}</h3>
              <div className="flex flex-col gap-2 text-sm text-gray-500">
                <div className="flex items-center gap-2">
                  <span>🏠</span>
                  <span>{address}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>📞</span>
                  <span>{phone}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span>🕐</span>
                  <span>{hours}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Branches;
