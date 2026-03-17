"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  MessageCircle,
  Send,
  CheckCircle2,
  Facebook,
  Instagram,
  Twitter
} from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+91 7997555522", "+91 9676351652"],
    action: "tel:+15551234567",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["hello@sunshineevents.com", "bookings@sunshineevents.com"],
    action: "mailto:hello@sunshineevents.com",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["30-22-130, Eluru Rd, beside Challa Hari Kumar Clinic", "Kothavanthena Center, Vijayawada, AP 520002"],
    action: "https://maps.google.com/?q=30-22-130,+Eluru+Rd,+Vijayawada,+Andhra+Pradesh+520002",
  },
  {
    icon: Clock,
    title: "Business Hours",
    details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM"],
    action: "#",
  },
]

const eventTypes = [
  "Wedding",
  "Birthday Party",
  "Corporate Event",
  "College Event",
  "Private Party",
  "Other",
]

export default function ContactPage() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    guestCount: "",
    message: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500))

    setIsSubmitting(false)
    setIsSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }))
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navigation />

      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-primary/20 via-background to-accent/10 py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mx-auto max-w-3xl text-center">
              <span className="mb-2 inline-block text-sm font-semibold uppercase tracking-wider text-primary">
                Contact Us
              </span>
              <h1 className="mb-6 text-balance text-4xl font-bold text-foreground md:text-5xl">
                Let's Plan Your Perfect Event
              </h1>
              <p className="text-lg text-muted-foreground">
                Ready to start planning? Get in touch with us today for a free consultation.
                We're excited to hear about your vision and help bring it to life.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2">
              {/* Contact Form */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">Send Us a Message</h2>

                {isSubmitted ? (
                  <Card className="border-primary/20 bg-primary/5">
                    <CardContent className="flex flex-col items-center p-8 text-center">
                      <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
                        <CheckCircle2 className="h-8 w-8 text-primary" />
                      </div>
                      <h3 className="mb-2 text-xl font-semibold text-foreground">Thank You!</h3>
                      <p className="mb-6 text-muted-foreground">
                        Your message has been received. Our team will get back to you within 24 hours.
                      </p>
                      <Button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormState({
                            name: "",
                            email: "",
                            phone: "",
                            eventType: "",
                            eventDate: "",
                            guestCount: "",
                            message: "",
                          })
                        }}
                        variant="outline"
                      >
                        Send Another Message
                      </Button>
                    </CardContent>
                  </Card>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="name">Full Name *</Label>
                        <Input
                          id="name"
                          name="name"
                          value={formState.name}
                          onChange={handleChange}
                          placeholder="John Doe"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email Address *</Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formState.email}
                          onChange={handleChange}
                          placeholder="john@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number *</Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formState.phone}
                          onChange={handleChange}
                          placeholder="+91 0000000000"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="eventType">Event Type *</Label>
                        <select
                          id="eventType"
                          name="eventType"
                          value={formState.eventType}
                          onChange={handleChange}
                          required
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                        >
                          <option value="">Select event type</option>
                          {eventTypes.map((type) => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    <div className="grid gap-6 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="eventDate">Preferred Event Date</Label>
                        <Input
                          id="eventDate"
                          name="eventDate"
                          type="date"
                          value={formState.eventDate}
                          onChange={handleChange}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="guestCount">Expected Guest Count</Label>
                        <Input
                          id="guestCount"
                          name="guestCount"
                          type="number"
                          value={formState.guestCount}
                          onChange={handleChange}
                          placeholder="50"
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Tell Us About Your Event *</Label>
                      <Textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleChange}
                        placeholder="Share your vision, budget range, and any special requirements..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-primary text-primary-foreground hover:bg-primary/90 sm:w-auto"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <>Sending...</>
                      ) : (
                        <>
                          Send Message
                          <Send className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>

              {/* Contact Info */}
              <div>
                <h2 className="mb-6 text-2xl font-bold text-foreground">Get in Touch</h2>

                <div className="mb-8 space-y-4">
                  {contactInfo.map((info) => (
                    <Card key={info.title} className="border-border/50">
                      <CardContent className="flex items-start gap-4 p-4">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10">
                          <info.icon className="h-5 w-5 text-primary" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-foreground">{info.title}</h3>
                          {info.details.map((detail) => (
                            <p key={detail} className="text-sm text-muted-foreground">{detail}</p>
                          ))}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                </div>

                {/* WhatsApp Button */}
                <Card className="mb-8 border-primary/20 bg-primary/5">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-500">
                        <MessageCircle className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-foreground">Quick Chat on WhatsApp</h3>
                        <p className="text-sm text-muted-foreground">Get instant responses to your queries</p>
                      </div>
                      <Button asChild variant="outline" className="shrink-0">
                        <Link href="https://wa.me/7997555522" target="_blank" rel="noopener noreferrer">
                          Chat Now
                        </Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>

                {/* Social Links */}
                <div>
                  <h3 className="mb-4 font-semibold text-foreground">Follow Us</h3>
                  <div className="flex gap-4">
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label="Facebook"
                    >
                      <Facebook className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label="Instagram"
                    >
                      <Instagram className="h-5 w-5" />
                    </a>
                    <a
                      href="#"
                      className="flex h-10 w-10 items-center justify-center rounded-full bg-muted text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                      aria-label="Twitter"
                    >
                      <Twitter className="h-5 w-5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="bg-muted">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="mb-6 text-center">
              <h2 className="mb-2 text-2xl font-bold text-foreground">Visit Our Office</h2>
              <p className="text-muted-foreground">30-22-130, Eluru Rd, beside Challa Hari Kumar Clinic, Kothavanthena Center, Vijayawada, AP 520002</p>
            </div>
            <div className="aspect-[21/9] overflow-hidden rounded-t-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3825.3686742!2d80.6199!3d16.5087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a35eff9482d944b%3A0x939b7cf88f523c54!2sEluru%20Rd%2C%20Vijayawada%2C%20Andhra%20Pradesh%20520002!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Sunshine Events Location - Vijayawada"
                className="h-full w-full"
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
