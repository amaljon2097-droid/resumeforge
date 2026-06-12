import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="mx-auto max-w-4xl rounded-2xl border border-slate-800 bg-gradient-to-br from-slate-900 to-slate-900/50 px-6 py-16 text-center sm:px-12">
        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Ready to land your next role?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-lg text-muted-foreground">
          Stop sending the same generic resume. Generate a tailored one for every
          application — free to start.
        </p>
        <Button asChild size="lg" className="mt-8 h-12 px-8 text-base">
          <Link href="/generate">
            Generate My Resume — Free
            <ArrowRight className="ml-1 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </section>
  );
}
