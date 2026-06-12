import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-slate-800 px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div className="text-center sm:text-left">
          <p className="font-semibold text-white">ResumeForge</p>
          <p className="mt-1 text-sm text-muted-foreground">
            AI resume & cover letter generator for students
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
          <Link href="/generate" className="transition-colors hover:text-white">
            Generate
          </Link>
          <Link href="/pricing" className="transition-colors hover:text-white">
            Pricing
          </Link>
          <Link href="/login" className="transition-colors hover:text-white">
            Sign in
          </Link>
          <Link href="#faq" className="transition-colors hover:text-white">
            FAQ
          </Link>
        </nav>

        <p className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} ResumeForge
        </p>
      </div>
    </footer>
  );
}
