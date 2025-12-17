import type { ImageMetadata } from "astro";
import defaultImage from "../../public/default-image.jpg";

interface SiteConfig {
  siteTitle: string;
  siteDescription: string;

  siteUrl: string;

  siteAuthor: {
    name: string;
    email?: string;
    avatar?: string;
  };

  siteSocial?: { name: string; href: string }[];
  siteNav?: { name: string; href: string }[];
  siteLang?: string;
  siteTheme?: string; // theme should be set in global.css for @plugin "daisyui"
  siteDefaultHeroImage: {
    image: ImageMetadata;
    alt: string;
  }
}

export const siteConfig: SiteConfig = {
  siteTitle: "Astro Blog",
  siteDescription: "A blog about Astro, development, and experiments.",

  siteUrl: "https://your-site.com/",

  siteAuthor: {
    name: "Wiru",
    email: "wiru@example.com",
    avatar: "/images/avatar.png",
  },

  siteSocial: [
    { name: "tiktok", href: "https://tiktok.com/" },
    { name: "youtube", href: "https://youtube.com/" },
    { name: "instagram", href: "https://instagram.com/" },
    { name: "facebook", href: "https://facebook.com/" },
  ],

  siteNav: [
    { name: "Home", href: "/" },
    { name: "Blog", href: "/blog" },
    { name: "About", href: "/about" },
  ],

  siteLang: "en",
  siteTheme: "dark", // theme should be set in global.css for @plugin "daisyui"
  siteDefaultHeroImage: {
    image: defaultImage,
    alt: "Alt message for default hero image."
  }
};