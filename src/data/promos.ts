import type { ImageMetadata } from "astro";
import defaultImage from "../../public/default-image.jpg";
import { siteConfig } from "../config/site-config";

export type PromoProduct = {
  url: string; // where it goes (affiliate or internal)
  name: string; // product / game name
  sectionSlug: string;
  trait: string;
  promoImage: {
    image: ImageMetadata;
    alt: string;
  }; // card / ad image
  description?: string; // short value prop (1–2 lines)
  cta?: string; // "Buy now", "Play free", etc.
  type?: "affiliate" | "game" | "default";
};

export type PromoMerchant = {
  [productKey: string]: PromoProduct;
};

export const promos: Record<string, PromoMerchant> = {
  internal: {
    default: {
      url: siteConfig.siteUrl + "/blog",
      name: "Test Blog Posts",
      sectionSlug: "test-blog-posts",
      trait: "",
      promoImage: {
        image: defaultImage,
        alt: "Blog Posts",
      },
      description:
        "Discover interesting information for hobby learners.",
      cta: "Check My Blog Posts!",
      type: "default",
    },
    homeGame: {
      url: siteConfig.siteUrl,
      name: "Kanji Sprint",
      sectionSlug: "kanji-sprint",
      trait: "",
      promoImage: {
        image: defaultImage,
        alt: "Anime-style kanji quiz game interface",
      },
      description:
        "A fast-paced quiz game to help you memorize kanji through repetition.",
      cta: "Play free",
      type: "game",
    },
  },
  testMerchant: {
    testKeyboard: {
      url: "https://www.google.com/search?q=keyboards",
      name: "Test Mechanical Keyboard",
      sectionSlug: "test-mechanical-keyboard",
      trait: "Best Ergonomics",
      promoImage: {
        image: defaultImage,
        alt: "Mechanical keyboard with compact layout",
      },
      description:
        "A solid entry-level mechanical keyboard for typing and casual gaming.",
      cta: "Buy in Store Name",
      type: "affiliate",
    },
    testHeadphones: {
      url: "https://www.google.com/search?q=headsets",
      name: "Test Gaming Headphones",
      sectionSlug: "test-gaming-headphones",
      trait: "Best Comfort",
      promoImage: {
        image: defaultImage,
        alt: "Over-ear gaming headphones with microphone",
      },
      description:
        "Comfortable over-ear headphones with clear audio and detachable mic.",
      cta: "View on store",
      type: "affiliate",
    },
    testMakeup: {
      url: "https://www.google.com/search?q=makeup",
      name: "Test Makeup",
      sectionSlug: "test-makeup",
      trait: "Best Affordable Pick",
      promoImage: {
        image: defaultImage,
        alt: "This is a test makeup image.",
      },
      description:
        "Make up item sale.",
      cta: "BUY ME",
      type: "affiliate",
    },
  },
};
