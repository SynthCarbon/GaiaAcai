const classics = [
  { name: 'N.1 Fruits Bowl', price: '$12.60', inc: 'Açaí, Granola, Banana, Strawberries, Blueberries, Dragonfruit, Kiwi, Goji berries, Toasted coconut flakes' },
  { name: 'N.2 Crunch Bowl', price: '$12.60', inc: 'Banana, Almond flakes, Oreo crunch, Biscoff crunch, Peanut crunch' },
  { name: 'N.3 Nuts Bowl', price: '$12.60', inc: 'Banana, Almond flakes, Walnuts, Cacao nibs, Biscoff crunch' },
  { name: 'N.4 Biscoff Bowl', price: '$12.60', inc: 'Banana, Strawberries, Dragonfruit, Biscoff crunch, Lotus biscuit' }
];

const signatures = [
  { name: 'N.5 Coconut', price: '$13.60', inc: 'Coconut sorbet, Strawberries, Banana, Dragonfruit, Biscoff crunch, Toasted coconut flakes' },
  { name: 'N.8 Mango', price: '$13.60', inc: 'Mango sorbet, Banana, Strawberries, Red dragonfruit, Peanut crunch, Toasted coconut flakes' },
  { name: 'N.9 Banana Cacao', price: '$13.60', inc: 'Banana cacao sorbet, Banana, Blueberries, Dragonfruit, Oreo crunch, Cacao nibs' }
];

export default function Menu() {
  return (
    <div className="container mx-auto px-6 py-16 max-w-5xl">
      <h1 className="text-5xl font-extrabold text-gaia-brown text-center mb-16">Our Menu</h1>

      {/* Classics Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gaia-purple border-b-2 border-gaia-purple pb-2 mb-8">Classics</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {classics.map((item) => (
            <div key={item.name} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gaia-brown">{item.name}</h3>
                <span className="font-semibold text-gaia-green">From {item.price}</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">Includes choice of drizzle.</p>
              <p className="text-gray-700">{item.inc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Signatures Section */}
      <section className="mb-16">
        <h2 className="text-3xl font-bold text-gaia-purple border-b-2 border-gaia-purple pb-2 mb-8">Signature Bowls</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {signatures.map((item) => (
            <div key={item.name} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-xl font-bold text-gaia-brown">{item.name}</h3>
                <span className="font-semibold text-gaia-green">From {item.price}</span>
              </div>
              <p className="text-sm text-gray-500 mb-2">Includes choice of drizzle.</p>
              <p className="text-gray-700">{item.inc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Build Your Own */}
      <section className="mb-16 bg-gaia-brown text-white p-8 rounded-2xl shadow-lg">
        <h2 className="text-3xl font-bold mb-6 text-gaia-green">Build Your Own Bowl</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h3 className="text-xl font-bold mb-2">Medium Bowl <span className="text-gaia-cream font-normal text-base ml-2">from $13.60</span></h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Açaí base + Second base</li>
              <li>4 fruits, 1 topping, 1 crunch, 1 drizzle</li>
              <li>Includes: Granola, Chia seeds, Coconut shavings</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Large Bowl <span className="text-gaia-cream font-normal text-base ml-2">from $18.60</span></h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>Açaí base + Second base</li>
              <li>5 fruits, 1 topping, 1 crunch, 1 drizzle</li>
              <li>Includes: Granola, Chia seeds, Coconut shavings</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Take Home Pints */}
      <section>
        <h2 className="text-3xl font-bold text-gaia-purple border-b-2 border-gaia-purple pb-2 mb-8">Take Home Pints (16oz)</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {['Classic Açaí', 'Coconut Sorbet', 'Mango Sorbet', 'Banana Cacao Sorbet'].map((pint) => (
            <div key={pint} className="bg-white p-4 rounded-xl text-center shadow-sm border border-gray-100">
              <h3 className="font-bold text-gaia-brown mb-2">{pint}</h3>
              <span className="text-gaia-green font-semibold">$16.80</span>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}
