const Summary = () => {
  return (
    <section aria-labelledby="summary-heading" className="slide-up" style={{ animationDelay: '0.1s' }}>
      <h2 id="summary-heading" className="resume-section-title">
        Professional Summary
      </h2>
      <p className="text-foreground leading-relaxed text-base md:text-lg">
        Frontend Developer with <strong className="text-primary font-semibold">4+ years</strong> of experience 
        building high-performance web applications using React. Skilled in reusable components, 
        state management, and performance optimization. Proven track record of delivering 
        scalable solutions in agile environments.
      </p>
    </section>
  );
};

export default Summary;
