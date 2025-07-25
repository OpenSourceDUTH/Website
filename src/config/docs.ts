import type { DocsConfig } from "@/types";

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs/getting-started/",
    },
    {
      title: "Guides",
      href: "/guides",
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/getting-started/",
        },
      ],
    },
    {
      title: "API",
      items: [
        {
          title: "Introduction",
          href: "/docs/documentation",
          disabled: true,
        },
        {
          title: "Authentication",
          href: "/docs/documentation/components",
          disabled: true,
        },
        {
          title: "Endpoints",
          href: "/docs/documentation/components",
          disabled: true,
        },
        {
          title: "Search",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Food Schedule",
          href:  "tba",
          disabled: true
        }
      ],
    },
    {
      title: "MyUni",
      items: [
        {
          title: "Landing",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Changelog",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Wait List",
          href: "/docs/in-progress",
          disabled: true,
        },
      ],
    },
    {
      title: "Food Schedule",
      items: [
        // {
        //   title: "Introduction",
        //   href: "/docs/in-progress",
        //   disabled: true,
        // },
        {
          title: "Blog",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Docs & Guides",
          href: "/docs/in-progress",
          disabled: true,
        }
      ]
    },
        {
      title: "Document Search",
      items: [
        // {
        //   title: "Introduction",
        //   href: "/docs/in-progress",
        //   disabled: true,
        // },
        {
          title: "Blog",
          href: "/docs/in-progress",
          disabled: true,
        },
        {
          title: "Docs & Guides",
          href: "/docs/in-progress",
          disabled: true,
        }
      ]
    },
  ],
};
