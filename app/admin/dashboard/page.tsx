import { analytics } from "@/lib/mock-analytics";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Admin Overview</h1>
      <div className="grid gap-3 md:grid-cols-3">
        <Metric label="Total Products" value={analytics.totalProducts} />
        <Metric label="Total Demo Prompts" value={analytics.totalPrompts} />
        <Metric label="Total Demo Assets" value={analytics.totalAssets} />
        <Metric label="Total Views" value={analytics.totalViews} />
        <Metric label="Total Saves" value={analytics.totalSaves} />
        <Metric label="Conversion Rate" value={`${analytics.conversionRate}%`} />
      </div>
      <div className="glass rounded-2xl p-5">
        <h2 className="font-semibold">Funnel</h2>
        <ul className="mt-2 text-sm text-slate-300">{analytics.funnel.map((f)=> <li key={f.stage}>{f.stage}: {f.value}</li>)}</ul>
      </div>
    </div>
  );
}

function Metric({ label, value }: { label: string; value: string | number }) {
  return <div className="glass rounded-xl p-4"><p className="text-xs text-slate-300">{label}</p><p className="text-2xl font-bold">{value}</p></div>;
}
