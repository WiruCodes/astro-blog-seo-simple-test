import type { ImageMetadata } from "astro";

export interface SiteConfig {
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
