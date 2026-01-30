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
          disabled: false,
        },
        {
          title: "Reference",
          href: "/docs/food-schedule/reference",
          defaultOpen: false,
          items: [
            {
              title: "Get Schedule",
              href: "/docs/food-schedule/reference-docs/schedule",
              disabled: false,
            },  
          ],
        },
        {
          title: "Examples",
          href: "/docs/food-schedule/examples",
          disabled: false,
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
