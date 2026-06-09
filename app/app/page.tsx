import Link from 'next/link'

export default function Home() {
  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gaia-brown text-white py-32 flex items-center justify-center text-center overflow-hidden">
        {/* Placeholder for large background image */}
        <div className="absolute inset-0 bg-black opacity-50 z-0 border-b-8 border-gaia-purple"></div> 
        <div className="relative z-10 space-y-6 px-4">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight">
            Fresh. Plant-Based. <br /> Made Daily.
          </h1>
          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto">
            Premium Açaí Bowls & Sorbets Crafted With Real Fruits.
          </p>
          <div className="flex justify-center gap-4 mt-8">
            <a href="[foodpanda.sg](https://foodpanda.sg)" className="bg-gaia-green px-8 py-3 rounded-full text-lg font-bold hover:bg-green-600 transition shadow-lg">
              Order Now
            </a>
            <Link href="/menu" className="bg-white text-gaia-brown px-8 py-3 rounded-full text-lg font-bold hover:bg-gray-100 transition shadow-lg">
              View Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Why Gaia Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 text-center">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="space-y-4">
              <span className="text-5xl">🥭</span>
              <h3 className="text-xl font-bold text-gaia-brown">Fresh Fruits Daily</h3>
              <p className="text-gray-600">Sourced for peak ripeness to top every bowl.</p>
            </div>
            <div className="space-y-4">
              <span className="text-5xl">🌱</span>
              <h3 className="text-xl font-bold text-gaia-brown">100% Plant-Based</h3>
              <p className="text-gray-600">Pure, natural ingredients that fuel your body right.</p>
            </div>
            <div className="space-y-4">
              <span className="text-5xl">💜</span>
              <h3 className="text-xl font-bold text-gaia-brown">Premium Açaí Blend</h3>
              <p className="text-gray-600">A thick, antioxidant-rich base that sets us apart.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-gaia-brown text-center mb-12">Our Best Sellers</h2>
          <div className="grid md:grid-cols-4 gap-8">
            {['N.1 Fruits Bowl', 'N.5 Coconut', 'N.8 Mango', 'N.9 Banana Cacao'].map((bowl, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition">
                <div className="h-48 bg-gray-200 flex items-center justify-center text-gray-400">
                  {/* Replace with actual Next.js Image component */}
                  [Image: {bowl}]
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gaia-brown">{bowl}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews Section */}
      <section className="py-20 bg-gaia-purple text-white">
        <div className="container mx-auto px-6 text-center space-y-8">
          <h2 className="text-3xl font-bold">What Our Customers Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white text-gaia-brown p-6 rounded-xl shadow-lg">&ldquo;Best Açaí in SG.&rdquo;</div>
            <div className="bg-white text-gaia-brown p-6 rounded-xl shadow-lg">&ldquo;Fruits so fresh.&rdquo;</div>
            <div className="bg-white text-gaia-brown p-6 rounded-xl shadow-lg">&ldquo;Portion is generous.&rdquo;</div>
          </div>
        </div>
      </section>
    </div>
  )
}
