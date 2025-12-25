import { CheckCircle } from "lucide-react";

const competencies = [
  "Component-based Architecture",
  "RESTful API Integration",
  "UI/UX Collaboration",
  "State Management (Hooks, Redux)",
  "Agile Methodologies",
  "Code Optimization & Debugging",
];

const Competencies = () => {
  return (
    <section aria-labelledby="competencies-heading" className="slide-up" style={{ animationDelay: '0.4s' }}>
      <h2 id="competencies-heading" className="resume-section-title">
        Core Competencies
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
        {competencies.map((competency, index) => (
          <div
            key={index}
            className="flex items-center gap-3 p-3 bg-resume-light-blue rounded-lg hover:bg-resume-highlight transition-colors duration-200"
          >
            <CheckCircle className="w-5 h-5 text-resume-success flex-shrink-0" />
            <span className="text-foreground font-medium text-sm md:text-base">
              {competency}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Competencies;
