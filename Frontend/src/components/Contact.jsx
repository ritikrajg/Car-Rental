import React from "react";
import Navbar from "./Navbar"; 

function Contact() {
  return (
    <>
      <Navbar />

      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-8">
        <h1 className="mt-28 text-4xl font-bold text-center mb-4">Contact Us</h1>
        <p className="mb-8 text-center">
          If you have any questions or concerns, feel free to reach out to us.
        </p>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Address</h2>
          <p>Main Road,</p>
          <p>Warisaliganj, Bihar, 805130</p>
          <p>India</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Phone</h2>
          <p>+91 9060928741</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Email</h2>
          <p>ritikrajg@gmail.com</p>
        </div>

        <div className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Business Hours</h2>
          <p>Monday - Friday: 9:00 AM to 5:00 PM</p>
          <p>Saturday - Sunday: Closed</p>
        </div>
      </div>
    </>
  );
}

export default Contact;
