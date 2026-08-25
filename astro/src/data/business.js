/**
 * Single source of truth for the salon's name, address and phone (NAP).
 *
 * Every place the business details appear -- the LocalBusiness schema, the
 * footer, the location section -- reads from here. Conflicting NAP data across
 * a site is a local-SEO problem, so there is deliberately only one copy.
 *
 * These values must also match the Google Business Profile exactly.
 */
export const business = {
  name: "The Mane Allure",
  legalName: "TheManeAllure LLC",
  url: "https://www.themaneallure.com",
  /** E.164 -- what schema.org and tel: links expect. */
  telephone: "+1-281-832-0808",
  /** Human-readable form for on-page display. */
  telephoneDisplay: "(281) 832-0808",
  bookingUrl: "https://themaneallure.glossgenius.com/",
  stylist: {
    name: "Alma Palomares-Juarez",
    shortName: "Alma Juarez",
    jobTitle: "Master Colorist",
  },
  address: {
    street: "3312 Marquart St",
    city: "Houston",
    region: "TX",
    postalCode: "77027",
    country: "US",
  },
  social: {
    instagram: "https://www.instagram.com/themaneallure/",
    tiktok: "https://www.tiktok.com/@themanealluree",
  },
  services: [
    "Balayage",
    "Foliayage",
    "Blonding",
    "Custom Color",
    "Color Correction",
  ],
  hours: [
    { days: ["Tuesday"], opens: "09:00", closes: "17:00" },
    {
      days: ["Wednesday", "Thursday", "Friday"],
      opens: "10:00",
      closes: "19:00",
    },
    { days: ["Saturday"], opens: "10:00", closes: "18:00" },
  ],
  /** Human-readable hours for display; mirrors `hours` above. */
  hoursDisplay: [
    { label: "Tuesday", value: "9:00 AM - 5:00 PM" },
    { label: "Wednesday", value: "10:00 AM - 7:00 PM" },
    { label: "Thursday", value: "10:00 AM - 7:00 PM" },
    { label: "Friday", value: "10:00 AM - 7:00 PM" },
    { label: "Saturday", value: "10:00 AM - 6:00 PM" },
    { label: "Sun-Mon", value: "Closed" },
  ],
};

/** Builds the HairSalon JSON-LD block from the data above. */
export function localBusinessSchema({ description }) {
  return {
    "@context": "https://schema.org",
    "@type": "HairSalon",
    name: business.name,
    description,
    url: business.url,
    telephone: business.telephone,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.address.street,
      addressLocality: business.address.city,
      addressRegion: business.address.region,
      postalCode: business.address.postalCode,
      addressCountry: business.address.country,
    },
    founder: {
      "@type": "Person",
      name: business.stylist.name,
      jobTitle: business.stylist.jobTitle,
    },
    areaServed: { "@type": "City", name: business.address.city },
    knowsAbout: business.services,
    openingHoursSpecification: business.hours.map((h) => ({
      "@type": "OpeningHoursSpecification",
      dayOfWeek: h.days,
      opens: h.opens,
      closes: h.closes,
    })),
    hasMap: `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
      `${business.address.street} ${business.address.city} ${business.address.region} ${business.address.postalCode}`
    )}`,
    potentialAction: {
      "@type": "ReserveAction",
      target: business.bookingUrl,
    },
    sameAs: [business.social.instagram, business.social.tiktok],
  };
}
