import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Features from "../components/Features";

function Home() {
  return (
    <>
      <Navbar />

      <Hero />

      <Features />

      {/* Contact Section */}

      <section id="contact" className="cta">

        <div className="container text-center">

          <h2>Contact Us</h2>

          <p>Email : support@aiplacement.com</p>

          <p>Phone : +91 9876543210</p>

          <p>Address : Kanpur, Uttar Pradesh</p>

        </div>

      </section>

    </>
  );
}

export default Home;