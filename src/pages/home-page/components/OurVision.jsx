function OurVision() {
  return (
    <section className="bg-gradient-to-br from-slate-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* text */}
          <div>
            <span className="text-red-600 font-bold text-sm uppercase tracking-widest">Who We Are</span>
            <h2 className="text-4xl font-black text-gray-900 mt-3 mb-6">Our Vision</h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              We believe that great shopping experiences should be accessible to everyone.
              Our mission is to connect customers with the best products at fair prices,
              delivered with care and trust.
            </p>
            <p className="text-gray-500 text-base leading-relaxed">
              Built on a foundation of quality, transparency, and customer-first thinking —
              we're here to make online shopping simple, safe, and enjoyable.
            </p>
          </div>

          {/* values */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "🎯", title: "Customer First", desc: "Everything we do starts with you" },
              { icon: "✨", title: "Quality Always", desc: "Only the best products make it in" },
              { icon: "🤝", title: "Trust & Safety", desc: "Secure shopping guaranteed" },
              { icon: "🌍", title: "Wide Reach", desc: "Delivering across all regions" },
            ].map(({ icon, title, desc }) => (
              <div key={title} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-all">
                <div className="text-2xl mb-3">{icon}</div>
                <div className="font-bold text-gray-900 text-sm">{title}</div>
                <div className="text-gray-400 text-xs mt-1">{desc}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurVision;
