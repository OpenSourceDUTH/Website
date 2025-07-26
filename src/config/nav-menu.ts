import type { NavMenuConfig } from "@/types";

export const navMenuConfig: NavMenuConfig = {
  pagesNav: [
    {
      title: "Pages",
      items: [
        {
          title: "Changelog",
          href: "/releases",
          description: "A reproduction of Starlog template with Tailwind CSS.",
          image: "/images/examples/changelog.jpg",
        },
        {
          title: "About",
          href: "/about",
          description: "A simple page with a masonry gallery and little text.",
          image: "/images/examples/about.jpg",
        },
      ],
    },
  ],
  examplesNav: [
    {
      title: "Examples",
      items: [
        {
          title: "Blog",
          href: "/blog",
          description: "This is our blog where we post updates and news about our projects.",
          image: "/images/examples/static-blog.jpg",
        },
        {
          title: "API",
          href: "/docs/getting-started",
          description:
            "Our API documentation is a comprehensive guide to our projects, providing detailed information on how to use and integrate them.",
          image: "/images/examples/documentation.jpg",
        }
      ],
    },
  ],
  links: [    
    {
      title: "Blog",
      href: "/blog",
      description: "This is our blog where we post updates and news about our projects.",
      image: "/images/examples/blog.jpg",
    },
    {
      title: "API",
      href: "/soon", //docs/getting-started
      description:"Here you can find the unified API for all of our projects",
      image: "/images/examples/docs.jpg",
    },

    {
      title: "Join Us",
      href: "/apply",
      description: "Join our community and contribute to our projects.",
      image: "/images/examples/join-us.jpg",
      external: true,
      target: "_blank",
    },

    // {
    //   title: "Example",
    //   href: "/example",
    //   description: "Example description",
    //   image: "/images/examples/image.jpg",
    // },
  ],
};
