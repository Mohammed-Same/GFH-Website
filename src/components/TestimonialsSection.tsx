export default function TestimonialsSection() {
  return (
    <section className="py-20 px-4 bg-gray-50">
      <h2 className="text-3xl font-bold text-center text-blue-900 dark:text-white mb-12">What Our Users Say</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-8">
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">“I switched to Total wireless and the phone service is crystal clear. Customer support is always helpful!”</p>
          <span className="block font-semibold text-blue-700 dark:text-blue-300">— Maria, Houston TX</span>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-8">
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">“The unlimited plan is a lifesaver for my family. Great coverage and no surprise fees.”</p>
          <span className="block font-semibold text-blue-700 dark:text-blue-300">— David, Phoenix AZ</span>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-8">
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">“I love how easy it was to transfer my number and activate my new phone. Highly recommend!”</p>
          <span className="block font-semibold text-blue-700 dark:text-blue-300">— Priya, Denver CO</span>
        </div>
        <div className="bg-white dark:bg-gray-900 rounded-xl shadow p-8">
          <p className="text-lg text-gray-700 dark:text-gray-200 mb-4">“Affordable plans and fast 5G speeds. I use my phone for work and never have issues.”</p>
          <span className="block font-semibold text-blue-700 dark:text-blue-300">— Marcus, Baton Rouge LA</span>
        </div>
      </div>
    </section>
  );
}
