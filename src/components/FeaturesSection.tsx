import { FaMobileAlt, FaWifi, FaTabletAlt, FaUsers, FaShieldAlt, FaHeadphones } from "react-icons/fa";

export default function FeaturesSection() {
  return (
    <section className="py-20 px-4 max-w-6xl mx-auto">
      <h2 className="text-4xl font-extrabold text-center text-blue-900 mb-4" style={{fontFamily: 'Inter, Arial, Helvetica, sans-serif'}}>Our Services</h2>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">Total Wireless authorized dealer offering affordable prepaid plans and the latest smartphones</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Prepaid Plans */}
  <div className="bg-white rounded-xl shadow p-8 flex flex-col items-start hover:shadow-lg hover:bg-[#ff8200] hover:text-white transition border border-gray-100 group">
          <div className="bg-gray-900 text-white rounded-lg p-3 mb-4 group-hover:bg-white group-hover:text-[#ff8200] transition"><FaMobileAlt size={32} /></div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition">Prepaid Plans</h3>
          <p className="text-gray-600 group-hover:text-white transition">Affordable no-contract Total Wireless plans with unlimited talk, text, and data. Starting as low as $25/month.</p>
        </div>
        {/* 5G Coverage */}
  <div className="bg-white rounded-xl shadow p-8 flex flex-col items-start hover:shadow-lg hover:bg-[#ff8200] hover:text-white transition border border-gray-100 group">
          <div className="bg-gray-900 text-white rounded-lg p-3 mb-4 group-hover:bg-white group-hover:text-[#ff8200] transition"><FaWifi size={32} /></div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition">5G Coverage</h3>
          <p className="text-gray-600 group-hover:text-white transition">Access America's largest and most reliable 5G network with Total Wireless nationwide coverage.</p>
        </div>
        {/* Latest Devices */}
  <div className="bg-white rounded-xl shadow p-8 flex flex-col items-start hover:shadow-lg hover:bg-[#ff8200] hover:text-white transition border border-gray-100 group">
          <div className="bg-gray-900 text-white rounded-lg p-3 mb-4 group-hover:bg-white group-hover:text-[#ff8200] transition"><FaTabletAlt size={32} /></div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition">Latest Devices</h3>
          <p className="text-gray-600 group-hover:text-white transition">Shop the newest smartphones from top brands. Get help choosing the perfect device for your needs.</p>
        </div>
        {/* Family Plans */}
  <div className="bg-white rounded-xl shadow p-8 flex flex-col items-start hover:shadow-lg hover:bg-[#ff8200] hover:text-white transition border border-gray-100 group">
          <div className="bg-gray-900 text-white rounded-lg p-3 mb-4 group-hover:bg-white group-hover:text-[#ff8200] transition"><FaUsers size={32} /></div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition">Family Plans</h3>
          <p className="text-gray-600 group-hover:text-white transition">Save more with Total Wireless family plans. Multiple lines get discounted rates and shared data options.</p>
        </div>
        {/* Easy Activation */}
  <div className="bg-white rounded-xl shadow p-8 flex flex-col items-start hover:shadow-lg hover:bg-[#ff8200] hover:text-white transition border border-gray-100 group">
          <div className="bg-gray-900 text-white rounded-lg p-3 mb-4 group-hover:bg-white group-hover:text-[#ff8200] transition"><FaShieldAlt size={32} /></div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition">Easy Activation</h3>
          <p className="text-gray-600 group-hover:text-white transition">Quick and simple phone activation. Bring your own device or get a new one - we'll set it up for you.</p>
        </div>
        {/* Expert Support */}
  <div className="bg-white rounded-xl shadow p-8 flex flex-col items-start hover:shadow-lg hover:bg-[#ff8200] hover:text-white transition border border-gray-100 group">
          <div className="bg-gray-900 text-white rounded-lg p-3 mb-4 group-hover:bg-white group-hover:text-[#ff8200] transition"><FaHeadphones size={32} /></div>
          <h3 className="text-2xl font-bold mb-2 group-hover:text-white transition">Expert Support</h3>
          <p className="text-gray-600 group-hover:text-white transition">Our knowledgeable staff is here to help with plan selection, device setup, and technical questions.</p>
        </div>
      </div>
    </section>
  );
}
