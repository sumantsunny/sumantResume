import { Briefcase, Calendar, ArrowRight } from "lucide-react";

const experiences = [
  {
    title: "Associate Consultant",
    company: "Cubastion Consulting Pvt. Ltd.",
    period: "Dec 2021 – Present",
    technologies: "React.js, Node.js, REST APIs, MySQL",
    description:
      "Developed and deployed user-friendly web applications for enterprise clients across the automotive and government domains.",
    highlights: [
      "Collaborated with UI/UX designers and backend engineers to deliver scalable and maintainable code",
      "Built reusable components and optimized application performance using React best practices",
    ],
    projects: [
      {
        name: "Gen AI Fuso",
        role: "React Developer",
        tech: "React, Redux, JavaScript, Node.js",
        points: [
          "Led the development of a customer-facing portal for Fuso, enabling users to troubleshoot vehicle issues",
          "Engineered a library of reusable React components, decreasing development time for new features by 30%",
          "Optimized application performance by implementing code splitting and lazy loading, reducing initial load time by 50%",
        ],
        impact: "Contributed to a project that saved the client over ₹500 million annually through a 50% reduction in issue processing time",
      },
      {
        name: "XNET (HRMS Portal)",
        role: "React Developer",
        tech: "React, Node.js, MySQL, JWT",
        points: [
          "Architected and built a comprehensive HR management portal to automate employee data, attendance, leave, and asset tracking",
          "Implemented secure, role-based access control (RBAC) using JSON Web Tokens (JWT) to ensure data privacy",
          "Developed interactive dashboards with real-time data visualization",
        ],
        impact: "Enhanced data processing speed and system performance, leading to a more efficient and responsive user experience for the HR department",
      },
      {
        name: "MFTBC FUSO",
        role: "React Developer",
        tech: "React, HTML, CSS, Node.js",
        points: [
          "Developed a critical internal knowledge base website for FUSO, providing organized, detailed information on vehicle parts and specifications",
          "Conducted comprehensive unit and integration testing to ensure application reliability and maintain a 99% bug-free rate post-launch",
        ],
        impact: "Reduced the time for employees to access vehicle information by over 60%, significantly boosting internal productivity",
      },
      {
        name: "Staff Selection Commission (SSC)",
        role: "Frontend Developer",
        tech: "JavaScript, CSS, HTML, Node.js",
        points: [
          "Contributed to the development of a high-traffic government exam portal for modules like CGLE, CHSL, and Constable GD",
          "Engineered and validated complex application forms, streamlining the submission process for thousands of candidates",
        ],
        impact: "Achieved a 98% reduction in data entry errors for the stenography exam module through robust form validation and process automation",
      },
    ],
  },
];

const Experience = () => {
  return (
    <section aria-labelledby="experience-heading" className="slide-up" style={{ animationDelay: '0.3s' }}>
      <h2 id="experience-heading" className="resume-section-title">
        Professional Experience
      </h2>
      
      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <article key={index} className="relative">
            {/* Main Experience */}
            <div className="bg-resume-light-blue rounded-lg p-4 md:p-6 mb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-2 mb-3">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-primary rounded-lg">
                    <Briefcase className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="text-lg md:text-xl font-bold text-foreground">
                      {exp.title}
                    </h3>
                    <p className="text-primary font-medium">{exp.company}</p>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-muted-foreground text-sm">
                  <Calendar className="w-4 h-4" />
                  <span>{exp.period}</span>
                </div>
              </div>
              
              <p className="text-sm text-muted-foreground mb-3 italic">
                {exp.technologies}
              </p>
              
              <p className="text-foreground mb-3">{exp.description}</p>
              
              <ul className="space-y-2">
                {exp.highlights.map((highlight, hIndex) => (
                  <li key={hIndex} className="flex items-start gap-2 text-foreground">
                    <ArrowRight className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <span>{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {/* Projects */}
            <div className="space-y-4 ml-0 md:ml-4">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-resume-navy">
                Key Projects
              </h4>
              
              <div className="grid gap-4">
                {exp.projects.map((project, pIndex) => (
                  <article
                    key={pIndex}
                    className="border border-border rounded-lg p-4 hover:border-primary/50 hover:shadow-md transition-all duration-200"
                  >
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-1 mb-3">
                      <h5 className="font-bold text-foreground">{project.name}</h5>
                      <span className="text-xs text-muted-foreground bg-secondary px-2 py-1 rounded">
                        {project.tech}
                      </span>
                    </div>
                    
                    <ul className="space-y-2 mb-3">
                      {project.points.map((point, ptIndex) => (
                        <li key={ptIndex} className="flex items-start gap-2 text-sm text-foreground">
                          <span className="text-primary mt-1">•</span>
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <div className="flex items-start gap-2 bg-resume-highlight/50 rounded p-3 text-sm">
                      <span className="font-semibold text-resume-success">Impact:</span>
                      <span className="text-foreground">{project.impact}</span>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
