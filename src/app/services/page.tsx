export default function ServicesPage() {
  return (
    <main className="py-16 px-4 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold text-center mb-8">Our Services</h1>
      <p className="text-center mb-12 text-gray-600">Total Wireless authorized dealer offering affordable prepaid plans and the latest smartphones.</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl mb-4">📱</span>
          <h3 className="text-xl font-semibold mb-2">Prepaid Plans</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">Affordable no-contract Total Wireless plans with unlimited talk, text, and data. Starting as low as $25/month.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl mb-4">📶</span>
          <h3 className="text-xl font-semibold mb-2">5G Coverage</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">Access America’s largest and most reliable 5G network with Total Wireless nationwide coverage.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl mb-4">🆕</span>
          <h3 className="text-xl font-semibold mb-2">Latest Devices</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">Shop the newest smartphones from top brands. Get help choosing the perfect device for your needs.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl mb-4">👨‍👩‍👧‍👦</span>
          <h3 className="text-xl font-semibold mb-2">Family Plans</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">Save more with Total Wireless family plans. Multiple lines get discounted rates and shared data options.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl mb-4">🔓</span>
          <h3 className="text-xl font-semibold mb-2">Easy Activation</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">Quick and simple phone activation. Bring your own device or get a new one – we’ll set it up for you.</p>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow p-8 flex flex-col items-center">
          <span className="text-3xl mb-4">💬</span>
          <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
          <p className="text-gray-600 dark:text-gray-300 text-center">Our knowledgeable staff is here to help with plan selection, device setup, and technical questions.</p>
        </div>
      </div>
    </main>
  );
}
