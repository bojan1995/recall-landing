"use client";

import { useState, useEffect, type CSSProperties } from "react";
import { GlobalStyles } from "./_components/global-styles";
import { Nav } from "./_components/nav";
import { Hero } from "./_components/hero";
import { StatsStrip } from "./_components/stats-strip";
import { InteractionDemo } from "./_components/interaction-demo";
import { ConceptSection } from "./_components/concept-section";
import { BeforeAfter } from "./_components/before-after";
import { Features } from "./_components/features";
import { Testimonials } from "./_components/testimonials";
import { Pricing } from "./_components/pricing";
import { FinalCTA } from "./_components/final-cta";
import { Footer } from "./_components/footer";
import { useScrollReveal } from "./_hooks/use-scroll-reveal";

export default function RecallLanding() {
  useScrollReveal();

  return (
    <div className="recall-root">
      <GlobalStyles />
      <Nav />
      <Hero />
      <StatsStrip />
      <InteractionDemo />
      <div className="section-hr" />
      <ConceptSection />
      <BeforeAfter />
      <Features />
      <Testimonials />
      <Pricing />
      <FinalCTA />
      <Footer />
    </div>
  );
}
