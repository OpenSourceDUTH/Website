export type NavItem = {
  title: string;
  href: string;
  disabled?: boolean;
  target?: string;

};
export type MenuItem = NavItem & {
  image?: string;
  description?: string;
  launched?: boolean;
  external?: boolean;
  forceReload?: boolean;
  target?: string;
  badge?: string;
};

export type MainNavItem = NavItem;

export type SidebarNavItem = {
  title: string;
  disabled?: boolean;
  external?: boolean;
  target?: string;
  defaultOpen?: boolean; // Whether this section is expanded by default (true for top-level, false for sub-folders)
} & (
  | {
      href: string;
      items?: never;
      target?: string;
    }
  | {
      href?: string;
      items: (MenuItem | SidebarNavItem)[]; // Support nested SidebarNavItem for sub-folders
      target?: string;
    }
);

export type SiteConfig = {
  name: string;
  description: string;
  url: string;
  ogImage: string;
  links: {
    // twitter: string;
    github: string;
  };
};

export type DocsConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type MarketingConfig = {
  mainNav: MainNavItem[];
};

export type NavMenuConfig = {
  pagesNav: SidebarNavItem[];
  examplesNav: SidebarNavItem[];
  links: MenuItem[];
};

export type DashboardConfig = {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
};

export type SubscriptionPlan = {
  name: string;
  description: string;
  stripePriceId: string;
};

// Animes types
export type Airing = {
  id: number;
  episode: number;
  airingAt: number;
  media: Media;
};

export type Media = {
  id: number;
  title: Title;
  coverImage: CoverImage;
  isAdult: boolean;
};

type Title = {
  userPreferred: string;
};

type CoverImage = {
  extraLarge: string;
  large: string;
};

export type InfoList = {
  icon: string;
  title: string;
  description: string;
};

export type InfoLdg = {
  title: string;
  image: string;
  description: string;
  list: InfoList[];
}