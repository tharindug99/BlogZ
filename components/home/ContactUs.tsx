import React from "react";
import { Button } from "../ui/button";

function ContactUs() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-around p-6 h-screen">
      <div className="md:w-1/2 w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345098037!2d144.95373531531752!3d-37.81627927975179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xf0727db1a3a568a2!2sVictoria!5e0!3m2!1sen!2sau!4v1574675826693!5m2!1sen!2sau"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          aria-hidden="false"
        ></iframe>
      </div>
      <div className="md:w-1/2 w-full p-4">
        <h2 className="text-3xl font-bold mb-4">Contact Us</h2>
        <form className="space-y-4">
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="name"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Name"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="email"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Email"
            />
          </div>
          <div>
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              id="message"
              className=" appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              placeholder="Your Message"
            ></textarea>
          </div>
          <div>
            <Button>Send Message</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
