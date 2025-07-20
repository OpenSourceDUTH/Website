import type { NavMenuConfig } from "@/types";

export const navMenuConfigEl: NavMenuConfig = {
  pagesNav: [
    {
      title: "Σελίδες",
      items: [
        {
          title: "Αλλαγές",
          href: "/el/releases",
          description: "Ιστορικό εκδόσεων και αλλαγών.",
          image: "/images/examples/changelog.jpg",
        },
        {
          title: "Σχετικά",
          href: "/el/about",
          description: "Μια απλή σελίδα με γκαλερί και λίγο κείμενο.",
          image: "/images/examples/about.jpg",
        },
      ],
    },
  ],
  links: [
    {
      title: "Αρχική",
      href: "/el/",
    },
    {
      title: "Ιστολόγιο",
      href: "/el/blog",
      description: "Νέα και άρθρα από την κοινότητά μας.",
    },
    {
      title: "Τεκμηρίωση",
      href: "/el/docs",
      description: "Οδηγοί και τεκμηρίωση για τα έργα μας.",
    },
  ],
  examplesNav: [
    {
      title: "Παραδείγματα",
      items: [
        {
          title: "Ιστοσελίδα Φαγητού",
          href: "/el/food",
          description: "Σύστημα διαχείρισης φαγητού πανεπιστημίου.",
          image: "/images/examples/food.jpg",
        },
      ],
    },
  ],
};
