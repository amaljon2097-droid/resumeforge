import {
  FileText,
  Mail,
  Target,
  Zap,
  Shield,
  Clock,
} from "lucide-react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const features = [
  {
    icon: FileText,
    title: "ATS-Optimized Bullets",
    description:
      "5–7 tailored resume bullet points with action verbs, quantified achievements, and keywords pulled straight from the job posting.",
  },
  {
    icon: Mail,
    title: "Personalized Cover Letter",
    description:
      "A 3-paragraph cover letter that connects your experience to the role — professional, genuine, and under 300 words.",
  },
  {
    icon: Target,
    title: "Key Skills to Highlight",
    description:
      "The top 3 skills from the job description you should emphasize — so recruiters see exactly what they're looking for.",
  },
  {
    icon: Zap,
    title: "Ready in Seconds",
    description:
      "No more staring at a blank page. Paste, click generate, and copy your results straight into your application.",
  },
  {
    icon: Shield,
    title: "Built for Students",
    description:
      "Designed for internships and entry-level roles. Turns class projects, part-time jobs, and campus activities into strong bullets.",
  },
  {
    icon: Clock,
    title: "Save Hours Per Application",
    description:
      "Stop rewriting your resume for every job. Generate a custom version in under a minute and apply faster.",
  },
];

export function Features() {
  return (
    <section id="features" className="px-4 py-20 sm:px-6 sm:py-28">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to stand out
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            One tool, three outputs — all tailored to the specific job you want.
          </p>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <Card
              key={feature.title}
              className="border-slate-800 bg-slate-900/40 transition-colors hover:border-slate-700"
            >
              <CardHeader>
                <div className="mb-2 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <feature.icon className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg text-white">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
