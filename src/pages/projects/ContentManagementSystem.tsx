
import ProjectDetail from "@/components/layout/ProjectDetail";

const ContentManagementSystem = () => {
  return (
    <ProjectDetail
      title="Content Management System"
      description="Modern CMS with role-based access control, built with performance optimizations including caching and lazy loading."
      technologies={["Next.js", "Tailwind CSS", "Node.js", "MongoDB"]}
      image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p>
            Developed a modern, high-performance content management system (CMS) with role-based access control, advanced content management capabilities, and optimized performance. The system was built using Next.js and Tailwind CSS for the frontend, with a Node.js and MongoDB backend.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Contributions</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Developed a responsive and modern UI using Next.js and Tailwind CSS</li>
            <li>Implemented role-based access control for Admins, Editors, and Viewers</li>
            <li>Integrated REST APIs for high-speed content management and data transactions</li>
            <li>Worked on performance optimizations using caching strategies and lazy loading</li>
            <li>Worked on backend part by using fastify with Node JS to build DB in MongoDB and REST APIs</li>
            <li>Designed and implemented a version control system for content</li>
            <li>Created comprehensive analytics dashboards for content performance</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Technical Challenges</h2>
          <p>
            A significant challenge was designing a flexible yet secure role-based access control system that could accommodate complex organizational hierarchies while maintaining ease of management. This required careful modeling of permission structures and inheritance rules.
          </p>
          <p className="mt-4">
            Another major challenge was optimizing performance for large content libraries, which necessitated implementing efficient caching strategies, lazy loading, and database query optimizations. Managing real-time updates across multiple user sessions also required sophisticated state management.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            The CMS significantly streamlined content management workflows, reducing the time needed for content publication and updates. The performance optimizations resulted in faster page loads and a more responsive user experience, even when handling large content libraries. The role-based access control system effectively secured sensitive content while enabling appropriate levels of access for different user roles.
          </p>
        </section>
      </div>
    </ProjectDetail>
  );
};

export default ContentManagementSystem;
