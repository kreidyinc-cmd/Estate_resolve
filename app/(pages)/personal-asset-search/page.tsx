import Link from "next/link";
import { PageHero } from "@/app/components/PageHero";
import { buildMetadata } from "@/app/lib/seo";

export const metadata = buildMetadata({
  title: "Personal Asset Search in the UK",
  description:
    "Explore personal asset searches in the UK, free tools for lost bank accounts, pensions and investments, and when professional assistance may help.",
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
    question: "Can I search for financial assets in my own name?",
    answer:
      "Yes. Start with your records and any providers you remember. Previous names, addresses and employment details may help connect older records to you. You can use relevant free tracing tools or discuss a personal search with Estate Resolve.",
  },
  {
    question: "Can I search for another living person's assets?",
    answer:
      "Only with proper authority. Estate Resolve's service is for the account holder or a properly authorised representative, attorney or deputy. A family relationship alone is not sufficient authority to investigate someone's private finances. Confirm the evidence required before any search begins.",
  },
  {
    question: "Do I have to pay to find forgotten bank accounts?",
    answer:
      "No. My Lost Account and Gretel provide free tracing options, and you can contact a known provider directly. Professional assistance is optional. Estate Resolve confirms its total fee in writing before the search begins.",
  },
  {
    question: "Will the Pension Tracing Service tell me how much I have?",
    answer:
      "No. The government service provides pension scheme contact details. It does not confirm that you have a pension or give its value. You must follow up with the scheme or provider to establish whether it holds a pension for you.",
  },
  {
    question: "Can I start without an account or policy number?",
    answer:
      "You can make an initial enquiry using the details you do have. Previous names and addresses, approximate dates and provider or employer names may help. Each tracing service or institution has its own requirements, and incomplete information can limit a search.",
  },
  {
    question: "Will a search find every asset or guarantee a payment?",
    answer:
      "No. A search cannot guarantee that every financial relationship will be found. Any match needs checking with the relevant provider, which determines what evidence is needed and whether a claim can be paid.",
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
        description="Look for forgotten bank accounts, savings, investments and pensions in your own name. Explore free UK tracing options and understand when Estate Resolve's personal search service may help."
      />

      <section className="py-20">
        <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <article className="min-w-0 border border-brand-border bg-white p-6 sm:p-8 md:p-10">
            <div className="section-label">Personal Searches</div>
            <h2 className={`mt-5 ${sectionHeadingClassName}`}>
              What is a personal asset search?
            </h2>
            <p className="mt-5 text-sm leading-8 text-brand-slate">
              A personal asset search is a series of enquiries to help identify
              financial accounts or policies you may have lost track of. It can
              be useful after a house move, a change of name or a period of
              incomplete financial records.
            </p>
            <p className="mt-4 text-sm leading-8 text-brand-slate">
              Estate Resolve helps individuals search for potentially forgotten
              or unclaimed financial assets in their own name and provides a
              clear written report of the results and possible next steps.
              Finding a possible match does not establish entitlement to money.
            </p>
            <p className="mt-4 text-sm leading-8 text-brand-slate">
              You can start with free tracing services and direct enquiries to
              providers. Paying for assistance is optional. Explore the{" "}
              <a href="#free-bank-account-search" className={textLinkClassName}>
                free routes below
              </a>{" "}
              before deciding what support you need.
            </p>
            <p className="mt-4 text-sm leading-8 text-brand-slate">
              The total fee will be confirmed with you in writing before the
              search begins.
            </p>
            <Link
              href="/contact"
              className={`mt-8 ${contactLinkClassName}`}
            >
              Discuss a Personal Search
            </Link>
          </article>

          <div className="grid min-w-0 gap-6">
            <article className="border border-brand-border bg-brand-ivory p-6 sm:p-8">
              <h2 className="font-serif text-2xl font-semibold text-brand-navy">
                Who can request a search?
              </h2>
              <p className="mt-4 text-sm leading-7 text-brand-slate">
                This service is available only to:
              </p>
              <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-brand-slate">
                {eligibilityItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-7 text-brand-slate">
                It must not be used to investigate the private financial
                affairs of another living person without proper authority.
              </p>
              <p className="mt-4 text-sm leading-7 text-brand-slate">
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
              <ul className="mt-5 list-disc space-y-3 pl-5 text-sm leading-7 text-brand-slate">
                {assetTypes.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-5 text-sm leading-7 text-brand-slate">
                These are types of financial relationships to consider, not a
                promise that every provider or product can be searched. Confirm
                the scope of your personal search before instructing us.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section
        id="free-bank-account-search"
        aria-labelledby="free-bank-heading"
        className="scroll-mt-24 border-y border-brand-border bg-white py-16 md:py-20"
      >
        <div className="site-container">
          <h2 id="free-bank-heading" className={sectionHeadingClassName}>
            How to find lost bank accounts for free
          </h2>
          <div className="mt-6 max-w-3xl space-y-4 text-sm leading-8 text-brand-slate">
            <p>
              You do not need to pay a search firm to begin looking for
              forgotten accounts. Start with the information you already have
              and use the relevant free tools.
            </p>
            <ol className="list-decimal space-y-4 pl-5">
              <li>
                <strong className="text-brand-navy">Check your records.</strong>{" "}
                Look through old statements, passbooks and emails for provider
                names, account numbers and previous addresses. Transfers shown
                on another account may provide a useful clue.
              </li>
              <li>
                <strong className="text-brand-navy">
                  Contact a known provider.
                </strong>{" "}
                If you remember the bank, building society or NS&amp;I product,
                approach the provider directly using its official contact
                details. Ask what evidence it needs to locate the account and
                confirm your identity.
              </li>
              <li>
                <strong className="text-brand-navy">
                  Try a free tracing route.
                </strong>{" "}
                My Lost Account is free for tracing lost UK personal bank,
                building society and NS&amp;I accounts. It is not a search for
                every active account, pension, investment or overseas asset.
              </li>
            </ol>
            <p>
              <a
                href="https://www.moneyhelper.org.uk/en/blog/everyday-money/how-to-find-old-bank-account"
                className={textLinkClassName}
              >
                MoneyHelper&apos;s guide to finding old bank accounts
              </a>{" "}
              explains how to gather details and follow up with providers,
              including where an old bank or building society has merged.
            </p>
          </div>
        </div>
      </section>

      <section
        aria-labelledby="pensions-investments-heading"
        className="py-16 md:py-20"
      >
        <div className="site-container">
          <h2 id="pensions-investments-heading" className={sectionHeadingClassName}>
            How to trace old pensions and investments
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            <article className="min-w-0 border border-brand-border bg-white p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-semibold text-brand-navy">
                Find old pension scheme contacts
              </h3>
              <p className="mt-4 text-sm leading-8 text-brand-slate">
                Start with a former employer or a pension provider you
                recognise. If you need current contact details, the free{" "}
                <a
                  href="https://www.gov.uk/find-pension-contact-details"
                  className={textLinkClassName}
                >
                  government Pension Tracing Service
                </a>{" "}
                can help you find a workplace or personal pension scheme using
                an employer or provider name.
              </p>
              <p className="mt-4 text-sm leading-8 text-brand-slate">
                It does not confirm whether you have a pension or what it is
                worth. Contact the scheme or provider to establish whether it
                holds benefits for you. Locating a pension is separate from
                deciding whether to transfer it or take benefits.
              </p>
            </article>
            <article className="min-w-0 border border-brand-border bg-brand-ivory p-6 sm:p-8">
              <h3 className="font-serif text-2xl font-semibold text-brand-navy">
                Follow up on savings, investments and shares
              </h3>
              <p className="mt-4 text-sm leading-8 text-brand-slate">
                Old investment statements, share certificates and dividend
                records can point to a provider or share registrar to contact.
                Ask it to check the holding and explain any evidence needed
                before you can reclaim money or update the records.
              </p>
              <p className="mt-4 text-sm leading-8 text-brand-slate">
                The Investment Association&apos;s free Unclaimed Assets Portal
                is powered by Gretel. It checks your details against records
                from participating financial companies seeking customers they
                have lost contact with. It uses the Gretel platform, rather
                than providing a separate search of all investment providers.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="border-y border-brand-border bg-white py-16 md:py-20">
        <div className="site-container grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="min-w-0">
            <h2 className={sectionHeadingClassName}>
              Free tracing tools versus professional assistance
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-8 text-brand-slate">
              <p>
                Free services can be a practical first step. In addition to
                My Lost Account and the government pension tool, Gretel
                describes its service as free to join and use. It looks for
                lost financial assets with participating providers, including
                bank accounts, pensions, investments and shares.
              </p>
              <p>
                These tools have different scopes. Gretel does not include
                every provider, and the government pension tool supplies
                contact details rather than account balances. Free tracing
                also does not mean every later step is free: Gretel notes that
                a matched provider may charge to reissue certificates or
                payments.
              </p>
              <p>
                Paying for assistance is a choice, not a requirement for
                finding unclaimed financial assets. It does not give you
                exclusive access to records or remove a provider&apos;s
                identity and entitlement checks.
              </p>
              <p>
                For an independent overview of free routes, see{" "}
                <a
                  href="https://www.moneysavingexpert.com/reclaim/reclaim-lost-assets-free/"
                  className={textLinkClassName}
                >
                  MoneySavingExpert&apos;s guide to reclaiming lost assets for free
                </a>
                .
              </p>
            </div>
          </div>
          <article className="min-w-0 self-start border border-brand-border bg-brand-ivory p-6 sm:p-8">
            <h2 className="font-serif text-2xl font-semibold text-brand-navy">
              When professional support might be useful
            </h2>
            <p className="mt-4 text-sm leading-8 text-brand-slate">
              You may want help if records are incomplete, several providers
              need follow-up, or you would value a written summary of search
              findings. An authorised representative may also want support
              understanding what remains to be checked.
            </p>
            <p className="mt-4 text-sm leading-8 text-brand-slate">
              Before paying for a personal asset search, identify the gaps left
              by your own enquiries. Ask Estate Resolve which of those gaps
              the proposed search can address and what will be included in the
              report. Professional support cannot guarantee that money will
              be found.
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
                <p className="mt-4 text-sm leading-8 text-brand-slate">
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
                <p className="mt-4 text-sm leading-8 text-brand-slate">
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
                <p className="mt-4 text-sm leading-8 text-brand-slate">
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
              Contact and next steps
            </h2>
            <p className="mt-6 text-sm leading-8 text-brand-slate">
              If you would like help after exploring the free options, tell us
              what you are looking for, whether you are acting for yourself or
              someone else, and which providers you have already contacted.
              We can discuss the proposed search and the information needed
              before you decide whether to proceed.
            </p>
            <p className="mt-4 text-sm leading-8 text-brand-slate">
              The total fee will be confirmed with you in writing before the
              search begins.
            </p>
            <Link href="/contact" className={`mt-8 ${contactLinkClassName}`}>
              Discuss a Personal Search
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
