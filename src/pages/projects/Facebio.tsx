
import ProjectDetail from "@/components/layout/ProjectDetail";

const Facebio = () => {
  return (
    <ProjectDetail
      title="Facebio (Face Detection & Attendance System)"
      description="Automated attendance tracking system using face detection, integrated with Aadhaar APIs for authentication."
      technologies={["HTML", "CSS", "JavaScript", "REST API"]}
      image="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p>
            Facebio is an advanced attendance tracking system that uses facial recognition technology to automate the attendance process. The system is integrated with Aadhaar APIs for secure user authentication and provides comprehensive dashboards for monitoring attendance in real-time.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Contributions</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Designed and developed a mobile-friendly user interface</li>
            <li>Implemented a registration and authentication system using Aadhaar APIs</li>
            <li>Integrated the system with face detection devices for automated attendance tracking</li>
            <li>Provided dashboard for live attendance and reports</li>
            <li>Developed real-time notification system for attendance events</li>
            <li>Created exportable reports with detailed attendance analytics</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Technical Challenges</h2>
          <p>
            One of the main challenges was ensuring reliable face detection across various lighting conditions and camera angles. This required fine-tuning the integration with the face detection hardware and implementing fallback mechanisms for edge cases.
          </p>
          <p className="mt-4">
            Another significant challenge was securely integrating with the Aadhaar APIs while maintaining compliance with privacy regulations. This required implementing robust data protection measures and secure authentication flows.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            The Facebio system successfully automated the attendance tracking process, significantly reducing the time spent on manual attendance recording and minimizing errors. The real-time dashboard provided administrators with valuable insights into attendance patterns, enabling better resource planning and management.
          </p>
        </section>
      </div>
    </ProjectDetail>
  );
};

export default Facebio;
