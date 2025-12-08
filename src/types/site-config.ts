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
  siteTheme?: string; // Theme should be set in global.css for @plugin "daisyui"
}
