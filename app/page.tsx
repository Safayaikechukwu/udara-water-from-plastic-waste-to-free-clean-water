import { ClosingCta } from "@/components/ClosingCta";
import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowUdaraHelps } from "@/components/HowUdaraHelps";
import { InstantBlock } from "@/components/InstantBlock";
import { JoinPrompt } from "@/components/JoinPrompt";
import { Nav } from "@/components/Nav";
import { NavMobileMenu } from "@/components/NavMobileMenu";
import { Reviews } from "@/components/Reviews";
import { Security } from "@/components/Security";
import { TrustBar } from "@/components/TrustBar";
import { WhyItWorks } from "@/components/WhyItWorks";

export default function Home() {
  return (
    <>
      <Nav />
      <NavMobileMenu />
      <main>
        <Hero />
        <WhyItWorks />
        <HowUdaraHelps />
        <Reviews />
        <TrustBar />
        <Security />
        <ClosingCta />
        <Faq />
        <InstantBlock />
      </main>
      <Footer />
      <JoinPrompt />
    </>
  );
}
