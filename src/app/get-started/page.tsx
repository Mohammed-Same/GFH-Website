export default function GetStartedPage() {
  return (
    <main className="py-24 px-4 flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-4xl font-bold text-center mb-6">Get Started with Total Wireless</h1>
      <p className="text-center mb-8 text-gray-600 max-w-xl">Ready to join the nation? Sign up now or visit our store to get the best wireless plans and devices for you and your family.</p>

      {/* Step-by-step process */}
      <div className="w-full max-w-2xl mb-10">
        <ol className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-0 md:space-x-8 text-center">
          <li className="flex-1">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#EAF4FF] flex items-center justify-center text-2xl text-[#0057D9] font-bold">1</div>
            <div className="font-semibold">Contact Us</div>
            <div className="text-gray-500 text-sm">Fill out our form or call for info</div>
          </li>
          <li className="flex-1">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#EAF4FF] flex items-center justify-center text-2xl text-[#0057D9] font-bold">2</div>
            <div className="font-semibold">Get Personalized Help</div>
            <div className="text-gray-500 text-sm">Our team will reach out to guide you</div>
          </li>
          <li className="flex-1">
            <div className="w-12 h-12 mx-auto mb-2 rounded-full bg-[#EAF4FF] flex items-center justify-center text-2xl text-[#0057D9] font-bold">3</div>
            <div className="font-semibold">Start Your Service</div>
            <div className="text-gray-500 text-sm">Visit a store or activate online</div>
          </li>
        </ol>
      </div>

      {/* Benefits/Features */}
      <div className="w-full max-w-3xl grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
        <div className="bg-[#EAF4FF] rounded-xl p-6 flex flex-col items-center text-center">
          <span className="text-3xl mb-2">📱</span>
          <div className="font-bold text-[#0057D9] mb-1">No Contracts</div>
          <div className="text-gray-600 text-sm">Flexible prepaid plans for every need</div>
        </div>
        <div className="bg-[#EAF4FF] rounded-xl p-6 flex flex-col items-center text-center">
          <span className="text-3xl mb-2">📶</span>
          <div className="font-bold text-[#0057D9] mb-1">Nationwide 5G</div>
          <div className="text-gray-600 text-sm">Fast, reliable coverage across the US</div>
        </div>
        <div className="bg-[#EAF4FF] rounded-xl p-6 flex flex-col items-center text-center">
          <span className="text-3xl mb-2">💬</span>
          <div className="font-bold text-[#0057D9] mb-1">Expert Support</div>
          <div className="text-gray-600 text-sm">Friendly help in-store and online</div>
        </div>
        <div className="bg-[#EAF4FF] rounded-xl p-6 flex flex-col items-center text-center">
          <span className="text-3xl mb-2">🔒</span>
          <div className="font-bold text-[#0057D9] mb-1">Easy Activation</div>
          <div className="text-gray-600 text-sm">Bring your own device or get a new one</div>
        </div>
      </div>

      {/* Testimonial */}
      <div className="w-full max-w-xl mb-10">
        <div className="bg-white rounded-xl shadow p-6 text-center">
          <p className="text-lg text-gray-700 mb-2">“Switching to GFH Telecom was so easy! The team helped me find the perfect plan and I love the coverage.”</p>
          <span className="block font-semibold text-[#0057D9]">— Priya, Denver CO</span>
        </div>
      </div>

      {/* Call to Action Buttons */}
      <div className="flex flex-col md:flex-row gap-4 justify-center">
        <a href="/contact" className="px-10 py-4 bg-[#0057D9] text-white rounded-full font-semibold shadow hover:bg-[#E63946] transition">Contact Us</a>
        <a href="/locations" className="px-10 py-4 bg-[#0057D9] text-white rounded-full font-semibold shadow hover:bg-[#E63946] transition">Find a Store</a>
      </div>
    </main>
  );
}
