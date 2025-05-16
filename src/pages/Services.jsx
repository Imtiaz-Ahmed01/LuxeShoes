import { Truck, RotateCcw, ShieldCheck, CreditCard, BadgeCheck } from "lucide-react";

const Services = () => {
  return (
    <div className="px-10 py-16 bg-gradient-to-br from-blue-50 to-white text-gray-800">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-extrabold text-center mb-10 text-blue-800">Why Shop With LuxeShoes?</h1>
        <p className="text-center text-lg text-gray-600 mb-20">
          We go beyond shoes — we deliver excellence. Here's what makes us stand out.
        </p>

        <div className="grid md:grid-cols-3 gap-12">
          <div className="bg-white shadow-xl hover:shadow-blue-100 transition duration-300 p-8 rounded-3xl flex flex-col items-center text-center">
            <Truck className="h-14 w-14 text-blue-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Fast & Reliable Shipping</h2>
            <p className="text-gray-500">
              We deliver within <strong>7-15 working days</strong> across the country with real-time tracking and insured packages.
            </p>
          </div>

          <div className="bg-white shadow-xl hover:shadow-red-100 transition duration-300 p-8 rounded-3xl flex flex-col items-center text-center">
            <RotateCcw className="h-14 w-14 text-red-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">7 Days Return Policy</h2>
            <p className="text-gray-500">
              Not happy with your purchase? Return within 7 days for a full refund. No questions asked.
            </p>
          </div>

          <div className="bg-white shadow-xl hover:shadow-green-100 transition duration-300 p-8 rounded-3xl flex flex-col items-center text-center">
            <ShieldCheck className="h-14 w-14 text-green-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Authenticity Guaranteed</h2>
            <p className="text-gray-500">
              Every product we sell is verified for quality and originality. Your trust is our priority.
            </p>
          </div>

          <div className="bg-white shadow-xl hover:shadow-yellow-100 transition duration-300 p-8 rounded-3xl flex flex-col items-center text-center">
            <CreditCard className="h-14 w-14 text-yellow-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Secure Payment Options</h2>
            <p className="text-gray-500">
              Enjoy safe transactions with industry-standard encryption and multiple payment options.
            </p>
          </div>

          <div className="bg-white shadow-xl hover:shadow-purple-100 transition duration-300 p-8 rounded-3xl flex flex-col items-center text-center">
            <BadgeCheck className="h-14 w-14 text-purple-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">1000+ Verified Reviews</h2>
            <p className="text-gray-500">
              Join our community of happy customers. We’re rated 4.8/5 for product quality & service.
            </p>
          </div>

          <div className="bg-white shadow-xl hover:shadow-pink-100 transition duration-300 p-8 rounded-3xl flex flex-col items-center text-center">
            <ShieldCheck className="h-14 w-14 text-pink-500 mb-4" />
            <h2 className="text-2xl font-bold mb-2">Premium Materials</h2>
            <p className="text-gray-500">
              Our shoes are made with top-quality leather and materials that combine comfort and durability.
            </p>
          </div>
        </div>

        <div className="text-center mt-20">
          <h3 className="text-2xl font-semibold text-blue-700">Trusted By</h3>
          <div className="flex flex-wrap justify-center items-center gap-8 mt-6 text-gray-600 text-lg font-medium">
            <span>Nike</span>
            <span>Adidas</span>
            <span>Puma</span>
            <span>Zara</span>
            <span>H&M</span>
            <span>Amazon Fashion</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
