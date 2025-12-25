import { GraduationCap, Award } from "lucide-react";

const Education = () => {
  return (
    <section aria-labelledby="education-heading" className="slide-up" style={{ animationDelay: '0.5s' }}>
      <h2 id="education-heading" className="resume-section-title">
        Education
      </h2>
      <div className="bg-resume-light-blue rounded-lg p-4 md:p-6">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-primary rounded-lg">
            <GraduationCap className="w-6 h-6 text-primary-foreground" />
          </div>
          <div className="flex-1">
            <h3 className="text-lg md:text-xl font-bold text-foreground">
              Bachelor of Engineering in Computer Science and Technology
            </h3>
            <p className="text-primary font-medium mt-1">
              Barkatullah University Institute of Technology, Bhopal
            </p>
            <div className="flex items-center gap-2 mt-3 text-resume-success">
              <Award className="w-5 h-5" />
              <span className="font-semibold">CGPA: 8.05/10</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
