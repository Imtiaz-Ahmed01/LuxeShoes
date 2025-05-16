import React from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Twitter, Github } from 'lucide-react';

const Contact = () => {
  return (
    <div className="bg-gradient-to-b from-white to-blue-50 py-16 px-4 sm:px-8 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
        {/* Contact Form */}
        <div>
          <h2 className="text-4xl font-bold text-blue-700 mb-4">Get in Touch</h2>
          <p className="text-gray-600 text-lg mb-8">
            We'd love to hear from you. Please fill out the form below and we'll respond as soon as possible.
          </p>
          <form className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
              <input
                type="text"
                placeholder="John Doe"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
              <input
                type="email"
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea
                rows="6"
                placeholder="Write your message here..."
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
            </div>
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="bg-white p-8 rounded-xl shadow-xl space-y-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Contact Information</h3>
          <div className="space-y-4 text-gray-700">
            <p className="flex items-start gap-3">
              <Mail className="text-blue-500 w-5 h-5 mt-1" />
              <span>support@luxeshoes.com</span>
            </p>
            <p className="flex items-start gap-3">
              <Phone className="text-blue-500 w-5 h-5 mt-1" />
              <span>+92 (311) 790-8741</span>
            </p>
            <p className="flex items-start gap-3">
              <MapPin className="text-blue-500 w-5 h-5 mt-1" />
              <span>123 Street, Karachi, Pakistan</span>
            </p>
            <p className="flex items-start gap-3">
              <Clock className="text-blue-500 w-5 h-5 mt-1" />
              <span>Mon - Sat: 9:00 AM – 7:00 PM</span>
            </p>
          </div>
          <div className="pt-6 border-t border-gray-200">
            <h4 className="font-semibold text-gray-800 mb-3">Follow Us</h4>
            <div className="flex gap-4">
              <a href="https://www.facebook.com/profile.php?id=61569932690846"
                    target="_blank"
                    rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 transition">
                <Facebook />
              </a>
              <a href="https://www.instagram.com/maybe_imtiazz/" rel="noopener noreferrer"
                    target="_blank" className="text-pink-500 hover:text-pink-700 transition">
                <Instagram />
              </a>
              <a href="https://github.com/Imtiaz-Ahmed01"
                    target="_blank"
                    rel="noopener noreferrer" className="text-blue-400 hover:text-blue-600 transition">
                <Github />
              </a>
            </div>
          </div>
        </div>
        
      </div>
    </div>
  );
};

export default Contact;
