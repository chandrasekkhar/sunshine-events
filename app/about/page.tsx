import { Metadata } from "next"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Target,
  Eye,
  Heart,
  Users,
  Award,
  Calendar,
  ArrowRight,
  Star,
  Trophy,
  Medal,
  BadgeCheck
} from "lucide-react"

export const metadata: Metadata = {
  title: "About Us | Sunshine Events",
  description: "Learn about Sunshine Events - your trusted partner for affordable and memorable event planning.",
}

const stats = [
  { value: "500+", label: "Events Organized" },
  { value: "98%", label: "Client Satisfaction" },
  { value: "50+", label: "Trusted Vendors" },
  { value: "5+", label: "Years Experience" },
]

const values = [
  {
    icon: Heart,
    title: "Passion",
    description: "We pour our hearts into every event, treating each celebration as if it were our own.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description: "We work closely with our clients, ensuring their vision is at the center of everything we do.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We maintain the highest standards of quality, even while offering budget-friendly options.",
  },
  {
    icon: Calendar,
    title: "Reliability",
    description: "When we make a commitment, we deliver. Your trust is our most valuable asset.",
  },
]

const awards = [
  {
    icon: Trophy,
    title: "SVR Puraskar",
    organization: "Excellence in Event Management",
    description: "Recognized for outstanding contribution to the event management industry.",
  },
  {
    icon: Medal,
    title: "Prathiba Puraskar",
    organization: "Talent Recognition Award",
    description: "Honored for exceptional talent and dedication in organizing memorable events.",
  },
  {
    icon: Award,
    title: "Best Anchor",
    organization: "Anchoring Excellence",
    description: "Awarded for outstanding hosting and anchoring skills at various prestigious events.",
  },
  {
    icon: BadgeCheck,
    title: "Best Event Organizer",
    organization: "Event Industry Recognition",
    description: "Acknowledged as the top event organizer for delivering flawless celebrations.",
  },
  {
    icon: Trophy,
    title: "Navaratna Puraskar",
    organization: "Nine Gems Award",
    description: "Prestigious recognition for being among the top nine achievers in the region.",
  },
  {
    icon: Star,
    title: "Yuva Kala Samaan",
    organization: "Youth Art Honor",
    description: "Celebrated for artistic excellence and creative contributions to youth events.",
  },
]

const team = [
  {
    name: "Bhaskar",
    role: "Founder & Anchor",
    bio: "With 8 years of event management experience, Bhaskar founded Sunshine Events to make professional event planning accessible to everyone.",
  },
  {
    name: "Rahul Verma",
    role: "Creative Director",
    bio: "Rahul brings venues to life with his innovative design concepts and keen eye for aesthetics.",
  },
  {
    name: "Meera Singh",
    role: "Operations Manager",
    bio: "Meera ensures every event runs smoothly with her exceptional organizational skills and vendor relationships.",
  },
]

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/20 via-background to-accent/10 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                About Us
              </span>
              <h1 className="mb-6 text-balance text-4xl font-bold text-foreground md:text-5xl">
                Your Partner in Creating Memorable Moments
              </h1>
              <p className="text-lg text-muted-foreground">
                At Sunshine Events, we believe that every celebration deserves to be special,
                regardless of the budget. That's why we're committed to delivering exceptional
                event experiences that won't break the bank.
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="border-b border-border bg-card py-12">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-4xl font-bold text-primary md:text-5xl">{stat.value}</div>
                  <div className="mt-2 text-sm text-muted-foreground">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                  Our Story
                </span>
                <h2 className="mb-6 text-balance text-3xl font-bold text-foreground md:text-4xl">
                  Born from a Simple Belief
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Sunshine Events was founded with a simple yet powerful belief: everyone deserves
                    to celebrate life's milestones beautifully, without financial stress getting in the way.
                  </p>
                  <p>
                    Our founder, Bhaskar, experienced firsthand the challenge of planning
                    his sister's wedding on a tight budget. Despite the constraints, he managed
                    to create a magical celebration through creativity, careful planning, and
                    building relationships with local vendors.
                  </p>
                  <p>
                    That experience sparked an idea: what if we could help others achieve the same?
                    And so, Sunshine Events was born - a company dedicated to making event planning
                    accessible, affordable, and absolutely unforgettable.
                  </p>
                  <p>
                    Today, we've organized over 500 events, from intimate birthday gatherings to
                    grand weddings, always maintaining our commitment to quality and affordability.
                  </p>
                </div>
              </div>
              <div className="relative">
                <Card className="border-0 bg-gradient-to-br from-primary/20 to-accent/10 shadow-none">
                  <CardContent className="flex aspect-square items-center justify-center p-8">
                    <div className="text-center">
                      <div className="mb-4 flex justify-center">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-8 w-8 fill-primary text-primary" />
                        ))}
                      </div>
                      <blockquote className="text-xl font-medium italic text-foreground">
                        &quot;Making dreams come true, one event at a time.&quot;
                      </blockquote>
                      <p className="mt-4 text-muted-foreground">- Our Founding Principle</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2">
              <Card className="border-primary/20">
                <CardContent className="p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Target className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">Our Mission</h3>
                  <p className="text-muted-foreground">
                    To make professional event planning accessible to everyone by offering
                    affordable, high-quality services that transform ordinary moments into
                    extraordinary memories. We strive to eliminate the financial barriers
                    that often prevent people from celebrating life's special occasions the way they deserve.
                  </p>
                </CardContent>
              </Card>
              <Card className="border-accent/20">
                <CardContent className="p-8">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
                    <Eye className="h-6 w-6 text-accent" />
                  </div>
                  <h3 className="mb-4 text-2xl font-bold text-foreground">Our Vision</h3>
                  <p className="text-muted-foreground">
                    To become the most trusted name in budget-friendly event planning,
                    known for our creativity, reliability, and commitment to client satisfaction.
                    We envision a world where every celebration, big or small, is executed
                    with professionalism and care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Our Values
              </span>
              <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
                What We Stand For
              </h2>
              <p className="text-muted-foreground">
                Our values guide every decision we make and every event we plan.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((value) => (
                <Card key={value.title} className="border-border/50 text-center">
                  <CardContent className="p-6">
                    <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <value.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="mb-2 text-lg font-semibold text-foreground">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Awards Section */}
        <section className="bg-muted py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Our Awards
              </span>
              <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
                Recognition for Excellence
              </h2>
              <p className="text-muted-foreground">
                Our commitment to quality and customer satisfaction has been recognized by industry leaders.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {awards.map((award) => (
                <Card key={award.title} className="border-primary/20 bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-accent/20">
                      <award.icon className="h-8 w-8 text-primary" />
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-foreground">{award.title}</h3>
                    <p className="mb-3 text-xs font-medium uppercase tracking-wide text-primary">{award.organization}</p>
                    <p className="text-sm text-muted-foreground">{award.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto mb-12 max-w-2xl text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Our Team
              </span>
              <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
                Meet the People Behind the Magic
              </h2>
              <p className="text-muted-foreground">
                Our talented team brings passion, creativity, and expertise to every event.
              </p>
            </div>

            <div className="grid gap-6 md:grid-cols-3">
              {team.map((member) => (
                <Card key={member.name} className="border-border/50">
                  <CardContent className="p-6 text-center">
                    <div className="mx-auto mb-4 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-primary/30 to-accent/30">
                      <span className="text-3xl font-bold text-foreground">
                        {member.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <h3 className="mb-1 text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="mb-3 text-sm font-medium text-primary">{member.role}</p>
                    <p className="text-sm text-muted-foreground">{member.bio}</p>
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
              Let's Create Something Amazing Together
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-primary-foreground/80">
              Ready to start planning your next event? Our team is excited to hear about your vision
              and help bring it to life.
            </p>
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact">
                Get in Touch
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
