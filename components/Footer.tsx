import Link from "next/link";

export default function Footer() {
  const productLinks = [
    { name: "Academics", href: "/academics" },
    { name: "Assessments", href: "/assessments" },
    { name: "Placements", href: "/placements" },
    { name: "Pricing", href: "/pricing" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const connectLinks = [
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "Twitter", href: "https://twitter.com" },
    { name: "Email Support", href: "mailto:support@mentrr.com" },
  ];

  return (
    <footer className="bg-gray-50 border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <div className="mb-4">
              <h3 className="text-2xl font-bold text-gray-900">Mentrr</h3>
              <p className="text-sm text-gray-500 mt-1">
                Smarter Campus Management for Everyone
              </p>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              The complete operating system for modern universities and
              colleges. Managing academics, assessments, and placements in one
              place.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              PRODUCT
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">
              CONNECT
            </h4>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-700 hover:text-gray-900 transition-colors duration-200"
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      link.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500">
            © 2024 Mentrr Inc. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors duration-200"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
