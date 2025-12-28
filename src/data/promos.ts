import type { ImageMetadata } from "astro";
import defaultImage from "../../public/default-image.jpg";
import { siteConfig } from "../config/site-config";

export type PromoProduct = {
  url: string; // where it goes (affiliate or internal)
  name: string; // product / game name
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
      promoImage: {
        image: defaultImage,
        alt: "Over-ear gaming headphones with microphone",
      },
      description:
        "Comfortable over-ear headphones with clear audio and detachable mic.",
      cta: "View on store",
      type: "affiliate",
    },
  },
};
