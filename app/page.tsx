import { HeroSection } from '@/components/home/hero-section'
import { StatsSection } from '@/components/home/stats-section'
import { VerticalsSection } from '@/components/home/verticals-section'
import { WhyChooseSection } from '@/components/home/why-choose-section'
import { TestimonialsSection } from '@/components/home/testimonials-section'
import { CTASection } from '@/components/cta-section'

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StatsSection />
      <VerticalsSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <CTASection />
    </>
  )
}
