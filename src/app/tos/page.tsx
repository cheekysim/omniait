export default function TermsOfService() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12 sm:px-8 lg:px-10">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Terms of Service
      </h1>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1.1 Introduction</h2>
        <p>
          These Terms of Service govern your use of the Omnia Information
          Technology website and any related services provided by Omnia
          Information Technology. By accessing or using our website, you agree
          to be bound by these terms. If you do not agree, please refrain from
          using our services.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1.2 Use of the Website</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            You agree to use the website only for lawful purposes and in a way
            that does not infringe the rights of others.
          </li>
          <li>
            Unauthorised use, including but not limited to scraping, hacking, or
            disrupting the website, is strictly prohibited.
          </li>
          <li>
            We reserve the right to suspend or terminate access to the website
            at any time without prior notice.
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1.3 Intellectual Property</h2>
        <p>
          All content, design, code, and materials on this website are the
          intellectual property of Omnia Information Technology unless otherwise
          stated. You may not reproduce, distribute, or modify any content
          without our prior written consent.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1.4 Client Responsibilities</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Clients engaging our web development services agree to provide
            accurate and timely information required for project delivery.
          </li>
          <li>
            Clients are responsible for reviewing and approving deliverables
            within agreed timelines.
          </li>
          <li>
            Payment terms are as specified in the project contract and are due
            in accordance with the agreed schedule.
          </li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1.5 Limitation of Liability</h2>
        <p>
          Omnia Information Technology shall not be liable for any indirect,
          incidental, or consequential damages arising from the use of our
          website or services, including but not limited to loss of data, loss
          of revenue, or interruption of business. Our total liability is
          limited to the amount paid by you for the specific service giving rise
          to the claim.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1.6 Governing Law</h2>
        <p>
          These terms are governed by and construed in accordance with the laws
          of England and Wales. Any disputes arising under these terms shall
          be subject to the exclusive jurisdiction of the courts of England and
          Wales.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1.7 Changes to Terms</h2>
        <p>
          We reserve the right to update these Terms of Service at any time.
          Changes will be posted on this page and take effect immediately upon
          publication. We encourage you to review this page periodically.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1.8 Contact</h2>
        <p>
          For questions about these terms, please contact us at{" "}
          <a
            href="mailto:euan@omniait.co.uk"
            className="underline"
          >
            euan@omniait.co.uk
          </a>
          .
        </p>
      </section>
    </main>
  );
}