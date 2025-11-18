import { FaAward, FaChartLine, FaHeart, FaBolt } from "react-icons/fa";

export default function AboutPage() {
  return (
    <main className="py-20 px-4 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row items-start gap-16">
        {/* Left: Text */}
        <div className="flex-1 md:pr-16">
          <h1 className="text-5xl font-extrabold mb-8 text-gray-900 text-left" style={{fontFamily: 'Inter, Arial, Helvetica, sans-serif'}}>Why Choose GFH Telecom?</h1>
          <p className="text-lg text-gray-600 mb-6 text-left">As an authorized Total Wireless dealer, GFH Telecom brings you the best in no-contract wireless service. We offer affordable prepaid plans backed by America's largest 5G network, with the personal service you deserve.</p>
          <p className="text-lg text-gray-600 mb-6 text-left">Our mission is simple: provide quality wireless service at prices that make sense. No hidden fees, no contracts, and no credit checks. Just straightforward mobile plans that keep you connected to what matters most.</p>
          <p className="text-lg text-gray-600 text-left">Visit us today and discover why families and businesses choose GFH Telecom for their wireless needs.</p>
        </div>
        {/* Right: Features */}
        <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 gap-8">
          <div className="bg-white rounded-2xl shadow border border-gray-100 p-8 flex flex-col items-center min-h-[220px]">
            <FaAward className="text-4xl text-gray-900 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Authorized Dealer</h3>
            <p className="text-gray-600 text-center">Official Total Wireless authorized dealer providing genuine plans and authentic devices.</p>
          </div>
          <div className="bg-white rounded-2xl shadow border border-gray-100 p-8 flex flex-col items-center min-h-[220px]">
            <FaChartLine className="text-4xl text-gray-900 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Best Value</h3>
            <p className="text-gray-600 text-center">No contracts, no credit checks, no surprises. Just affordable wireless plans that work for you.</p>
          </div>
          <div className="bg-white rounded-2xl shadow border border-gray-100 p-8 flex flex-col items-center min-h-[220px]">
            <FaHeart className="text-4xl text-gray-900 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Customer First</h3>
            <p className="text-gray-600 text-center">Dedicated to providing exceptional service and support that puts our customers at the center.</p>
          </div>
          <div className="bg-white rounded-2xl shadow border border-gray-100 p-8 flex flex-col items-center min-h-[220px]">
            <FaBolt className="text-4xl text-gray-900 mb-4" />
            <h3 className="text-xl font-bold mb-2 text-gray-900">Fast & Easy</h3>
            <p className="text-gray-600 text-center">Quick activation, simple plan changes, and hassle-free service. Get connected in minutes.</p>
          </div>
        </div>
      </div>
      {/* Testimonials Section */}
      <section className="mt-24 bg-gray-50 rounded-2xl p-12">
        <h2 className="text-3xl font-bold text-center mb-10 text-gray-900">What Our Customers Say</h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch">
          <div className="bg-white rounded-2xl shadow border border-gray-100 p-8 flex-1 max-w-md mx-auto flex flex-col min-h-[180px]">
            <p className="text-lg text-gray-700 mb-4">“GFH Telecom made switching my family’s phones so easy. The staff was friendly and explained everything clearly. Highly recommend!”</p>
            <span className="font-semibold text-gray-900">— Sarah M., New York</span>
          </div>
          <div className="bg-white rounded-2xl shadow border border-gray-100 p-8 flex-1 max-w-md mx-auto flex flex-col min-h-[180px]">
            <p className="text-lg text-gray-700 mb-4">“No hidden fees, no hassle, and great coverage. I love the flexibility and the price!”</p>
            <span className="font-semibold text-gray-900">— James T., California</span>
          </div>
          <div className="bg-white rounded-2xl shadow border border-gray-100 p-8 flex-1 max-w-md mx-auto flex flex-col min-h-[180px]">
            <p className="text-lg text-gray-700 mb-4">“Customer service is top-notch. They helped me find the perfect plan for my business.”</p>
            <span className="font-semibold text-gray-900">— Priya S., Illinois</span>
          </div>
        </div>
      </section>
    </main>
  );
}
