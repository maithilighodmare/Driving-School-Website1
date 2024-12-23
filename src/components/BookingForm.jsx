import React from "react";

const ContactForm = () => {
  return (
    <div className="bg-gray-100 py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6">Book Your Lessons Now</h2>
        <form className="bg-white shadow rounded p-8 max-w-lg mx-auto">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            type="tel"
            placeholder="Phone Number"
            className="w-full mb-4 p-2 border rounded"
          />
          <input
            type="text"
            placeholder="Website"
            className="w-full mb-4 p-2 border rounded"
          />
          <button className="bg-green-500 text-white px-4 py-2 rounded">
            Apply Now
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
