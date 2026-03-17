import Link from "next/link"
import { Sun, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

const footerLinks = {
  services: [
    { href: "/services#weddings", label: "Wedding Planning" },
    { href: "/services#birthdays", label: "Birthday Parties" },
    { href: "/services#corporate", label: "Corporate Events" },
    { href: "/services#college", label: "College Events" },
  ],
  company: [
    { href: "/about", label: "About Us" },
    { href: "/gallery", label: "Gallery" },
    { href: "/pricing", label: "Pricing" },
    { href: "/contact", label: "Contact" },
  ],
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-foreground text-background">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                <Sun className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-xl font-bold">Sunshine Events</span>
            </Link>
            <p className="text-sm text-background/70">
              Making every event special within your budget. Your trusted partner for memorable celebrations.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-background/70 transition-colors hover:text-primary" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 transition-colors hover:text-primary" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-background/70 transition-colors hover:text-primary" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-background/70 transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link href={link.href} className="text-sm text-background/70 transition-colors hover:text-primary">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Phone className="h-4 w-4 text-primary" />
                <span>+91 7997555522</span>
              </li>
              <li className="flex items-center gap-2 text-sm text-background/70">
                <Mail className="h-4 w-4 text-primary" />
                <span>hello@sunshineevents.com</span>
              </li>
              <li className="flex items-start gap-2 text-sm text-background/70">
                <MapPin className="h-4 w-4 shrink-0 text-primary" />
                <span>30-22-130, Eluru Rd, beside Challa Hari Kumar Clinic, beside Junction, Kothavanthena Center, Durga Agraharam, Arundalpet, Governor Peta, Vijayawada, Andhra Pradesh 520002</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-background/20 pt-8 text-center">
          <p className="text-sm text-background/60">
            © {new Date().getFullYear()} Sunshine Events. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
