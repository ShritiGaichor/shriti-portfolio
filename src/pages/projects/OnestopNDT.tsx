
import ProjectDetail from "@/components/layout/ProjectDetail";

const OnestopNDT = () => {
  return (
    <ProjectDetail
      title="OnestopNDT (Media Platform)"
      description="A full-featured media platform with user authentication, role-based access, and content management dashboard."
      technologies={["HTML", "CSS", "React", "Bootstrap", "REST API"]}
      image="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p>
            OnestopNDT is a comprehensive media platform designed to provide a seamless content consumption experience. The platform features a sophisticated user authentication system, role-based access controls, and a robust content management dashboard for administrators.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Contributions</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Built a mobile-responsive UI using HTML, CSS, React, and Bootstrap</li>
            <li>Integrated REST APIs for seamless data fetching and interactions</li>
            <li>Implemented user authentication and login functionality</li>
            <li>Developed a role-based access system for managing different user permissions</li>
            <li>Designed and developed an admin dashboard for content and user management</li>
            <li>Created personalized user profiles to display activities and content based on user interests</li>
            <li>Worked on technical SEO to improve platform visibility</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Technical Challenges</h2>
          <p>
            A significant challenge was implementing the role-based access control system that needed to handle multiple user types with varying permissions. This required a carefully designed permission structure and secure authorization checks throughout the application.
          </p>
          <p className="mt-4">
            Another challenge was creating a content personalization algorithm that effectively matched users with relevant content based on their interests and previous interactions with the platform.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            The platform successfully launched with strong user engagement metrics. The personalized content delivery system increased the average time spent on the platform, while the intuitive admin dashboard simplified content management operations. Technical SEO improvements resulted in higher organic traffic to the platform.
          </p>
        </section>
      </div>
    </ProjectDetail>
  );
};

export default OnestopNDT;
