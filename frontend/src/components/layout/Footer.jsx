import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const sections = [
    {
      title: 'Courses',
      links: [
        { name: 'HTML', path: '/courses/html' },
        { name: 'CSS', path: '/courses/css' },
        { name: 'JavaScript', path: '/courses/javascript' },
        { name: 'React.js', path: '/courses/react' },
        { name: 'FastAPI', path: '/courses/fastapi' },
        { name: 'Java', path: '/courses/java' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About', path: '/about' },
        { name: 'Blog', path: '/blog' },
        { name: 'Careers', path: '/careers' },
        { name: 'Contact', path: '/contact' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Documentation', path: '/docs' },
        { name: 'Community', path: '/community' },
        { name: 'Support', path: '/support' },
        { name: 'API Status', path: '/status' },
      ],
    },
    {
      title: 'Legal',
      links: [
        { name: 'Terms of Service', path: '/terms' },
        { name: 'Privacy Policy', path: '/privacy' },
        { name: 'Cookie Policy', path: '/cookies' },
        { name: 'GDPR', path: '/gdpr' },
      ],
    },
  ];

  return (
    <footer className="bg-dark-card border-t border-dark-border mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-heading font-bold mb-4">
              <span className="text-accent-purple">fast</span>
              <span className="text-text-primary">learn</span>
            </div>
            <p className="text-text-secondary text-sm mb-4">
              Learn to code interactively. Build real projects. Get certified.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-text-secondary hover:text-accent-purple transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                </svg>
              </a>
              <a href="#" className="text-text-secondary hover:text-accent-purple transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.305.762-1.604-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.195.69.795.57 4.755-1.59 8.175-6.09 8.175-11.38 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
              <a href="#" className="text-text-secondary hover:text-accent-purple transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22.162 5.656c-1.115.495-2.31.83-3.567.98 1.283-.77 2.267-1.99 2.73-3.445-1.2.713-2.53 1.23-3.945 1.51-1.132-1.207-2.746-1.96-4.533-1.96-3.43 0-6.21 2.78-6.21 6.21 0 .49.055.97.162 1.43-5.16-.26-9.74-2.73-12.8-6.48-.535.92-.84 1.98-.84 3.12 0 2.16 1.1 4.06 2.77 5.18-1.02-.03-1.98-.31-2.82-.78v.08c0 3.01 2.14 5.52 4.98 6.09-.52.14-1.07.22-1.64.22-.4 0-.79-.04-1.17-.12.79 2.46 3.08 4.26 5.8 4.31-2.13 1.67-4.81 2.66-7.72 2.66-.5 0-1-.03-1.5-.09 2.78 1.78 6.09 2.82 9.64 2.82 11.57 0 17.9-9.58 17.9-17.9 0-.27-.01-.54-.02-.81 1.23-.89 2.3-2 3.14-3.27z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Link Sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="font-semibold text-text-primary mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-text-secondary hover:text-accent-purple transition-colors text-sm"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-dark-border text-center">
          <p className="text-text-secondary text-sm">
            © {currentYear} fastlearn.com. All rights reserved.
          </p>
          <p className="text-text-tertiary text-xs mt-2">
            Made with ❤️ for developers worldwide
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;