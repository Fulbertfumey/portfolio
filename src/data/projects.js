import image1 from "../assets/image1.jpg";
import image2 from "../assets/image2.jpg";
import image3 from "../assets/image3.jpg";
import imageexpress from "../assets/imageexpress.jpg";
import shopify from "../assets/shopify.jpg";
import open from "../assets/open.jpg";
import btp from "../assets/btp.jpg";

export const projects = [
  {
    id: 1,
    title: "Plateforme Gescadmec pour la gestion des inscrption des etudiant",
    description:
      "Développement d’une plateforme qui permet degerer l'inscription des etudiants.",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
    image: image1,
    github: "https://github.com/Fulbertfumey/Gescadmec/settings/pages",
    // demo: "#",
  },
  {
    id: 2,
    title: "Application– Gestion de Tâches",
    description:
      "Application monopage dynamique avec gestion des tâches et interface moderne.",
    technologies: ["HTML","CSS", "JavaScript" ],
    image: image2,
    github: "https://fulbertfumey.github.io/Gestion_tache/",
    // demo: "#",
  },
  {
    id: 3,
    title: "Site WordPress Professionnel",
    description:
      "Création et personnalisation d’un site WordPress qui permet en confiance les diaporat pour tout leurs traveaux de construiction netoyages et service domestiques.",
    technologies: ["WordPress", "PHP", "MySQL"],
    image: btp,
    // github: "#",
    demo: "https://mikimaison.free.nf/?i=1",
  },
  {
    id: 4,
    title: "formulaire d'agence express",
    description:
      "cette maquette developpé avec code permet l'expedition des colis grace a un formulaire ",
    technologies: ["HTML", "CSS", ""],
    image: imageexpress,
    github: "https://fulbertfumey.github.io/miki/",
    // demo: "#",
  },
  {
    id: 5,
    title: "creation de Boutique Professionnel sur shopify",
    description:
      "Création et personnalisation d’un de boutique shopify.",
    technologies: ["WordPress", "PHP", "MySQL"],
    image: shopify,
    // github: "#",
    demo: "https://5faqdi-14.myshopify.com/",
  },
  {
    id: 6,
    title: "Site WordPress Professionnel",
    description:
      "Création et personnalisation d’un site WordPress optimisé SEO.",
    technologies: ["WordPress", "PHP", "MySQL"],
    image: open,
    // github: "#",
    demo: "https://openmarkettogo1.free.nf/?i=1",
  },
];
