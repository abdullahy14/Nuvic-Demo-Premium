import type { NormalizedMembership, WhopUser } from "@/types/whop";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Table, TBody, TD, TH, THead, TR } from "@/components/ui/table";

type Props = {
  user: WhopUser;
  companyId: string;
  appConfig: { baseUrl: string; dashboardPath: string; experiencePath: string; discoverPath: string };
  memberships: NormalizedMembership[];
  readiness: { key: string; ok: boolean }[];
};

export function DashboardOverview({ user, companyId, appConfig, memberships, readiness }: Props) {
  const activeCount = memberships.filter((m) => m.isActive || m.isTrialing).length;
  return (
    <section className="grid gap-4 md:grid-cols-2">
      <Card><CardHeader><CardTitle>Owner info</CardTitle></CardHeader><CardContent>{user.name ?? user.username ?? user.id}</CardContent></Card>
      <Card><CardHeader><CardTitle>Company info</CardTitle></CardHeader><CardContent>{companyId}</CardContent></Card>
      <Card><CardHeader><CardTitle>Whop app config</CardTitle></CardHeader><CardContent className="space-y-1 text-sm text-muted-foreground"><p>{appConfig.baseUrl}</p><p>{appConfig.dashboardPath}</p><p>{appConfig.experiencePath}</p><p>{appConfig.discoverPath}</p></CardContent></Card>
      <Card><CardHeader><CardTitle>Membership stats</CardTitle></CardHeader><CardContent><p>{activeCount} active/trialing</p><p className="text-sm text-muted-foreground">{memberships.length} total memberships</p></CardContent></Card>
      <Card className="md:col-span-2"><CardHeader><CardTitle>Environment readiness checklist</CardTitle></CardHeader><CardContent className="flex flex-wrap gap-2">{readiness.map((item)=><Badge key={item.key} className={item.ok?"border-emerald-500 text-emerald-300":"border-destructive/50 text-red-300"}>{item.key}: {item.ok?"ok":"missing"}</Badge>)}</CardContent></Card>
      <Card className="md:col-span-2"><CardHeader><CardTitle>Recent memberships</CardTitle></CardHeader><CardContent><Table><THead><TR><TH>ID</TH><TH>Status</TH><TH>Product</TH><TH>Plan</TH></TR></THead><TBody>{memberships.slice(0,10).map((m)=><TR key={m.id}><TD>{m.id}</TD><TD>{m.status}</TD><TD>{m.product_id ?? "-"}</TD><TD>{m.plan_id ?? "-"}</TD></TR>)}</TBody></Table>{memberships.length===0?<p className="text-sm text-muted-foreground">No memberships found.</p>:null}</CardContent></Card>
    </section>
  );
}
