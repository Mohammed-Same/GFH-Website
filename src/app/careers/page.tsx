import Link from "next/link";

export default function CareersPage() {
  return (
    <section className="py-16 px-4 max-w-6xl mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-4" style={{fontFamily: 'Inter, Arial, Helvetica, sans-serif'}}>Careers at GFH Telecom</h2>
      <div className="flex justify-center mb-8">
        <div className="bg-[#EAF4FF] border-l-4 border-[#0057D9] rounded-r-xl px-6 py-4 max-w-xl w-full shadow text-center">
          <span className="text-xl font-semibold text-[#0057D9] flex items-center justify-center gap-2">
            <span className="text-2xl">💼</span>
            Join our growing team and help connect communities!
          </span>
          <div className="text-gray-600 text-sm mt-2">Explore open positions and start your career with a leading Total Wireless authorized retailer.</div>
        </div>
      </div>
      <div className="bg-white rounded-xl shadow p-8 flex flex-col items-center border border-gray-100">
        <h3 className="text-2xl font-bold mb-2 text-[#0057D9]">Why Work With Us?</h3>
        <ul className="list-disc text-gray-700 text-left mb-6 pl-6">
          <li>Supportive, growth-focused team environment</li>
          <li>Opportunities for advancement and training</li>
          <li>Competitive pay and benefits</li>
          <li>Make a difference in your community</li>
        </ul>
        <p className="text-gray-600 text-center mb-4">
We’re always looking for talented and motivated individuals to join our stores and support team. If you’re passionate about technology and customer service, fill out our Contact Us form we’d love to hear from you!</p>        <Link href="/contact" className="px-8 py-3 bg-[#0057D9] text-white rounded-full font-semibold shadow hover:bg-[#E63946] transition text-center cursor-pointer">Apply Now</Link>
      </div>
    </section>
  );
}
