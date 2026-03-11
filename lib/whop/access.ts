import { env } from "@/lib/env";
import { getUserMemberships, userHasPlanAccess, userHasProductAccess } from "@/lib/whop/memberships";
import type { WhopAuthContext } from "@/types/whop";

export type AccessCheckInput = {
  context: WhopAuthContext;
  companyId?: string;
  productId?: string;
  planId?: string;
  experienceId?: string;
};

export async function checkAccess(input: AccessCheckInput) {
  const memberships = await getUserMemberships(input.context.user.id);
  const companyAllowed = input.companyId ? memberships.some((m) => m.company_id === input.companyId) : true;
  const productAllowed = input.productId ? await userHasProductAccess(input.context.user.id, input.productId) : true;
  const planAllowed = input.planId ? await userHasPlanAccess(input.context.user.id, input.planId) : true;
  const ownerAllowed = input.context.user.id === env.OWNER_WHOP_USER_ID;
  return {
    allowed: ownerAllowed && companyAllowed && productAllowed && planAllowed,
    checks: { ownerAllowed, companyAllowed, productAllowed, planAllowed },
    membershipCount: memberships.length
  };
}
