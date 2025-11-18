export default function HeroSection() {
  return (
    <section
      className="relative flex flex-col items-center justify-center text-center px-4 overflow-hidden font-sans"
      style={{
        zIndex: 1,
        minHeight: '80vh',
        height: '80vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #5978a8ff 0%, #1cb5e0 100%)',
      }}
    >
      {/* Subtle US Map overlay */}
      <div className="absolute inset-0 w-full h-full -z-10 flex items-center justify-center">
      <img
        src="/us-map-bg.png"
        alt="US Map Background"
        className="w-full h-full object-cover object-center"
        style={{ opacity: 0.13 }}
      />
      </div>
      <div className="w-full flex flex-col items-center justify-center z-10">
        <h1 className="text-5xl md:text-6xl font-extrabold text-white mb-2 leading-tight" style={{fontFamily: 'Inter, Arial, Helvetica, sans-serif'}}>
          Your Trusted
        </h1>
        {/* <img src="/tbv_header_logo.svg" alt="Total Wireless Logo" className="h-10 mb-4" /> */}

        <h2 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight" style={{color: '#ff8200', fontFamily: 'Inter, Arial, Helvetica, sans-serif'}}>
          Total Wireless Dealer
        </h2>
        <p className="text-lg md:text-xl text-white max-w-2xl mb-8" style={{fontFamily: 'Inter, Arial, Helvetica, sans-serif'}}>
          GFH Telecom is your authorized Total Wireless dealer. Get affordable no-contract mobile plans with nationwide coverage and the latest smartphones.
        </p>
        <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
          <a
            href="/locations"
            className="px-8 py-3 rounded-full font-bold shadow-lg transition text-lg flex items-center gap-2 bg-[#ff8200] text-white hover:bg-orange-600 focus:bg-orange-700"
            style={{ boxShadow: '0 4px 16px 0 rgba(0,0,0,0.10)' }}
          >
            Find Your Store <span className="text-xl">📍</span>
          </a>
        </div>
      </div>
      {/* Quick Features Row */}
      <div className="flex flex-row gap-8 md:gap-16 w-full max-w-3xl justify-center">
        <div className="flex flex-col items-center flex-1 px-2">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mb-2 shadow-lg">
            <span className="text-3xl font-extrabold text-blue-900">No</span>
          </div>
          <span className="text-2xl font-bold text-white">Contract</span>
          <span className="text-base text-blue-100 mt-1">Plans</span>
        </div>
        <div className="flex flex-col items-center flex-1 px-2">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mb-2 shadow-lg">
            <span className="text-3xl font-extrabold text-blue-900">5G</span>
          </div>
          <span className="text-2xl font-bold text-white">Coverage</span>
          <span className="text-base text-blue-100 mt-1">Nationwide</span>
        </div>
        <div className="flex flex-col items-center flex-1 px-2">
          <div className="flex items-center justify-center w-20 h-20 rounded-full bg-white mb-2 shadow-lg">
            <span className="text-3xl font-extrabold text-blue-900">24/7</span>
          </div>
          <span className="text-2xl font-bold text-white">Support</span>
          <span className="text-base text-blue-100 mt-1">Always here</span>
        </div>
      </div>
    </section>
  );
}
