import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function Hero() {
  return (
    <section className="relative overflow-hidden px-4 pb-20 pt-16 sm:px-6 sm:pb-28 sm:pt-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950" />

      <div className="relative mx-auto max-w-4xl text-center">
        <Badge
          variant="secondary"
          className="mb-6 border-slate-700 bg-slate-900 px-3 py-1 text-sm"
        >
          <Sparkles className="mr-1.5 h-3.5 w-3.5 text-primary" />
          AI-powered resume builder for students
        </Badge>

        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
          Land your dream internship with a{" "}
          <span className="text-primary">tailored resume</span> in seconds
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
          Paste any job description and your experience. ResumeForge generates
          ATS-optimized bullet points, a personalized cover letter, and the top
          skills to highlight — built for students with little experience.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button asChild size="lg" className="h-12 w-full px-8 text-base sm:w-auto">
            <Link href="/generate">
              Generate My Resume
              <ArrowRight className="ml-1 h-4 w-4" />
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="h-12 w-full border-slate-700 bg-transparent px-8 text-base sm:w-auto"
          >
            <Link href="#pricing">See Pricing</Link>
          </Button>
        </div>

        <p className="mt-6 text-sm text-muted-foreground">
          No credit card required · 2 free generations to start
        </p>
      </div>
    </section>
  );
}
