import { headers } from "next/headers";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ForbiddenState, UnauthorizedState } from "@/components/shared/state-cards";
import { requireExperienceAccess } from "@/lib/guards";

export default async function ExperiencePage({ params }: { params: Promise<{ experienceId: string }> }) {
  const { experienceId } = await params;
  try {
    const { context } = await requireExperienceAccess(await headers(), experienceId);
    return (
      <main className="mx-auto min-h-screen max-w-4xl p-8">
        <Card>
          <CardHeader><CardTitle>Experience Placeholder</CardTitle></CardHeader>
          <CardContent className="text-sm text-muted-foreground">
            Access granted for user {context.user.id}. This future-facing page is ready for gated member experiences.
          </CardContent>
        </Card>
      </main>
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return <main className="mx-auto min-h-screen max-w-4xl p-8">{message.toLowerCase().includes("unauthorized") ? <UnauthorizedState /> : <ForbiddenState reason={message} />}</main>;
  }
}
