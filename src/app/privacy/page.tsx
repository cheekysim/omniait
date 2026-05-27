export default function Privacy() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-12 sm:px-8 lg:px-10">
      <h1 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        Privacy Policy
      </h1>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1.1 Overview</h2>
        <p>
          Omnia Information Technology is committed to protecting the privacy of
          individuals whose personal and financial data we handle. This policy
          explains what data we collect, how it is used, and the rights
          individuals have over their data.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1.2 Data We Collect</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Financial account information obtained via Plaid (account numbers,
            balances, transaction history)
          </li>
          <li>
            Identity information required for account linking (name, email
            address)
          </li>
          <li>Usage data from internal application sessions</li>
        </ul>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1.3 How We Use Data</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            To facilitate bank account connectivity and financial data retrieval
            via Plaid
          </li>
          <li>
            To provide core application services to authorised internal users
          </li>
          <li>To meet legal and regulatory obligations</li>
        </ul>
        <p>
          We do not sell, rent, or share personal data with third parties for
          marketing purposes.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">
          1.4 Data Storage &amp; Location
        </h2>
        <p>
          Financial data retrieved via Plaid is processed and stored on
          internal, locally hosted infrastructure. It is not transmitted to or
          stored on public cloud services.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1.5 Retention</h2>
        <p>
          Personal and financial data is retained only for as long as necessary
          to fulfil the stated purpose. See the Data Deletion &amp; Retention
          Policy (Section 2) for specific retention periods.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1.6 Individual Rights</h2>
        <ul className="list-disc space-y-2 pl-6">
          <li>
            Right to access: individuals may request a copy of data held about
            them
          </li>
          <li>
            Right to deletion: individuals may request erasure of their data
          </li>
          <li>
            Right to correction: individuals may request correction of
            inaccurate data
          </li>
        </ul>
        <p>
          Requests should be directed to the designated data owner at Omnia
          Information Technology.
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1.7 Third-Party Services</h2>
        <p>
          We use Plaid to access financial data on behalf of authorised users.
          Plaid&apos;s own privacy policy governs their data handling practices
          (
          <a
            href="https://plaid.com/legal/"
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            https://plaid.com/legal/
          </a>
          ).
        </p>
      </section>

      <section className="mt-8 space-y-4">
        <h2 className="text-xl font-semibold">1.8 Policy Review</h2>
        <p>
          This policy is reviewed annually or following any significant change
          to data practices. Next review: May 2027.
        </p>
      </section>
    </main>
  );
}
