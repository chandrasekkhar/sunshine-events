import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { CheckCircle2, ArrowRight, Sparkles } from "lucide-react"

export const metadata: Metadata = {
  title: "Pricing | Sunshine Events",
  description: "Affordable event management packages designed to fit every budget. Choose from Basic, Standard, or Premium packages.",
}

const packages = [
  {
    name: "Basic",
    description: "Perfect for small gatherings and intimate celebrations",
    price: "$499",
    priceNote: "Starting from",
    features: [
      "Event consultation (2 hours)",
      "Basic venue recommendations",
      "Vendor referrals",
      "Simple decoration setup",
      "Day-of coordination (4 hours)",
      "Up to 50 guests",
      "Email support",
    ],
    highlighted: false,
    buttonText: "Get Started",
  },
  {
    name: "Standard",
    description: "Ideal for medium-sized events and parties",
    price: "$999",
    priceNote: "Starting from",
    features: [
      "Full event consultation",
      "Venue selection assistance",
      "Vendor coordination (3 vendors)",
      "Theme-based decoration",
      "Full day coordination",
      "Up to 150 guests",
      "Photography recommendations",
      "Timeline management",
      "Priority email & phone support",
    ],
    highlighted: true,
    buttonText: "Most Popular",
  },
  {
    name: "Premium",
    description: "Complete solution for large events and weddings",
    price: "$2,499",
    priceNote: "Starting from",
    features: [
      "Unlimited consultations",
      "Full venue management",
      "Complete vendor coordination",
      "Premium decoration & florals",
      "Multi-day event support",
      "Up to 500 guests",
      "Professional photography",
      "Entertainment booking",
      "Catering management",
      "Guest management",
      "24/7 dedicated support",
    ],
    highlighted: false,
    buttonText: "Go Premium",
  },
]

const addOns = [
  { name: "Additional Photography", price: "$150" },
  { name: "Videography Services", price: "$300" },
  { name: "DJ / Entertainment", price: "$200" },
  { name: "Extra Decoration Package", price: "$250" },
  { name: "Invitation Design", price: "$100" },
  { name: "Extended Coordination Hours", price: "$50/hr" },
]

const faqs = [
  {
    question: "What's included in the consultation?",
    answer: "Our consultations cover event concept development, budget planning, timeline creation, and recommendations for venues, vendors, and themes that match your vision and budget.",
  },
  {
    question: "Can I customize a package?",
    answer: "Absolutely! We understand every event is unique. Contact us to discuss your specific needs and we'll create a customized package that fits your requirements and budget.",
  },
  {
    question: "When should I book your services?",
    answer: "For best results, we recommend booking 2-3 months in advance for smaller events and 6-12 months for weddings and large celebrations. However, we also accommodate last-minute requests when possible.",
  },
  {
    question: "What payment options do you offer?",
    answer: "We offer flexible payment plans. Typically, a 30% deposit is required to secure your booking, with the remaining balance due in installments leading up to the event.",
  },
]

export default function PricingPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/20 via-background to-accent/10 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Pricing
              </span>
              <h1 className="mb-6 text-balance text-4xl font-bold text-foreground md:text-5xl">
                Transparent & Budget-Friendly
              </h1>
              <p className="text-lg text-muted-foreground">
                Choose the package that best fits your event needs. All our packages are designed 
                to deliver maximum value without compromising on quality.
              </p>
            </div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {packages.map((pkg) => (
                <Card 
                  key={pkg.name} 
                  className={`relative flex flex-col ${
                    pkg.highlighted 
                      ? "border-primary shadow-lg ring-2 ring-primary/20" 
                      : "border-border/50"
                  }`}
                >
                  {pkg.highlighted && (
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                      <span className="inline-flex items-center gap-1 rounded-full bg-primary px-4 py-1 text-sm font-medium text-primary-foreground">
                        <Sparkles className="h-4 w-4" />
                        Most Popular
                      </span>
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <CardTitle className="text-xl text-foreground">{pkg.name}</CardTitle>
                    <p className="text-sm text-muted-foreground">{pkg.description}</p>
                  </CardHeader>
                  <CardContent className="flex flex-1 flex-col">
                    <div className="mb-6">
                      <p className="text-sm text-muted-foreground">{pkg.priceNote}</p>
                      <p className="text-4xl font-bold text-foreground">{pkg.price}</p>
                    </div>
                    <ul className="mb-8 flex-1 space-y-3">
                      {pkg.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Button 
                      asChild 
                      className={pkg.highlighted 
                        ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                        : ""
                      }
                      variant={pkg.highlighted ? "default" : "outline"}
                    >
                      <Link href="/contact">
                        {pkg.buttonText}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Add-Ons Section */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Add-On Services
              </span>
              <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
                Enhance Your Package
              </h2>
              <p className="text-muted-foreground">
                Customize your event experience with our additional services.
              </p>
            </div>

            <div className="mx-auto max-w-3xl">
              <div className="grid gap-4 sm:grid-cols-2">
                {addOns.map((addon) => (
                  <Card key={addon.name} className="border-border/50">
                    <CardContent className="flex items-center justify-between p-4">
                      <span className="font-medium text-foreground">{addon.name}</span>
                      <span className="font-semibold text-primary">{addon.price}</span>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQs Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                FAQs
              </span>
              <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
                Common Questions
              </h2>
              <p className="text-muted-foreground">
                Find answers to frequently asked questions about our services and pricing.
              </p>
            </div>

            <div className="mx-auto max-w-3xl space-y-6">
              {faqs.map((faq) => (
                <Card key={faq.question} className="border-border/50">
                  <CardContent className="p-6">
                    <h3 className="mb-2 font-semibold text-foreground">{faq.question}</h3>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-primary py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center lg:px-8">
            <h2 className="mb-4 text-balance text-3xl font-bold text-primary-foreground md:text-4xl">
              Need a Custom Quote?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
              Every event is unique. Contact us for a personalized quote tailored to your specific 
              requirements and budget.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Request Custom Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
