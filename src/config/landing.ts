import type { InfoLdg } from "@/types";
import en from "@/config/i18n/en";
import el from "@/config/i18n/el";

export interface Project  {
  title: string; 
  description: string;
  link: string;
  icon: string; // Location of the icon from /public/images/projects
}

export interface TeamMember {
  name: string;
  job: string;
  image: string;
  review: string;
  link: string;
}
export const infos: InfoLdg[] = [
  {
    title: "About Us",
    description:
      "We are a team of university students who are passionate about open-source and the FOSS community. Our goal is to create a place where students can learn from and contribute to the open-source community.",
    image: "/images/blog/OpenSourceDUTH.png",
    list: [
      {
        title: "Collaborative",
        description: "In out team we value collaboration and teamwork because together we can achieve great things.",
        icon: "lucide:laptop",
      },
      {
        title: "Innovative",
        description: "We are always looking to be involved in the latest technologies and innovations and contribute to them.",
        icon: "lucide:settings",
      }
    ],
  },
  {
    title: "Seamless Integration",
    description:
      "Integrate our open-source SaaS seamlessly into your existing workflows. Effortlessly connect with your favorite tools and services for a streamlined experience.",
    image: "/images/blog/placeholder-about.jpg",
    list: [
      {
        title: "Flexible",
        description:
          "Customize your integrations to fit your unique requirements.",
        icon: "lucide:laptop",
      },
      {
        title: "Efficient",
        description: "Streamline your processes and reducing manual effort.",
        icon: "lucide:search",
      },
      {
        title: "Reliable",
        description:
          "Rely on our robust infrastructure and comprehensive documentation.",
        icon: "lucide:settings",
      },
    ],
  },
];

const projectsData = {
  en: [
    {
      title: "University Food Schedule",
      description: "University Food Schedule website. A simple website that shows the food daily schedule of the university.",
      link: "https://opensource.cs.duth.gr/food",
      icon: "/images/projects/food.png",
    }
  ],
  el: [
    {
      title: "Πρόγραμμα Φαγητού Πανεπιστημίου",
      description: "Ιστοσελίδα προγράμματος φαγητού πανεπιστημίου. Μια απλή ιστοσελίδα που δείχνει το καθημερινό πρόγραμμα φαγητού του πανεπιστημίου.",
      link: "https://opensource.cs.duth.gr/food",
      icon: "/images/projects/food.png",
    }
  ]
};

export const getProjects = (locale: 'en' | 'el' = 'en'): Project[] => {
  return projectsData[locale];
};

export const getProjectsFromPathname = (pathname: string): Project[] => {
  const isGreek = pathname.startsWith("/el");
  return projectsData[isGreek ? 'el' : 'en'];
};

export const Projects = projectsData.en;

// Base team data structure with images and CV links
const teamBaseData = [
  {
    id: "leokratis",
    image: "/images/teamPlaceholder.jpg",
    link: "/cv/leokratis.pdf",
  },
  {
    id: "michael",
    image: "/images/teamPlaceholder.jpg",
    link: "/cv/michael.pdf",
  },
  {
    id: "vasiliki",
    image: "/images/teamPlaceholder.jpg",
    link: "/cv/vasiliki.pdf",
  },
  {
    id: "vasilis",
    image: "/images/teamPlaceholder.jpg",
    link: "/cv/vasilis.pdf",
  },
  {
    id: "dimitris",
    image: "/images/teamPlaceholder.jpg",
    link: "/cv/dimitris.pdf",
  },
  {
    id: "sotiris",
    image: "/images/teamPlaceholder.jpg",
    link: "/cv/sotiris.pdf",
  }
];

export const getTeam = (locale: 'en' | 'el' = 'en'): TeamMember[] => {
  const translations = locale === 'el' ? el : en;
  
  return teamBaseData.map(member => ({
    name: translations.team.members[member.id as keyof typeof translations.team.members].name,
    job: translations.team.members[member.id as keyof typeof translations.team.members].job,
    review: translations.team.members[member.id as keyof typeof translations.team.members].review,
    image: member.image,
    link: member.link,
  }));
};

export const getTeamFromPathname = (pathname: string): TeamMember[] => {
  const isGreek = pathname.startsWith("/el");
  return getTeam(isGreek ? 'el' : 'en');
};

export const getTeamHeader = (locale: 'en' | 'el' = 'en') => {
  const translations = locale === 'el' ? el : en;
  return {
    label: translations.team.label,
    title: translations.team.title,
    subtitle: translations.team.subtitle,
  };
};

export const getTeamHeaderFromPathname = (pathname: string) => {
  const isGreek = pathname.startsWith("/el");
  return getTeamHeader(isGreek ? 'el' : 'en');
};

// Legacy export for backward compatibility
export const team = getTeam('en');
