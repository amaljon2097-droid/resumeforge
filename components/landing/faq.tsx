const faqs = [
  {
    question: "How does ResumeForge work?",
    answer:
      "Paste your experience, the job title, and the full job description. Our AI analyzes the posting and generates tailored resume bullets, a cover letter, and the top 3 skills to highlight — all optimized for ATS systems recruiters use.",
  },
  {
    question: "What is ATS optimization?",
    answer:
      "Applicant Tracking Systems (ATS) scan resumes for keywords before a human ever sees them. ResumeForge matches keywords directly from the job description into your bullet points, improving your chances of getting past the automated filter.",
  },
  {
    question: "How many free generations do I get?",
    answer:
      "You get 2 free generations without signing in (tracked in your browser). Create a free account and you get 5 total generations. Pro subscribers get unlimited generations for $4.99/month.",
  },
  {
    question: "Do I need work experience to use this?",
    answer:
      "Not at all. ResumeForge is built for students. Class projects, internships, part-time jobs, volunteer work, and campus leadership all count — the AI helps frame them professionally for the role you're applying to.",
  },
  {
    question: "Is my data stored or shared?",
    answer:
      "Your job descriptions and experience are sent to Claude AI only to generate your resume content. We don't sell your data. Signed-in users have generation counts stored in your account — nothing else is permanently saved unless you choose to.",
  },
  {
    question: "Can I copy and paste the results?",
    answer:
      "Yes. Every section has a copy button. Copy your resume bullets straight into your resume doc, and your cover letter into your application — ready to send.",
  },
];

export function FAQ() {
  return (
    <section id="faq" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Frequently asked questions
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Everything you need to know before your first generation.
          </p>
        </div>

        <div className="mt-12 space-y-4">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-lg border border-slate-800 bg-slate-900/40"
            >
              <summary className="cursor-pointer list-none px-6 py-4 text-base font-medium text-white [&::-webkit-details-marker]:hidden">
                <span className="flex items-center justify-between gap-4">
                  {faq.question}
                  <span className="shrink-0 text-muted-foreground transition-transform group-open:rotate-45">
                    +
                  </span>
                </span>
              </summary>
              <div className="border-t border-slate-800 px-6 py-4 text-muted-foreground">
                {faq.answer}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
