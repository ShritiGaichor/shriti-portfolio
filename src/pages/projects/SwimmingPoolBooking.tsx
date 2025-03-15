
import ProjectDetail from "@/components/layout/ProjectDetail";

const SwimmingPoolBooking = () => {
  return (
    <ProjectDetail
      title="Swimming Pool Online Booking System"
      description="An interactive booking system for swimming pools with member profile management and payment integration."
      technologies={["HTML", "CSS", "React", "REST API"]}
      image="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p>
            Developed a comprehensive online booking system for swimming pools that allows users to reserve pool time slots, manage their member profiles, and make secure online payments. The system also featured integration with Facebio for real-time dashboard updates on pool activity.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Contributions</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Developed an engaging and interactive UI using HTML, CSS, and React</li>
            <li>Integrated REST APIs and implemented API authentication</li>
            <li>Designed and developed member profile management features</li>
            <li>Integrated a payment gateway for seamless transactions</li>
            <li>Connected the system with Facebio for real-time dashboard updates on pool activity</li>
            <li>Implemented an intuitive booking calendar with availability visualization</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Technical Challenges</h2>
          <p>
            The most significant challenge was implementing a real-time booking system that could handle concurrent reservations without double-booking. This required careful state management and synchronization with the backend.
          </p>
          <p className="mt-4">
            Another challenge was integrating with the Facebio system to provide real-time updates on pool activity, which required establishing a reliable communication channel between the two systems.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            The booking system dramatically streamlined the pool reservation process, reducing administrative overhead and improving the user experience. The integration with Facebio enabled pool managers to monitor attendance and usage patterns in real-time, facilitating better resource management.
          </p>
        </section>
      </div>
    </ProjectDetail>
  );
};

export default SwimmingPoolBooking;
