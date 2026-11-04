export const projects = [
  {
    id: 1,
    title: "Accommodation Management App",
    subtitle: "Backend-focused full-stack app",
    description:
      "Backend system for property listings and tenant–landlord booking workflows. Implemented booking approval, status tracking, and PostgreSQL-backed data retrieval.",
    tech: ["Java", "Spring Boot", "PostgreSQL", "Thymeleaf", "Postman"],
    highlights: [
      "Designed booking approval & status-tracking workflow",
      "Optimized PostgreSQL queries for booking retrieval",
      "Tested REST endpoints with Postman",
    ],
    github: "https://github.com/SakhileShezi", // add specific repo
    live: null,
    image: "/projects/accommodation.png",
  },
  // Add more as you build them:
  // {
  //   id: 2,
  //   title: "REST API — [Your Idea]",
  //   ...
  // }
];

export const skills = {
  Languages: ["Java", "JavaScript", "Python (Basic)"],
  Backend: ["Spring Boot", "REST APIs"],
  Frontend: ["HTML", "CSS", "JavaScript", "Thymeleaf"],
  Databases: ["SQL", "MySQL", "PostgreSQL", "Database Design"],
  Tools: ["IntelliJ", "VS Code", "Postman", "Git", "GitHub", "Figma"],
};

export const experience = [
  {
    role: "Software Developer Intern",
    company: "Investhood IT 2.0",
    period: "Oct 2024 – Sept 2025",
    points: [
      "Developed backend functionality using Java and Spring Boot",
      "Built and tested RESTful APIs for data-driven applications",
      "Managed MySQL and PostgreSQL databases with optimized queries",
      "Applied OOP principles; collaborated with devs and UI/UX designers",
      "Used Postman for API testing and debugging",
    ],
  },
];