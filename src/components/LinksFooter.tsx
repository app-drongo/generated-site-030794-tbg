// Enhanced by AI on 2025-08-08T15:29:13.419Z
// Section: footer
// Category: footer

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { 
  Facebook, 
  Twitter, 
  Instagram, 
  Linkedin, 
  Github,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
  Heart,
  Factory,
  Settings,
  ShieldCheck
} from "lucide-react"

export default function Footer() {
  const footerSections = [
    {
      title: "Services",
      links: [
        { name: "SAP Implementation", href: "/services#implementation" },
        { name: "Process Optimization", href: "/services#optimization" },
        { name: "System Integration", href: "/services#integration" },
        { name: "Technical Support", href: "/services#support" },
        { name: "Training", href: "/services#training" }
      ]
    },
    {
      title: "Quick Links",
      links: [
        { name: "Home", href: "/" },
        { name: "Services", href: "/services" },
        { name: "About Me", href: "/#about" },
        { name: "Contact", href: "/#contact" }
      ]
    },
    {
      title: "Resources",
      links: [
        { name: "Case Studies", href: "/#case-studies" },
        { name: "Manufacturing Insights", href: "/#insights" },
        { name: "SAP Best Practices", href: "/#best-practices" },
        { name: "Industry Solutions", href: "/#solutions" }
      ]
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "/#privacy" },
        { name: "Terms of Service", href: "/#terms" },
        { name: "Cookie Policy", href: "/#cookies" }
      ]
    }
  ]

  const socialLinks = [
    { name: "LinkedIn", icon: Linkedin, href: "https://linkedin.com" },
    { name: "Twitter", icon: Twitter, href: "https://twitter.com" },
    { name: "Facebook", icon: Facebook, href: "https://facebook.com" },
    { name: "Instagram", icon: Instagram, href: "https://instagram.com" }
  ]

  return (
    <footer className="bg-background border-t border-border/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-6 gap-12">
          {/* Company Info */}
          <div className="lg:col-span-2 space-y-6">
            <div>
              <Link href="/" className="flex items-center space-x-2 mb-4">
                <div className="size-10 rounded-lg bg-gradient-to-br from-primary to-primary/60 flex items-center justify-center">
                  <Factory className="size-5 text-primary-foreground" />
                </div>
                <span className="font-bold text-xl">SAP Manufacturing Expert</span>
              </Link>
              <p className="text-muted-foreground text-sm leading-relaxed mb-6">
                Specialized consulting services for manufacturing businesses using SAP. 
                Delivering excellence in implementation, optimization, and support to maximize your manufacturing operations.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 text-sm">
                <Mail className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">contact@sapmanufacturingexpert.com</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <Phone className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 789-4567</span>
              </div>
              <div className="flex items-center gap-3 text-sm">
                <MapPin className="size-4 text-primary flex-shrink-0" />
                <span className="text-muted-foreground">Munich, Germany (Available Globally)</span>
              </div>
            </div>

            {/* Newsletter Signup */}
            <div className="space-y-3">
              <h4 className="font-semibold text-sm">Get Manufacturing Insights</h4>
              <div className="flex gap-2">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="flex-1 px-3 py-2 text-sm border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary"
                />
                <Button size="sm" className="px-3">
                  <ArrowRight className="size-4" />
                </Button>
              </div>
              <p className="text-xs text-muted-foreground">
                Subscribe for SAP manufacturing tips, industry updates, and optimization strategies.
              </p>
            </div>
          </div>

          {/* Footer Links */}
          <div className="lg:col-span-4 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <div key={index} className="space-y-4">
                <h4 className="font-semibold text-sm">{section.title}</h4>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <Link 
                        href={link.href}
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-border/50 bg-muted/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            {/* Copyright */}
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>© 2024 SAP Manufacturing Expert. All rights reserved.</span>
              <span className="hidden sm:inline">•</span>
              <span className="hidden sm:inline flex items-center gap-1">
                Manufacturing Excellence <Heart className="size-3 text-red-500 fill-current" /> SAP Expertise
              </span>
            </div>

            {/* Social Links */}
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground mr-2">Connect:</span>
              {socialLinks.map((social, index) => {
                const Icon = social.icon
                return (
                  <Link
                    key={index}
                    href={social.href}
                    aria-label={social.name}
                    className="size-8 rounded-md bg-muted hover:bg-primary/20 flex items-center justify-center transition-colors duration-200 group"
                  >
                    <Icon className="size-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Additional Links */}
          <div className="flex flex-wrap justify-center md:justify-start gap-6 mt-4 pt-4 border-t border-border/30">
            <div className="flex items-center gap-2">
              <Factory className="size-4 text-primary" />
              <span className="text-xs text-muted-foreground">Manufacturing Solutions</span>
            </div>
            <div className="flex items-center gap-2">
              <Settings className="size-4 text-primary" />
              <span className="text-xs text-muted-foreground">SAP Implementation</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="size-4 text-primary" />
              <span className="text-xs text-muted-foreground">Certified Consultant</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}