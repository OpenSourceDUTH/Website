import type { SidebarNavItem, SiteConfig } from "@/types";

// src/config/site.ts
/*
TODO: Integrate this with /src/config/i18n/*.ts for better localization support.
*/
export const siteConfigLocales: Record<string, SiteConfig> = {
  en: {
    name: "OpenSourceDUTH",
    description:
      "We are OpenSourceDUTH, the open-source team of the Democritus University of Thrace. We want to help students get involved with the FOSS community and create a better future for everyone.",
    url: "https://opensource.cs.duth.gr",
    ogImage: "", // Add image here
    links: {
      github: "https://github.com/OpenSourceDUTH",
    },
  },
  el: {
    name: "OpenSourceDUTH",
    description:
      "Είμαστε η ομάδα OpenSourceDUTH του Δημοκρίτειου Πανεπιστημίου Θράκης. Θέλουμε να βοηθήσουμε τους φοιτητές να συμμετάσχουν στην κοινότητα FOSS και να δημιουργήσουμε ένα καλύτερο μέλλον για όλους.",
    url: "https://opensource.cs.duth.gr",
    ogImage: "", // Add image here
    links: {
      github: "https://github.com/OpenSourceDUTH",
    },
  },
};

export const footerLinksLocales: Record<string, SidebarNavItem[]> = {
  en: [
    {
      title: "OpenSourceDUTH",
      items: [
        { title: "Code of Conduct", href: "/code-of-conduct"},
        { title: "Join Us", href: "/apply", target: "_blank" },
        { title: "Blog", href: "/soon" },
      ],
    },
    {
      title: "Projects",
      items: [
        { title: "Food Schedule", href: "https://opensource.cs.duth.gr/food", target: "_blank" },
      ],
    },
    {
      title: "Social Media",
      items: [
        { title: "Instagram", href: "https://www.instagram.com/opensourceduth/", target: "_blank" },
        { title: "Linkedin", href: "https://www.linkedin.com/company/OpenSourceDUTH", target: "_blank" },
      ],
    }
  ],
  el: [
    {
      title: "OpenSourceDUTH",
      items: [
        { title: "Κώδικας Δεοντολογίας", href: "/el/code-of-conduct" },
        { title: "Γίνε μέλος", href: "/el/apply", target: "_blank" },
        { title: "Ιστολόγιο", href: "/el/soon" },
      ],
    },
    {
      title: "Έργα",
      items: [
        { title: "Πρόγραμμα Σίτισης", href: "https://opensource.cs.duth.gr/food", target: "_blank" },
      ],
    },
    {
      title: "Κοινωνικά Δίκτυα",
      items: [
        { title: "Instagram", href: "https://www.instagram.com/opensourceduth/", target: "_blank" },
        { title: "Linkedin", href: "https://www.linkedin.com/company/OpenSourceDUTH", target: "_blank" },
      ],
    }
  ]
};

// Default export for backward compatibility
export const siteConfig = siteConfigLocales.en;
export const footerLinks = footerLinksLocales.en;