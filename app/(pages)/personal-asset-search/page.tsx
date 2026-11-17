import Link from "next/link";
import { PageHero } from "@/app/components/PageHero";
import { buildMetadata } from "@/app/lib/seo";

export const metadata = buildMetadata({
  title: "Personal Asset Search UK for Lost Financial Assets",
  description:
    "Discuss a UK personal asset search for forgotten bank accounts, savings, investments or pensions. Learn who can enquire, what a search may cover and its limits.",
  path: "/personal-asset-search",
});

const eligibilityItems = [
  "Someone searching for assets held in their own name.",
  "A properly authorised representative, attorney or deputy acting on their behalf.",
] as const;

const assetTypes = [
  "Bank and building society accounts",
  "Savings, ISAs and other investment products",
  "Shares and records held by share registrars",
  "Pensions and insurance policies",
] as const;

const reasonsToSearch = [
  "You have lost track of an older bank or savings account.",
  "A previous name or address may be associated with financial records.",
  "Pension, investment or shareholding paperwork is incomplete.",
  "Several possible providers may need separate enquiries.",
] as const;

const informationToPrepare = [
  "Your full name, previous names and addresses, with approximate dates where known.",
  "Names of known banks, investment providers, insurers or former employers.",
  "Any existing statements, account references or correspondence.",
  "Details of enquiries you have already made and questions still unresolved.",
  "Evidence of authority if you are acting for another living person.",
] as const;

const searchSteps = [
  {
    title: "Tell us what you are looking for",
    description:
      "Explain whether the search is for you or someone you are authorised to represent. Mention known providers, previous names or addresses, and any enquiries already made.",
  },
  {
    title: "Confirm authority, scope and fee",
    description:
      "Before instructing a search, confirm which enquiries can be undertaken, what supporting documents are needed and what the service includes. The total fee will be confirmed with you in writing before the search begins.",
  },
  {
    title: "Review your written report",
    description:
      "Your report explains the search results and any next steps that may be required to make a claim. A provider may still need to verify your identity, ownership and entitlement before releasing information or money.",
  },
] as const;

const searchOutcomes = [
  {
    title: "A possible match",
    description:
      "A possible account or policy is a lead to follow up. It does not prove ownership, confirm a balance or establish that money is payable to you.",
  },
  {
    title: "No match identified",
    description:
      "A negative result does not prove that no assets exist. Searches depend on the records available, provider participation, identifying information and agreed scope.",
  },
  {
    title: "Further information needed",
    description:
      "Missing records or an unanswered enquiry may need follow-up. Tracing an account, establishing entitlement and receiving funds are separate stages.",
  },
] as const;

const personalSearchFaqs = [
  {
    question: "Who can request a personal asset search?",
    answer:
      "The account holder can enquire about assets in their own name. A properly authorised representative, attorney or deputy may also enquire on behalf of a living person. Estate Resolve will need to confirm the authority and scope before any search begins.",
  },
  {
    question: "Can I search for another living person's assets?",
    answer:
      "Only with proper authority. Estate Resolve's service is for the account holder or a properly authorised representative, attorney or deputy. A family relationship alone is not sufficient authority to investigate someone's private finances. Confirm the evidence required before any search begins.",
  },
  {
    question: "What assets might a personal search investigate?",
    answer:
      "Depending on the agreed scope and information available, enquiries may concern bank and building society accounts, savings, investments, shares, pensions or insurance policies. No search covers every provider or product.",
  },
  {
    question: "Do I need to pay to look for forgotten assets?",
    answer:
      "No. You can review your own records, contact known providers and use relevant free tracing services. Professional assistance is optional. Ask Estate Resolve about the proposed personal-search scope and fee before deciding whether to instruct us.",
  },
  {
    question: "Can I enquire without an account or policy number?",
    answer:
      "Yes. Previous names and addresses, approximate dates, provider or employer names and any old correspondence may help. Incomplete information can limit the enquiries available, so explain what you already know when you contact us.",
  },
  {
    question: "Will a search find every asset or guarantee a payment?",
    answer:
      "No. A search cannot guarantee that every financial relationship will be found. Any match needs checking with the relevant provider, which determines what evidence is needed and whether a claim can be paid.",
  },
  {
    question: "How can I discuss the scope and fee?",
    answer:
      "Contact Estate Resolve and explain whether you are searching for yourself or an authorised living person, what assets are in question and which enquiries you have already made. We can discuss the proposed scope and confirm the total fee in writing before a search begins.",
  },
] as const;

const sectionHeadingClassName =
  "font-serif text-[clamp(1.8rem,4vw,2.7rem)] leading-[1.16] font-semibold text-brand-navy";
const textLinkClassName =
  "font-semibold text-brand-navy underline decoration-brand-gold underline-offset-4 hover:decoration-brand-navy focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy";
const contactLinkClassName =
  "inline-flex w-full items-center justify-center border border-brand-gold bg-brand-gold px-6 py-4 text-center text-sm font-semibold uppercase tracking-[0.14em] text-brand-navy hover:-translate-y-0.5 hover:bg-brand-gold-light focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-navy sm:w-auto";

export default function PersonalAssetSearchPage() {
  return (
    <main id="main-content" className="flex-1">
      <PageHero
        eyebrow="Personal Asset Search"
        title="Find Lost or Forgotten Financial Assets in Your Name"
        descriptionClassName="mt-6 max-w-3xl space-y-5 text-base leading-8 text-white/80 sm:text-lg"
        description={
          <>
            <p>
              Estate Resolve helps living individuals and properly authorised
              representatives investigate potentially forgotten bank accounts,
              savings, investments and pensions within an agreed personal-search
              scope.
            </p>
            <p>
              Structured enquiries and a written report can help you understand
              available findings, unresolved questions and possible next steps.
              A search cannot guarantee a match or payment.
            </p>
            <Link href="/contact" className={contactLinkClassName}>
              Discuss a Personal Asset Search
            </Link>
          </>
        }
      />

      <section className="py-20">
        <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="min-w-0 border border-brand-border bg-white p-6 sm:p-8 md:p-10">
            <div className="section-label">Personal Searches</div>
            <h2 className={`mt-5 ${sectionHeadingClassName}`}>
              What is a personal asset search?
            </h2>
            <p className="mt-5 text-base leading-8 text-brand-slate">
              A personal asset search is a series of enquiries to help identify
              financial accounts or policies you may have lost track of. It can
              be useful after a house move, a change of name or a period of
              incomplete financial records.
            </p>
            <p className="mt-4 text-base leading-8 text-brand-slate">
              Estate Resolve helps individuals search for potentially forgotten
              or unclaimed financial assets in their own name and provides a
              clear written report of the results and possible next steps.
              Finding a possible match does not establish entitlement to money.
            </p>
            <p className="mt-4 text-base leading-8 text-brand-slate">
              You can review your own records and contact known providers
              directly. Professional assistance is optional; its value may be
              in organising several enquiries and making the results easier to
              review.
            </p>
            <p className="mt-4 text-base leading-8 text-brand-slate">
              Ask us about the proposed scope and total fee before deciding
              whether to proceed.
            </p>
          </article>

          <div className="grid min-w-0 gap-6">
            <article className="border border-brand-border bg-brand-ivory p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-navy">
                Who can request a search?
              </h2>
              <p className="mt-4 text-base leading-7 text-brand-slate">
                This service is available only to:
              </p>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-brand-slate">
                {eligibilityItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-5 text-base leading-7 text-brand-slate">
                It must not be used to investigate the private financial
                affairs of another living person without proper authority.
              </p>
              <p className="mt-4 text-base leading-7 text-brand-slate">
                This page is for living individuals. If you are dealing with
                someone who has died, see our{" "}
                <Link href="/services" className={textLinkClassName}>
                  deceased estate asset-search services
                </Link>
                .
              </p>
            </article>

            <article className="border border-brand-border bg-white p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-navy">
                What financial assets might be traced?
              </h2>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-base leading-7 text-brand-slate">
                {assetTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-5 text-base leading-7 text-brand-slate">
                These are types of financial relationships to consider, not a
                promise that every provider or product can be searched. Confirm
                the scope of your personal search before instructing us.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="personal-search-reasons"
        className="border-y border-brand-border bg-white py-16 md:py-20"
      >
        <div className="site-container">
          <h2 id="personal-search-reasons" className={sectionHeadingClassName}>
            When might a personal asset search help?
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-brand-slate">
            <p>
              A personal search may be worth discussing when you have a
              reasonable question about a financial relationship but cannot
              resolve it from the records available to you.
            </p>
            <ul className="list-disc space-y-3 pl-5 marker:text-brand-gold">
              {reasonsToSearch.map((reason) => (
                <li key={reason}>{reason}</li>
              ))}
            </ul>
            <p>
              These are reasons for further enquiry, not evidence that an
              account or payment exists. If you know the provider, contacting
              it directly may be a useful first step.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="personal-search-preparation"
        className="py-16 md:py-20"
      >
        <div className="site-container">
          <h2 id="personal-search-preparation" className={sectionHeadingClassName}>
            What information should you prepare?
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-base leading-8 text-brand-slate">
            <p>
              You do not need an account number to make an initial enquiry.
              The following details can help establish what may be searched:
            </p>
            <ul className="list-disc space-y-3 pl-5 marker:text-brand-gold">
              {informationToPrepare.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p>
              Tell us what you already know through the{" "}
              <Link href="/contact" className={textLinkClassName}>
                personal-search enquiry route
              </Link>
              . We will discuss what evidence may be needed before any search
              begins.
            </p>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-border bg-white py-16 md:py-20">
        <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <h2 className={sectionHeadingClassName}>
              Why consider professional assistance?
            </h2>
            <div className="mt-6 space-y-4 text-base leading-8 text-brand-slate">
              <p>
                When records are incomplete or several institutions may need
                contacting, a structured search can help organise enquiries
                within a scope agreed with you.
              </p>
              <p>
                Estate Resolve&apos;s report can bring together available
                responses, possible matches, unanswered questions and
                suggested follow-up. You can then decide what to check with
                the relevant provider.
              </p>
              <p>
                Professional assistance is optional. You can inspect your
                records, contact known providers and use relevant free tracing
                routes yourself. A paid search does not give exclusive access
                to records or remove provider identity and entitlement checks.
              </p>
            </div>
            <Link href="/contact" className={`mt-8 ${contactLinkClassName}`}>
              Enquire About a Personal Search
            </Link>
          </div>
          <article className="min-w-0 self-start border border-brand-border bg-brand-ivory p-6 sm:p-8">
            <h3 className="font-serif text-2xl font-semibold text-brand-navy">
              Agree the scope before instructing us
            </h3>
            <p className="mt-4 text-base leading-8 text-brand-slate">
              Tell us whether the search is for you or someone you are
              authorised to represent, which assets or providers are in
              question, and what earlier enquiries have established.
            </p>
            <p className="mt-4 text-base leading-8 text-brand-slate">
              We can discuss what enquiries may be appropriate, what the
              report would cover and the total fee before work begins. Neither
              a possible match nor a negative result is definitive.
            </p>
          </article>
        </div>
      </section>

      <section
        aria-labelledby="personal-search-process"
        className="py-16 md:py-20"
      >
        <div className="site-container">
          <h2 id="personal-search-process" className={sectionHeadingClassName}>
            How Estate Resolve&apos;s personal search works
          </h2>
          <ol className="mt-8 grid gap-6 lg:grid-cols-3">
            {searchSteps.map((step, index) => (
              <li
                key={step.title}
                className="min-w-0 border border-brand-border bg-white p-6 sm:p-8"
              >
                <div className="section-label">Step {index + 1}</div>
                <h3 className="mt-4 font-serif text-xl font-semibold text-brand-navy">
                  {step.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-brand-slate">
                  {step.description}
                </p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section
        aria-labelledby="personal-search-results"
        className="border-y border-brand-border bg-white py-16 md:py-20"
      >
        <div className="site-container">
          <h2 id="personal-search-results" className={sectionHeadingClassName}>
            What search results mean and their limitations
          </h2>
          <div className="mt-8 grid gap-6 lg:grid-cols-3">
            {searchOutcomes.map((outcome) => (
              <article
                key={outcome.title}
                className="min-w-0 border border-brand-border bg-brand-ivory p-6 sm:p-8"
              >
                <h3 className="font-serif text-xl font-semibold text-brand-navy">
                  {outcome.title}
                </h3>
                <p className="mt-4 text-base leading-8 text-brand-slate">
                  {outcome.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section aria-labelledby="personal-search-faqs" className="py-16 md:py-20">
        <div className="site-container">
          <h2 id="personal-search-faqs" className={sectionHeadingClassName}>
            Frequently asked questions
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {personalSearchFaqs.map((faq) => (
              <article
                key={faq.question}
                className="min-w-0 border border-brand-border bg-white p-6 sm:p-8"
              >
                <h3 className="font-serif text-xl font-semibold text-brand-navy">
                  {faq.question}
                </h3>
                <p className="mt-4 text-base leading-8 text-brand-slate">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section
        aria-labelledby="personal-search-contact"
        className="border-t border-brand-border bg-white py-16 md:py-20"
      >
        <div className="site-container">
          <div className="max-w-3xl">
            <h2 id="personal-search-contact" className={sectionHeadingClassName}>
              Discuss your personal asset search
            </h2>
            <p className="mt-6 text-base leading-8 text-brand-slate">
              Tell us whether you are searching for yourself or an authorised
              living person, which assets are in question, what information
              you have and whether earlier enquiries were unsuccessful or
              incomplete. We can discuss the proposed scope and what may be
              needed before you decide whether to proceed.
            </p>
            <p className="mt-4 text-base leading-8 text-brand-slate">
              The total fee will be confirmed with you in writing before the
              search begins.
            </p>
            <Link href="/contact" className={`mt-8 ${contactLinkClassName}`}>
              Discuss a Personal Asset Search
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
