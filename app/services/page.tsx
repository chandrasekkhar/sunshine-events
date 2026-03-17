import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { 
  Heart, 
  Cake, 
  Building2, 
  GraduationCap, 
  PartyPopper, 
  Utensils,
  Flower2,
  ArrowRight,
  CheckCircle2,
  Music,
  Users,
  Camera,
  Star,
  Monitor
} from "lucide-react"

export const metadata: Metadata = {
  title: "Our Services | Sunshine Events",
  description: "Explore our comprehensive event management services including weddings, birthdays, corporate events, college events, and more.",
}

const services = [
  {
    id: "weddings",
    icon: Heart,
    title: "Wedding Planning",
    description: "Your dream wedding, perfectly planned and executed within your budget.",
    features: [
      "Complete wedding coordination",
      "Venue selection and booking",
      "Vendor management",
      "Theme and decor planning",
      "Guest list management",
      "Day-of coordination",
      "Budget tracking",
      "Timeline creation",
    ],
    highlight: "Most Popular",
  },
  {
    id: "birthdays",
    icon: Cake,
    title: "Birthday Parties",
    description: "Unforgettable birthday celebrations for all ages with creative themes and activities.",
    features: [
      "Theme conceptualization",
      "Venue decoration",
      "Entertainment booking",
      "Cake and catering",
      "Games and activities",
      "Photography arrangements",
      "Invitation design",
      "Party favors",
    ],
    highlight: null,
  },
  {
    id: "corporate",
    icon: Building2,
    title: "Corporate Events",
    description: "Professional event management for businesses of all sizes.",
    features: [
      "Conference planning",
      "Team building events",
      "Product launches",
      "Award ceremonies",
      "Annual galas",
      "Networking events",
      "AV and tech support",
      "Catering coordination",
    ],
    highlight: null,
  },
  {
    id: "college",
    icon: GraduationCap,
    title: "College Events",
    description: "Vibrant and engaging events that create lasting campus memories.",
    features: [
      "Fresher parties",
      "Farewell celebrations",
      "Cultural festivals",
      "Tech fests",
      "Sports events",
      "Annual day programs",
      "DJ and entertainment",
      "Stage and lighting",
    ],
    highlight: null,
  },
  {
    id: "parties",
    icon: PartyPopper,
    title: "Private Parties",
    description: "Exclusive gatherings tailored to your unique style and preferences.",
    features: [
      "House parties",
      "Cocktail events",
      "Themed celebrations",
      "Anniversary parties",
      "Baby showers",
      "Engagement parties",
      "Reunion events",
      "Holiday parties",
    ],
    highlight: null,
  },
  {
    id: "catering",
    icon: Utensils,
    title: "Catering Services",
    description: "Delicious food options to complement any event type.",
    features: [
      "Multi-cuisine menus",
      "Buffet setup",
      "Plated dinners",
      "Cocktail snacks",
      "Dessert stations",
      "Beverage service",
      "Dietary accommodations",
      "Professional staff",
    ],
    highlight: null,
  },
  {
    id: "decoration",
    icon: Flower2,
    title: "Decoration Services",
    description: "Transform any venue into a stunning celebration space.",
    features: [
      "Theme-based decor",
      "Floral arrangements",
      "Stage design",
      "Table settings",
      "Lighting design",
      "Balloon decorations",
      "Entrance decor",
      "Photo booth setup",
    ],
    highlight: null,
  },
  {
    id: "dj-lighting",
    icon: Music,
    title: "DJ & Lighting",
    description: "Set the perfect mood with professional DJ services and stunning lighting setups.",
    features: [
      "Professional DJ services",
      "Sound system setup",
      "Dance floor lighting",
      "LED stage lights",
      "Ambient lighting",
      "Fog machines",
      "Laser shows",
      "Custom playlists",
    ],
    highlight: null,
  },
  {
    id: "dance-teams",
    icon: Users,
    title: "Dance Teams",
    description: "Energize your event with talented dance performers and choreographed shows.",
    features: [
      "Professional dance troupes",
      "Classical dance performances",
      "Bollywood dance shows",
      "Western dance acts",
      "Folk dance performances",
      "Flash mob arrangements",
      "Custom choreography",
      "Interactive sessions",
    ],
    highlight: null,
  },
  {
    id: "orchestra",
    icon: Music,
    title: "Orchestra & Live Music",
    description: "Add elegance to your event with live orchestral performances and bands.",
    features: [
      "Live band performances",
      "Classical orchestra",
      "Instrumental music",
      "Vocal performances",
      "Fusion bands",
      "Traditional music",
      "Background scores",
      "Custom compositions",
    ],
    highlight: null,
  },
  {
    id: "photo-video",
    icon: Camera,
    title: "Photo & Videography",
    description: "Capture every precious moment with professional photography and videography services.",
    features: [
      "Event photography",
      "Cinematic videography",
      "Drone coverage",
      "Photo booths",
      "Candid photography",
      "Same-day edits",
      "Album creation",
      "Live streaming",
    ],
    highlight: null,
  },
  {
    id: "celebrity",
    icon: Star,
    title: "Celebrity Management",
    description: "Add star power to your event with celebrity appearances and performances.",
    features: [
      "Celebrity bookings",
      "Artist management",
      "Performance coordination",
      "Meet and greet setup",
      "Security arrangements",
      "Hospitality management",
      "Contract negotiation",
      "Schedule coordination",
    ],
    highlight: "Premium",
  },
  {
    id: "led-screens",
    icon: Monitor,
    title: "LED Screens & AV",
    description: "High-quality LED screens and audiovisual equipment for impactful presentations.",
    features: [
      "Large LED walls",
      "Projection systems",
      "Video walls",
      "Sound systems",
      "Live video mixing",
      "Presentation support",
      "Video playback",
      "Technical support",
    ],
    highlight: null,
  },
]

export default function ServicesPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />
      
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/20 via-background to-accent/10 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Our Services
              </span>
              <h1 className="mb-6 text-balance text-4xl font-bold text-foreground md:text-5xl">
                Comprehensive Event Solutions
              </h1>
              <p className="text-lg text-muted-foreground">
                From intimate gatherings to grand celebrations, we offer a complete range of event management services 
                designed to bring your vision to life while respecting your budget.
              </p>
            </div>
          </div>
        </section>

        {/* Services List */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => (
                <div 
                  key={service.id}
                  id={service.id}
                  className={`grid items-center gap-8 lg:grid-cols-2 lg:gap-16 ${
                    index % 2 === 1 ? 'lg:grid-flow-dense' : ''
                  }`}
                >
                  <div className={index % 2 === 1 ? 'lg:col-start-2' : ''}>
                    <Card className="border-0 bg-gradient-to-br from-primary/10 to-accent/5 shadow-none">
                      <CardContent className="flex aspect-square items-center justify-center p-8">
                        <div className="flex h-32 w-32 items-center justify-center rounded-full bg-primary/20">
                          <service.icon className="h-16 w-16 text-primary" />
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                  <div>
                    {service.highlight && (
                      <span className="mb-2 inline-block rounded-full bg-accent px-3 py-1 text-xs font-semibold text-accent-foreground">
                        {service.highlight}
                      </span>
                    )}
                    <h2 className="mb-4 text-3xl font-bold text-foreground">{service.title}</h2>
                    <p className="mb-6 text-lg text-muted-foreground">{service.description}</p>
                    <div className="mb-8 grid gap-3 sm:grid-cols-2">
                      {service.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <CheckCircle2 className="h-5 w-5 shrink-0 text-primary" />
                          <span className="text-sm text-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                    <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                      <Link href="/contact">
                        Get a Quote
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-muted py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center lg:px-8">
            <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Need a Custom Package?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              We understand every event is unique. Contact us to discuss your specific requirements 
              and we'll create a customized package that fits your needs and budget.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                  Contact Us
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link href="/pricing">View Pricing</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
