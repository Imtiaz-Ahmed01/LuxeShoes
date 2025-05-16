import React from 'react';
import { Link } from 'react-router-dom';
import { Users, Flag, Eye, Heart, Award } from 'lucide-react'; // Using more icons

const About = () => {
  return (
    <div className="bg-white py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <section className="mb-12 text-center">
          <h2 className="text-3xl font-extrabold text-blue-700 tracking-tight sm:text-4xl lg:text-5xl mb-6">
            Our Journey: More Than Just Shoes
          </h2>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            At LuxeShoes ETC, our story is woven with a deep appreciation for exceptional footwear. Founded with the vision of bringing together quality, style, and comfort, we've grown into a passionate community that celebrates every step.
          </p>
          <p className="mt-4 text-lg text-gray-700 leading-relaxed">
            From our early days fueled by a simple love for well-crafted shoes, we've evolved into an online destination dedicated to offering you a curated collection that inspires confidence and elevates your everyday.
          </p>
          <Link to="/products" className="mt-8 inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            Explore Our Collection
          </Link>
        </section>

        {/* Our Mission & Vision */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="bg-gray-50 rounded-lg shadow-md p-8 flex flex-col items-center text-center">
            <Flag className="h-10 w-10 text-green-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Mission</h3>
            <p className="text-gray-700 leading-relaxed">
              To carefully select and offer high-quality, stylish footwear that empowers our customers to express their unique identity with confidence and comfort. We are committed to exceptional service and building lasting connections.
            </p>
          </div>
          <div className="bg-gray-50 rounded-lg shadow-md p-8 flex flex-col items-center text-center">
            <Eye className="h-10 w-10 text-blue-600 mb-4" />
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Our Vision</h3>
            <p className="text-gray-700 leading-relaxed">
              To be the premier online destination for premium footwear, recognized for our unwavering dedication to quality, our keen eye for style, and our relentless focus on exceeding customer expectations in every interaction.
            </p>
          </div>
        </section>

        {/* Our Team */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-blue-700 tracking-tight sm:text-4xl mb-8 text-center">
            Meet the People Behind the Shoes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Users className="mx-auto h-10 w-10 text-indigo-500 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800">Dedicated Team</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our passionate team of footwear enthusiasts works tirelessly to curate the best selection and provide exceptional support.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Users className="mx-auto h-10 w-10 text-indigo-500 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800">Expert Curators</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                With a keen eye for style and quality, our curators handpick each pair to ensure they meet our high standards.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6 text-center">
              <Users className="mx-auto h-10 w-10 text-indigo-500 mb-4" />
              <h4 className="text-lg font-semibold text-gray-800">Support Specialists</h4>
              <p className="text-sm text-gray-600 leading-relaxed">
                Our friendly support team is always ready to assist you with any questions or concerns, ensuring a smooth shopping experience.
              </p>
            </div>
          </div>
          <p className="mt-8 text-center text-gray-700 leading-relaxed">
            We are a collective of individuals united by our love for exceptional footwear and our commitment to your satisfaction.
          </p>
        </section>

        {/* Our Values */}
        <section className="bg-gray-50 rounded-lg shadow-md py-12 px-6 sm:px-10 lg:px-16 mb-16">
          <h2 className="text-3xl font-extrabold text-blue-700 tracking-tight sm:text-4xl mb-8 text-center">
            What Drives Us: Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <Heart className="mx-auto h-10 w-10 text-red-500 mb-4" />
              <h4 className="mt-2 font-semibold text-lg text-gray-800">Passion for Quality</h4>
              <p className="mt-2 text-gray-700 leading-relaxed">We are driven by a genuine love for well-crafted shoes and a commitment to offering only the best.</p>
            </div>
            <div className="text-center">
              <Award className="mx-auto h-10 w-10 text-yellow-500 mb-4" />
              <h4 className="mt-2 font-semibold text-lg text-gray-800">Integrity & Trust</h4>
              <p className="mt-2 text-gray-700 leading-relaxed">We believe in operating with honesty, transparency, and building trust with our community.</p>
            </div>
            <div className="text-center">
              <Users className="mx-auto h-10 w-10 text-purple-500 mb-4" />
              <h4 className="mt-2 font-semibold text-lg text-gray-800">Customer-Centric Approach</h4>
              <p className="mt-2 text-gray-700 leading-relaxed">Your satisfaction is our top priority. We strive to provide exceptional support at every step.</p>
            </div>
            <div className="text-center">
              <Eye className="mx-auto h-10 w-10 text-teal-500 mb-4" />
              <h4 className="mt-2 font-semibold text-lg text-gray-800">A Keen Eye for Style</h4>
              <p className="mt-2 text-gray-700 leading-relaxed">We are dedicated to curating a collection that is not only high-quality but also on the cutting edge of style.</p>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="text-center py-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Ready to Find Your Perfect Fit?</h2>
          <Link to="/products" className="inline-block bg-blue-600 text-white font-semibold py-3 px-6 rounded-full hover:bg-blue-700 transition duration-300">
            Explore Our Shoe Collection
          </Link>
        </section>
      </div>
    </div>
  );
};

export default About;