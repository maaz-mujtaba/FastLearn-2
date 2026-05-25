const CoursesPage = () => {
  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">All Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Course cards will be added here in Day 5 */}
        <div className="card">
          <h3 className="text-xl font-bold mb-2">HTML</h3>
          <p className="text-text-secondary">Learn the structure of the web</p>
        </div>
      </div>
    </div>
  );
};

export default CoursesPage;