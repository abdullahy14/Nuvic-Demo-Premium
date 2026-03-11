import { z } from "zod";
import { getWhopSdkClient } from "@/lib/whop/client";
import type { MembershipStatus, NormalizedMembership, WhopMembership } from "@/types/whop";

const membershipSchema = z.object({
  id: z.string(),
  user_id: z.string(),
  company_id: z.string().optional(),
  product_id: z.string().optional(),
  plan_id: z.string().optional(),
  status: z.string(),
  created_at: z.number().optional(),
  expires_at: z.number().nullable().optional()
});

const membershipListSchema = z.array(membershipSchema);

function normalizeStatus(status: string): MembershipStatus {
  if (["active", "trialing", "past_due", "expired", "canceled"].includes(status)) return status as MembershipStatus;
  return "unknown";
}

export function normalizeMembership(membership: WhopMembership): NormalizedMembership {
  const status = normalizeStatus(membership.status);
  return {
    ...membership,
    status,
    isActive: status === "active",
    isTrialing: status === "trialing",
    isPastDue: status === "past_due",
    isExpired: status === "expired" || status === "canceled"
  };
}

export async function listMemberships(userId?: string): Promise<NormalizedMembership[]> {
  const client = await getWhopSdkClient();
  const response = await (client as any).memberships.list({ user_id: userId });
  return membershipListSchema.parse(response.data ?? response).map((m) => normalizeMembership({ ...m, status: normalizeStatus(m.status) }));
}

export async function retrieveMembership(membershipId: string): Promise<NormalizedMembership> {
  const client = await getWhopSdkClient();
  const response = await (client as any).memberships.retrieve({ membership_id: membershipId });
  return normalizeMembership(membershipSchema.parse(response));
}

export async function getUserMemberships(userId: string) { return listMemberships(userId); }
export async function getActiveMemberships(userId: string) {
  const memberships = await listMemberships(userId);
  return memberships.filter((m) => m.isActive || m.isTrialing);
}
export async function userHasAnyActiveMembership(userId: string) {
  const memberships = await getActiveMemberships(userId);
  return memberships.length > 0;
}
export async function userHasProductAccess(userId: string, productId: string) {
  const memberships = await getActiveMemberships(userId);
  return memberships.some((m) => m.product_id === productId);
}
export async function userHasPlanAccess(userId: string, planId: string) {
  const memberships = await getActiveMemberships(userId);
  return memberships.some((m) => m.plan_id === planId);
}
