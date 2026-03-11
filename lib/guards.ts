import { env } from "@/lib/env";
import { verifyWhopUserToken } from "@/lib/whop/auth";
import { checkAccess } from "@/lib/whop/access";

export async function requireWhopUser(headers: Headers) {
  return verifyWhopUserToken(headers);
}

export async function requireOwner(headers: Headers) {
  const context = await verifyWhopUserToken(headers);
  if (context.user.id !== env.OWNER_WHOP_USER_ID) {
    throw new Error("Forbidden: owner access required");
  }
  return context;
}

export async function requireCompanyDashboardAccess(headers: Headers, companyId: string) {
  const context = await requireOwner(headers);
  const access = await checkAccess({ context, companyId });
  if (!access.checks.companyAllowed && companyId !== env.WHOP_COMPANY_ID) {
    throw new Error("Forbidden: company access denied");
  }
  return { context, access };
}

export async function requireExperienceAccess(headers: Headers, experienceId: string) {
  const context = await requireWhopUser(headers);
  const access = await checkAccess({ context, experienceId });
  if (!access.allowed) {
    throw new Error("Forbidden: experience access denied");
  }
  return { context, access };
}
