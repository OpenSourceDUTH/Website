import type { InfoLdg } from "@/types";

export interface Project  {
  title: string; 
  description: string;
  link: string;
  icon: string; // Location of the icon from /public/images/projects
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

export const Projects: Project[] = [
  {
    title: "University Food Schedule",
    description:
      "University Food Schedule website. A simple website that shows the food daily schedule of the university.",
    link: "https://opensource.cs.duth.gr/food",
    icon: "/images/projects/food.png",
  }
];

export const testimonials = [
  {
    name: "Leokratis Bakratsas",
    job: "Full Stack Developer",
    image: "/images/teamPlaceholder.jpg",
    review: "Lorem ipsum odor amet, consectetuer adipiscing elit. Turpis luctus cras rhoncus nunc cubilia habitant aptent amet. Nisl sociosqu vel duis cras; sociosqu nisl natoque. Nibh suspendisse egestas ex; pulvinar consectetur rhoncus. Sem turpis fringilla viverra senectus ad ultricies. Sodales auctor cubilia; laoreet nunc auctor hac dictumst.",
    link: "/cv/leokratis.pdf",
  },
  {
    name: "Michael Selvesakis",
    job: "Full Stack Developer & SysAdmin",
    image: "/images/teamPlaceholder.jpg",
    review: "Quisque magnis magna posuere ultrices urna. Dolor ac magna aliquam vehicula facilisi elit. Etiam proin montes vehicula nulla nisl placerat fames inceptos euismod. Erat augue massa magna mollis potenti sollicitudin netus. Sociosqu purus a dolor dignissim est rhoncus phasellus. Semper magna sociosqu sodales elementum etiam ac. Per vehicula rutrum dictumst, volutpat per tristique.",
    link: "/cv/michael.pdf",
  },
  {
    name: "Vasiliki Konou",
    job: "Project Manager & Full Stack Developer",
    image: "/images/teamPlaceholder.jpg",
    review: "Nunc gravida elit lorem finibus enim eros felis laoreet. Lorem convallis est, sit vehicula malesuada vivamus velit. Vitae pretium integer aenean nullam aliquet eget turpis facilisi. Faucibus vehicula torquent orci libero sodales tellus mauris. Vivamus quam risus purus a elit eu, iaculis parturient. Porttitor conubia suscipit volutpat himenaeos nisl aenean aliquet leo. Ipsum sociosqu proin risus; interdum mi donec fames leo phasellus. Curae euismod mauris conubia pulvinar leo quisque..",
    link: "/cv/vasiliki.pdf",
  },
  {
    name: "Vasilis Christofas",
    job: "Embedded Engineer",
    image: "/images/teamPlaceholder.jpg",
    review: "Euismod mauris eu maecenas porttitor nam sit commodo eros. Nostra enim arcu sollicitudin interdum metus a pulvinar justo. Lobortis odio lorem hendrerit varius ipsum himenaeos. Luctus porttitor purus ad est porta quam semper. Consectetur odio laoreet diam semper nullam. Accumsan id suscipit condimentum sodales egestas.    ",
    link: "/cv/vasilis.pdf",
  },
  {
    name: "Dimitris Manos",
    job: "Data Analyst",
    image: "/images/teamPlaceholder.jpg",
    review: "next-saas-stripe-starter provided me with the tools I needed to efficiently manage user data...",
    link: "/cv/dimitris.pdf",
  },
  {
    name: "Sotiris Papasotiriou",
    job: "DevOps Engineer",
    image: "/images/teamPlaceholder.jpg",
    review: "Dapibus magnis metus dolor vehicula conubia primis felis. At habitant ligula nec; sapien vivamus phasellus vel porta. At lacinia lectus; elit per amet vivamus! Ac duis elit per; commodo habitant et diam curabitur. Semper vivamus cras commodo primis massa ante blandit nec. Lectus nibh cubilia enim conubia nullam integer. Nullam tellus varius ad dignissim dis. Quis platea ut fringilla maximus ipsum. Sed platea malesuada lectus dis aliquam.",
    link: "/cv/sotiris.pdf",
  }
];
