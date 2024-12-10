import React from "react";
import Navbar from "./Navbar"; 

function About() {
  return (
    <>
      <Navbar />

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-8">
        <h1 className="mt-28 text-4xl font-bold text-center mb-8">About Us</h1>
        
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Company</h2>
          <p className="mb-4">
            Welcome to our company! We are dedicated to providing the best service and products to our customers.
            Our mission is to deliver high-quality solutions that meet the needs and exceed the expectations of our clients.
          </p>
          <p className="mb-4">
            Founded in 2022, we have quickly grown into a trusted name in the industry. Our team is composed of passionate
            professionals who are committed to innovation and excellence.
          </p>
        </section>

        {/* Mission and Vision Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Mission & Vision</h2>
          <p className="mb-4">
            Our mission is to empower businesses and individuals through innovative solutions and exceptional service.
            We envision a world where technology seamlessly integrates into every aspect of life, enhancing experiences
            and creating new opportunities.
          </p>
        </section>

        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Our Values</h2>
          <ul className="list-disc list-inside mb-4">
            <li className="mb-2">Integrity: We uphold the highest standards of integrity in all of our actions.</li>
            <li className="mb-2">Customer Commitment: We develop relationships that make a positive difference in our customers' lives.</li>
            <li className="mb-2">Quality: We provide outstanding products and unsurpassed service that, together, deliver premium value to our customers.</li>
            <li className="mb-2">Innovation: We constantly seek to improve and innovate our products and services.</li>
          </ul>
        </section>

        {/* Team Section */}
        <section className="mb-8">
          <h2 className="text-2xl font-semibold mb-4">Meet Our Team</h2>
          <p className="mb-4">
            Our team is our greatest asset. We have a group of diverse and talented individuals who are passionate about
            what they do. Meet the leaders and experts who drive our company forward.
          </p>
          {/* Here you could add images or descriptions of your team members */}
        </section>

        {/* Closing Statement */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
          <p>
            If you'd like to learn more about us or have any questions, feel free to <a href="/contact" className="text-blue-500 hover:underline">contact us</a>.
          </p>
        </section>
      </div>
    </>
  );
}

export default About;
