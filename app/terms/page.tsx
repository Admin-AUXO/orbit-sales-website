import { PageShell } from "@/components/layout/PageShell";
import { PageHeader } from "@/components/layout/PageHeader";
import { LegalSection } from "@/components/sections/LegalSection";
import { pageMetadata } from "@/lib/seo";

export const metadata = pageMetadata(
  "Terms & Conditions",
  "The terms you agree to when you use Neurostellar Orbit, including the health disclaimer and cohort terms.",
  "/terms",
);

export default function TermsPage() {
  return (
    <PageShell>
      <PageHeader
        eyebrow="The agreement"
        title="Terms & Conditions"
        description="Last updated: 20 June 2026"
      />
      <article className="mx-auto max-w-3xl space-y-10 px-6 py-16 lg:px-8 md:py-24">
        <LegalSection title="Welcome">
          <p>
            Welcome to Neurostellar Orbit, a product by Neurostellar Private
            Limited. By accessing or using our services — our website, forms,
            wearable devices, mobile apps, or any other features — you agree to
            the following terms.
          </p>
        </LegalSection>

        <LegalSection title="1. Acceptance of terms">
          <p>By signing up, accessing, or using Neurostellar Orbit, you confirm that you have read, understood, and agreed to these Terms & Conditions. If you do not agree, please do not use our services.</p>
        </LegalSection>

        <LegalSection title="2. Eligibility">
          <p>You must be at least 13 years old (or the minimum age in your jurisdiction) to use Neurostellar Orbit. If you are under the required age, use of the product must be supervised or consented to by a legal guardian.</p>
        </LegalSection>

        <LegalSection title="3. User responsibilities">
          <ul>
            <li>Provide accurate, up-to-date information during registration</li>
            <li>Keep your login credentials secure and confidential</li>
            <li>Use Orbit only for personal, non-commercial purposes unless otherwise authorized</li>
            <li>Do not misuse, tamper with, reverse-engineer, or attempt unauthorized access to our software or hardware</li>
          </ul>
        </LegalSection>

        <LegalSection title="4. Health disclaimer">
          <p>Neurostellar Orbit provides wellness and performance insights based on biometric data, but it is not a medical device. It does not diagnose, treat, or prevent any medical condition. For medical concerns, consult a licensed professional.</p>
        </LegalSection>

        <LegalSection title="5. Intellectual property">
          <p>All content, designs, software, and technology associated with Neurostellar Orbit are the property of Neurostellar Private Limited and are protected by applicable intellectual property laws. You may not copy, distribute, or reproduce any part of the platform without permission.</p>
        </LegalSection>

        <LegalSection title="6. Privacy">
          <p>
            Your privacy matters to us. By using the service, you consent to the
            collection and use of data as outlined in our{" "}
            <a href="/privacy-policy">Privacy Policy</a>. We handle your data with
            high standards of confidentiality and security.
          </p>
        </LegalSection>

        <LegalSection title="7. Cohort participation terms">
          <p>By joining a Neurostellar Orbit cohort program, you agree to the following additional terms:</p>
          <ul>
            <li><strong>Participation & payment:</strong> You are enrolling in a paid cohort program and agree to pay the stated fee at enrollment. Neurostellar may revise pricing for future cohorts.</li>
            <li><strong>Cohort duration:</strong> Your access lasts as communicated during payment or onboarding. Extensions or renewals are at your discretion and may involve additional charges.</li>
            <li><strong>Device return & condition:</strong> If a device is issued to you, you agree to return it in original working condition by the return date. You are responsible for any physical or functional damage. In case of loss, theft, or irreparable damage, you agree to bear the full replacement cost.</li>
            <li><strong>Renewal:</strong> You may renew after the initial period. Renewal terms, duration, and fees are provided at the time of renewal.</li>
            <li><strong>Breach of terms:</strong> Failure to return the device, damage to the product, or violation of these terms may result in additional charges or termination of access.</li>
          </ul>
        </LegalSection>

        <LegalSection title="8. Account suspension or termination">
          <p>We may suspend or terminate your access if you violate these terms, misuse the product, or engage in activity that compromises the safety or integrity of our platform.</p>
        </LegalSection>

        <LegalSection title="9. Limitation of liability">
          <p>To the fullest extent permitted by law, Neurostellar is not liable for any indirect, incidental, or consequential damages arising from the use of Orbit. We strive to offer reliable services but do not guarantee uninterrupted functionality at all times.</p>
        </LegalSection>

        <LegalSection title="10. Updates to terms">
          <p>These Terms & Conditions may be updated from time to time. We will notify you of major changes, and your continued use of Orbit constitutes acceptance of the updated terms.</p>
        </LegalSection>

        <LegalSection title="11. Governing law">
          <p>These terms are governed by and interpreted in accordance with the laws of India.</p>
        </LegalSection>

        <LegalSection title="12. Contact us">
          <p>
            Neurostellar Private Limited
            <br />
            Email: <a href="mailto:support@neuro-stellar.com">support@neuro-stellar.com</a>
            <br />
            Phone: <a href="tel:+917845216763">+91 78452 16763</a>
          </p>
        </LegalSection>
      </article>
    </PageShell>
  );
}
