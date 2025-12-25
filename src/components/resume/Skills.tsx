const skillCategories = [
  {
    title: "Frontend",
    skills: [
      "React.js",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
      "Bootstrap",
      "Redux",
      "Context API",
      "Hooks",
      "Styled-Components",
      "Tailwind CSS",
      "Responsive Design",
    ],
  },
  {
    title: "Backend",
    skills: ["Node.js", "Firebase", "MongoDB", "PostgreSQL", "MySQL"],
  },
  {
    title: "Languages",
    skills: ["JavaScript", "C", "C++"],
  },
  {
    title: "Tools & Platforms",
    skills: [
      "Git",
      "REST APIs",
      "VS Code",
      "Chrome DevTools",
      "JIRA",
      "Webpack",
      "Babel",
    ],
  },
];

const Skills = () => {
  return (
    <section aria-labelledby="skills-heading" className="slide-up" style={{ animationDelay: '0.2s' }}>
      <h2 id="skills-heading" className="resume-section-title">
        Technical Skills
      </h2>
      <div className="space-y-4">
        {skillCategories.map((category, index) => (
          <div key={index} className="flex flex-col md:flex-row md:items-start gap-2 md:gap-4">
            <span className="font-semibold text-resume-navy min-w-[120px] text-sm uppercase tracking-wide">
              {category.title}:
            </span>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill, skillIndex) => (
                <span
                  key={skillIndex}
                  className="skill-tag"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
