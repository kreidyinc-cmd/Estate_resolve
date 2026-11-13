import Link from "next/link";
import { SolicitorEnquiryForm } from "@/app/components/SolicitorEnquiryForm";
import { PageHero } from "@/app/components/PageHero";
import { buildMetadata } from "@/app/lib/seo";

export const metadata = buildMetadata({
  title: "Asset Search Services for Solicitors",
  description:
    "Professional financial asset and liability search support for UK solicitors and estate executors. Explore service options, reporting and enquiries.",
  path: "/solicitors",
});

const supportPoints = [
  "Financial records are incomplete, outdated or spread across several addresses.",
  "The deceased may have held accounts, pensions or policies that are unfamiliar to the family.",
  "The estate needs liability-related enquiries alongside asset tracing.",
  "Overseas connections or business interests need a clearly defined search scope.",
  "The firm needs a consolidated record of enquiries, responses and outstanding questions.",
] as const;

const serviceOptions = [
  {
    ctaHref: "/start-a-case?service=standard_estate_search",
    ctaLabel: "Start this search",
    description:
      "For straightforward UK estates where the executor or solicitor requires a structured search across banks, building societies, insurers, pension providers, investment institutions, dormant assets and unclaimed court funds.",
    price: "£175",
    title: "1. Standard Estate Search",
  },
  {
    ctaHref: "/start-a-case?service=asset_liability_search",
    ctaLabel: "Start this search",
    description:
      "Includes everything within the Standard Estate Search together with searches for potential liabilities and financial exposures.",
    details: [
      "County Court Judgments (CCJs)",
      "Insolvency records",
      "Bankruptcy records",
      "Office of the Public Guardian (OPG) checks",
      "Credit bureau and credit reference data where available and appropriate",
      "Other publicly accessible insolvency and liability registers",
      "Company directorships",
    ],
    price: "£210",
    title: "2. Asset & Liability Search",
  },
  {
    ctaHref: "/start-a-case?service=international_estate_search",
    ctaLabel: "Start this search",
    description:
      "Includes all elements of the Standard Estate Search and Asset & Liability Search, together with enquiries relating to overseas assets and financial interests.",
    details: [
      "United Kingdom",
      "United States",
      "Canada",
      "Australia",
      "France",
      "New Zealand",
    ],
    note: "Additional jurisdictions may be considered on request.",
    price: "£350",
    title: "3. International Estate Search",
  },
  {
    ctaHref: "#professional-enquiry",
    ctaLabel: "Request a scoped quote",
    description:
      "An individually scoped search package for larger, higher-value or more complex estates, including enhanced research for cross-border and specialist matters.",
    details: [
      "Multiple asset classes",
      "Historic investments",
      "Business interests and directorships",
      "Private company shareholdings",
      "Extensive pension arrangements",
      "Insurance portfolios",
      "Trust interests",
      "Cross-border assets and financial relationships",
      "Complex family or beneficiary structures",
    ],
    note: "Fee on demand, individually scoped according to the jurisdiction, complexity of the estate and the nature of the enquiries required.",
    price: "Fee on demand",
    title: "4. High Net Worth & Bespoke International Estate Search",
  },
] as const;

const comparisonRows = [
  ["Banks & Building Societies", "✓", "✓", "✓"],
  ["Pension Providers", "✓", "✓", "✓"],
  ["Life Insurance Providers", "✓", "✓", "✓"],
  ["Investment Institutions", "✓", "✓", "✓"],
  ["Dormant Assets", "✓", "✓", "✓"],
  ["Unclaimed Court Funds", "✓", "✓", "✓"],
  ["Share Registrars", "", "✓", "✓"],
  ["Company Directorships", "", "✓", "✓"],
  ["County Court Judgments (CCJs)", "", "✓", "✓"],
  ["Bankruptcy Records", "", "✓", "✓"],
  ["Insolvency Records", "", "✓", "✓"],
  ["Office of the Public Guardian (OPG) Checks", "", "✓", "✓"],
  ["Publicly Available Liability Registers", "", "✓", "✓"],
  ["Identity Trace & Address History Research", "", "✓", "✓"],
  ["United States", "", "", "✓"],
  ["Canada", "", "", "✓"],
  ["Australia", "", "", "✓"],
  ["France", "", "", "✓"],
  ["New Zealand", "", "", "✓"],
] as const;

const professionalFaqs = [
  {
    question: "Can a solicitor instruct a search on behalf of an executor?",
    answer:
      "Yes, where the solicitor has appropriate authority to act for the estate. The instruction and supporting documents must establish that authority before enquiries begin. Being a beneficiary or relative does not, by itself, establish authority to instruct a search.",
  },
  {
    question: "Can we enquire before a grant has been issued?",
    answer:
      "You can discuss the service before a grant is available. Whether particular enquiries can proceed depends on the estate's circumstances, the evidence of authority and the requirements of each institution. A search does not remove a provider's requirements for releasing information or funds.",
  },
  {
    question: "Do probate asset searches include liabilities?",
    answer:
      "The Asset & Liability Search adds the listed liability-related checks to the Standard Estate Search. The International Estate Search includes those elements as well. A register entry or possible match needs further investigation; a search is not a complete schedule of debts and does not establish the amount owed.",
  },
  {
    question: "Will the report identify every asset or confirm entitlement?",
    answer:
      "No. Findings depend on the selected package, available records, identifying information and institution responses. A possible match is not proof of ownership, a date-of-death valuation or confirmation that money is payable to the estate. No match does not prove that no other assets exist.",
  },
  {
    question: "How are overseas and complex estates handled?",
    answer:
      "The International Estate Search lists the UK and five overseas jurisdictions in its package details. The enquiries possible in a particular case depend on local access rules, documentation and available records. Additional jurisdictions and specialist matters should be discussed before instruction; bespoke work is individually scoped and quoted.",
  },
  {
    question: "How long will a search take, and what happens afterwards?",
    answer:
      "Ask for the current estimated timescale when discussing the instruction. It depends on scope, documentation and provider responses. Review the report for potential matches and outstanding enquiries, then follow up with the relevant institutions to confirm ownership, value and any next steps.",
  },
] as const;

const textLinkClassName =
  "font-semibold text-brand-navy underline decoration-brand-gold underline-offset-4 hover:decoration-brand-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy";

export default function SolicitorsPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="For Solicitors"
        title="Estate Asset Searches for Solicitors and Professional Executors"
        description={
          <>
            <p>
              Financial asset and liability search support for solicitors,
              probate professionals and executors handling deceased estates.
              Define the enquiries needed, review the available findings and
              keep a documented record for the estate file.
            </p>
          </>
        }
      />

      <section className="py-20">
        <div className="site-container grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <article className="min-w-0 border border-brand-border bg-white p-6 sm:p-8 md:p-10">
            <div className="section-label">For Solicitors & Professional Executors</div>
            <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,2.8rem)] leading-[1.16] font-semibold text-brand-navy">
              Asset search services for solicitors
            </h2>
            <p className="mt-5 text-sm leading-8 text-brand-slate">
              Estate Resolve supports professional estate administration with
              structured enquiries into possible financial assets and, where
              included in the selected package, potential liabilities. Searches
              bring together information that can help a firm decide what needs
              further investigation.
            </p>
            <p className="mt-4 text-sm leading-8 text-brand-slate">
              Deceased estate asset searches can cover enquiries relating to
              bank and building society accounts, pensions, insurance policies
              and investments within the agreed scope. A report records the
              enquiries made, responses received and matters requiring follow-up.
            </p>
            <p className="mt-4 text-sm leading-8 text-brand-slate">
              This record can support your estate file. It does not establish
              that every asset has been found or that the executor&apos;s legal
              duties have been discharged. Decisions about further enquiries
              and estate administration remain with the executor and their advisers.
            </p>
            <p className="mt-4 text-sm leading-8 text-brand-slate">
              See our <Link href="/services" className={textLinkClassName}>financial asset search services</Link>{" "}
              for a wider explanation of what findings can and cannot tell you.
            </p>
            <Link
              href="#professional-enquiry"
              className="mt-7 inline-flex w-full items-center justify-center border border-brand-gold bg-brand-gold px-6 py-4 text-center text-xs font-semibold uppercase tracking-[0.14em] text-brand-navy hover:bg-brand-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy sm:w-auto"
            >
              Discuss a Professional Instruction
            </Link>
          </article>

          <article className="min-w-0 border border-brand-border bg-brand-ivory p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-navy">
              Why firms commission estate asset searches
            </h2>
            <p className="mt-4 text-sm leading-7 text-brand-slate">
              Financial asset searches for executors may be useful when the
              existing records leave gaps or several lines of enquiry need
              to be brought together.
            </p>
            <ul className="mt-6 list-disc space-y-3 pl-5 text-sm leading-7 text-brand-slate marker:text-brand-gold">
              {supportPoints.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
            <p className="mt-6 text-sm leading-7 text-brand-slate">
              We do not handle client money and we do not administer the
              estate. Our role is limited to asset research, reporting and
              enquiry support.
            </p>
          </article>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-container">
          <article className="border border-brand-border bg-brand-ivory p-6 sm:p-8 md:p-10">
            <h2 className="font-serif text-2xl font-semibold text-brand-navy">
              Service scope and limitations
            </h2>
            <div className="mt-5 grid gap-6 text-sm leading-8 text-brand-slate md:grid-cols-2">
              <p>
                The selected package defines the types of enquiry. Access to
                information depends on the records available, the details and
                authority supplied, and each institution&apos;s requirements.
                A category in the comparison does not mean that every provider
                or financial product in that category can be searched.
              </p>
              <p>
                Asset and liability searches for probate do not guarantee a
                complete inventory. They support the firm&apos;s enquiries and
                do not replace its legal assessment, valuations, tax work or
                decisions about administering and distributing the estate.
                A result showing no match must be read within the search scope.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-container">
          <div className="section-label">Service Options</div>
          <h2 className="mt-5 max-w-4xl font-serif text-[clamp(2rem,4vw,2.9rem)] leading-[1.14] font-semibold text-brand-navy">
            Structured search packages for straightforward, complex, and
            international estate matters
          </h2>
          <p className="mt-5 max-w-3xl text-sm leading-8 text-brand-slate">
            The fixed package fees below match our{" "}
            <Link href="/pricing" className={textLinkClassName}>pricing page</Link>.
            Bespoke work is individually scoped and quoted. Discuss the estate&apos;s
            circumstances and any specialist requirements before choosing a package.
          </p>
          <div className="mt-10 grid gap-6 lg:grid-cols-2">
            {serviceOptions.map((option) => (
              <article
                key={option.title}
                className="flex h-full min-w-0 flex-col border border-brand-border bg-white p-6 sm:p-8"
              >
                <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between sm:gap-4">
                  <h3 className="font-serif text-[1.45rem] font-semibold text-brand-navy">
                    {option.title}
                  </h3>
                  <span className="shrink-0 text-sm font-semibold uppercase tracking-[0.12em] text-brand-gold">
                    {option.price}
                  </span>
                </div>
                <p className="mt-4 text-sm leading-7 text-brand-slate">
                  {option.description}
                </p>
                {"details" in option && option.details ? (
                  <ul className="mt-5 space-y-2 text-sm leading-7 text-brand-slate">
                    {option.details.map((detail) => (
                      <li key={detail}>• {detail}</li>
                    ))}
                  </ul>
                ) : null}
                {"note" in option && option.note ? (
                  <p className="mt-5 text-sm leading-7 text-brand-slate">
                    {option.note}
                  </p>
                ) : null}
                <Link
                  href={option.ctaHref}
                  className="mt-8 inline-flex w-fit max-w-full border border-brand-gold bg-brand-gold px-6 py-3 text-center text-xs font-semibold uppercase tracking-[0.14em] text-brand-navy hover:bg-brand-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
                >
                  {option.ctaLabel}
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-container">
          <div className="section-label">Service Comparison</div>
          <h2 id="package-comparison" className="mt-5 font-serif text-2xl font-semibold text-brand-navy">
            Compare estate asset and liability search packages
          </h2>
          <article className="mt-5 border border-brand-border bg-white p-6 md:p-8">
            <div
              className="relative overflow-x-auto focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy"
              role="region"
              aria-labelledby="package-comparison"
              tabIndex={0}
            >
              <table className="min-w-full border-collapse">
                <caption className="sr-only">
                  Listed package features. A tick indicates inclusion, subject
                  to the search scope and limitations. A blank cell means the
                  feature is not listed for that package.
                </caption>
                <thead>
                  <tr className="border-b border-brand-border">
                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate">
                      Feature
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate">
                      Standard Estate Search (£175)
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate">
                      Asset &amp; Liability Search (£210)
                    </th>
                    <th scope="col" className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-[0.12em] text-brand-slate">
                      International Estate Search (£350)
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {comparisonRows.map((row) => (
                    <tr
                      key={row[0]}
                      className="border-b border-brand-border last:border-b-0"
                    >
                      <th scope="row" className="px-4 py-3 text-left text-sm font-semibold text-brand-navy">
                        {row[0]}
                      </th>
                      {row.slice(1).map((value, index) => (
                        <td key={index} className="px-4 py-3 text-sm text-brand-slate">
                          <span aria-hidden="true">{value}</span>
                          <span className="sr-only">
                            {value ? "Listed for this package" : "Not listed for this package"}
                          </span>
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-6 text-sm leading-7 text-brand-slate">
              All searches are subject to the documentation provided,
              applicable laws, data availability and the requirements of the
              relevant institutions and jurisdictions.
            </p>
            <p className="mt-4 text-sm leading-7 text-brand-slate">
              Liability-related checks can identify matters to investigate;
              they do not confirm every debt or its current balance. OPG checks
              concern powers of attorney and deputyship records, rather than a
              register of assets or debts. Overseas enquiries are subject to
              local access rules and the documentation required in each case.
            </p>
          </article>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-container grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <article className="min-w-0 border border-brand-border bg-white p-6 sm:p-8 md:p-10">
            <h2 className="font-serif text-2xl font-semibold text-brand-navy">
              Authority and documents before instruction
            </h2>
            <p className="mt-5 text-sm leading-8 text-brand-slate">
              Establish who is instructing the search and their authority to
              act for the estate. A solicitor acting for an executor or
              administrator should be able to evidence that instruction.
              Requirements depend on the estate and the enquiries requested.
            </p>
            <p className="mt-4 text-sm leading-8 text-brand-slate">
              The existing case-start process asks for the following information
              and supporting documents:
            </p>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-brand-slate marker:text-brand-gold">
              <li>The deceased&apos;s full name, dates of birth and death, and relevant addresses.</li>
              <li>The deceased&apos;s death certificate, plus identification and proof of address for the instructing person.</li>
              <li>A completed Authority to Act form and evidence of the instructing person&apos;s role.</li>
              <li>Relevant will or grant documentation where available, including confirmation for a Scottish estate where applicable.</li>
              <li>Known providers, account references and other records that may help direct enquiries.</li>
            </ul>
            <p className="mt-5 text-sm leading-8 text-brand-slate">
              You can enquire before a grant is available, but individual
              providers may require further documents before releasing
              information or funds. Read{" "}
              <Link href="/how-it-works" className={textLinkClassName}>how the search process works</Link>{" "}
              and access the Authority to Act form before preparing instructions.
            </p>
          </article>
          <article className="min-w-0 border border-brand-border bg-brand-ivory p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-navy">
              Reporting and professional next steps
            </h2>
            <p className="mt-5 text-sm leading-8 text-brand-slate">
              Review the report alongside the agreed scope and the estate&apos;s
              existing records. Available findings may show a potential
              financial relationship, a response from an institution or an
              enquiry that still needs information.
            </p>
            <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-brand-slate marker:text-brand-gold">
              <li>Check possible matches with the institution before treating them as confirmed estate assets or liabilities.</li>
              <li>Obtain the ownership, balance or date-of-death valuation information needed for the administration.</li>
              <li>Record unanswered enquiries and decide whether further enquiries or specialist advice are required.</li>
            </ul>
            <p className="mt-5 text-sm leading-8 text-brand-slate">
              View our <Link href="/sample-reports" className={textLinkClassName}>illustrative asset discovery report</Link>{" "}
              to see how findings may be presented. It is a demonstration;
              actual reports depend on the instruction and information obtained.
            </p>
          </article>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-container">
          <div className="section-label">Professional Questions</div>
          <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,2.8rem)] leading-[1.16] font-semibold text-brand-navy">
            Frequently asked questions about probate asset searches
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {professionalFaqs.map((faq) => (
              <article key={faq.question} className="min-w-0 border border-brand-border bg-white p-6 sm:p-8">
                <h3 className="font-serif text-xl font-semibold text-brand-navy">{faq.question}</h3>
                <p className="mt-4 text-sm leading-8 text-brand-slate">{faq.answer}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="pb-20">
        <div className="site-container grid gap-8 xl:grid-cols-[1.05fr_0.95fr]">
          <article
            id="professional-enquiry"
            className="min-w-0 scroll-mt-28 border border-brand-border bg-white p-6 sm:p-8 md:p-10"
          >
            <div className="section-label">Start a Professional Enquiry</div>
            <h2 className="mt-5 font-serif text-[clamp(2rem,4vw,2.7rem)] leading-[1.16] font-semibold text-brand-navy">
              Discuss an estate search instruction
            </h2>
            <p className="mt-5 text-sm leading-8 text-brand-slate">
              Tell us about your firm, your role and the search required. Use
              the form to discuss scope, documentation and the appropriate
              service before instructing a search. Keep this initial enquiry
              to a brief overview; supporting documents can follow through the
              case-start process.
            </p>
            <div className="mt-8 [&_button[type=submit]]:w-full [&_button[type=submit]]:px-4 sm:[&_button[type=submit]]:w-auto sm:[&_button[type=submit]]:px-8">
              <SolicitorEnquiryForm />
            </div>
          </article>

          <article className="min-w-0 border border-brand-border bg-brand-ivory p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-navy">
              What to include in your professional enquiry
            </h2>
            <p className="mt-4 text-sm leading-7 text-brand-slate">
              Explain the gaps in the estate records, any known providers,
              relevant jurisdictions and the type of search you are considering.
              Indicate whether authority documents are available and identify
              any deadlines relevant to your instruction.
            </p>
            <p className="mt-4 text-sm leading-7 text-brand-slate">
              If the estate involves specialist assets or several jurisdictions,
              request a scoped quote. Confirm the proposed enquiries, fee and
              current estimated timescale before proceeding.
            </p>
            <p className="mt-4 text-sm leading-7 text-brand-slate">
              Executors enquiring in a personal capacity can use our{" "}
              <Link href="/contact" className={textLinkClassName}>general contact form</Link>{" "}
              to discuss a deceased estate search.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
