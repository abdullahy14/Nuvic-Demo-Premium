import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function DiscoverPage() {
  return (
    <main className="mx-auto min-h-screen max-w-3xl p-8">
      <Card>
        <CardHeader><CardTitle>Discover Route Placeholder</CardTitle></CardHeader>
        <CardContent className="text-sm text-muted-foreground">This route exists because Whop supports discover path configuration. Keep disabled unless needed.</CardContent>
      </Card>
    </main>
  );
}
