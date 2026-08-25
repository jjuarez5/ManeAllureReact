/**
 * Service page content.
 *
 * Each entry generates a real static page at /{slug} via src/pages/[slug].astro,
 * plus its own Service schema and a card on the homepage.
 *
 * DRAFT COPY -- needs Alma's review before these go live.
 *
 * The structure and keyword targeting are sound, but the wording is written
 * from the outside. Google rewards pages that sound like the person doing the
 * work, and thin or generic service pages can rank worse than no page at all.
 * Alma should rewrite these in her own voice and confirm every process claim.
 * Nothing here states a price or a guaranteed timeframe on purpose.
 */
export const services = [
  {
    slug: "houston-balayage",
    order: 1,
    name: "Balayage",
    serviceType: "Balayage Hair Coloring",
    kicker: "BONUS STAGE",
    heading: "BALAYAGE IN HOUSTON, TX",
    tagline: "Hand-painted, dimensional color",
    cardBlurb: "Soft, sun-lit dimension that grows out without a hard line.",
    metaTitle:
      "Houston Balayage | The Mane Allure — Hand-Painted Color by Alma Juarez",
    metaDescription:
      "Hand-painted balayage in Houston, TX by master colorist Alma Juarez. Dimensional, low-maintenance color tailored to your hair. Free consultation for new color clients.",
    intro:
      "Balayage is a freehand technique — color is painted onto the hair by hand rather than applied through foils, so it grows out softly instead of leaving a hard line. That makes it one of the most forgiving color services available, and one of the best options if you want dimension without committing to touch-ups every few weeks.",
    sections: [
      {
        heading: "What to expect",
        body: "Every new color client at The Mane Allure starts with a free consultation. Alma looks at your hair's history, condition, and natural level, then builds a plan around the result you actually want. Color is placed based on how you wear and part your hair, so it reads as intended when it moves.",
      },
      {
        heading: "Balayage, foliayage, or highlights?",
        body: "Balayage is painted on the surface for a soft, sun-lit effect. Foliayage combines that hand-painting with foils to lift further, which is the usual route for darker starting hair. Traditional highlights give a more uniform, structured result. Which one suits you depends on your starting color and your goal — that is what the consultation is for.",
      },
    ],
  },
  {
    slug: "houston-hair-color",
    order: 2,
    name: "Custom Color",
    serviceType: "Custom Hair Coloring",
    kicker: "STAGE SELECT",
    heading: "HAIR COLOR IN HOUSTON, TX",
    tagline: "Custom color, formulated for your hair",
    cardBlurb: "Color built around your hair's history, tone, and goal.",
    metaTitle:
      "Houston Hair Color | The Mane Allure — Custom Color by Alma Juarez",
    metaDescription:
      "Custom hair color in Houston, TX by master colorist Alma Juarez. Gloss, tone, all-over color and dimensional work formulated for your hair. Free consultation for new color clients.",
    intro:
      "No two heads of hair take color the same way. Previous color, water, heat, and your natural level all change how a formula behaves, which is why custom color starts with reading the hair rather than picking a shade from a chart.",
    sections: [
      {
        heading: "What custom color covers",
        body: "All-over color, root touch-ups, gloss and toning services, and dimensional work that combines more than one technique. If you are trying to hold a tone that keeps fading, or want to shift depth without going lighter, this is usually the conversation to have.",
      },
      {
        heading: "Why the consultation matters",
        body: "Color is chemistry applied to a surface that already has a history. Box color, old highlights, and heat damage all affect what is realistically achievable in one sitting. The free consultation exists so you hear an honest plan before anything is mixed, including whether your goal needs more than one appointment.",
      },
    ],
  },
  {
    slug: "houston-blonding",
    order: 3,
    name: "Blonding",
    serviceType: "Hair Lightening and Blonding",
    kicker: "HARD MODE",
    heading: "BLONDING IN HOUSTON, TX",
    tagline: "Lightening with the integrity of your hair in mind",
    cardBlurb: "Lift and tone, planned around what your hair can take.",
    metaTitle:
      "Houston Blonding | The Mane Allure — Blonde Specialist Alma Juarez",
    metaDescription:
      "Blonding and hair lightening in Houston, TX by master colorist Alma Juarez. Foils, teasylights and toning planned around hair integrity. Free consultation for new color clients.",
    intro:
      "Going blonde is the most demanding thing you can ask of hair. Lifting removes pigment, and how far it can safely go depends on your starting level, your hair's condition, and what has been on it before. Done well, blonding is as much about knowing when to stop as knowing how to lift.",
    sections: [
      {
        heading: "The approach",
        body: "Alma plans blonding around hair integrity first. That can mean foils, teasylights, a root shadow, or a combination, followed by toning to land the final shade. Where a goal cannot be reached safely in one appointment, she will say so and map out the sessions it will take instead.",
      },
      {
        heading: "Maintenance",
        body: "Blonde is a commitment after you leave the chair. Toning fades, regrowth shows more than it does on darker color, and at-home care meaningfully changes how long the result holds. Expect a frank conversation about upkeep before you book, not after.",
      },
    ],
  },
  {
    slug: "houston-color-correction",
    order: 4,
    name: "Color Correction",
    serviceType: "Hair Color Correction",
    kicker: "BOSS FIGHT",
    heading: "COLOR CORRECTION IN HOUSTON, TX",
    tagline: "Fixing color that did not go to plan",
    cardBlurb: "Banding, brass, box color, or a result that missed the mark.",
    metaTitle:
      "Houston Color Correction | The Mane Allure — Alma Juarez, Master Colorist",
    metaDescription:
      "Hair color correction in Houston, TX by master colorist Alma Juarez. Banding, brassiness, uneven color and box color grow-out. Consultation required before booking.",
    intro:
      "Color correction is the work of undoing a previous result — banding, brassiness, uneven lift, box color that will not budge, or a shade that simply is not what was asked for. It is the most technical service in the salon, and the one where a consultation is not optional.",
    sections: [
      {
        heading: "Why correction needs its own consultation",
        body: "A correction cannot be quoted or scheduled from a photo. Alma needs to see the hair in person to know how many layers of previous color are present, how the hair is holding up, and whether the goal is reachable at all without compromising integrity. Some corrections take multiple appointments spaced out over time.",
      },
      {
        heading: "What to bring",
        body: "Anything you know about your hair's history helps: what was used, roughly when, whether it was professional or at-home, and any photos of both the result you got and the result you want. The more accurate that history, the better the plan.",
      },
    ],
  },
];

export function getService(slug) {
  return services.find((service) => service.slug === slug);
}
