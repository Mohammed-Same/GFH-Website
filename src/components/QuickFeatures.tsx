export default function QuickFeatures() {
  return (
    <section className="w-full flex justify-center py-8 bg-white/80 dark:bg-gray-900/80">
      <div className="flex flex-row gap-8 md:gap-16 w-full max-w-3xl justify-center">
        <div className="flex flex-col items-center flex-1 px-2">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#ffeaea] mb-2 border border-[#ffd6d6]">
            <span className="text-2xl font-extrabold text-[#e60012]">No</span>
          </div>
          <span className="text-lg font-bold text-[#e60012]">Contract</span>
          <span className="text-xs text-gray-400 mt-1">Plans</span>
        </div>
        <div className="flex flex-col items-center flex-1 px-2">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#ffeaea] mb-2 border border-[#ffd6d6]">
            <span className="text-2xl font-extrabold text-[#e60012]">5G</span>
          </div>
          <span className="text-lg font-bold text-[#e60012]">Coverage</span>
          <span className="text-xs text-gray-400 mt-1">Nationwide</span>
        </div>
        <div className="flex flex-col items-center flex-1 px-2">
          <div className="flex items-center justify-center w-16 h-16 rounded-full bg-[#ffeaea] mb-2 border border-[#ffd6d6]">
            <span className="text-2xl font-extrabold text-[#e60012]">24/7</span>
          </div>
          <span className="text-lg font-bold text-[#e60012]">Support</span>
          <span className="text-xs text-gray-400 mt-1">Always here</span>
        </div>
      </div>
    </section>
  );
}
