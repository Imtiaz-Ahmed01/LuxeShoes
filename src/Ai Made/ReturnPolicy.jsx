import React from 'react';

const ReturnPolicy = () => {
  return (
    <div className="bg-white text-gray-800 px-4 sm:px-8 lg:px-20 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-blue-700 mb-8 text-center">Return & Refund Policy</h1>

        <section className="space-y-6 text-[17px] leading-relaxed">
          <p>
            At <strong>LuxeShoes</strong>, your satisfaction is our top priority. If you're not completely happy with your purchase, we're here to help.
            Please read the following return and refund policy carefully.
          </p>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">1. Eligibility for Returns</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Returns are accepted within <strong>7 days</strong> of delivery.</li>
              <li>Items must be unused, unworn, and in original packaging with all tags attached.</li>
              <li>Proof of purchase (invoice or order confirmation email) is required.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">2. Items Not Eligible for Return</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Items marked as final sale or clearance.</li>
              <li>Socks or innerwear for hygiene reasons.</li>
              <li>Customized or personalized products.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">3. Return Process</h2>
            <ul className="list-disc pl-5 space-y-1">
              <li>Email us at <strong>returns@luxeshoes.com</strong> with your order number and reason for return.</li>
              <li>Our team will review and arrange a pickup if eligible.</li>
              <li>Pack the item securely to avoid any damage in transit.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">4. Refunds</h2>
            <p>
              Once we receive and inspect your returned item, we will notify you of the approval or rejection of your refund. If approved:
            </p>
            <ul className="list-disc pl-5 space-y-1 mt-2">
              <li>Refunds are processed within <strong>5–7 business days</strong>.</li>
              <li>Amount is credited back to the original payment method.</li>
              <li>In case of COD orders, refunds will be processed to your bank account via EasyPaisa, Bank Account, PayPak, UPI or NEFT.</li>
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">5. Exchanges</h2>
            <p>
              We offer free exchanges for size or style changes within 7 days of delivery. Reach out to our team, and we’ll guide you through the process.
            </p>
          </div>

          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-2">6. Contact Us</h2>
            <p>
              For returns, exchanges, or refund-related queries, please contact us at:
            </p>
            <ul className="list-none pl-0 mt-2">
              <li>Email: <strong>returns@luxeshoes.com</strong></li>
              <li>Phone: <strong>+92 31179 08741</strong></li>
              <li>Support Hours: Monday to Saturday, 10 AM – 6 PM</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default ReturnPolicy;
