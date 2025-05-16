import React from 'react';
import { useNavigate } from 'react-router-dom';

export const TermsAndConditions = () => {
    let navigate = useNavigate()
  return (
    <div className="bg-white text-gray-800 px-4 sm:px-8 lg:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">Terms and Conditions</h1>

        <section className="space-y-6 text-[17px] leading-relaxed">
          <p>
            By accessing or using <strong>LuxeShoes</strong>, you agree to comply with and be bound by the following Terms and Conditions. Please read them carefully before using our services.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Use of Website</h2>
            <p>
              You agree to use our website only for lawful purposes. You may not use our site:
            </p>
            <ul className="list-disc pl-5 mt-2">
              <li>For fraudulent purposes.</li>
              <li>To solicit others to perform or participate in unlawful acts.</li>
              <li>To violate any laws, regulations, or third-party rights.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Product Availability</h2>
            <p>
              All products displayed on the website are subject to availability. We reserve the right to limit quantities, discontinue products, or change descriptions without notice.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Pricing</h2>
            <p>
              Prices are subject to change without prior notice. In case of a pricing error, we reserve the right to cancel the order and refund the amount paid.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Order Cancellation</h2>
            <p>
              You may cancel an order within 1 hour of placing it by contacting our customer support. After dispatch, orders cannot be cancelled. LuxeShoes reserves the right to cancel any order for reasons including but not limited to stock unavailability, payment issues, or suspicion of fraud.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Returns & Refunds</h2>
            <p>
              Please refer to our <strong className='cursor-pointer hover:underline' onClick={()=>navigate("/return-policy")}>Return Policy</strong> for details on eligibility and process for returning products and obtaining refunds.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Intellectual Property</h2>
            <p>
              All content on this website including logos, images, text, graphics, and designs are the property of LuxeShoes and may not be used without written permission.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Limitation of Liability</h2>
            <p>
              LuxeShoes shall not be liable for any direct, indirect, incidental, or consequential damages arising from the use of or inability to use our website or services.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Modifications to Terms</h2>
            <p>
              We reserve the right to update or modify these Terms at any time without prior notice. Continued use of the website constitutes acceptance of any changes made.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">9. Contact Information</h2>
            <p>
              For any questions regarding these Terms and Conditions, please contact us:
            </p>
            <ul className="list-none pl-0 mt-2">
              <li>Email: <strong>support@luxeshoes.com</strong></li>
              <li>Phone: <strong>+92 31179 08741</strong></li>
              <li>Support Hours: Monday to Saturday, 10 AM – 6 PM</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};
