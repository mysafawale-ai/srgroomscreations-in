import { DynamicHeroSlider } from "@/components/dynamic-hero-slider"
import { DynamicAboutSection } from "@/components/dynamic-about-section"
import { DynamicContactForm } from "@/components/dynamic-contact-form"
import { GallerySection } from "@/components/gallery-section"
import { DynamicServicesSection } from "@/components/dynamic-services-section"
import { DynamicFooter } from "@/components/dynamic-footer"
import { Navigation } from "@/components/navigation"
import { WhatsAppFloat } from "@/components/whatsapp-float"

// Domain: srgroomscreations.in
// Brand: Groom Safa
// Location: India

export default function Home() {
  return (
    <main className="min-h-screen">
      <Navigation />
      <DynamicHeroSlider location="India" />
      <DynamicAboutSection location="India" />
      <DynamicContactForm location="India" domain="srgroomscreations.in" />
      <GallerySection />
      <DynamicServicesSection location="India" domain="srgroomscreations.in" />
      <DynamicFooter location="India" domain="srgroomscreations.in" />
      <WhatsAppFloat />
    </main>
  )
}
