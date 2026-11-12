// Content of portfolio.
// Everything on the page is read from here.

const dev = (name) =>
  `https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/${name}/${name}-original.svg`;

export const site = {
  name: "Iya Marie Malinao",
  photo: "/me.jpg",
  resume: "/resume.pdf",
  floatingIcons: [
    "/floating/f01.png",
    "/floating/f3.png",
    "/floating/f5.png",
    "/floating/f2.png",
    "/floating/f4.png",
    "/floating/f6.png",
  ],
  role: "Web Developer | UI/UX Designer",
  roles: ["Web Developer", "UI/UX Designer"],
  email: "iyamariemalinao@gmail.com",
  url: "https://your-domain.vercel.app",
  description:
    "Portfolio of Your Name, a web developer who builds fast, accessible websites and apps.",

  intro:
    "I love bringing ideas to life through web development and UI/UX design. With my background in Information Technology, I combine creativity and technical skills to build engaging, accessible, and user-friendly digital experiences.",

  outside: {
    title: "Outside of coding",
    text: "Creativity has always been a big part of who I am. From drawing and cosplay to exploring different crafts, I love bringing ideas to life through art and design. I'm also an avid gamer, which has shaped my appreciation for visual details, interactive experiences, and thoughtful design. These interests inspire the way I approach web development, blending creativity with functionality.",
    likes: [
      "Digital Art & Drawing",
      "Cosplay & DIY Crafts",
      "Gaming & Interactive Worlds",
      "Creative Design",
      "Exploring New Ideas"
    ],
  },

  photos: [
    { src: "/about/photo-1.jpg", alt: "Describe photo 1" },
    { src: "/about/photo-2.jpg", alt: "Describe photo 2" },
    { src: "/about/photo-3.jpg", alt: "Describe photo 3" },
    { src: "/about/photo-4.jpg", alt: "Describe photo 4" },
  ],

  skills: [
    { name: "Figma", icon: dev("figma") },
    { name: "Canva", icon: "/tech/canva.png" },
    { name: "Moqups", icon: "/tech/moqups.png" },
    { name: "HTML5", icon: dev("html5") },
    { name: "CSS3", icon: dev("css3") },
    { name: "JavaScript (ES6+)", icon: dev("javascript") },
    { name: "React.js", icon: dev("react") },
    { name: "Next.js", icon: dev("nextjs") },
    { name: "Tailwind CSS", icon: dev("tailwindcss") },
    { name: "Bootstrap", icon: dev("bootstrap") },
    { name: "Git & GitHub", icon: dev("github") },
    { name: "Microsoft Office Suite" },
  ],

  experience: [
    {
      role: "Assistant Computer Teacher",
      company: "Xavier School Nuvali",
      period: "2026 - 2027",
      points: [
        "Facilitate computer subject instruction for Grades 6 and 7, covering digital literacy, programming, and computer applications.",
        "Teach Media and Information Literacy (MIL) to Grade 12 students, focusing on digital media, information evaluation, and responsible technology use.",
        "Develop instructional materials, learning activities, and assessments to support student learning and understanding.",
        "Design user interfaces and user experiences for research projects, creating layouts and prototypes based on project requirements."
      ],
      tags: ["Computer Education", "Media and Information Literacy", "UI/UX Design", "Figma", "Instructional Design"],
    },
    {
      role: "Data Administration Intern",
      company: "National Reinsurance Corporation of the Philippines",
      period: "2025 - 2026",
      points: [
        "Performed data cleaning, validation, and duplicate checking on Excel datasets to ensure data accuracy and integrity.",
        "Conducted data reconciliation and identified discrepancies in records for review and re-extraction.",
        "Generated ICT reports by extracting and consolidating financial and operational data into standardized templates.",
        "Created data reference guides and processed structured data entries following established guidelines."
      ],
      tags: ["Microsoft Excel", "Data Management", "Data Validation", "Reporting"],
    },
    {
      role: "UI/UX Designer & Frontend Developer",
      company: "Academic and Personal Projects",
      period: "2023 - 2025",
      points: [
        "Designed user interfaces and layouts for various academic web-based applications and systems.",
        "Created wireframes and prototypes to visualize application structures and user flows.",
        "Translated design concepts into functional and responsive web interfaces using frontend technologies.",
        "Developed and refined application interfaces with a focus on usability, consistency, and user experience."
      ],
      tags: ["Figma", "React.js", "HTML5", "CSS3", "Tailwind CSS"],
    },
  ],

  projects: [
    {
      title: "Tara4A: Interactive Web Application for Smart Tourism and Local Establishment Discovery",
      description: "A short description of what this project does.",
      image: "/projects/project-one.png",
      link: "https://example.com",
      tags: ["Next.js", "Tailwind CSS"],
    },
    {
      title: "Lark Seimitsu Document Library",
      description: "A short description of what this project does.",
      image: "/projects/project-one.png",
      link: "https://example.com",
      tags: ["Next.js", "Tailwind CSS"],
    },
    {
      title: "StartUp",
      description: "Another project. Say what you built and what you used.",
      image: "/projects/project-two.png",
      link: "https://example.com",
      tags: ["Figma", "UI/UX"],
    },
    {
      title: "NU Laguna Facility Management System",
      image: "/projects/project-three.png",
      link: "https://example.com",
    },
  ],

  certifications: [
    {
      title: "Certified in Cybersecurity",
      issuer: "ISC2",
      date: "Oct 2024",
      image: "/certs/cert2.png",
      certificate: "/certs/cert2.png",
    },
    {
      title: "Salesforce Developer",
      issuer: "Salesforce",
      date: "Jan 2025",
      image: "/certs/cert3.png",
      certificate: "/certs/cert3.png",
    },
    {
      title: "ITS Network Security",
      issuer: "Certiport - A Pearson VUE Business",
      date: "Mar 2025",
      image: "/certs/cert1.png",
      certificate: "/certs/cert1.png",
    },
  ],

  contact: {
    messages: [
      "hi! thanks for stopping by ♥",
      "want to work together, or just say hello?",
      "pick a way to reach me:",
    ],
    replies: [
      {
        label: "✉ email me",
        response: "here's my email ♥",
        reveal: "iyamariemalinao@gmail.com",
      },
      {
        label: "in LinkedIn",
        href: "https://www.linkedin.com/in/iyamarie-malinao/",
        response: "let's connect! ★",
      },
      {
        label: "</> GitHub",
        href: "https://github.com/Miumiumeow",
        response: "come peek at my code ♥",
      },
    ],
  },
};
