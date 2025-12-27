// src/components/AboutUs/AboutUs.jsx
import "./AboutUs.css";
import CoreValue from "./Corevalue.jsx";
import OurStory from "./OurStory.jsx";


export default function AboutUs() {
  return (
    <>
      <section className="about-section">

        {/* PAGE TITLE */}
        <h2 className="about-title">ABOUT US</h2>

        {/* TOP SECTION */}
        <div className="about-top">

          {/* LEFT HEADING */}
          <div className="about-heading">
            <h1>
              Bring Your Vision of<br />
              Life with Expertise<br />
              and Dedication
            </h1>
            <h3 className="about-subheading">Leads Dominate</h3>
          </div>

          {/* RIGHT TOP IMAGES */}
          <div className="about-top-images">
            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2070" className="top-img" alt="Active Construction Site" />

            <img src="https://images.unsplash.com/photo-1565008447742-97f6f38c985c?q=80&w=2070" className="top-img" alt="Industrial Engineering" />
          </div>
        </div>

        {/* MIDDLE SECTION */}
        <div className="about-middle">

          {/* LEFT LARGE IMAGE */}
          <img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070" className="middle-img" alt="Focused Team" />

          {/* RIGHT TEXT BOX */}
          <div className="about-text-box">
            <p>
              We build secure, reliable, and human-centered SHM devices that
              help organizations monitor structures smarter. Our approach
              combines engineering rigor, actionable insights, and lasting
              partnerships. Sensors capture data.
            </p>

            <p>
              We build secure, reliable, and human-centered SHM devices that help
              organizations monitor structures smarter. Our app-centered SHM
              devices combine engineering rigor and actionable data.
            </p>

            {/* STATS */}
            <div className="stats-row">
              <div className="stat-block">
                <h3>200+</h3>
                <p>Clients</p>
              </div>

              <div className="stat-block">
                <h3>50+</h3>
                <p>Team members</p>
              </div>

              <div className="stat-block">
                <h3>99.9%</h3>
                <p>Uptime SLA</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE VALUE SECTION */}
      <CoreValue />
      <OurStory />
    </>
  );
}
