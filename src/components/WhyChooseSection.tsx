export default function WhyChooseSection() {
  return (
    <section className="py-16 px-4 max-w-5xl mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Why Choose GFH Telecom?</h2>
      <p className="text-center mb-8 text-gray-600">As an authorized Total Wireless dealer, GFH Telecom brings you the best in no-contract wireless service. We offer affordable prepaid plans backed by America’s largest 5G network, with the personal service you deserve.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl mb-4">✅</span>
          <h3 className="text-lg font-semibold mb-2">Authorized Dealer</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">Official Total Wireless authorized retailer providing genuine plans and authentic devices.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl mb-4">💰</span>
          <h3 className="text-lg font-semibold mb-2">Best Value</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">No contracts, no credit checks, no surprises. Just affordable wireless plans built with you in mind.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl mb-4">⭐</span>
          <h3 className="text-lg font-semibold mb-2">Customer First</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">Dedicated to providing exceptional service and support that puts the customer at the center.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl mb-4">⚡</span>
          <h3 className="text-lg font-semibold mb-2">Fast & Easy</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">Quick activation, simple plan changes, and hassle-free service. Get connected in minutes.</p>
        </div>
      </div>
      <p className="text-center text-gray-600">Visit us today and discover why families and businesses choose GFH Telecom for their wireless needs.</p>
    </section>
  );
}
