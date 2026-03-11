import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function HomePage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl p-8">
      <Card>
        <CardHeader>
          <CardTitle>Nuvic Demo Hub</CardTitle>
        </CardHeader>
        <CardContent className="text-sm text-muted-foreground">
          This app is designed for embedded Whop dashboard usage. Configure Whop dashboard path to
          <code className="mx-1 rounded bg-secondary px-2 py-1">/dashboard/[companyId]</code>.
        </CardContent>
      </Card>
    </main>
  );
}
