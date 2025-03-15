
import ProjectDetail from "@/components/layout/ProjectDetail";

const TicketBookingSystem = () => {
  return (
    <ProjectDetail
      title="Ticket Booking System"
      description="A comprehensive ticket booking system with support for online, offline and kiosk bookings. Integrated secure payment gateway and responsive design."
      technologies={["HTML", "CSS", "Bootstrap", "REST API"]}
      image="https://images.unsplash.com/photo-1518770660439-4636190af475"
    >
      <div className="space-y-6">
        <section>
          <h2 className="text-2xl font-semibold mb-4">Project Overview</h2>
          <p>
            Designed and developed a comprehensive ticket booking system that supports multiple booking channels including online, offline, and kiosk-based reservations. The system features a user-friendly interface that adapts seamlessly across different devices and screen sizes.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Key Contributions</h2>
          <ul className="list-disc pl-5 space-y-2">
            <li>Designed and developed a responsive, user-friendly UI using HTML, CSS, and Bootstrap</li>
            <li>Integrated a secure payment gateway using REST APIs to handle online transactions</li>
            <li>Collaborated with third-party developers, backend teams, and designers to ensure seamless system functionality</li>
            <li>Implemented cross-browser compatibility to ensure consistent experiences</li>
            <li>Created intuitive booking flows to minimize user drop-offs</li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Technical Challenges</h2>
          <p>
            One of the main challenges was creating a unified experience across different booking channels while accounting for the unique constraints of each method. Kiosk interfaces required larger touch targets and simpler flows, while the online experience needed to be optimized for various devices and screen sizes.
          </p>
          <p className="mt-4">
            Additionally, integrating the payment gateway required implementing robust security measures and error handling to ensure transaction reliability.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4">Results</h2>
          <p>
            The system successfully streamlined the ticket booking process across all channels, resulting in increased bookings and improved user satisfaction. The responsive design and intuitive interface contributed to a significant reduction in abandoned bookings.
          </p>
        </section>
      </div>
    </ProjectDetail>
  );
};

export default TicketBookingSystem;
