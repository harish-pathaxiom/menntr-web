import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const productLinks = [
    // { name: "Academics", href: "/academics" },
    { name: "Assessments", href: "/assessments" },
    { name: "Placements", href: "/placements" },
    { name: "Pricing", href: "/pricing" },
  ];

  const companyLinks = [
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    // { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  const connectLinks = [
    { name: "LinkedIn", href: "https://linkedin.com" },
    // { name: "Twitter", href: "https://twitter.com" },
    { name: "Email Support", href: "mailto:support@mentrr.com" },
  ];

  return (
    <footer className="bg-[#F2F4F9] border-t border-[#E5E7EB]">
      <div className="max-w-7xl mx-auto px-8 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr] gap-12">
          {/* Brand Column */}
          <div>
            <Image
              src="/Container.svg"
              alt="Mentrr"
              width={140}
              height={35}
              className="h-8 w-auto mb-4"
            />

            <p className="text-sm text-gray-600 leading-relaxed max-w-[320px]">
              The complete operating system for modern universities and
              colleges. Managing academics, assessments, and placements in one
              place.
            </p>
          </div>

          {/* Product Column */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-5">
              PRODUCT
            </h4>
            <ul className="space-y-3">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-5">
              COMPANY
            </h4>
            <ul className="space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect Column */}
          <div>
            <h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-5">
              CONNECT
            </h4>
            <ul className="space-y-3">
              {connectLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-700 hover:text-gray-900 transition-colors"
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
        <div className="mt-16 pt-8 border-t border-[#E5E7EB] flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <p>© 2026 Mentrr Inc. All rights reserved.</p>

          <div className="flex gap-8 mt-4 md:mt-0">
            <Link
              href="/privacy"
              className="hover:text-gray-900 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-gray-900 transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
