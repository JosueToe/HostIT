import { motion } from "framer-motion";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const PrivacyPolicy = () => {
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
              Privacy Policy
            </h1>
            <p className="text-gray-300 mb-8 text-sm">
              Last Updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>

            <div className="prose prose-invert max-w-none text-gray-300 space-y-6">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">1. Introduction</h2>
                <p>
                  Host-IT ("we", "us", "our") is committed to protecting your privacy. This Privacy Policy explains how we 
                  collect, use, disclose, and safeguard your information when you use our website hosting, web development, 
                  and related services (collectively, the "Services").
                </p>
                <p>
                  By using our Services, you agree to the collection and use of information in accordance with this Privacy 
                  Policy. If you do not agree with our policies and practices, please do not use our Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">2. Information We Collect</h2>
                
                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.1 Information You Provide</h3>
                <p>We collect information that you voluntarily provide to us, including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Account Information:</strong> Name, email address, phone number, billing address, and payment information</li>
                  <li><strong>Contact Information:</strong> Information provided when you contact us for support or inquiries</li>
                  <li><strong>Content:</strong> Website content, files, and data you upload or store through our Services</li>
                  <li><strong>Communication Data:</strong> Correspondence, feedback, and other communications you send to us</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.2 Automatically Collected Information</h3>
                <p>When you use our Services, we automatically collect certain information, including:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Usage Data:</strong> Information about how you access and use our Services, including IP address, browser type, device information, and usage patterns</li>
                  <li><strong>Log Data:</strong> Server logs, error logs, and access logs</li>
                  <li><strong>Cookies and Tracking Technologies:</strong> Information collected through cookies, web beacons, and similar tracking technologies</li>
                  <li><strong>Performance Data:</strong> Information about the performance of our Services and your use of them</li>
                </ul>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">2.3 Information from Third Parties</h3>
                <p>
                  We may receive information about you from third-party services, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Payment Processors:</strong> Stripe provides us with payment transaction information</li>
                  <li><strong>Domain Registrars:</strong> Information related to domain registrations and renewals</li>
                  <li><strong>Analytics Services:</strong> Aggregated usage statistics and analytics data</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">3. How We Use Your Information</h2>
                <p>We use the information we collect for the following purposes:</p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Service Provision:</strong> To provide, maintain, and improve our Services</li>
                  <li><strong>Account Management:</strong> To create and manage your account, process payments, and send service-related communications</li>
                  <li><strong>Customer Support:</strong> To respond to your inquiries, provide technical support, and address issues</li>
                  <li><strong>Communication:</strong> To send you updates, newsletters, marketing communications (with your consent), and important service announcements</li>
                  <li><strong>Security:</strong> To detect, prevent, and address security issues, fraud, and unauthorized access</li>
                  <li><strong>Legal Compliance:</strong> To comply with legal obligations, enforce our terms, and protect our rights</li>
                  <li><strong>Analytics:</strong> To analyze usage patterns, improve our Services, and develop new features</li>
                  <li><strong>Business Operations:</strong> To conduct business operations, including billing, accounting, and internal record keeping</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">4. How We Share Your Information</h2>
                <p>We may share your information in the following circumstances:</p>
                
                <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.1 Service Providers</h3>
                <p>
                  We share information with third-party service providers who perform services on our behalf, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Payment Processing:</strong> Stripe processes payments and handles payment information</li>
                  <li><strong>Hosting Infrastructure:</strong> Cloud hosting providers that host our servers and your data</li>
                  <li><strong>Domain Services:</strong> Domain registrars for domain registration and management</li>
                  <li><strong>Analytics:</strong> Analytics services to help us understand how our Services are used</li>
                  <li><strong>Email Services:</strong> Email service providers for sending communications</li>
                </ul>
                <p>
                  These service providers are contractually obligated to protect your information and use it only for the 
                  purposes we specify.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.2 Legal Requirements</h3>
                <p>
                  We may disclose your information if required by law, regulation, legal process, or governmental request, 
                  or to protect our rights, property, or safety, or that of our users or others.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.3 Business Transfers</h3>
                <p>
                  In the event of a merger, acquisition, or sale of assets, your information may be transferred to the 
                  acquiring entity, subject to the same privacy protections.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">4.4 With Your Consent</h3>
                <p>
                  We may share your information with your consent or at your direction.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">5. Cookies and Tracking Technologies</h2>
                <p>
                  We use cookies and similar tracking technologies to collect and store information about your preferences 
                  and usage patterns. Cookies are small data files stored on your device.
                </p>
                <p>
                  <strong>Types of Cookies We Use:</strong>
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li><strong>Essential Cookies:</strong> Required for the Services to function properly</li>
                  <li><strong>Analytics Cookies:</strong> Help us understand how visitors use our Services</li>
                  <li><strong>Preference Cookies:</strong> Remember your preferences and settings</li>
                  <li><strong>Marketing Cookies:</strong> Used to deliver relevant advertisements (with your consent)</li>
                </ul>
                <p className="mt-4">
                  You can control cookies through your browser settings. However, disabling certain cookies may affect 
                  the functionality of our Services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">6. Data Security</h2>
                <p>
                  We implement industry-standard security measures to protect your information, including:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-2">
                  <li>Encryption of data in transit using SSL/TLS</li>
                  <li>Secure server infrastructure with firewalls and intrusion detection</li>
                  <li>Regular security audits and vulnerability assessments</li>
                  <li>Access controls and authentication measures</li>
                  <li>Regular backups and disaster recovery procedures</li>
                </ul>
                <p className="mt-4">
                  However, no method of transmission over the internet or electronic storage is 100% secure. While we 
                  strive to protect your information, we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">7. Data Retention</h2>
                <p>
                  We retain your information for as long as necessary to provide our Services, comply with legal obligations, 
                  resolve disputes, and enforce our agreements. When information is no longer needed, we will delete or 
                  anonymize it in accordance with our data retention policies.
                </p>
                <p>
                  Account information is retained while your account is active and for a reasonable period after account 
                  closure for legal and business purposes.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">8. Your Privacy Rights</h2>
                <p>Depending on your location, you may have certain rights regarding your personal information:</p>
                
                <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.1 Access and Portability</h3>
                <p>
                  You have the right to access and receive a copy of your personal information in a portable format.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.2 Correction</h3>
                <p>
                  You have the right to request correction of inaccurate or incomplete personal information.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.3 Deletion</h3>
                <p>
                  You have the right to request deletion of your personal information, subject to legal and business 
                  requirements.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.4 Opt-Out</h3>
                <p>
                  You can opt-out of marketing communications by clicking the unsubscribe link in our emails or contacting 
                  us directly.
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.5 California Privacy Rights</h3>
                <p>
                  If you are a California resident, you have additional rights under the California Consumer Privacy Act 
                  (CCPA), including the right to know what personal information we collect, the right to delete personal 
                  information, and the right to opt-out of the sale of personal information (we do not sell personal 
                  information).
                </p>

                <h3 className="text-xl font-semibold text-white mb-3 mt-6">8.6 European Privacy Rights</h3>
                <p>
                  If you are located in the European Economic Area (EEA), you have rights under the General Data Protection 
                  Regulation (GDPR), including the right to access, rectify, erase, restrict processing, data portability, 
                  and object to processing of your personal information.
                </p>

                <p className="mt-4">
                  To exercise these rights, please contact us at <a href="mailto:contact@host-it.app" className="text-blue-400 hover:text-blue-300 underline">contact@host-it.app</a>.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">9. Children's Privacy</h2>
                <p>
                  Our Services are not intended for individuals under the age of 18. We do not knowingly collect personal 
                  information from children. If we become aware that we have collected personal information from a child 
                  without parental consent, we will take steps to delete such information.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">10. International Data Transfers</h2>
                <p>
                  Your information may be transferred to and processed in countries other than your country of residence. 
                  These countries may have different data protection laws. By using our Services, you consent to the 
                  transfer of your information to these countries.
                </p>
                <p>
                  We take appropriate safeguards to ensure your information receives adequate protection when transferred 
                  internationally.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">11. Third-Party Links</h2>
                <p>
                  Our Services may contain links to third-party websites or services. We are not responsible for the 
                  privacy practices of these third parties. We encourage you to review the privacy policies of any 
                  third-party sites you visit.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">12. Changes to This Privacy Policy</h2>
                <p>
                  We may update this Privacy Policy from time to time. We will notify you of material changes by posting 
                  the updated policy on our website and updating the "Last Updated" date. We may also notify you via email 
                  for significant changes.
                </p>
                <p>
                  Your continued use of our Services after such changes constitutes acceptance of the updated Privacy Policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4 mt-8">13. Contact Us</h2>
                <p>
                  If you have questions, concerns, or requests regarding this Privacy Policy or our privacy practices, 
                  please contact us:
                </p>
                <p className="mt-2">
                  <strong>Host-IT</strong><br />
                  Email: <a href="mailto:contact@host-it.app" className="text-blue-400 hover:text-blue-300 underline">contact@host-it.app</a><br />
                  Phone: <a href="tel:+17863335331" className="text-blue-400 hover:text-blue-300 underline">786-333-5331</a>
                </p>
                <p className="mt-4">
                  For privacy-related requests, please include "Privacy Request" in the subject line of your email.
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

export default PrivacyPolicy;


