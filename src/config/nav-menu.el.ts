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
      title: "Ιστολόγιο",
      href: "/el/blog",
      description: "Νέα και άρθρα από την κοινότητά μας.",
    },
    {
      title: "API",
      href: "/docs/getting-started", //docs/getting-started
      description: "Τα πάντα σχετικά με το API μας.",
    },
    {
      title: "Γίνε μέλος",
      href: "/el/apply",
      description: "Ενδιαφέρεσαι να συμμετάσχεις στην ομάδα μας;",
      target: "_blank",
    }
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
