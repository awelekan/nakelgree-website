'use client'

import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'

export function HeroSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-grid opacity-[0.35]" />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-0 size-96 rounded-full bg-primary/10 blur-3xl"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-40 size-80 rounded-full bg-chart-2/10 blur-3xl"
      />

      <div className="relative mx-auto grid max-w-7xl items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:gap-8 lg:py-24 lg:px-8">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold text-primary"
          >
            <Sparkles className="size-3.5" />
            African Innovation & EdTech Hub
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-balance text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl"
          >
            Helping African businesses build smarter digital solutions with AI, Data & Software.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
          >
            We design, build, and deploy secure digital products and data-driven tools that help organizations modernize, automate, and grow.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.19 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground shadow-sm transition-transform hover:scale-[1.03] active:scale-95"
            >
              Start a Project
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
            <Link
              href="/about"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-background px-6 py-3.5 text-sm font-semibold text-foreground transition-colors hover:bg-accent"
            >
              View Our Work
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.28 }}
            className="mt-10 flex items-center gap-6 text-sm text-muted-foreground"
          >
            <div>
              <span className="block text-2xl font-bold text-foreground">200+</span>
              Learners trained
            </div>
            <div className="h-10 w-px bg-border" />
            <div>
              <span className="block text-2xl font-bold text-foreground">7</span>
              Career-focused tracks
            </div>
            <div className="hidden h-10 w-px bg-border sm:block" />
            <div className="hidden sm:block">
              <span className="block text-2xl font-bold text-foreground">4x</span>
              Cohorts a year
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="relative"
        >
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-xl">
            <Image
              src="/images/hero.png"
              alt="Young African tech professionals collaborating in a modern innovation hub"
              width={720}
              height={720}
              priority
              className="h-full w-full object-cover"
            />
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="absolute -bottom-5 -left-5 hidden rounded-2xl border border-border bg-background/95 p-4 shadow-lg backdrop-blur sm:block"
          >
            <p className="text-xs font-medium text-muted-foreground">Now enrolling</p>
            <p className="text-sm font-semibold text-foreground">Next cohort is open</p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
