"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { toast } from "@/components/ui/use-toast"
import { motion } from "framer-motion"

export default function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Here you would typically send this to your API
    console.log("Subscribing email:", email)

    toast({
      title: "Thank you for subscribing!",
      description: "You'll receive our newsletter at " + email,
    })

    setEmail("")
  }

  return (
    <section className="py-16 px-4 bg-neutral-100">
      <div className="max-w-xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl font-light tracking-wide mb-4">JOIN OUR NEWSLETTER</h2>
          <p className="text-neutral-600 mb-6">Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <Input
              type="email"
              placeholder="Your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="rounded-full flex-1"
            />
            <Button
              type="submit"
              className="rounded-full bg-black hover:bg-black/90"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              as={motion.button}
            >
              SUBSCRIBE
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  )
}
