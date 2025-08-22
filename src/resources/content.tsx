import { About, Blog, Gallery, Home, Newsletter, Person, Social, Work } from "@/types";
import { Logo } from "@once-ui-system/core";

const person: Person = {
  firstName: "Ajay",
  lastName: "Sah",
  name: `Ajay Sah`,
  role: "Software Developer",
  avatar: "/images/avatar.jpg",
  email: "ajaysah52@gmail.com",
  location: "Europe/Helsinki", // Expecting the IANA time zone identifier, e.g., 'Europe/Vienna'
  languages: ["English", "Basic Finnish"], // optional: Leave the array empty if you don't want to display languages
};

const newsletter: Newsletter = {
  display: true,
  title: <>Subscribe to {person.name}'s Newsletter</>,
  description: (
    <>
      I occasionally write about design, technology, and share thoughts on the
      intersection of creativity and engineering.
    </>
  ),
};

const social: Social = [
  // Links are automatically displayed.
  // Import new icons in /once-ui/icons.ts
  {
    name: "GitHub",
    icon: "github",
    link: "https://github.com/ajay26188",
  },
  {
    name: "LinkedIn",
    icon: "linkedin",
    link: "https://www.linkedin.com/in/ajay-sah-b57ab2252",
  },
  {
    name: "Email",
    icon: "email",
    link: `mailto:${person.email}`,
  },
];

// Home Page
const home: Home = {
  path: "/",
  image: "/images/og/home.jpg",
  label: "Home",
  title: `${person.name} | Portfolio`,
  description: `Portfolio website showcasing my projects and skills as a ${person.role}`,
  headline: <>Turning ideas into full-stack applications </>,
  featured: {
    display: true,
    title: (
      <>
        Featured Project: <strong className="ml-2">TaskTracker</strong>
      </>
    ),
    href: "/work/task-tracker",
  },
  subline: (
    <>
      I’m <strong>{person.name}</strong>, a{" "}
      <strong>{person.role}</strong> with experience in building web
      applications using modern web stacks. I enjoy solving problems
      and creating clean, maintainable solutions.
    </>
  ),
};

// About Page
const about: About = {
  path: "/about",
  label: "About",
  title: `About – ${person.name}`,
  description: `Get to know ${person.name}, a ${person.role} based in ${person.location}`,
  tableOfContent: { display: true, subItems: false },
  avatar: { display: true },
  calendar: {
    display: false,
    link: "https://cal.com",
  },
  intro: {
    display: true,
    title: "Introduction",
    description: (
      <>
        I’m Ajay, a Software Developer with a background in Software Engineering
        and hands-on experience in building full-stack applications. My interest
        lies in modern web development and creating projects that
        combine functionality with great user experience.
      </>
    ),
  },
  work: {
    display: true,
    title: "Work Experience",
    experiences: [
      {
        company: "LUT University",
        timeframe: "2023",
        role: "Junior Research Assistant",
        achievements: [
          <>
            Conducted research on conversational AI and authored a thesis on building
            functional chatbots, focusing on natural language understanding.
          </>,
          <>
            Designed and implemented a proof-of-concept chatbot using Google Dialogflow,
            demonstrating practical applications of AI in automated dialogue systems.
          </>,
          <>
            Explored how AI tools can enhance chatbot development workflows,
            contributing insights for faster prototyping and better user interaction design.
          </>,
        ],
        images: [],
      },
    ],
  },
  studies: {
    display: true, // set to false to hide this section
    title: "Studies",
    institutions: [
      {
        name: "Lappeenranta-Lahti University of Technology",
        description: <>Studied software engineering.</>,
      },
    ],
  },
  technical: {
    display: true,
    title: "Technical Skills",
    skills: [
      {
        title: "Frontend",
        description: (
          <ul>
            <li>React, Redux, React Query, Context API</li>
            <li>React Native for mobile apps</li>
            <li>HTML, CSS, Material UI, Bootstrap</li>
          </ul>
        ),
      },
      {
        title: "Backend & Databases",
        description: (
          <ul>
            <li>Node.js, TypeScript, JavaScript</li>
            <li>MongoDB, PostgreSQL, MySQL</li>
            <li>REST APIs & GraphQL</li>
          </ul>
        ),
      },
      {
        title: "Tools & Platforms",
        description: (
          <ul>
            <li>Git, GitHub, Postman</li>
            <li>Netlify, Render, Docker, Expo</li>
            <li>CI/CD, React Testing Library, Vitest</li>
          </ul>
        ),
      },
    ],
  },
};

const blog: Blog = {
  path: "/blog",
  label: "Blog",
  title: "Writing about design and tech...",
  description: `Read what ${person.name} has been up to recently`,
  // Create new blog posts by adding a new .mdx file to app/blog/posts
  // All posts will be listed on the /blog route
};

const work: Work = {
  path: "/work",
  label: "Work",
  title: `Projects – ${person.name}`,
  description: `Design and dev projects by ${person.name}`,
  // Create new project pages by adding a new .mdx file to app/blog/posts
  // All projects will be listed on the /home and /work routes
};

const gallery: Gallery = {
  path: "/gallery",
  label: "Gallery",
  title: `Photo gallery – ${person.name}`,
  description: `A photo collection by ${person.name}`,
  // Images by https://lorant.one
  // These are placeholder images, replace with your own
  images: [
    {
      src: "/images/gallery/horizontal-1.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-2.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-3.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/horizontal-4.jpg",
      alt: "image",
      orientation: "horizontal",
    },
    {
      src: "/images/gallery/vertical-1.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-2.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-3.jpg",
      alt: "image",
      orientation: "vertical",
    },
    {
      src: "/images/gallery/vertical-4.jpg",
      alt: "image",
      orientation: "vertical",
    },
  ],
};

export { person, social, newsletter, home, about, blog, work, gallery };
