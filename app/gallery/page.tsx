"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, X } from "lucide-react"

const categories = [
  { id: "all", label: "All Events" },
  { id: "weddings", label: "Weddings" },
  { id: "birthdays", label: "Birthdays" },
  { id: "corporate", label: "Corporate" },
  { id: "college", label: "College" },
  { id: "parties", label: "Parties" },
]

const galleryItems = [
  {
    id: 1,
    category: "weddings",
    title: "Elegant Garden Wedding",
    description: "A beautiful outdoor ceremony with floral arrangements and fairy lights.",
    color: "from-rose-200 to-pink-300",
  },
  {
    id: 2,
    category: "weddings",
    title: "Traditional Wedding",
    description: "Classic decor with rich colors and traditional elements.",
    color: "from-amber-200 to-orange-300",
  },
  {
    id: 3,
    category: "birthdays",
    title: "Superhero Kids Party",
    description: "An action-packed celebration with themed decorations and activities.",
    color: "from-blue-200 to-cyan-300",
  },
  {
    id: 4,
    category: "birthdays",
    title: "Princess Theme Party",
    description: "A magical fairytale celebration fit for royalty.",
    color: "from-pink-200 to-purple-300",
  },
  {
    id: 5,
    category: "corporate",
    title: "Annual Awards Gala",
    description: "Sophisticated corporate event celebrating employee achievements.",
    color: "from-slate-200 to-gray-300",
  },
  {
    id: 6,
    category: "corporate",
    title: "Product Launch Event",
    description: "Modern setup for unveiling new products to media and stakeholders.",
    color: "from-teal-200 to-emerald-300",
  },
  {
    id: 7,
    category: "college",
    title: "Fresher's Welcome Night",
    description: "Vibrant celebration to welcome new students to campus life.",
    color: "from-violet-200 to-indigo-300",
  },
  {
    id: 8,
    category: "college",
    title: "Cultural Fest",
    description: "Multi-day celebration of art, music, and performances.",
    color: "from-yellow-200 to-lime-300",
  },
  {
    id: 9,
    category: "parties",
    title: "Cocktail Evening",
    description: "Sophisticated gathering with elegant decor and ambient lighting.",
    color: "from-fuchsia-200 to-pink-300",
  },
  {
    id: 10,
    category: "parties",
    title: "Baby Shower Celebration",
    description: "Tender moments captured in a beautifully decorated space.",
    color: "from-sky-200 to-blue-300",
  },
  {
    id: 11,
    category: "Government Event",
    title: "Annual Awards ",
    description: "Government Events ."
    color: "from-cyan-200 to-blue-300",
  },
  {
    id: 12,
    category: "birthdays",
    title: "50th Birthday Bash",
    description: "Golden celebration marking a milestone birthday.",
    color: "from-amber-300 to-yellow-400",
  },
]

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState("all")
  const [selectedItem, setSelectedItem] = useState<typeof galleryItems[0] | null>(null)

  const filteredItems = activeCategory === "all"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory)

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/20 via-background to-accent/10 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Our Gallery
              </span>
              <h1 className="mb-6 text-balance text-4xl font-bold text-foreground md:text-5xl">
                Moments We've Created
              </h1>
              <p className="text-lg text-muted-foreground">
                Take a look at some of the beautiful events we've had the privilege to plan and execute.
                Each celebration tells a unique story of joy, love, and memorable moments.
              </p>
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <section className="border-b border-border bg-card py-6">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="flex flex-wrap items-center justify-center gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`rounded-full px-4 py-2 text-sm font-medium transition-colors ${activeCategory === category.id
                    ? "bg-primary text-primary-foreground"
                    : "bg-muted text-muted-foreground hover:bg-muted/80"
                    }`}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Grid */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {filteredItems.map((item) => (
                <Card
                  key={item.id}
                  className="group cursor-pointer overflow-hidden border-border/50 transition-all hover:shadow-lg"
                  onClick={() => setSelectedItem(item)}
                >
                  <CardContent className="p-0">
                    <div className={`aspect-[4/3] bg-gradient-to-br ${item.color} transition-transform group-hover:scale-105`}>
                      <div className="flex h-full w-full items-center justify-center">
                        <span className="text-lg font-semibold text-foreground/70">{item.title}</span>
                      </div>
                    </div>
                    <div className="p-4">
                      <span className="mb-1 inline-block rounded-full bg-primary/10 px-2 py-0.5 text-xs font-medium capitalize text-primary">
                        {item.category}
                      </span>
                      <h3 className="mb-1 font-semibold text-foreground">{item.title}</h3>
                      <p className="text-sm text-muted-foreground line-clamp-2">{item.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {filteredItems.length === 0 && (
              <div className="py-12 text-center">
                <p className="text-muted-foreground">No events found in this category.</p>
              </div>
            )}
          </div>
        </section>

        {/* Modal */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="relative w-full max-w-2xl overflow-hidden rounded-2xl bg-card"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/80 text-foreground transition-colors hover:bg-background"
                aria-label="Close modal"
              >
                <X className="h-5 w-5" />
              </button>
              <div className={`aspect-video bg-gradient-to-br ${selectedItem.color}`}>
                <div className="flex h-full w-full items-center justify-center">
                  <span className="text-2xl font-semibold text-foreground/70">{selectedItem.title}</span>
                </div>
              </div>
              <div className="p-6">
                <span className="mb-2 inline-block rounded-full bg-primary/10 px-3 py-1 text-sm font-medium capitalize text-primary">
                  {selectedItem.category}
                </span>
                <h3 className="mb-2 text-2xl font-bold text-foreground">{selectedItem.title}</h3>
                <p className="mb-4 text-muted-foreground">{selectedItem.description}</p>
                <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                  <Link href="/contact">
                    Plan a Similar Event
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <section className="bg-muted py-16 lg:py-20">
          <div className="container mx-auto px-4 text-center lg:px-8">
            <h2 className="mb-4 text-balance text-3xl font-bold text-foreground md:text-4xl">
              Want Your Event Featured Here?
            </h2>
            <p className="mx-auto mb-8 max-w-2xl text-muted-foreground">
              Let us create a memorable event for you. Our team is ready to bring your vision to life
              and add another success story to our gallery.
            </p>
            <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
              <Link href="/contact">
                Start Planning
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
