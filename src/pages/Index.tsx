import Header from "@/components/resume/Header";
import Summary from "@/components/resume/Summary";
import Skills from "@/components/resume/Skills";
import Experience from "@/components/resume/Experience";
import Competencies from "@/components/resume/Competencies";
import Education from "@/components/resume/Education";
import PrintButton from "@/components/resume/PrintButton";

const Index = () => {
  return (
    <>
      {/* SEO Meta Tags handled in index.html */}
      <main className="min-h-screen bg-background py-8 px-4 md:py-12">
        <article
          className="resume-container max-w-4xl mx-auto bg-card shadow-xl rounded-xl p-6 md:p-10 lg:p-12 fade-in"
          itemScope
          itemType="https://schema.org/Person"
        >
          {/* Hidden structured data for ATS */}
          <meta itemProp="name" content="Sumant Kumar" />
          <meta itemProp="jobTitle" content="Frontend Developer" />
          <meta itemProp="email" content="Sumantsunny63@gmail.com" />
          <meta itemProp="telephone" content="+918789927623" />
          
          <Header />
          
          <div className="space-y-8 mt-8">
            <Summary />
            <div className="resume-divider" />
            
            <Skills />
            <div className="resume-divider" />
            
            <Experience />
            <div className="resume-divider" />
            
            <Competencies />
            <div className="resume-divider" />
            
            <Education />
          </div>
          
          {/* Footer with last updated */}
          <footer className="mt-8 pt-6 border-t border-border text-center text-sm text-muted-foreground">
            <p>Last Updated: December 2024</p>
          </footer>
        </article>
        
        <PrintButton />
      </main>
    </>
  );
};

export default Index;
