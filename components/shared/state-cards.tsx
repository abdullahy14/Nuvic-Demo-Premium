import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export function UnauthorizedState() {
  return (
    <Card className="border-destructive/40">
      <CardHeader><CardTitle>Unauthorized</CardTitle></CardHeader>
      <CardContent className="text-sm text-muted-foreground">Missing or invalid Whop embedded user token.</CardContent>
    </Card>
  );
}

export function ForbiddenState({ reason }: { reason?: string }) {
  return (
    <Card className="border-destructive/40">
      <CardHeader><CardTitle>Forbidden</CardTitle></CardHeader>
      <CardContent className="text-sm text-muted-foreground">You do not have access to this private app. {reason}</CardContent>
    </Card>
  );
}
