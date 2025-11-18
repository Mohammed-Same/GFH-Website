export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 py-10 mt-16">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div>
          <div className="font-bold mb-2">GFH Telecom</div>
          <p className="mb-2">Your authorized Total Wireless dealer, providing affordable mobile plans and exceptional service.</p>
        </div>
        <div>
          <div className="font-bold mb-2">Quick Links</div>
          <ul className="space-y-1">
            <li><a href="/services">Services</a></li>
            <li><a href="/locations">Locations</a></li>
            <li><a href="/about">About</a></li>
                        <li><a href="/careers">Careers</a></li>
            <li><a href="/contact">Contact</a></li>
                        <li><a href="/landlord-portal">Landlord Portal</a></li>

          </ul>
        </div>
        <div>
          <div className="font-bold mb-2">Services</div>
          <ul className="space-y-1">
            <li>Mobile Plans</li>
            <li>Home Internet</li>
            <li>Business Solutions</li>
            <li>Device Protection</li>
          </ul>
        </div>
        <div>
          <div className="font-bold mb-2">Contact Info</div>
          <ul className="space-y-1">
            <li>📞 832 897 7201</li>
            <li>✉️ hr@gfhtelecom.com</li>
            <li>🏢 Houston, TX</li>
          </ul>
        </div>
      </div>
      <div className="text-center text-xs text-gray-400 mt-8">© 2025 GFH Telecom. Authorized Total Wireless Dealer. All rights reserved.</div>
    </footer>
  );
}


