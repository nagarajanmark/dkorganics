/**
 * Set to `true` to display the Coming Soon landing page at `/`.
 * Flip to `false` when the full website is finished and ready to launch.
 * While `true`, the full work-in-progress site remains accessible at `/preview`.
 */
export const SITE_COMING_SOON = false;

export interface ProductSpec {
  id: "neem-cake-powder";
  label: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  imageAlt: string;
  aspectLabel: string;
}

export interface BenefitCard {
  index: string;
  title: string;
  caption: string;
  image: string;
  imageAlt: string;
}

export interface ProcessStage {
  number: string;
  title: string;
  orbitTitle: string;
  orbitSubtitle: string;
  eyebrow: string;
  caption: string;
  detailHeading: string;
  detailSubheading: string;
  highlights: string[];
  accent: string;
  image: string;
  imageAlt: string;
}

export const HERO_SLIDES = [
  {
    src: "/images/stage-01-neem-leaves.jpg",
    alt: "Sunlit Azadirachta indica neem tree branches with fresh leaves and ripe golden neem seeds in morning light",
    label: "Pure Neem Botanicals",
  },
  {
    src: "/images/hero-organic-rows.jpg",
    alt: "Lush emerald green organic agricultural crop rows thriving in dark fertile soil",
    label: "Sustainable Cultivation",
  },
];

export const PRODUCT_LINEUP: ProductSpec[] = [
  {
    id: "neem-cake-powder",
    label: "Neem Cake Powder / Veppam Punnakku",
    eyebrow: "Signature Botanical Input",
    title: "Neem Cake Powder / Veppam Punnakku",
    subtitle: "Cold-pressed natural neem kernel cake & finely milled powder",
    description:
      "A pure, cold-pressed agricultural product crafted from neem kernels for natural soil care, root-zone nourishment, and sustainable farming practices.",
    highlights: [
      "100% Pure Neem Cake Powder",
      "Natural Soil Care",
      "Sustainable Agriculture",
    ],
    image: "/images/product-neem-cake-pack.jpg",
    imageAlt:
      "DK ORGANICS Neem Cake Powder Veppam Punnakku eco-luxury matte forest green pouch beside a bowl of natural neem cake powder and fresh neem leaves",
    aspectLabel: "Finely Milled Neem Cake Powder",
  },
];

export const NATURE_GALLERY = [
  {
    id: "leaves",
    label: "Fresh Neem Leaves",
    image: "/images/nature-leaves-dew.jpg",
    alt: "Macro close-up of fresh green leaves glistening with morning dew drops",
  },
  {
    id: "powder",
    label: "Cold-Pressed Neem Cake",
    image: "/images/stage-02-processing.jpg",
    alt: "Natural cold-pressed earth-brown oil seed cake showcasing fibrous organic texture",
  },
  {
    id: "soil",
    label: "Natural Soil Texture",
    image: "/images/nature-dark-soil.jpg",
    alt: "Rich dark organic agricultural soil texture teeming with natural organic matter",
  },
  {
    id: "farmers",
    label: "Farmers in Green Fields",
    image: "/images/nature-farmers-field.jpg",
    alt: "Farmers tending vibrant green organic agricultural rows beneath tall canopy trees",
  },
];

export const BENEFIT_CARDS: BenefitCard[] = [
  {
    index: "01",
    title: "Organic Agricultural Care",
    caption: "Botanical inputs crafted cleanly from pure neem resources.",
    image: "/images/benefit-organic-care.jpg",
    imageAlt:
      "Dew-kissed fresh neem foliage glowing in crisp directional morning sunlight",
  },
  {
    index: "02",
    title: "Soil Health Support",
    caption: "Enriches organic matter and nurtures the living root zone.",
    image: "/images/benefit-soil-health.jpg",
    imageAlt:
      "Farmer hands gently working rich dark soil around emerging green seedlings",
  },
  {
    index: "03",
    title: "Sustainable Farming",
    caption: "Respectful of land, water, and generations of harvests ahead.",
    image: "/images/benefit-sustainable-farming.jpg",
    imageAlt:
      "Expansive terraced organic farmland flourishing along sunlit emerald hillsides",
  },
];

export const PROCESS_STAGES: ProcessStage[] = [
  {
    number: "01",
    title: "Neem Leaves",
    orbitTitle: "Pure Neem",
    orbitSubtitle: "Leaves",
    eyebrow: "Stage 01 · Botanical Origin",
    caption:
      "Selected fresh from sun-nourished Azadirachta indica groves to preserve natural potency.",
    detailHeading: "Azadirachta Indica",
    detailSubheading: "Sun-nourished groves",
    highlights: [
      "Fresh Neem Leaves",
      "Mature Kernels",
      "Zero Chemical Wash",
      "Sun-Cured Purity",
    ],
    accent: "#85C900",
    image: "/images/stage-01-botanical-leaves.jpg",
    imageAlt:
      "Authentic fresh Azadirachta indica neem leaves flourishing in warm sunlight",
  },
  {
    number: "02",
    title: "Neem Cake Processing",
    orbitTitle: "Cold-Pressed",
    orbitSubtitle: "Neem Cake",
    eyebrow: "Stage 02 · Extraction",
    caption:
      "Cold-pressed carefully without harsh solvents to preserve natural botanical richness.",
    detailHeading: "Gentle Extraction",
    detailSubheading: "Cold-press mechanical craft",
    highlights: [
      "Cold-Press Expeller",
      "Retained Nutrients",
      "Fibrous Seed Cake",
      "Pure Botanical Oil",
    ],
    accent: "#D4A359",
    image: "/images/stage-02-processing.jpg",
    imageAlt:
      "Freshly cold-pressed natural earth-brown seed oil cake texture",
  },
  {
    number: "03",
    title: "Quality Product",
    orbitTitle: "Neem Cake",
    orbitSubtitle: "Powder",
    eyebrow: "Stage 03 · Quality Control",
    caption:
      "Milled, sieved for fine uniformity, and sealed in protective eco-luxury packaging.",
    detailHeading: "Veppam Punnakku",
    detailSubheading: "Finely milled & sealed",
    highlights: [
      "Uniform Fine Mesh",
      "Quality Sieved",
      "Moisture-Locked",
      "Ready for Soil",
    ],
    accent: "#48A900",
    image: "/images/product-neem-cake-pack.jpg",
    imageAlt:
      "Finished DK ORGANICS Neem Cake Powder pouch alongside raw powder and neem leaves",
  },
  {
    number: "04",
    title: "Agricultural Application",
    orbitTitle: "Field",
    orbitSubtitle: "Application",
    eyebrow: "Stage 04 · Living Soil",
    caption:
      "Blended naturally into fertile farm beds and orchard root zones for thriving harvests.",
    detailHeading: "Root-Zone Care",
    detailSubheading: "Farms, orchards & seedbeds",
    highlights: [
      "Soil Conditioning",
      "Root Nourishment",
      "Natural Humus",
      "All Crop Types",
    ],
    accent: "#DDA15E",
    image: "/images/stage-04-application.jpg",
    imageAlt:
      "Farmers tending prepared dark organic soil plots and bright green crop terraces",
  },
];

export const CONTACT_INFO = {
  brandName: "DK ORGANIC",
  tagline: "Natural Organic Inputs for Healthy Crops",
  proprietor: "C. Kumar",
  proprietorRole: "Proprietor",
  gstNo: "33NTLPK6616K1Z2",
  phoneDisplay: "+91 63801 71836",
  phoneHref: "tel:+916380171836",
  whatsappNumber: "916380171836",
  whatsappMessage:
    "Hello DK ORGANIC, I would like to inquire about Neem Cake Powder (Veppam Punnakku).",
  email: "c.kumar454@gmail.com",
  addressLine1: "No.13, Main Road,",
  addressLine2: "Vanamadevi, Cuddalore - 607001, Tamil Nadu, India",
  addressCardDisplay: "No.13, Main Road, Vanamadevi, Cuddalore - 607001.",
  shortLocation: "Vanamadevi, Cuddalore",
  mapsQueryUrl:
    "https://www.google.com/maps/search/?api=1&query=No.13+Main+Road+Vanamadevi+Cuddalore+607001+Tamil+Nadu+India",
  mapsEmbedUrl:
    "https://www.google.com/maps?q=Vanamadevi,Cuddalore,607001,Tamil+Nadu,India&output=embed",
  socials: [
    { name: "Instagram", href: "https://instagram.com" },
    { name: "Facebook", href: "https://facebook.com" },
    { name: "LinkedIn", href: "https://linkedin.com" },
    { name: "YouTube", href: "https://youtube.com" },
  ],
};

