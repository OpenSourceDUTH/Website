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
      title: "API Documentation",
      defaultOpen: true, // Top-level sections are expanded by default
      items: [
        {
          title: "Introduction",
          href: "/docs/getting-started/",
        },
      ],
    },
    {
      title: "Food Schedule",
      defaultOpen: true,
      items: [
        {
          title: "Introduction",
          href: "/docs/food-schedule/introduction",
          disabled: true,
        },
        {
          title: "Examples",
          href: "/docs/food-schedule/examples",
          disabled: true,
        },
        {
          title: "Endpoints",
          href: "/docs/food-schedule/endpoints",
          disabled: true,
        },
      ]
    },
    {
      title: "Document Search (TBA)",
      defaultOpen: true,
      items: [
        {
          title: "Introduction",
          href: "/docs/search/introduction",
          disabled: true,
        }
      ]
    },
    {
      title: "Maps (TBA)",
      defaultOpen: true,
      items: [
        {
          title: "Introduction",
          href: "/docs/maps/introduction",
          disabled: true,
        }
      ]
    },
    {
      title: "API Developer Docs",
      defaultOpen: true,
      items: [
        {
          title: "Introduction",
          href: "/docs/api/introduction",
          disabled: false,
        },
        {
          title: "Authentication",
          defaultOpen: false,
          items: [
            {
              title: "Database Schema",
              href: "/docs/api/authentication/database-schema",
              disabled: false,
            }
          ]
        }
      ], 
    },
  ],
};
