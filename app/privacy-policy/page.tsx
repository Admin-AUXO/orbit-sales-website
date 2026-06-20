import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { LegalSection } from "@/components/sections/LegalSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Privacy Policy",
  "How Neurostellar collects, uses, stores, and protects your personal and biometric data.",
  "/privacy-policy",
);

export default function PrivacyPolicyPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="Your data. Your trust."
        title="Privacy Policy"
        description="Last updated: 20 June 2026"
      />
      <article className="mx-auto max-w-3xl space-y-10 px-6 py-16 lg:px-8 md:py-24">
        <LegalSection title="1. Introduction">
          <p>
            At Neurostellar Private Limited, we are committed to protecting your
            privacy. This Privacy Policy explains how we collect, use, store, and
            share your personal information when you interact with us through our
            forms or use our product, Neurostellar Orbit. By using our services,
            you agree to the terms in this policy. This policy works alongside
            our <a href="/terms">Terms of Service</a>.
          </p>
        </LegalSection>

        <LegalSection title="2. Information we collect">
          <h3>A. Personal information</h3>
          <p>When you sign up or express interest in Neurostellar Orbit, we may collect:</p>
          <ul>
            <li>Full name</li>
            <li>Email address</li>
            <li>Phone number (optional)</li>
            <li>Organization or role</li>
            <li>Password or authentication tokens</li>
          </ul>
          <p>While you use our services, we collect account preferences, device details (model, OS, app version), and communication preferences.</p>
          <h3>B. Biometric data from wearable sensors</h3>
          <p>Through Neurostellar Orbit, we may collect biometric signals such as:</p>
          <ul>
            <li>EEG (Electroencephalography)</li>
            <li>PPG (Photoplethysmography)</li>
            <li>Other physiological metrics related to mental and physical fitness</li>
          </ul>
          <p>These are sensitive personal data. We collect and process them only with your <strong>explicit, informed consent</strong>, given before collection begins and recorded at the point of sign-up or device activation. You may withdraw this consent at any time (see &ldquo;Your rights&rdquo;), after which we stop collecting new biometric data and delete or anonymize existing biometric data on request.</p>
          <h3>C. Usage data</h3>
          <ul>
            <li>Device usage patterns</li>
            <li>App interactions</li>
            <li>Session metrics and training logs</li>
            <li>Time-stamped activity and response data</li>
          </ul>
          <h3>D. Feedback data</h3>
          <ul>
            <li>Self-reported mood, sleep quality, or stress levels</li>
            <li>Responses to in-app questions, surveys, or assessments</li>
            <li>Support requests and other direct communications</li>
          </ul>
        </LegalSection>

        <LegalSection title="3. How we use this information">
          <p>We use your data to:</p>
          <ul>
            <li>Track your progress and provide personalized feedback</li>
            <li>Research and develop new features or improvements</li>
            <li>Provide technical support and troubleshoot issues</li>
            <li>Communicate important updates</li>
            <li>Personalize your Neurostellar Orbit experience</li>
            <li>Respond to your inquiries or requests</li>
            <li>Analyze the performance and usability of our platform</li>
            <li>Send relevant offers or updates (with your consent)</li>
            <li>Fulfill legal, safety, or regulatory obligations</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Data sharing">
          <ul>
            <li>No third-party sharing without your explicit consent</li>
            <li>We anonymize all data and use it only in aggregated form for research and insights</li>
            <li>Service providers may access data solely to assist with storage, analytics, or delivery, under strict confidentiality and data-protection agreements</li>
            <li>We never sell your personal information</li>
          </ul>
        </LegalSection>

        <LegalSection title="5. Data security">
          <ul>
            <li>Secure storage with strict access control</li>
            <li>End-to-end encryption in transit and at rest</li>
            <li>Regular audits and security updates</li>
          </ul>
        </LegalSection>

        <LegalSection title="6. Data retention">
          <p>We retain your data only as long as necessary. Lead data is kept while you remain subscribed or until you request deletion. Product data is kept while your account is active, and for anonymized research. You can request deletion of your personal data at any time.</p>
        </LegalSection>

        <LegalSection title="7. Legal basis & consent">
          <p>For users in India, we process personal data under the Digital Personal Data Protection Act, 2023 (DPDP Act), relying primarily on your consent and, where applicable, legitimate uses permitted by law. For users in the European Economic Area and the United Kingdom, we rely on the lawful bases under the GDPR/UK GDPR — your consent (Article 9 explicit consent for biometric data), performance of a contract, and our legitimate interests in operating and improving the product.</p>
          <p>Where processing is based on consent, you may <strong>withdraw your consent at any time</strong> — through the app&rsquo;s privacy settings, the cookie-settings control on this site, or by emailing <a href="mailto:support@neuro-stellar.com">support@neuro-stellar.com</a>. Withdrawal does not affect the lawfulness of processing carried out before withdrawal, and is as easy to do as giving consent.</p>
        </LegalSection>

        <LegalSection title="8. Your rights">
          <p>Subject to applicable law, you have the right to:</p>
          <ul>
            <li>Access, review, and correct or update your personal information</li>
            <li>Request erasure (deletion) of your personal and biometric data</li>
            <li>Withdraw consent for any processing based on consent</li>
            <li>Request a summary or portable copy of the data we hold about you</li>
            <li>Unsubscribe from marketing communications at any time</li>
            <li>Nominate another individual to exercise your rights in the event of death or incapacity (DPDP Act)</li>
            <li>Object to or restrict certain processing, and lodge a complaint with a supervisory authority (GDPR)</li>
          </ul>
          <p>To exercise any right, contact our Grievance Officer (Section 14) or email <a href="mailto:support@neuro-stellar.com">support@neuro-stellar.com</a>. We respond within the timelines required by applicable law.</p>
        </LegalSection>

        <LegalSection title="9. Disclaimer">
          <p>Neurostellar Private Limited is not a covered entity under HIPAA and does not claim HIPAA compliance. We remain committed to protecting user privacy and follow best practices aligned with global standards.</p>
        </LegalSection>

        <LegalSection title="10. Children's privacy">
          <p>Neurostellar Orbit is not intended for children. Consistent with the DPDP Act, we do not knowingly process the personal data of individuals under 18 without verifiable consent from a parent or lawful guardian, and we do not undertake tracking, behavioral monitoring, or targeted advertising directed at children.</p>
        </LegalSection>

        <LegalSection title="11. International data transfer">
          <p>Your data may be processed in India or wherever our secure servers and service providers are located. Where we transfer personal data out of the EEA, UK, or other regulated regions, we apply appropriate safeguards — such as Standard Contractual Clauses and equivalent contractual and technical protections — so your data remains protected to the standard of your home jurisdiction.</p>
        </LegalSection>

        <LegalSection title="12. Cookies & analytics">
          <p>We use cookies and similar technologies to understand how the site is used and to improve it, including privacy-focused analytics. You choose whether to allow analytics cookies through our consent banner, and you can change or withdraw your choice at any time using the cookie-settings control in the site footer. Declining does not affect access to the site.</p>
        </LegalSection>

        <LegalSection title="13. Changes to this policy">
          <p>We may update this Privacy Policy from time to time. We will communicate significant changes by email or in-app notification.</p>
        </LegalSection>

        <LegalSection title="14. Grievance Officer & contact">
          <p>In line with the DPDP Act, we have designated a Grievance Officer to address questions, requests, and complaints about how we handle your personal data. We aim to acknowledge grievances promptly and resolve them within the timelines required by law.</p>
          <p>
            Grievance Officer
            <br />
            Neurostellar Private Limited
            <br />
            Email: <a href="mailto:support@neuro-stellar.com">support@neuro-stellar.com</a>
            <br />
            Phone: <a href="tel:+917845216763">+91 78452 16763</a>
          </p>
          <p>For general privacy questions you may also reach us at the same address. This Privacy Policy is governed by and interpreted in accordance with the laws of India, without prejudice to any mandatory data-protection rights you hold in your country of residence.</p>
        </LegalSection>
      </article>
    </PageShell>
  );
}
