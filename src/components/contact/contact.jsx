"use client";
import Select from "react-select/dist/declarations/src/Select";
import { motion } from "framer-motion";


const countryOptions = [
    { value: "+91", label: "🇮🇳 India (+91)" },
    { value: "+1", label: "🇺🇸 USA (+1)" },
    { value: "+44", label: "🇬🇧 UK (+44)" },
    { value: "+61", label: "🇦🇺 Australia (+61)" },
    { value: "+81", label: "🇯🇵 Japan (+81)" },
    { value: "+49", label: "🇩🇪 Germany (+49)" },
    { value: "+33", label: "🇫🇷 France (+33)" },
    { value: "+971", label: "🇦🇪 UAE (+971)" },
  ];
  

export default function Contact() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-50 p-6">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-3xl font-bold text-gray-900 mb-6"
      >
        Contact Me
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="text-gray-700 text-center mb-8 max-w-md"
      >
        Get in touch for your **digital visiting card**. Fill out the form below, and I’ll get back to you as soon as possible.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md"
      >
        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Name</label>
          <input
            type="text"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Your Name"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Email</label>
          <input
            type="email"
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Your Email"
          />
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 font-medium mb-1">Mobile Number</label>
          <div className="flex">
            <Select
              options={countryOptions}
              value={selectedCountry}
              onChange={setSelectedCountry}
              className="w-1/3"
            />
            <input
              type="tel"
              className="w-2/3 ml-2 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              placeholder="Enter Mobile No"
              maxLength="10"
              value={mobileNumber}
              onChange={handleMobileChange}
            />
          </div>
        </div>


        <div className="mb-4">
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            className="w-full mt-1 p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            placeholder="Your Message"
            rows="4"
          ></textarea>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="w-full bg-blue-600 text-white font-medium py-3 rounded-lg hover:bg-blue-700 transition"
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
}
