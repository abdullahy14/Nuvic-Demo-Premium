import { z } from "zod";
import { getWhopSdkClient } from "@/lib/whop/client";

const memberSchema = z.object({ id: z.string(), user_id: z.string(), company_id: z.string().optional() });

export async function listMembers(companyId: string) {
  const client = await getWhopSdkClient();
  const response = await (client as any).members.list({ company_id: companyId });
  return z.array(memberSchema).parse(response.data ?? response);
}

export async function retrieveMember(memberId: string) {
  const client = await getWhopSdkClient();
  const response = await (client as any).members.retrieve({ member_id: memberId });
  return memberSchema.parse(response);
}
