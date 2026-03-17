import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Heart,
  Cake,
  Building2,
  GraduationCap,
  PartyPopper,
  Utensils,
  Star,
  ArrowRight,
  CheckCircle2
} from "lucide-react"

const services = [
  {
    icon: Heart,
    title: "Wedding Planning",
    description: "Create your dream wedding without breaking the bank. From intimate ceremonies to grand celebrations.",
  },
  {
    icon: Cake,
    title: "Birthday Parties",
    description: "Make birthdays unforgettable with themed decorations, entertainment, and delicious treats.",
  },
  {
    icon: Building2,
    title: "Corporate Events",
    description: "Professional event management for conferences, team building, and company celebrations.",
  },
  {
    icon: GraduationCap,
    title: "College Events",
    description: "Vibrant and engaging events for fresher parties, farewells, and college festivals.",
  },
  {
    icon: PartyPopper,
    title: "Private Parties",
    description: "Exclusive gatherings designed to your taste, from cocktail parties to themed soirees.",
  },
  {
    icon: Utensils,
    title: "Catering Services",
    description: "Delicious cuisine options to complement your event, from casual to gourmet dining.",
  },
]

const testimonials = [
  {
    name: "Satish Kumar",
    event: "Wedding",
    content: "Sunshine Events made our wedding day absolutely perfect! They understood our budget constraints and still delivered a magical experience.",
    rating: 5,
  },
  {
    name: "Yeshwanth Kumar",
    event: "Corporate Event",
    content: "Professional, creative, and budget-conscious. Our company's annual gala was a huge success thanks to their team.",
    rating: 5,
  },
  {
    name: "Priyanka",
    event: "Birthday Party",
    content: "My daughter's 10th birthday was a dream come true. The decorations, activities, and coordination were flawless!",
    rating: 5,
  },
  {
    name: "Rajesh Reddy",
    event: "Wedding Reception",
    content: "From venue selection to the final farewell, everything was handled with utmost professionalism. Highly recommend Sunshine Events!",
    rating: 5,
  },
  {
    name: "Lakshmi Devi",
    event: "Baby Shower",
    content: "The team created such a beautiful and memorable baby shower for us. Every detail was perfect and within our budget.",
    rating: 5,
  },
  {
    name: "Venkat Rao",
    event: "Corporate Conference",
    content: "Excellent coordination and execution. Our three-day conference went smoothly without any hiccups. Great team!",
    rating: 5,
  },
  {
    name: "Sravani",
    event: "Engagement Ceremony",
    content: "They turned our engagement into a fairytale event. The decorations and arrangements exceeded our expectations.",
    rating: 5,
  },
  {
    name: "Arun Sharma",
    event: "College Fest",
    content: "Sunshine Events handled our entire college fest brilliantly. The students loved every moment of it!",
    rating: 5,
  },
  {
    name: "Padma",
    event: "Anniversary Party",
    content: "Our 25th anniversary celebration was made extra special thanks to their creative ideas and perfect execution.",
    rating: 5,
  },
  {
    name: "Suresh Babu",
    event: "Product Launch",
    content: "The product launch event was a grand success. Media coverage and guest management was handled professionally.",
    rating: 5,
  },
  {
    name: "Kavitha",
    event: "House Warming",
    content: "Beautiful pooja arrangements and catering for our house warming. Everything was traditional yet elegant.",
    rating: 5,
  },
  {
    name: "Ravi Teja",
    event: "Birthday Bash",
    content: "Threw a surprise 50th birthday party for my father. The team kept everything secret and executed perfectly!",
    rating: 5,
  },
  {
    name: "Swathi",
    event: "Mehendi Ceremony",
    content: "The mehendi ceremony setup was stunning! Loved the colorful decorations and the attention to detail.",
    rating: 5,
  },
]

const features = [
  "Budget-friendly packages",
  "Experienced event planners",
  "Customized themes",
  "Quality vendors network",
  "On-site coordination",
  "Stress-free planning",
]

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-primary/20 via-background to-accent/10 py-20 lg:py-32">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-40 -top-40 h-80 w-80 rounded-full bg-primary/20 blur-3xl" />
            <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-accent/20 blur-3xl" />
          </div>
          <div className="container relative mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                Budget-Friendly Event Management
              </span>
              <h1 className="mb-6 text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
                Making Every Event Special Within Your Budget
              </h1>
              <p className="mb-8 text-lg text-muted-foreground md:text-xl">
                Transform your celebrations into unforgettable memories without stretching your wallet.
                From weddings to corporate events, we bring your vision to life.
              </p>
              <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">
                    Book Your Event Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button asChild variant="outline" size="lg">
                  <Link href="/services">Explore Services</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Features Bar */}
        <section className="border-y border-border bg-card py-6">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                  <span className="text-sm font-medium text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Our Services
              </span>
              <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
                Everything You Need for the Perfect Event
              </h2>
              <p className="text-muted-foreground">
                From intimate gatherings to grand celebrations, we offer comprehensive event management services tailored to your needs and budget.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Card key={service.title} className="group border-border/50 transition-all hover:border-primary/50 hover:shadow-lg">
                  <CardContent className="p-6">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 transition-colors group-hover:bg-primary">
                      <service.icon className="h-6 w-6 text-primary transition-colors group-hover:text-primary-foreground" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-12 text-center">
              <Button asChild variant="outline" size="lg">
                <Link href="/services">
                  View All Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="bg-muted py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                  About Us
                </span>
                <h2 className="mb-6 text-balance text-3xl font-bold text-foreground md:text-4xl">
                  Creating Memorable Events Since Day One
                </h2>
                <p className="mb-6 text-muted-foreground">
                  At Sunshine Events, we believe that everyone deserves to celebrate life's special moments beautifully,
                  regardless of budget. Our team of passionate event planners works tirelessly to bring your vision to life
                  while keeping costs manageable.
                </p>
                <ul className="mb-8 space-y-3">
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-foreground">500+ successful events organized</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-foreground">98% customer satisfaction rate</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <CheckCircle2 className="h-5 w-5 text-primary" />
                    <span className="text-foreground">Trusted network of quality vendors</span>
                  </li>
                </ul>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
              <div className="relative">
                <div className="aspect-square overflow-hidden rounded-2xl bg-gradient-to-br from-primary/30 to-accent/30">
                  <div className="flex h-full w-full items-center justify-center">
                    <div className="text-center">
                      <div className="mb-4 text-6xl font-bold text-primary">500+</div>
                      <div className="text-xl font-medium text-foreground">Events Delivered</div>
                    </div>
                  </div>
                </div>
                <div className="absolute -bottom-6 -right-6 rounded-xl bg-card p-4 shadow-lg">
                  <div className="flex items-center gap-2">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <span className="font-semibold text-foreground">4.9/5</span>
                  </div>
                  <p className="mt-1 text-sm text-muted-foreground">Based on 200+ reviews</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="overflow-hidden py-20 lg:py-28">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Testimonials
              </span>
              <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
                What Our Clients Say
              </h2>
              <p className="text-muted-foreground">
                Don&apos;t just take our word for it. Here&apos;s what our happy clients have to say about their experience with Sunshine Events.
              </p>
            </div>
          </div>

          {/* Infinite Scrolling Testimonials */}
          <div className="relative">
            <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-20 bg-gradient-to-r from-background to-transparent" />
            <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-20 bg-gradient-to-l from-background to-transparent" />
            
            <div className="flex animate-marquee gap-6">
              {[...testimonials, ...testimonials, ...testimonials, ...testimonials].map((testimonial, index) => (
                <Card key={`${testimonial.name}-${index}`} className="w-[350px] shrink-0 border-border/50">
                  <CardContent className="flex h-full flex-col p-6">
                    <div className="mb-4 flex shrink-0">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-5 w-5 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="mb-4 flex-1 text-pretty leading-relaxed text-muted-foreground">&quot;{testimonial.content}&quot;</p>
                    <div className="shrink-0">
                      <p className="font-semibold text-foreground">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.event}</p>
                    </div>
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
              Ready to Plan Your Perfect Event?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
              Let's bring your vision to life. Contact us today for a free consultation and quote.
              No event is too big or small for us!
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Get a Free Quote
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
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
