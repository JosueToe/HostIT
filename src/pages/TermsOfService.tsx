import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const TermsOfService = () => {
  return (
    <div className="min-h-screen relative bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900">
      <Header />
      
      <div className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="bg-white/10 backdrop-blur-md rounded-3xl p-8 md:p-12 border border-white/20 shadow-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4" style={{ fontFamily: 'Inter, sans-serif' }}>
              Terms of Service
            </h1>
            <p className="text-gray-300 mb-8 text-sm">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">1. Service Agreement</h2>
                <p>
                  These Terms of Service ("Terms") govern your access to and use of Host-IT's website hosting, web development, 
                  and related services. By using our Services, you agree to comply with and be bound by these Terms.
                </p>
                <p>
                  Host-IT ("we", "us", "our") provides premium website hosting, development, and management services. Your use 
                  of our Services constitutes acceptance of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">2. Service Provision</h2>
                <p>
                  <strong>2.1 Hosting Services:</strong> We provide website hosting services including server space, bandwidth, 
                  SSL certificates, daily backups, and CDN services. Hosting is provided on a shared or dedicated server 
                  infrastructure as specified in your subscription plan.
                </p>
                <p>
                  <strong>2.2 Web Development:</strong> Custom web development services include website design, development, 
                  and deployment. Development work is performed according to specifications agreed upon at the time of purchase.
                </p>
                <p>
                  <strong>2.3 Domain Management:</strong> Domain registration, renewal, and management services are provided 
                  through third-party registrars. We act as your agent in managing domain registrations.
                </p>
                <p>
                  <strong>2.4 Support Services:</strong> Technical support is provided via email 24/7. Support includes 
                  assistance with hosting issues, technical problems, and general inquiries related to our Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">3. Account Registration and Security</h2>
                <p>
                  <strong>3.1 Account Creation:</strong> To use our Services, you must create an account and provide accurate, 
                  complete, and current information. You are responsible for maintaining and updating your account information.
                </p>
                <p>
                  <strong>3.2 Account Security:</strong> You are solely responsible for maintaining the confidentiality of 
                  your account credentials and for all activities that occur under your account. You must immediately notify 
                  us of any unauthorized use of your account.
                </p>
                <p>
                  <strong>3.3 Account Eligibility:</strong> You must be at least 18 years old or have parental consent to 
                  use our Services. By using our Services, you represent and warrant that you meet this requirement.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">4. Acceptable Use Policy</h2>
                <p>
                  You agree to use our Services only for lawful purposes and in accordance with these Terms. You agree not to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Violate any applicable federal, state, local, or international law or regulation</li>
                  <li>Transmit any material that is abusive, harassing, defamatory, obscene, or otherwise objectionable</li>
                  <li>Infringe upon the intellectual property rights of others</li>
                  <li>Transmit viruses, malware, or other harmful computer code</li>
                  <li>Engage in spamming, phishing, or other fraudulent activities</li>
                  <li>Attempt to gain unauthorized access to our systems or networks</li>
                  <li>Interfere with or disrupt the integrity or performance of our Services</li>
                  <li>Use our Services to host content that promotes illegal activities, hate speech, or violence</li>
                  <li>Exceed resource limits or attempt to circumvent security measures</li>
                  <li>Use automated systems to access our Services without authorization</li>
                </ul>
                <p className="mt-4">
                  Violation of this Acceptable Use Policy may result in immediate suspension or termination of your account 
                  without refund.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">5. Content and Intellectual Property</h2>
                <p>
                  <strong>5.1 Your Content:</strong> You retain all ownership rights to content you upload, store, or 
                  transmit through our Services. You are solely responsible for your content and warrant that you have all 
                  necessary rights to use and distribute such content.
                </p>
                <p>
                  <strong>5.2 License to Host:</strong> By using our Services, you grant us a worldwide, non-exclusive, 
                  royalty-free license to use, store, reproduce, and transmit your content solely for the purpose of providing 
                  and improving our Services.
                </p>
                <p>
                  <strong>5.3 Our Intellectual Property:</strong> All Services, software, designs, trademarks, logos, and 
                  other materials provided by Host-IT are our exclusive property and are protected by copyright, trademark, 
                  and other intellectual property laws.
                </p>
                <p>
                  <strong>5.4 DMCA Compliance:</strong> We respect intellectual property rights and comply with the Digital 
                  Millennium Copyright Act (DMCA). If you believe your copyright has been infringed, please contact us with 
                  a DMCA takedown notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">6. Payment and Billing</h2>
                <p>
                  <strong>6.1 Payment Methods:</strong> Payments are processed through Stripe. We accept major credit cards 
                  and other payment methods supported by Stripe.
                </p>
                <p>
                  <strong>6.2 Billing Cycle:</strong> Services are billed annually in advance. Your subscription will 
                  automatically renew unless cancelled in accordance with our cancellation policy.
                </p>
                <p>
                  <strong>6.3 Payment Authorization:</strong> By providing payment information, you authorize us to charge 
                  your payment method for all fees associated with your subscription.
                </p>
                <p>
                  <strong>6.4 Taxes:</strong> You are responsible for all applicable taxes, fees, and charges imposed by 
                  any governmental authority related to your use of our Services.
                </p>
                <p>
                  <strong>6.5 Refunds:</strong> Refund requests must be submitted within 30 days of purchase. Refunds are 
                  subject to our refund policy as detailed in our Terms and Conditions.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">7. Service Availability and Maintenance</h2>
                <p>
                  <strong>7.1 Uptime:</strong> We strive to maintain 99.9% uptime for our hosting services. However, we do 
                  not guarantee uninterrupted or error-free operation.
                </p>
                <p>
                  <strong>7.2 Scheduled Maintenance:</strong> We may perform scheduled maintenance that may temporarily 
                  interrupt Services. We will provide advance notice when possible.
                </p>
                <p>
                  <strong>7.3 Emergency Maintenance:</strong> We may perform emergency maintenance without prior notice to 
                  address security issues or critical problems.
                </p>
                <p>
                  <strong>7.4 Force Majeure:</strong> We are not liable for any failure to perform our obligations due to 
                  circumstances beyond our reasonable control, including natural disasters, war, terrorism, or internet outages.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">8. Data and Privacy</h2>
                <p>
                  <strong>8.1 Data Storage:</strong> Your data is stored on secure servers. While we implement industry-standard 
                  security measures, you are responsible for backing up your data.
                </p>
                <p>
                  <strong>8.2 Privacy:</strong> Our collection and use of your personal information is governed by our 
                  Privacy Policy, which is incorporated into these Terms by reference.
                </p>
                <p>
                  <strong>8.3 Data Retention:</strong> We may retain your data for a reasonable period after account 
                  termination for legal and business purposes. You may request deletion of your data subject to applicable 
                  legal requirements.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">9. Third-Party Services</h2>
                <p>
                  Our Services may integrate with or use third-party services, including but not limited to Stripe for 
                  payments, domain registrars, and CDN providers. Your use of third-party services is subject to their 
                  respective terms and conditions. We are not responsible for the availability, accuracy, or reliability of 
                  third-party services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">10. Limitation of Liability</h2>
                <p>
                  TO THE MAXIMUM EXTENT PERMITTED BY LAW, HOST-IT SHALL NOT BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, 
                  CONSEQUENTIAL, OR PUNITIVE DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR BUSINESS 
                  OPPORTUNITIES, ARISING OUT OF OR RELATED TO YOUR USE OF OUR SERVICES.
                </p>
                <p>
                  Our total liability for any claims shall not exceed the amount you paid to us in the twelve (12) months 
                  preceding the claim. Some jurisdictions do not allow the exclusion or limitation of certain damages, so 
                  some of the above limitations may not apply to you.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">11. Indemnification</h2>
                <p>
                  You agree to indemnify and hold harmless Host-IT, its affiliates, officers, directors, employees, and 
                  agents from any claims, damages, losses, liabilities, and expenses (including reasonable attorneys' fees) 
                  arising out of:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Your use of our Services</li>
                  <li>Your violation of these Terms</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Your content or any materials you provide</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">12. Termination</h2>
                <p>
                  <strong>12.1 Termination by You:</strong> You may cancel your subscription at any time through your account 
                  settings or by contacting us. Cancellation takes effect at the end of your current billing period.
                </p>
                <p>
                  <strong>12.2 Termination by Us:</strong> We may suspend or terminate your account immediately if you 
                  violate these Terms, engage in illegal activity, or fail to pay fees when due.
                </p>
                <p>
                  <strong>12.3 Effect of Termination:</strong> Upon termination, your access to Services will cease. We may 
                  delete your account and data after a reasonable retention period. You are responsible for backing up your 
                  data before termination.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">13. Changes to Terms</h2>
                <p>
                  We reserve the right to modify these Terms at any time. Material changes will be communicated via email 
                  or through our website at least 30 days before they take effect. Your continued use of Services after 
                  such changes constitutes acceptance of the modified Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">14. Governing Law</h2>
                <p>
                  These Terms shall be governed by and construed in accordance with the laws of the State of Florida, United 
                  States. Any disputes shall be resolved through binding arbitration in Miami-Dade County, Florida, in 
                  accordance with the rules of the American Arbitration Association.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">15. Contact Information</h2>
                <p>
                  For questions about these Terms of Service, please contact us:
                </p>
                <p className="mt-2">
                  <strong>Host-IT</strong><br />
                  Email: <a href="mailto:contact@host-it.app" className="text-blue-400 hover:text-blue-300 underline">contact@host-it.app</a><br />
                  Phone: <a href="tel:+17863335331" className="text-blue-400 hover:text-blue-300 underline">786-333-5331</a>
                </p>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-white/20">
              <Link 
                to="/" 
                className="text-blue-400 hover:text-blue-300 underline inline-flex items-center gap-2"
              >
                ← Back to Home
              </Link>
            </div>
          </motion.div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default TermsOfService;

