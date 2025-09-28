export const myProjects = [
  {
  id: 1,
  title: "Elite Controller Showcase",
  description: "A modern, dark-themed landing page for the Xbox Elite Controller, designed to highlight its features with a sleek and intuitive layout.",
  subDescription: [
    "Crafted the UI entirely in Figma with a contemporary dark theme",
    "Built an interactive prototype to showcase smooth user interactions",
    "Focused on clean layouts to highlight key controller features",
    "Optimized for responsive design across desktop and tablet devices"
  ],
  href: "https://www.figma.com/design/phgBtU6mBrfe4TJ9cK9d2l/1st-project?node-id=22-14&m=dev&t=Lkv8wENtmgDg71lE-1",
  logo: "",
  image: "/assets/projects/black-page.png",
  tags: [
    { id: 1, name: "Figma", path: "/assets/logos/figma.svg" },
    { id: 2, name: "Photoshop", path: "/assets/logos/adobe-photoshop.svg" }
  ]
},
  {
    id: 2,
    title: "Authentication & Authorization System",
    description:
      "A secure authentication and authorization system using Auth0 for seamless user management.",
    subDescription: [
      "Integrated Auth0 for authentication, supporting OAuth, JWT, and multi-factor authentication.",
      "Implemented role-based access control (RBAC) for fine-grained user permissions.",
      "Developed a React-based frontend with Tailwind CSS for a sleek user experience.",
      "Connected to a secure SQLite database for user data storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/auth-system.jpg",
    tags: [
      { id: 1, name: "Figma", path: "/assets/logos/figma.svg" },
      { id: 2, name: "Illustrator", path: "/assets/logos/adobe-illustrator.svg" },
    ],
  },
  {
    id: 3,
    title: "Blazor Web App",
    description:
      "A modern, interactive web application built with Blazor WebAssembly and .NET Core.",
    subDescription: [
      "Developed a fully interactive Single Page Application (SPA) using Blazor WebAssembly.",
      "Implemented API interactions using .NET Core for a robust backend.",
      "Designed responsive UI components with Tailwind CSS for an enhanced UX.",
      "Integrated SQLite for efficient client-side database storage.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/blazor-app.jpg",
    tags: [
      { id: 1, name: "Figma", path: "/assets/logos/figma.svg" },
      { id: 2, name: "Adobe XD", path: "/assets/logos/adobe-xd.svg" },
    ],
  },
  {
    id: 4,
    title: "C++ Game Engine",
    description:
      "A lightweight C++ game engine designed for 2D and 3D game development.",
    subDescription: [
      "Built a powerful rendering engine using OpenGL and C++.",
      "Developed a physics engine with collision detection and particle effects.",
      "Implemented a scripting system for easy game customization.",
      "Optimized performance with multi-threading and efficient memory management.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/game-engine.jpg",
    tags: [
      { id: 1, name: "Figma", path: "/assets/logos/figma.svg" },
      { id: 2, name: "Canva", path: "/assets/logos/canva.svg" },
    ],
  },
  {
    id: 5,
    title: "WordPress Custom Theme",
    description:
      "A fully customizable WordPress theme optimized for performance and SEO.",
    subDescription: [
      "Developed a responsive WordPress theme using HTML5, CSS3, and JavaScript.",
      "Integrated Tailwind CSS for modern styling and UI enhancements.",
      "Optimized SEO and page speed using Vite.js for fast builds.",
      "Implemented custom widgets and plugin compatibility for extended functionality.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/wordpress-theme.jpg",
    tags: [
      { id: 1, name: "Figma", path: "/assets/logos/figma.svg" },
      { id: 2, name: "Photoshop", path: "/assets/logos/adobe-photoshop.svg" },
    ],
  },
  {
    id: 6,
    title: "Online Learning Platform",
    description:
      "A web application that allows users to enroll in courses, watch video lectures, and take quizzes.",
    subDescription: [
      "Built using Blazor WebAssembly for a seamless SPA experience.",
      "Implemented video streaming with Azure Media Services.",
      "Added a quiz system with dynamic question generation and real-time grading.",
      "Integrated Stripe API for secure payment processing.",
    ],
    href: "",
    logo: "",
    image: "/assets/projects/elearning.jpg",
    tags: [
      { id: 1, name: "Figma", path: "/assets/logos/figma.svg" },
      { id: 2, name: "Illustrator", path: "/assets/logos/adobe-illustrator.svg" },
    ],
  },
];

export const mySocials = [
  {
    name: "WhatsApp",
    href: "",
    icon: "/assets/socials/whatsApp.svg",
  },
  {
    name: "Linkedin",
    href: "https://www.linkedin.com/in/ali-sanati/",
    icon: "/assets/socials/linkedIn.svg",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/ali.sanatidev/reels/",
    icon: "/assets/socials/instagram.svg",
  },
];

export const experiences = [
  {
    title: "Content Creator",
    job: "YouTube & Social Media",
    date: "2022-2023",
    contents: [
      "Produced short-form videos, vlogs, and mashups.",
      "Created edits combining music with cinematic/anime visuals.",
      "Explored AI tools to remix and enhance content.",
      "✅ Managed social media posting schedules and engagement.",
      "✅ Analyzed audience insights to improve content performance.",
    ],
  },
  {
    title: "Video Editor",
    job: "Freelance & Personal Work",
    date: "2023-2024",
    contents: [
      "Edited reels, travel-style videos, and creative montages.",
      "Improved skills in color grading, transitions, and motion graphics.",
      "Hands-on with Premiere Pro, After Effects, and CapCut.",
      "✅ Enhanced storytelling through timing, effects, and transitions.",
      "✅ Worked on client and personal projects to refine editing workflows.",
    ],
  },
  {
    title: "UI/UX Designer",
    job: "Freelance & Personal Projects",
    date: "2025-Present",
    contents: [
      "1.5 years of experience creating clean and responsive designs in Figma.",
      "Worked on portfolio projects to practice layouts, flows, and prototypes.",
    ],
  },
];

export const reviews = [
  {
    name: "Jack",
    username: "@jack",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "https://robohash.org/jack",
  },
  {
    name: "Jill",
    username: "@jill",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "https://robohash.org/jill",
  },
  {
    name: "John",
    username: "@john",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "https://robohash.org/john",
  },
  {
    name: "Alice",
    username: "@alice",
    body: "This is hands down the best thing I've experienced. Highly recommend!",
    img: "https://robohash.org/alice",
  },
  {
    name: "Bob",
    username: "@bob",
    body: "Incredible work! The attention to detail is phenomenal.",
    img: "https://robohash.org/bob",
  },
  {
    name: "Charlie",
    username: "@charlie",
    body: "This exceeded all my expectations. Absolutely stunning!",
    img: "https://robohash.org/charlie",
  },
  {
    name: "Dave",
    username: "@dave",
    body: "Simply breathtaking. The best decision I've made in a while.",
    img: "https://robohash.org/dave",
  },
  {
    name: "Eve",
    username: "@eve",
    body: "So glad I found this. It has changed the game for me.",
    img: "https://robohash.org/eve",
  },
];
