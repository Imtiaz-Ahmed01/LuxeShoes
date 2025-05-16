import React from 'react';

const ShippingPolicy = () => {
  return (
    <div className="bg-white text-gray-800 px-4 sm:px-8 lg:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">Shipping Policy</h1>

        <section className="space-y-6 text-[17px] leading-relaxed">
          <p>
            At <strong>LuxeShoes</strong>, we are committed to delivering your order as quickly and efficiently as possible.
            We ship across India and select international destinations. Please review the details below to understand our shipping process.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Shipping Timeframes</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Orders are processed within 1–2 business days.</li>
              <li>Standard delivery within India: 3–7 business days.</li>
              <li>Express delivery (if selected): 1–3 business days.</li>
              <li>International delivery: 7–14 business days (depending on destination).</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Shipping Charges</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>We offer <strong>free standard shipping</strong> on all domestic orders over 999/-Rs.</li>
              <li>Orders below 999/-Rs. will be charged 50/-Rs. for shipping.</li>
              <li>Express and international shipping fees are calculated at checkout based on your location.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Order Tracking</h2>
            <p>
              Once your order is shipped, you will receive a confirmation email with a tracking number. You can track your shipment through our courier partner’s website.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Delays & Exceptions</h2>
            <p>
              Delivery times may be affected by factors such as weather conditions, public holidays, or high volume seasons (e.g., Eid, Diwali, Christmas).
              LuxeShoes is not liable for any delays caused by the courier service.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Address Accuracy</h2>
            <p>
              Please ensure that your shipping address and contact details are accurate and complete. Incorrect or incomplete information may lead to delays or failed deliveries.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Lost or Damaged Packages</h2>
            <p>
              If your order is lost or arrives damaged, contact us immediately at <strong>support@luxeshoes.com</strong>.
              We’ll assist you with replacement or refund depending on the situation.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Contact Us</h2>
            <p>
              For any shipping-related queries, feel free to reach out to us at <strong>support@luxeshoes.com</strong> or call us at <strong>+92 31179 08741</strong>.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ShippingPolicy;
