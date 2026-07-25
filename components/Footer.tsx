export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 mt-12">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">About</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/about" className="hover:text-blue-400">About Us</a></li>
              <li><a href="/careers" className="hover:text-blue-400">Careers</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="hover:text-blue-400">Our Services</a></li>
              <li><a href="/industries" className="hover:text-blue-400">Industries</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/news" className="hover:text-blue-400">News</a></li>
              <li><a href="/investors" className="hover:text-blue-400">Investors</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/contact" className="hover:text-blue-400">Get In Touch</a></li>
              <li><a href="mailto:info@olije.com" className="hover:text-blue-400">Email Us</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 pt-8 text-center text-sm text-gray-400">
          <p>&copy; 2024 Olije. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
