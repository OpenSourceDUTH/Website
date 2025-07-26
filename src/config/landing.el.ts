import type { InfoLdg } from "@/types";
import el from "@/config/i18n/el";

export const infosEl: InfoLdg[] = [
  {
    title: el.info_landing.aboutUs.title,
    description: el.info_landing.aboutUs.description,
    image: "/images/blog/OpenSourceDUTH.png",
    list: [
      {
        title: el.info_landing.aboutUs.list.collaborative.title,
        description: el.info_landing.aboutUs.list.collaborative.description,
        icon: "lucide:laptop",
      },
      {
        title: el.info_landing.aboutUs.list.innovative.title,
        description: el.info_landing.aboutUs.list.innovative.description,
        icon: "lucide:settings",
      }
    ],
  },
  {
    title: "Απρόσκοπτη Ενσωμάτωση",
    description:
      "Ενσωματώστε την ανοιχτού κώδικα SaaS λύση μας απρόσκοπτα στις υπάρχουσες ροές εργασίας σας. Συνδεθείτε εύκολα με τα αγαπημένα σας εργαλεία και υπηρεσίες για μια βελτιωμένη εμπειρία.",
    image: "/images/blog/placeholder-about.jpg",
    list: [
      {
        title: "Ευέλικτο",
        description: "Προσαρμόστε τις ενσωματώσεις σας για να ταιριάζουν στις μοναδικές σας απαιτήσεις.",
        icon: "lucide:laptop",
      },
      {
        title: "Αποδοτικό",
        description: "Βελτιστοποιήστε τις διαδικασίες σας και μειώστε την χειροκίνητη προσπάθεια.",
        icon: "lucide:search",
      },
      {
        title: "Αξιόπιστο",
        description: "Βασιστείτε στη ισχυρή μας υποδομή και την περιεκτική τεκμηρίωση.",
        icon: "lucide:settings",
      },
    ],
  },
];
