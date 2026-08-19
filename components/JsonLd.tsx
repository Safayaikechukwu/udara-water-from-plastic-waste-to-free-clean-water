import { copy } from "@/lib/copy";
import { siteConfig } from "@/lib/site";

export function JsonLd() {
  const organization = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${siteConfig.url}/#organization`,
    name: siteConfig.name,
    legalName: siteConfig.legalEntity,
    alternateName: [siteConfig.legalName, "Udara WhatsApp savings"],
    url: siteConfig.url,
    logo: `${siteConfig.url}/brand/udara-logo.png`,
    image: `${siteConfig.url}/og.png`,
    description: siteConfig.description,
    foundingLocation: {
      "@type": "Place",
      address: {
        "@type": "PostalAddress",
        addressLocality: siteConfig.address.addressLocality,
        addressRegion: siteConfig.address.addressRegion,
        addressCountry: siteConfig.address.addressCountry,
      },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.streetAddress,
      addressLocality: siteConfig.address.addressLocality,
      addressRegion: siteConfig.address.addressRegion,
      addressCountry: siteConfig.address.addressCountry,
    },
    areaServed: {
      "@type": "Country",
      name: "Nigeria",
    },
    sameAs: [...siteConfig.sameAs],
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer support",
        telephone: `+${siteConfig.whatsappNumber}`,
        availableLanguage: ["English"],
        areaServed: "NG",
        hoursAvailable: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
          ],
          opens: "09:00",
          closes: "18:00",
        },
      },
    ],
    brand: {
      "@type": "Brand",
      name: siteConfig.name,
      logo: `${siteConfig.url}/brand/udara-logo.png`,
    },
    parentOrganization: {
      "@type": "Organization",
      name: siteConfig.legalName,
    },
  };

  const software = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: siteConfig.name,
    applicationCategory: "FinanceApplication",
    applicationSubCategory: "WhatsApp savings agent",
    operatingSystem: "WhatsApp",
    description: siteConfig.description,
    url: siteConfig.url,
    image: `${siteConfig.url}/og.png`,
    featureList: [
      "Spend clarity on WhatsApp",
      "Hard lock on outbound transfers from 7PM until morning",
      "Goal-based savings accountability",
      "Instant account block if phone is lost",
      "No separate app download required",
    ],
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "NGN",
      description: "Join Udara on WhatsApp",
      url: siteConfig.url,
    },
    provider: {
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.legalName,
    },
    aggregateRating: undefined,
  };

  const faq = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: copy.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  const website = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteConfig.url}/#website`,
    name: siteConfig.name,
    url: siteConfig.url,
    description: siteConfig.description,
    inLanguage: "en-NG",
    publisher: {
      "@id": `${siteConfig.url}/#organization`,
    },
  };

  const howTo = {
    "@context": "https://schema.org",
    "@type": "HowTo",
    name: "How to join Udara",
    description:
      "Join Udara’s WhatsApp strict savings agent, set a savings goal, and move money in.",
    totalTime: "PT10M",
    step: [
      {
        "@type": "HowToStep",
        position: 1,
        name: "Open Join Udara",
        text: "Tap Join Udara on https://www.useudara.com to start a WhatsApp chat with Udara.",
        url: siteConfig.url,
      },
      {
        "@type": "HowToStep",
        position: 2,
        name: "Complete short setup",
        text: "Finish the short WhatsApp setup and confirm your details.",
      },
      {
        "@type": "HowToStep",
        position: 3,
        name: "Set a savings goal",
        text: "Choose the savings goal Udara will help you stay accountable to.",
      },
      {
        "@type": "HowToStep",
        position: 4,
        name: "Move money in",
        text: "Move money in through the Rubies Microfinance Bank-backed flow. Udara then applies the 7PM hard lock and accountability.",
      },
    ],
  };

  // Strip undefined keys from software (no fake ratings)
  const { aggregateRating: _r, ...softwareClean } = software;
  void _r;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organization) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareClean) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faq) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(website) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(howTo) }}
      />
    </>
  );
}
