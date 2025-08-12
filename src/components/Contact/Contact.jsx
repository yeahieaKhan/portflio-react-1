import React from "react";
import Lottie from "lottie-react";
import EmailLotties from "../../assets/email.json";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="py-20">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-16 text-primary">
          Contact Me
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {/* Email */}
          <div className="flex flex-col items-center space-y-4">
            <MdEmail className="text-5xl text-primary" />
            <h3 className="text-xl font-semibold text-gray-700">Email</h3>
            <p className="text-gray-600 hover:text-primary cursor-pointer select-text">
              yeahieakhan@gmail.com
            </p>
          </div>

          {/* WhatsApp */}
          <div className="flex flex-col items-center space-y-4">
            <FaWhatsapp className="text-5xl text-green-500" />
            <h3 className="text-xl font-semibold text-gray-700">WhatsApp</h3>
            <p className="text-gray-600 hover:text-green-600 cursor-pointer select-text">
              +8801719788083
            </p>
          </div>

          {/* Location */}
          <div className="flex flex-col items-center space-y-4">
            <IoLocationOutline className="text-5xl text-red-700" />
            <h3 className="text-xl font-semibold text-gray-700">Location</h3>
            <p className="text-gray-600">Dhaka, Bangladesh</p>
          </div>
        </div>
      </div>
      <div className=" sm:px-6 lg:px-20 bg-gradient-to-tr from-base-200 via-base-100 to-base-200 min-h-screen flex flex-col items-center">
        <div className="flex flex-col lg:flex-row items-center gap-12 w-full max-w-5xl">
          {/* Lottie Animation */}
          <div className="w-full max-w-sm md:max-w-md lg:max-w-lg">
            <Lottie animationData={EmailLotties} loop={true} />
          </div>

          {/* Feedback Form */}
          <div className="card bg-base-100 shadow-xl w-full max-w-md rounded-lg">
            <form className="card-body" onSubmit={(e) => e.preventDefault()}>
              {/* Name */}

              <label className="label" htmlFor="name">
                <span className="label-text font-semibold text-gray-700">
                  Name
                </span>
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your Name"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary transition duration-300"
                required
              />

              {/* Email */}

              <label className="label" htmlFor="email">
                <span className="label-text font-semibold text-gray-700">
                  Email
                </span>
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Your Email"
                className="input input-bordered focus:border-primary focus:ring-2 focus:ring-primary transition duration-300"
                required
              />

              <label className="label" htmlFor="message">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                placeholder="Write your message here..."
                className="textarea textarea-bordered h-40 resize-none p-4 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary transition duration-300 text-lg"
                required
              ></textarea>

              {/* Submit Button */}
              <div className="form-control">
                <button
                  type="submit"
                  className="btn btn-primary text-white font-semibold tracking-wide"
                >
                  Send Feedback
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
