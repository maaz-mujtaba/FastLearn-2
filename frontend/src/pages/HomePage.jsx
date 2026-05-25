const HomePage = () => {
  return (
    <div>
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            Learn to Code
            <span className="text-accent-purple"> Interactively</span>
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Write real code from the first lesson. Get instant feedback. 
            Earn certificates. All for free.
          </p>
          <div className="flex gap-4 justify-center">
            <button className="btn-primary text-lg px-8 py-3">
              Start Learning Free
            </button>
            <button className="btn-secondary text-lg px-8 py-3">
              View Courses
            </button>
          </div>
        </div>
      </section>
      
      {/* Stats Section */}
      <section className="py-16 bg-dark-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-accent-purple">6</div>
              <div className="text-text-secondary">Courses</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-purple">80+</div>
              <div className="text-text-secondary">Lessons</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-purple">100%</div>
              <div className="text-text-secondary">Free to Start</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-accent-purple">24/7</div>
              <div className="text-text-secondary">Access</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;