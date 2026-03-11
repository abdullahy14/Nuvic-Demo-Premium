import { cn } from "@/lib/utils";

export function Table({ className, ...props }: React.TableHTMLAttributes<HTMLTableElement>) {
  return <table className={cn("w-full text-sm", className)} {...props} />;
}
export function THead(props: React.HTMLAttributes<HTMLTableSectionElement>) { return <thead {...props} />; }
export function TBody(props: React.HTMLAttributes<HTMLTableSectionElement>) { return <tbody {...props} />; }
export function TR({ className, ...props }: React.HTMLAttributes<HTMLTableRowElement>) { return <tr className={cn("border-b border-border", className)} {...props} />; }
export function TH({ className, ...props }: React.ThHTMLAttributes<HTMLTableCellElement>) { return <th className={cn("p-2 text-left text-muted-foreground", className)} {...props} />; }
export function TD({ className, ...props }: React.TdHTMLAttributes<HTMLTableCellElement>) { return <td className={cn("p-2", className)} {...props} />; }
