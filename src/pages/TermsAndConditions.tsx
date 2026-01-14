import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const TermsAndConditions = () => {
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
              Terms and Conditions
            </h1>
            <p className="text-gray-300 mb-8 text-sm">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">1. Acceptance of Terms</h2>
                <p>
                  By accessing and using Host-IT services, including but not limited to website hosting, web development, 
                  domain management, and related services (collectively, the "Services"), you agree to be bound by these 
                  Terms and Conditions. If you do not agree to these terms, please do not use our Services.
                </p>
                <p>
                  These Terms and Conditions constitute a legally binding agreement between you ("Client", "User", or "You") 
                  and Host-IT ("Company", "We", "Us", or "Our").
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">2. Service Description</h2>
                <p>
                  Host-IT provides premium website hosting, web development, domain registration and management, SSL certificates, 
                  daily backups, content delivery network (CDN) services, email hosting, and 24/7 technical support. Services 
                  are provided on an annual subscription basis unless otherwise specified.
                </p>
                <p>
                  We reserve the right to modify, suspend, or discontinue any aspect of our Services at any time with or without 
                  notice. We will make reasonable efforts to notify clients of significant changes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">3. Payment Terms</h2>
                <p>
                  <strong>3.1 Subscription Fees:</strong> All Services are provided on a subscription basis. Fees are charged 
                  annually in advance unless otherwise specified. Payment is processed through Stripe, our third-party payment 
                  processor.
                </p>
                <p>
                  <strong>3.2 Payment Authorization:</strong> By providing payment information and completing a purchase through 
                  our Stripe payment links, you authorize Host-IT to charge the specified amount to your chosen payment method.
                </p>
                <p>
                  <strong>3.3 Automatic Renewal:</strong> Subscriptions automatically renew at the end of each billing period 
                  unless cancelled in accordance with our cancellation policy. You will be charged the then-current subscription 
                  fee for the renewal period.
                </p>
                <p>
                  <strong>3.4 Price Changes:</strong> We reserve the right to modify our pricing at any time. Price changes will 
                  not affect your current subscription period but will apply to subsequent renewal periods. We will provide 
                  at least 30 days' notice of any price increases.
                </p>
                <p>
                  <strong>3.5 Failed Payments:</strong> If payment fails, we will attempt to process the payment again. 
                  Continued payment failures may result in suspension or termination of Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">4. Refund and Cancellation Policy</h2>
                <p>
                  <strong>4.1 Refund Policy:</strong> Refunds are available within 30 days of the initial purchase date, 
                  provided that Services have not been substantially utilized. Refund requests must be submitted in writing 
                  to contact@host-it.app.
                </p>
                <p>
                  <strong>4.2 Cancellation:</strong> You may cancel your subscription at any time. Cancellation must be 
                  requested at least 7 days before your next billing date to avoid charges for the upcoming period. 
                  Cancellation does not entitle you to a refund for the current billing period.
                </p>
                <p>
                  <strong>4.3 Service Termination:</strong> Upon cancellation or termination, your access to Services will 
                  continue until the end of your current billing period. After termination, we may delete your data and 
                  content. You are responsible for backing up your data before cancellation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">5. Service Level Agreement</h2>
                <p>
                  <strong>5.1 Uptime Guarantee:</strong> We strive to maintain 99.9% uptime for hosting services. This 
                  excludes scheduled maintenance, which we will notify you about in advance when possible.
                </p>
                <p>
                  <strong>5.2 Support:</strong> We provide 24/7 technical support via email. Response times may vary based 
                  on the nature and urgency of the request.
                </p>
                <p>
                  <strong>5.3 Service Availability:</strong> While we make every effort to ensure Services are available, 
                  we do not guarantee uninterrupted or error-free operation. Services may be temporarily unavailable due to 
                  maintenance, updates, or circumstances beyond our control.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">6. User Responsibilities</h2>
                <p>
                  <strong>6.1 Account Security:</strong> You are responsible for maintaining the confidentiality of your 
                  account credentials and for all activities that occur under your account.
                </p>
                <p>
                  <strong>6.2 Content:</strong> You are solely responsible for all content, data, and materials uploaded, 
                  stored, or transmitted through our Services. You warrant that you have all necessary rights and licenses 
                  to use such content.
                </p>
                <p>
                  <strong>6.3 Prohibited Uses:</strong> You agree not to use our Services for any illegal, harmful, or 
                  unauthorized purpose, including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Violating any applicable laws or regulations</li>
                  <li>Infringing on intellectual property rights</li>
                  <li>Transmitting malware, viruses, or harmful code</li>
                  <li>Spamming, phishing, or other fraudulent activities</li>
                  <li>Hosting content that is defamatory, obscene, or violates privacy rights</li>
                  <li>Overloading or disrupting our systems</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">7. Intellectual Property</h2>
                <p>
                  <strong>7.1 Your Content:</strong> You retain all ownership rights to your content. By using our Services, 
                  you grant us a limited, non-exclusive license to use, store, and transmit your content solely for the 
                  purpose of providing Services.
                </p>
                <p>
                  <strong>7.2 Our Intellectual Property:</strong> All Services, software, designs, logos, and other 
                  materials provided by Host-IT are protected by intellectual property laws and remain our exclusive property.
                </p>
                <p>
                  <strong>7.3 Third-Party Content:</strong> Our Services may include third-party software, tools, or content. 
                  Such materials are subject to their respective licenses and terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">8. Limitation of Liability</h2>
                <p>
                  <strong>8.1 Disclaimer:</strong> TO THE MAXIMUM EXTENT PERMITTED BY LAW, OUR SERVICES ARE PROVIDED "AS IS" 
                  AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED 
                  TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, OR NON-INFRINGEMENT.
                </p>
                <p>
                  <strong>8.2 Limitation:</strong> IN NO EVENT SHALL HOST-IT, ITS AFFILIATES, OR THEIR RESPECTIVE OFFICERS, 
                  DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE 
                  DAMAGES, INCLUDING BUT NOT LIMITED TO LOSS OF PROFITS, DATA, OR USE, ARISING OUT OF OR RELATED TO YOUR USE 
                  OF OUR SERVICES.
                </p>
                <p>
                  <strong>8.3 Maximum Liability:</strong> Our total liability for any claims arising from or related to 
                  these Terms or our Services shall not exceed the amount you paid to us in the twelve (12) months preceding 
                  the claim.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">9. Indemnification</h2>
                <p>
                  You agree to indemnify, defend, and hold harmless Host-IT, its affiliates, and their respective officers, 
                  directors, employees, and agents from and against any and all claims, damages, losses, liabilities, costs, 
                  and expenses (including reasonable attorneys' fees) arising out of or related to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Your use of our Services</li>
                  <li>Your violation of these Terms and Conditions</li>
                  <li>Your violation of any rights of another party</li>
                  <li>Your content or any materials you provide</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">10. Data Backup and Loss</h2>
                <p>
                  While we perform daily automated backups, you are responsible for maintaining your own backups of important 
                  data. We are not liable for any loss or corruption of data, files, or content. We recommend that you 
                  regularly backup your data independently.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">11. Termination</h2>
                <p>
                  <strong>11.1 By You:</strong> You may terminate your subscription at any time as described in Section 4.
                </p>
                <p>
                  <strong>11.2 By Us:</strong> We may suspend or terminate your access to Services immediately, without 
                  prior notice, if you violate these Terms, engage in fraudulent or illegal activity, or fail to pay fees 
                  when due.
                </p>
                <p>
                  <strong>11.3 Effect of Termination:</strong> Upon termination, your right to use Services immediately 
                  ceases. We may delete your account, data, and content after a reasonable retention period.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">12. Modifications to Terms</h2>
                <p>
                  We reserve the right to modify these Terms and Conditions at any time. Material changes will be communicated 
                  via email or through our website at least 30 days before they take effect. Your continued use of Services 
                  after such modifications constitutes acceptance of the updated Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">13. Governing Law and Dispute Resolution</h2>
                <p>
                  <strong>13.1 Governing Law:</strong> These Terms shall be governed by and construed in accordance with the 
                  laws of the State of Florida, United States, without regard to its conflict of law provisions.
                </p>
                <p>
                  <strong>13.2 Dispute Resolution:</strong> Any disputes arising out of or relating to these Terms or our 
                  Services shall be resolved through binding arbitration in accordance with the rules of the American Arbitration 
                  Association, except where prohibited by law. Arbitration shall take place in Miami-Dade County, Florida.
                </p>
                <p>
                  <strong>13.3 Class Action Waiver:</strong> You agree that any disputes will be resolved individually and 
                  not as part of a class action or consolidated proceeding.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">14. Severability</h2>
                <p>
                  If any provision of these Terms is found to be unenforceable or invalid, that provision shall be limited 
                  or eliminated to the minimum extent necessary, and the remaining provisions shall remain in full force and 
                  effect.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">15. Entire Agreement</h2>
                <p>
                  These Terms and Conditions, together with our Privacy Policy and Terms of Service, constitute the entire 
                  agreement between you and Host-IT regarding the use of our Services and supersede all prior agreements and 
                  understandings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">16. Contact Information</h2>
                <p>
                  If you have any questions about these Terms and Conditions, please contact us at:
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

export default TermsAndConditions;


