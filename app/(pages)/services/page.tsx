import { ChevronDownIcon } from "@/app/components/Icons";
import { JsonLd } from "@/app/components/JsonLd";
import { PageHero } from "@/app/components/PageHero";
import { buildMetadata } from "@/app/lib/seo";
import { servicesStructuredData } from "@/app/lib/structured-data";
import Link from "next/link";

export const metadata = buildMetadata({
  title: "Financial Asset Search for Deceased Estates",
  description:
    "Explore financial asset searches for deceased estates. Learn what may be checked, who can instruct a search, how reports work and where to begin.",
  path: "/services",
});

const audiences = [
  {
    title: "Executors",
    description:
      "Executors named in a will may need to investigate potentially overlooked accounts, savings or other financial relationships before completing estate administration.",
  },
  {
    title: "Administrators and authorised representatives",
    description:
      "Administrators and other authorised personal representatives may need to make appropriate financial enquiries when dealing with an estate.",
  },
  {
    title: "Solicitors and professional advisers",
    description:
      "Solicitors and professional executors may use structured searches and reports to support their estate-administration work.",
  },
];

const assetTypes = [
  {
    title: "Bank and building society accounts",
    paragraphs: [
      "Search enquiries may concern current accounts, savings accounts and other banking relationships.",
      "The information available depends on provider responses, the agreed search scope and the evidence of authority supplied.",
    ],
  },
  {
    title: "Investments and savings products",
    paragraphs: [
      "Relevant financial relationships may include investment accounts, savings products and certain shareholdings.",
      "Identifying a possible investment relationship does not replace formal ownership checks or a date-of-death valuation.",
    ],
  },
  {
    title: "Pensions and insurance",
    paragraphs: [
      "Enquiries may help identify potential pension providers or insurance policies associated with the deceased.",
      "Finding a provider or policy does not automatically establish whether benefits are payable to the estate.",
    ],
  },
  {
    title: "NS&I savings and investments",
    paragraphs: [
      "NS&I products may also require investigation. Whether they are included depends on the agreed scope and the information available.",
    ],
  },
  {
    title: "Liabilities and overseas searches",
    paragraphs: [
      "Estate Resolve offers separate Asset & Liability Search and International Estate Search options.",
      "Liability checks and overseas enquiries should not be assumed to be included in the standard search package.",
    ],
  },
];

const searchSteps = [
  {
    title: "Tell us about the estate",
    paragraphs: [
      "Provide information about the deceased, your role and any known financial relationships or previous addresses that may assist enquiries.",
    ],
  },
  {
    title: "Establish authority and search scope",
    paragraphs: [
      "Estate Resolve reviews the instruction and supporting documentation to establish authority and the scope of the requested search.",
      "The applicable service and fee should be clear before the work begins.",
    ],
  },
  {
    title: "Make and track relevant enquiries",
    paragraphs: [
      "Enquiries are carried out according to the agreed scope. Institution responses and outstanding information requests may need further consideration.",
    ],
  },
  {
    title: "Review the findings",
    paragraphs: [
      "A report brings together the available results so the executor or adviser can identify potential matches, unanswered questions and possible next steps.",
    ],
  },
];

const documents = [
  "The deceased person's death certificate.",
  "Identification for the instructing person.",
  "Proof of address for the instructing person.",
  "A completed Authority to Act form.",
  "Relevant will or probate documentation, where available.",
];

const reportFindings = [
  {
    title: "Possible financial matches",
    description:
      "A possible match may require additional confirmation of ownership, balances, policy status or entitlement.",
  },
  {
    title: "No match identified",
    description:
      "A negative result does not prove that the deceased held no other assets. The agreed scope and limitations of the search remain important.",
  },
  {
    title: "Outstanding enquiries",
    description:
      "A lack of response or incomplete information should not automatically be interpreted as confirmation that an account does not exist.",
  },
];

const searchOptions = [
  {
    title: "Standard Estate Search",
    description:
      "A structured search intended to help identify potentially overlooked financial assets associated with a deceased estate.",
  },
  {
    title: "Asset & Liability Search",
    description:
      "A broader option that includes additional liability-related enquiries according to the selected package.",
  },
  {
    title: "International Estate Search",
    description:
      "An option intended for estates requiring relevant overseas financial enquiries within the agreed service scope.",
  },
];

const reasonsToConsiderSearch = [
  "Financial statements or other estate records are incomplete.",
  "A bank account, investment, savings product or pension relationship remains uncertain.",
  "Previous addresses or several possible providers make enquiries harder to organise.",
  "The executor or adviser needs a record of enquiries and outstanding questions before progressing the estate administration.",
];

const serviceFaqs = [
  {
    question: "Do I need probate before enquiring about an asset search?",
    answer:
      "You can enquire about the service before obtaining a grant. Whether particular searches can begin depends on the authority and documents required. Individual institutions may impose separate requirements before releasing information.",
  },
  {
    question: "Will a search find every bank account, pension or policy?",
    answer:
      "No financial asset search can guarantee every financial relationship will be identified. Results depend on the agreed scope, available information, provider coverage and responses.",
  },
  {
    question: "Does the search include debts and overseas assets?",
    answer:
      "Estate Resolve offers separate asset-and-liability and international search options. The exact inclusions and fees depend on the selected package.",
  },
  {
    question:
      "Does a possible match mean money is ready to be paid to the estate?",
    answer:
      "Not necessarily. Further verification of ownership, value, entitlement and supporting documents may be required.",
  },
  {
    question: "How long does an estate asset search take?",
    answer:
      "Timescales can vary according to the search scope, available information and institution responses. Ask Estate Resolve for the current estimated timescale for your selected service.",
  },
  {
    question: "Can a solicitor instruct a search?",
    answer:
      "Estate Resolve provides services for solicitors and professional executors who have appropriate authority to act.",
    href: "/solicitors",
    linkLabel: "Asset Search Services for Solicitors",
  },
];

const headingClassName =
  "max-w-4xl font-serif text-[clamp(1.8rem,3.5vw,2.7rem)] leading-[1.2] font-semibold text-brand-navy";
const subheadingClassName =
  "font-serif text-xl leading-7 font-semibold text-brand-navy";
const textLinkClassName =
  "font-semibold text-brand-navy underline decoration-brand-gold underline-offset-4 hover:decoration-brand-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold";
const primaryLinkClassName =
  "inline-flex w-full items-center justify-center border border-brand-gold bg-brand-gold px-6 py-4 text-center text-xs leading-5 font-semibold uppercase tracking-[0.12em] text-brand-navy hover:bg-brand-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold sm:w-auto";
const secondaryLinkClassName =
  "inline-flex w-full items-center justify-center border border-brand-navy px-6 py-4 text-center text-xs leading-5 font-semibold uppercase tracking-[0.12em] text-brand-navy hover:bg-brand-navy hover:text-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold sm:w-auto";

export default function ServicesPage() {
  return (
    <main id="main-content" className="flex-1">
      <JsonLd id="services-structured-data" data={servicesStructuredData()} />
      <PageHero
        eyebrow="Estate Financial Search Services"
        title="Financial Asset Searches for Deceased Estates"
        descriptionClassName="mt-6 max-w-3xl space-y-5 text-base leading-8 text-white/80 sm:text-lg"
        description={
          <>
            <p>
              Estate Resolve helps executors, estate administrators, authorised
              personal representatives and solicitors investigate financial
              relationships that may not be apparent from a deceased person&apos;s
              records.
            </p>
            <p>
              We agree the search scope, make structured enquiries and report
              the available findings and unanswered questions. This can help
              you decide what further checks the estate may need.
            </p>
            <p>
              Results depend on the agreed scope and provider responses; a
              possible match does not establish ownership or entitlement.
            </p>
            <div className="flex flex-col gap-4 pt-3 sm:flex-row sm:flex-wrap">
              <Link href="/start-a-case" className={primaryLinkClassName}>
                Start an Estate Search
              </Link>
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center border border-brand-gold px-6 py-4 text-center text-xs leading-5 font-semibold uppercase tracking-[0.12em] text-white hover:bg-brand-gold-light hover:text-brand-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold sm:w-auto"
              >
                Discuss an Estate Search
              </Link>
            </div>
          </>
        }
      />

      <section aria-labelledby="search-definition" className="py-16 md:py-20">
        <div className="site-container">
          <h2 id="search-definition" className={headingClassName}>
            What is a financial asset search for a deceased estate?
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-brand-slate">
            <p>
              A financial asset search is a structured series of enquiries
              intended to help identify accounts, policies or other financial
              relationships associated with someone who has died.
            </p>
            <p>
              It can be useful when statements are missing, financial records are
              incomplete, accounts have been opened with several providers, or
              the executor is unsure whether all relevant institutions have been
              contacted.
            </p>
            <p>
              Identifying the estate&apos;s assets and debts is an important part
              of estate administration. Executors can examine records and
              contact known organisations directly. GOV.UK guidance on valuing
              an estate also describes identifying its assets and debts.
            </p>
            <p>
              An asset-search result is information to investigate. An indication
              of an account or policy is not, by itself, a valuation, proof of
              ownership, confirmation of money due to an estate or authority to
              withdraw funds.
            </p>
            <p>Further checks with the relevant institution may be necessary.</p>
            <p>
              For practical ways to begin, read our{" "}
              <Link
                href="/blog/find-assets-deceased-person"
                className={textLinkClassName}
              >
                guide to finding assets of someone who has died
              </Link>
              .
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="search-eligibility"
        className="border-y border-brand-border bg-white py-16 md:py-20"
      >
        <div className="site-container">
          <h2 id="search-eligibility" className={headingClassName}>
            Who can request an estate asset search?
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-brand-slate">
            Estate Resolve&apos;s services are intended for people dealing with
            the financial affairs of someone who has died.
          </p>
          <div className="mt-8 grid gap-px border border-brand-border bg-brand-border md:grid-cols-3">
            {audiences.map((audience) => (
              <article key={audience.title} className="min-w-0 bg-white p-6 sm:p-8">
                <h3 className={subheadingClassName}>{audience.title}</h3>
                <p className="mt-4 text-base leading-8 text-brand-slate">
                  {audience.description}
                </p>
              </article>
            ))}
          </div>
          <div className="mt-8 max-w-3xl space-y-4 text-base leading-8 text-brand-slate">
            <p>
              Before undertaking enquiries, Estate Resolve requires appropriate
              evidence of authority to act.
            </p>
            <p>
              If you are unsure whether you can instruct a search,{" "}
              <Link href="/contact" className={textLinkClassName}>
                contact Estate Resolve
              </Link>{" "}
              to discuss the requirements.
            </p>
            <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-6">
              <Link href="/how-it-works" className={textLinkClassName}>
                See How It Works
              </Link>
              <Link href="/solicitors" className={textLinkClassName}>
                Services for Solicitors
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="search-coverage" className="py-16 md:py-20">
        <div className="site-container">
          <h2 id="search-coverage" className={headingClassName}>
            What financial assets can an estate search cover?
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-brand-slate">
            The appropriate search depends on the selected package, available
            information, supported providers and the authority to make enquiries.
          </p>
          <div className="mt-8 grid gap-px border border-brand-border bg-brand-border md:grid-cols-2">
            {assetTypes.map((assetType) => (
              <article
                key={assetType.title}
                className="min-w-0 bg-white p-6 last:md:col-span-2 sm:p-8"
              >
                <h3 className={subheadingClassName}>{assetType.title}</h3>
                <div className="mt-4 max-w-3xl space-y-4 text-base leading-8 text-brand-slate">
                  {assetType.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </article>
            ))}
          </div>
          <div className="mt-8">
            <Link href="/pricing" className={primaryLinkClassName}>
              Compare Search Options and Fees
            </Link>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="search-process"
        className="border-y border-brand-border bg-white py-16 md:py-20"
      >
        <div className="site-container">
          <h2 id="search-process" className={headingClassName}>
            How does the estate asset-search process work?
          </h2>
          <ol className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {searchSteps.map((step, index) => (
              <li key={step.title} className="min-w-0">
                <div
                  aria-hidden="true"
                  className="flex h-20 w-20 items-center justify-center border-2 border-brand-navy font-serif text-3xl text-brand-navy"
                >
                  {index + 1}
                </div>
                <h3 className={"mt-6 " + subheadingClassName}>
                  Step {index + 1} — {step.title}
                </h3>
                <div className="mt-4 space-y-4 text-base leading-8 text-brand-slate">
                  {step.paragraphs.map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-8 text-base leading-8">
            <Link href="/how-it-works" className={textLinkClassName}>
              Learn How Estate Searches Work
            </Link>
          </p>
          <p className="mt-4 text-base leading-8">
            <Link href="/contact" className={textLinkClassName}>
              Discuss an Estate Search
            </Link>{" "}
            if you need help choosing an appropriate scope.
          </p>
        </div>
      </section>

      <section aria-labelledby="search-documents" className="py-16 md:py-20">
        <div className="site-container">
          <h2 id="search-documents" className={headingClassName}>
            What information and documents should you prepare?
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-brand-slate">
            <p>
              Before beginning an estate asset search, it is helpful to gather
              the deceased person&apos;s identifying information and relevant
              estate documents.
            </p>
            <p>Estate Resolve&apos;s existing case-start instructions request:</p>
            <ul className="list-disc space-y-2 border border-brand-border bg-white py-6 pr-6 pl-12 marker:text-brand-gold sm:pr-8 sm:pl-14">
              {documents.map((document) => (
                <li key={document}>{document}</li>
              ))}
            </ul>
            <p>
              Additional useful information may include previous names and
              addresses, date of birth, known banks, former employers, pension
              schemes and insurance providers.
            </p>
            <p>
              The exact documentation required can depend on the circumstances
              and the institution being contacted.
            </p>
            <p>
              <Link href="/start-a-case" className={textLinkClassName}>
                Prepare Your Estate Search
              </Link>
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="search-report"
        className="border-y border-brand-border bg-white py-16 md:py-20"
      >
        <div className="site-container">
          <h2 id="search-report" className={headingClassName}>
            What will an estate asset-search report tell you?
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-brand-slate">
            <p>
              A structured report can help executors and advisers understand the
              outcome of financial enquiries.
            </p>
            <p>
              Depending on the information obtained, findings may indicate a
              possible financial relationship, an institution&apos;s response, an
              outstanding enquiry or a matter requiring further documentation.
            </p>
          </div>
          <div className="mt-8 grid gap-px border border-brand-border bg-brand-border md:grid-cols-3">
            {reportFindings.map((finding) => (
              <article key={finding.title} className="min-w-0 bg-white p-6 sm:p-8">
                <h3 className={subheadingClassName}>{finding.title}</h3>
                <p className="mt-4 text-base leading-8 text-brand-slate">
                  {finding.description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-8 text-brand-slate">
            The executor or authorised adviser may need to undertake additional
            enquiries or obtain specialist advice.
          </p>
          <div className="mt-6">
            <Link href="/sample-reports" className={secondaryLinkClassName}>
              View an Illustrative Report
            </Link>
          </div>
          <p className="mt-4 max-w-3xl text-sm leading-7 text-brand-slate">
            The sample report is illustrative and shows how findings may be
            presented. It is not a verified customer success story.
          </p>
        </div>
      </section>

      <section aria-labelledby="search-options" className="py-16 md:py-20">
        <div className="site-container">
          <h2 id="search-options" className={headingClassName}>
            Which search option is suitable for your estate?
          </h2>
          <p className="mt-6 max-w-3xl text-base leading-8 text-brand-slate">
            Estate Resolve currently describes three principal estate-search
            options:
          </p>
          <div className="mt-8 grid gap-px border border-brand-border bg-brand-border md:grid-cols-3">
            {searchOptions.map((option) => (
              <article key={option.title} className="min-w-0 bg-white p-6 sm:p-8">
                <h3 className={subheadingClassName}>{option.title}</h3>
                <p className="mt-4 text-base leading-8 text-brand-slate">
                  {option.description}
                </p>
              </article>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-base leading-8 text-brand-slate">
            For unusual, complex or multi-jurisdictional circumstances, ask about
            the appropriate package before proceeding.
          </p>
          <div className="mt-6">
            <Link href="/pricing" className={primaryLinkClassName}>
              View Search Packages
            </Link>
          </div>
          <p className="mt-5 max-w-3xl text-base leading-8 text-brand-slate">
            Ready to discuss your estate&apos;s circumstances?{" "}
            <Link href="/book-a-consultation" className={textLinkClassName}>
              Book a Consultation
            </Link>
            .
          </p>
        </div>
      </section>

      <section
        aria-labelledby="professional-search"
        className="border-y border-brand-border bg-white py-16 md:py-20"
      >
        <div className="site-container">
          <h2 id="professional-search" className={headingClassName}>
            When Is a Professional Estate Asset Search Worth Considering?
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-brand-slate">
            <p>
              A professional search may be useful when you have reasonable
              questions about the estate&apos;s financial relationships and want
              structured enquiries within an agreed scope.
            </p>
            <p>
              Circumstances that may warrant further enquiries include:
            </p>
            <ul className="list-disc space-y-2 pl-6 marker:text-brand-gold">
              {reasonsToConsiderSearch.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
            <p>
              These are reasons to investigate, not evidence that an asset
              exists. Estate Resolve can organise enquiries, follow up within
              the agreed scope and report available responses and unresolved
              questions. Results still depend on provider coverage, the
              identifying information available and each institution&apos;s
              response.
            </p>
            <p>
              You can also review records and contact known providers yourself;
              a paid search is optional. Our{" "}
              <Link
                href="/resources/do-i-need-a-financial-asset-search"
                className={textLinkClassName}
              >
                decision guide on whether an asset search may help
              </Link>{" "}
              explains what to consider before instructing a service.
            </p>
            <div className="pt-3">
              <Link href="/contact" className={primaryLinkClassName}>
                Discuss an Estate Search
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section aria-labelledby="search-faqs" className="py-16 md:py-20">
        <div className="site-container">
          <h2 id="search-faqs" className={headingClassName}>
            Common questions about financial asset searches
          </h2>
          <div className="mt-8 max-w-4xl space-y-4">
            {serviceFaqs.map((faq) => (
              <details
                key={faq.question}
                className="group border border-brand-border bg-white px-6 py-5"
              >
                <summary className="cursor-pointer list-none focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold">
                  <h3 className="flex items-start justify-between gap-6 text-base leading-7 font-semibold text-brand-navy">
                    <span>{faq.question}</span>
                    <ChevronDownIcon
                      aria-hidden="true"
                      className="mt-1 h-5 w-5 shrink-0 text-brand-gold transition-transform group-open:rotate-180"
                    />
                  </h3>
                </summary>
                <p className="mt-4 text-base leading-8 text-brand-slate">
                  {faq.answer}
                </p>
                {faq.href && (
                  <p className="mt-4 text-base leading-8">
                    <Link href={faq.href} className={textLinkClassName}>
                      {faq.linkLabel}
                    </Link>
                  </p>
                )}
              </details>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="start-estate-search"
        className="border-t border-brand-border bg-white py-16 md:py-20"
      >
        <div className="site-container">
          <div className="border border-brand-border bg-brand-ivory p-6 sm:p-10">
            <h2 id="start-estate-search" className={headingClassName}>
              Take the next step with your estate&apos;s financial enquiries
            </h2>
            <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-brand-slate">
              <p>
                If you are responsible for administering a deceased estate and
                want a clearer picture of financial relationships that may need
                further investigation, you can review the available search
                options or prepare your instruction.
              </p>
              <p>
                If you are unsure which search is appropriate, contact Estate
                Resolve to discuss your circumstances and the available scope.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap">
              <Link href="/start-a-case" className={primaryLinkClassName}>
                Start an Estate Search
              </Link>
              <Link href="/contact" className={secondaryLinkClassName}>
                Discuss an Estate Search
              </Link>
            </div>
            <p className="mt-6 text-base leading-8 text-brand-slate">
              Want to compare the options first?{" "}
              <Link href="/pricing" className={textLinkClassName}>
                View Search Packages
              </Link>
              .
            </p>
            <div className="mt-8 border-t border-brand-border pt-6 text-base leading-8 text-brand-slate">
              <p>
                Looking for forgotten financial assets held in your own name?
              </p>
              <p className="mt-2">
                <Link
                  href="/personal-asset-search"
                  className={textLinkClassName}
                >
                  Visit Personal Asset Search
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
