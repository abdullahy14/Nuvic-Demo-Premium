import { headers } from "next/headers";
import { DashboardOverview } from "@/components/dashboard/dashboard-overview";
import { ForbiddenState, UnauthorizedState } from "@/components/shared/state-cards";
import { env } from "@/lib/env";
import { requireCompanyDashboardAccess } from "@/lib/guards";
import { getUserMemberships } from "@/lib/whop/memberships";

export default async function DashboardPage({ params }: { params: Promise<{ companyId: string }> }) {
  const { companyId } = await params;
  try {
    const result = await requireCompanyDashboardAccess(await headers(), companyId);
    const memberships = await getUserMemberships(result.context.user.id);
    return (
      <main className="mx-auto min-h-screen max-w-7xl p-8">
        <h1 className="mb-6 text-3xl font-semibold">Nuvic Demo Hub Dashboard</h1>
        <DashboardOverview
          user={result.context.user}
          companyId={companyId}
          memberships={memberships}
          appConfig={{
            baseUrl: env.NEXT_PUBLIC_APP_URL,
            dashboardPath: "/dashboard/[companyId]",
            experiencePath: "/experiences/[experienceId]",
            discoverPath: "/discover"
          }}
          readiness={[
            { key: "WHOP_API_KEY", ok: !!env.WHOP_API_KEY },
            { key: "OWNER_WHOP_USER_ID", ok: !!env.OWNER_WHOP_USER_ID },
            { key: "WHOP_COMPANY_ID", ok: !!env.WHOP_COMPANY_ID }
          ]}
        />
      </main>
    );
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown error";
    return (
      <main className="mx-auto min-h-screen max-w-4xl p-8">
        {message.toLowerCase().includes("unauthorized") ? <UnauthorizedState /> : <ForbiddenState reason={message} />}
      </main>
    );
  }
}
