import { Faq } from "@/components/Faq";
import { Footer } from "@/components/Footer";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { HowUdaraHelps } from "@/components/HowUdaraHelps";
import { Impact } from "@/components/Impact";
import { InstantBlock } from "@/components/InstantBlock";
import { Nav } from "@/components/Nav";
import { NavMobileMenu } from "@/components/NavMobileMenu";
import { Reviews } from "@/components/Reviews";
import { Security } from "@/components/Security";
import { WhyItWorks } from "@/components/WhyItWorks";

export default function Home() {
  return (
    <>
      <Nav />
      <NavMobileMenu />
      <main>
        <Hero />
        <WhyItWorks />
        <HowItWorks />
        <HowUdaraHelps />
        <Impact />
        <Reviews />
        <Security />
        <Faq />
        <InstantBlock />
      </main>
      <Footer />
    </>
  );
}
