const Footer = () => {
  return (
    <footer className="bg-dark-card border-t border-dark-border mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-bold mb-4">fastlearn</h3>
            <p className="text-text-secondary text-sm">
              Learn to code interactively. Build real projects. Get certified.
            </p>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Courses</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>HTML</li>
              <li>CSS</li>
              <li>JavaScript</li>
              <li>React.js</li>
              <li>FastAPI</li>
              <li>Java</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Company</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>About</li>
              <li>Blog</li>
              <li>Careers</li>
              <li>Contact</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li>Terms</li>
              <li>Privacy</li>
              <li>Cookie Policy</li>
            </ul>
          </div>
        </div>
        <div className="text-center text-text-secondary text-sm mt-8 pt-4 border-t border-dark-border">
          © 2024 fastlearn.com. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;