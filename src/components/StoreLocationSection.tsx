import Link from "next/link";

const states = [
  { name: "Texas", code: "TX", stores: 14 },
  { name: "Arizona", code: "AZ", stores: 11 },
  { name: "Colorado", code: "CO", stores: 17 },
  { name: "Louisiana", code: "LA", stores: 3 },
  { name: "Tennessee", code: "TN", stores: 8 },

];

export default function StoreLocationSection() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-4" style={{fontFamily: 'Inter, Arial, Helvetica, sans-serif'}}>Find a Store by State</h2>
      <div className="flex justify-center mb-8">
        <div className="bg-[#EAF4FF] border-l-4 border-[#0057D9] rounded-r-xl px-6 py-4 max-w-xl w-full shadow text-center">
          <span className="text-xl font-semibold text-[#0057D9] flex items-center justify-center gap-2">
            <span className="text-2xl">⭐</span>
            Discover our growing network of stores
          </span>
          <div className="text-gray-600 text-sm mt-2">Find your nearest location and experience the GFH Telecom difference.</div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-12">
        {states.map((state) => (
          <Link key={state.code} href={`/features?state=${state.code}`} className="group">
            <div className="bg-white rounded-xl shadow p-6 flex flex-col items-center justify-center hover:bg-[#ff8200] hover:text-white transition cursor-pointer border border-gray-100 group">
              <span className="text-2xl font-bold mb-1 group-hover:text-white text-blue-900">{state.name}</span>
              <span className="text-sm mb-2 group-hover:text-white text-gray-500">{state.stores} Stores</span>
              <span className="text-3xl">📍</span>
            </div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
        <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl mb-4">📍</span>
          <h4 className="text-lg font-semibold mb-2">Visit Us</h4>
          <p className="text-gray-600 text-center">Walk into any location for immediate assistance.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl mb-4">📞</span>
          <h4 className="text-lg font-semibold mb-2">Call Ahead</h4>
          <p className="text-gray-600 text-center">1-832-897-7201 for store information.</p>
        </div>
        <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl mb-4">🕘</span>
          <h4 className="text-lg font-semibold mb-2">Open Daily</h4>
          <p className="text-gray-600 text-center">Most locations open 9 A.M. – 9 P.M., 7 days a week.</p>
        </div>
      </div>

      <div className="flex justify-center mt-8">
        <Link href="/locations" className="px-8 py-3 bg-orange-500 text-white rounded-full font-semibold shadow hover:bg-orange-600 transition text-center cursor-pointer">See All Locations</Link>
      </div>
    </section>
  );
}
