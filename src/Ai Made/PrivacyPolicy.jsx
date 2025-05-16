import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div className="bg-white text-gray-800 px-4 sm:px-8 lg:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">Privacy Policy</h1>

        <section className="space-y-6 text-[17px] leading-relaxed">
          <p>
            At <strong>LuxeShoes</strong>, we value your privacy and are committed to protecting your personal information.
            This Privacy Policy explains how we collect, use, disclose, and safeguard your data when you visit our website or make a purchase from us.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Information We Collect</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li><strong>Personal Details:</strong> Name, email, phone number, billing/shipping address.</li>
              <li><strong>Payment Info:</strong> Credit/debit card, UPI, or other payment method (processed securely via our payment gateways).</li>
              <li><strong>Device Info:</strong> IP address, browser type, device type, operating system.</li>
              <li><strong>Usage Data:</strong> Pages visited, time on site, clicks, and other analytics.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. How We Use Your Information</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>To process orders and payments.</li>
              <li>To send order updates, shipping notifications, and offers.</li>
              <li>To improve user experience and website performance.</li>
              <li>To comply with legal obligations and prevent fraud.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Sharing Your Information</h2>
            <p>
              We do not sell your personal data. We only share your information with:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Trusted third-party services (payment processors, shipping companies, analytics tools).</li>
              <li>Government or legal authorities when required by law.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Cookies & Tracking</h2>
            <p>
              We use cookies to enhance your browsing experience. These cookies help us remember your preferences, login sessions, and understand website traffic.
            </p>
            <p className="mt-2">
              You can control or disable cookies through your browser settings.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Your Rights</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Access or update your personal information at any time.</li>
              <li>Request deletion of your data by contacting our support team.</li>
              <li>Opt-out of marketing emails by clicking "unsubscribe" at the bottom of any email.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Data Security</h2>
            <p>
              We take security seriously. Your data is encrypted, stored securely, and protected from unauthorized access using industry-standard practices.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">7. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with the updated date.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">8. Contact Us</h2>
            <p>
              If you have questions or concerns about this Privacy Policy, please contact us at:
            </p>
            <ul className="list-none pl-0 mt-2">
              <li>Email: <strong>support@luxeshoes.com</strong></li>
              <li>Phone: <strong>+92 31179 08741</strong></li>
              <li>Hours: Monday to Saturday, 10 AM – 6 PM</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
