import Link from "next/link";
import { LoginForm } from "@/components/login-form";

export default function LoginPage({
  searchParams,
}: {
  searchParams: { error?: string };
}) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6 px-4 py-12">
      <Link
        href="/"
        className="text-sm text-muted-foreground transition-colors hover:text-white"
      >
        ← Back to ResumeForge
      </Link>

      {searchParams.error === "auth" && (
        <p className="max-w-md rounded-lg border border-destructive/50 bg-destructive/10 px-4 py-3 text-center text-sm text-destructive">
          Sign-in failed. Please try again.
        </p>
      )}

      <LoginForm />
    </main>
  );
}
