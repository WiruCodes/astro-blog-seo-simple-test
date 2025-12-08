import type { SiteConfig } from "../types/site-config";

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
  siteTheme: "dark", // Theme should be set in global.css for @plugin "daisyui"
};
